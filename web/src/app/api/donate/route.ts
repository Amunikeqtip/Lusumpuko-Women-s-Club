import { NextResponse } from "next/server";
import { saveDonationRecord } from "../../../lib/donation-records";
import { createPaynowClient, PaynowConfigError } from "../../../lib/paynow";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DonateBody = {
  amount?: unknown;
  email?: unknown;
  name?: unknown;
};

function parseAmount(value: unknown) {
  const amount =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : NaN;

  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return Math.round(amount * 100) / 100;
}

export async function POST(request: Request) {
  let body: DonateBody;

  try {
    body = (await request.json()) as DonateBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const amount = parseAmount(body.amount);
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (amount === null) {
    return NextResponse.json(
      { error: "Enter a valid donation amount greater than zero." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const paynow = createPaynowClient();
    const reference = `LWC-donate-${Date.now()}`;
    const payment = paynow.createPayment(reference, email);
    const itemLabel = name ? `Donation from ${name}` : "Donation";

    payment.add(itemLabel, amount);

    const response = await paynow.send(payment);

    if (!response?.success || !response.redirectUrl) {
      return NextResponse.json(
        {
          error:
            typeof response?.error === "string" && response.error
              ? String(response.error)
              : "Unable to start Paynow checkout. Please try again.",
        },
        { status: 502 },
      );
    }

    saveDonationRecord({
      reference,
      amount,
      donorEmail: email,
      donorName: name || undefined,
    });

    return NextResponse.json({
      redirectUrl: String(response.redirectUrl),
      pollUrl: response.pollUrl ? String(response.pollUrl) : undefined,
      reference,
    });
  } catch (error) {
    if (error instanceof PaynowConfigError) {
      return NextResponse.json(
        {
          error:
            "Donations are being connected — check back soon.",
          code: "PAYNOW_NOT_CONFIGURED",
        },
        { status: 503 },
      );
    }

    console.error("Paynow donate initiation failed", error);

    return NextResponse.json(
      { error: "Unable to start Paynow checkout. Please try again." },
      { status: 500 },
    );
  }
}
