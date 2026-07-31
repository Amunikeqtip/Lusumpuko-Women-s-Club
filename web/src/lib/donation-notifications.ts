import { buildDonationOwnerNotificationEmail } from "../emails/donation-owner-notification";
import { buildDonationThankYouEmail } from "../emails/donation-thank-you";
import {
  getDonationRecord,
  markDonationNotified,
  type DonationRecord,
} from "./donation-records";
import { getOwnerNotificationEmails, sendEmail } from "./send-email";

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  return "https://lusumpukopala.com";
}

function isSuccessfulPayment(status: string) {
  const normalized = status.trim().toLowerCase();
  return normalized === "paid" || normalized === "awaiting delivery";
}

type NotifyDonationInput = {
  reference: string;
  amount?: number;
  status: string;
  paynowReference?: string;
};

export async function notifyDonationPaid(input: NotifyDonationInput) {
  if (!isSuccessfulPayment(input.status)) {
    return { notified: false as const, reason: "status_not_paid" };
  }

  const record = getDonationRecord(input.reference);

  if (!record) {
    console.warn("Donation record not found for Paynow callback", {
      reference: input.reference,
    });
    return { notified: false as const, reason: "record_missing" };
  }

  if (record.notifiedAt) {
    return { notified: false as const, reason: "already_notified" };
  }

  await sendDonationEmails({
    record,
    amount: input.amount ?? record.amount,
    paynowReference: input.paynowReference,
    status: input.status,
  });

  markDonationNotified(record.reference);

  return { notified: true as const };
}

async function sendDonationEmails({
  record,
  amount,
  paynowReference,
  status,
}: {
  record: DonationRecord;
  amount: number;
  paynowReference?: string;
  status: string;
}) {
  const siteUrl = getSiteUrl();
  const donatedAt = new Date();

  const donorEmail = buildDonationThankYouEmail({
    donorName: record.donorName,
    amount,
    reference: record.reference,
    paynowReference,
    donatedAt,
    siteUrl,
  });

  const ownerEmail = buildDonationOwnerNotificationEmail({
    donorName: record.donorName,
    donorEmail: record.donorEmail,
    amount,
    reference: record.reference,
    paynowReference,
    donatedAt,
    status,
    siteUrl,
  });

  await Promise.all([
    sendEmail({
      to: record.donorEmail,
      subject: donorEmail.subject,
      html: donorEmail.html,
      text: donorEmail.text,
    }),
    sendEmail({
      to: getOwnerNotificationEmails(),
      subject: ownerEmail.subject,
      html: ownerEmail.html,
      text: ownerEmail.text,
    }),
  ]);
}
