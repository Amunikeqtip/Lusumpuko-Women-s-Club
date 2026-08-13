import {
  createPayPalDonationOrder,
  normalizeDonationAmount,
} from "../../../../lib/paypal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      amount?: unknown;
      email?: unknown;
      name?: unknown;
    };

    const amount = normalizeDonationAmount(payload.amount);
    const email = cleanText(payload.email);
    const name = cleanText(payload.name);

    if (amount === null) {
      return Response.json(
        { error: "Enter a valid donation amount greater than zero." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return Response.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const order = await createPayPalDonationOrder({
      amount,
      email,
      name: name || undefined,
    });

    return Response.json({
      orderId: order.orderId,
      amount: order.amount,
      currency: order.currency,
      customId: order.customId,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("PayPal create-order failed:", message, error);
    return Response.json(
      { error: "Unable to create PayPal order.", detail: message },
      { status: 500 },
    );
  }
}
