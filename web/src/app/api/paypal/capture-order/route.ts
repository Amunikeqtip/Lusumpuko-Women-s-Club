import { buildDonationOwnerNotificationEmail } from "../../../../emails/donation-owner-notification";
import { buildDonationThankYouEmail } from "../../../../emails/donation-thank-you";
import {
  capturePayPalOrder,
  normalizeDonationAmount,
} from "../../../../lib/paypal";
import { getOwnerNotificationEmails, sendEmail } from "../../../../lib/send-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendDonationEmails(details: {
  donorName?: string;
  donorEmail: string;
  amountPaid: string;
  currency: string;
  transactionId: string;
}) {
  try {
    const donorEmail = buildDonationThankYouEmail({
      donorName: details.donorName,
      amountPaid: details.amountPaid,
      currency: details.currency,
      transactionId: details.transactionId,
    });

    const ownerEmail = buildDonationOwnerNotificationEmail({
      donorName: details.donorName,
      donorEmail: details.donorEmail,
      amountPaid: details.amountPaid,
      currency: details.currency,
      transactionId: details.transactionId,
    });

    await Promise.all([
      sendEmail({
        to: details.donorEmail,
        subject: donorEmail.subject,
        html: donorEmail.html,
        text: donorEmail.text,
      }),
      sendEmail({
        to: getOwnerNotificationEmails(),
        subject: ownerEmail.subject,
        html: ownerEmail.html,
        text: ownerEmail.text,
        replyTo: `"${details.donorName || "Donor"}" <${details.donorEmail}>`,
      }),
    ]);

    return { emailed: true as const };
  } catch (error) {
    console.error("PayPal donation email failed:", error);
    return { emailed: false as const };
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      orderId?: unknown;
      amount?: unknown;
      email?: unknown;
      name?: unknown;
    };

    const orderId = cleanText(payload.orderId);
    const email = cleanText(payload.email);
    const name = cleanText(payload.name);
    const amount = normalizeDonationAmount(payload.amount);

    if (!orderId) {
      return Response.json(
        { error: "PayPal orderId is required." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email) || amount === null) {
      return Response.json(
        { error: "Donation details (amount and email) are required after payment." },
        { status: 400 },
      );
    }

    const capture = await capturePayPalOrder(orderId);

    if (capture.status !== "COMPLETED" && capture.status !== "PENDING") {
      return Response.json(
        { error: "PayPal payment was not completed.", status: capture.status },
        { status: 402 },
      );
    }

    const amountPaid = capture.amount ?? amount.toFixed(2);
    const mail = await sendDonationEmails({
      donorName: name || undefined,
      donorEmail: email,
      amountPaid,
      currency: capture.currency,
      transactionId: capture.transactionId,
    });

    return Response.json({
      ok: true,
      status: capture.status,
      orderId: capture.orderId,
      transactionId: capture.transactionId,
      amount: amountPaid,
      currency: capture.currency,
      name: name || undefined,
      email,
      emailed: mail.emailed,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("PayPal capture-order failed:", message, error);
    return Response.json(
      { error: "Unable to capture PayPal payment.", detail: message },
      { status: 500 },
    );
  }
}
