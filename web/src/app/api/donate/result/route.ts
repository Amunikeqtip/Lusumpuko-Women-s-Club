import { NextResponse } from "next/server";
import { notifyDonationPaid } from "../../../../lib/donation-notifications";

/**
 * Paynow posts transaction status updates here (application/x-www-form-urlencoded).
 * On a paid status, donor thank-you and owner notification emails are sent.
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let payload: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      const json = (await request.json()) as Record<string, unknown>;
      payload = Object.fromEntries(
        Object.entries(json).map(([key, value]) => [key, String(value ?? "")]),
      );
    } else {
      const text = await request.text();
      payload = Object.fromEntries(new URLSearchParams(text).entries());
    }

    const reference = payload.reference ?? payload.Reference ?? "";
    const paynowReference =
      payload.paynowreference ?? payload.paynowReference ?? "";
    const status = payload.status ?? payload.Status ?? "";
    const amountRaw = payload.amount ?? payload.Amount ?? "";
    const amount = Number(amountRaw);

    console.info("Paynow donation result", {
      reference,
      paynowReference,
      status,
      amount: amountRaw,
    });

    if (reference && status) {
      await notifyDonationPaid({
        reference,
        status,
        paynowReference: paynowReference || undefined,
        amount: Number.isFinite(amount) && amount > 0 ? amount : undefined,
      });
    }
  } catch (error) {
    console.error("Failed to process Paynow result callback", error);
  }

  return new NextResponse("OK", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
