import {
  clubContact,
  escapeHtml,
  renderBrandedEmailHtml,
  valueOrPlaceholder,
} from "./branded";

export type DonationThankYouEmailProps = {
  donorName?: string;
  amountPaid: string;
  currency?: string;
  reference?: string;
  transactionId?: string;
};

export function buildDonationThankYouSubject() {
  return `Thank you for your donation — ${clubContact.providerName}`;
}

export function buildDonationThankYouText(details: DonationThankYouEmailProps) {
  const donorName = valueOrPlaceholder(details.donorName, "Supporter");
  const amountPaid = valueOrPlaceholder(details.amountPaid, "[Amount]");
  const currency = valueOrPlaceholder(details.currency, "USD");
  const transactionId = valueOrPlaceholder(details.transactionId, "[Transaction ID]");

  return `Hi ${donorName},

Thank you — we received your PayPal donation of ${currency} ${amountPaid}.

Transaction: ${transactionId}

Your gift helps Lusumpuko Women's Club sustain heritage cooking, community gatherings, and opportunities for women across the valley.

Questions? Email ${clubContact.email} or call ${clubContact.phone}.

Warm regards,
${clubContact.providerName}
${clubContact.address}`;
}

export function buildDonationThankYouHtml(details: DonationThankYouEmailProps) {
  const donorName = escapeHtml(valueOrPlaceholder(details.donorName, "Supporter"));
  const amountPaid = escapeHtml(valueOrPlaceholder(details.amountPaid, "[Amount]"));
  const currency = escapeHtml(valueOrPlaceholder(details.currency, "USD"));
  const transactionId = escapeHtml(
    valueOrPlaceholder(details.transactionId, "[Transaction ID]"),
  );

  return renderBrandedEmailHtml(
    "Donation confirmation",
    `<p>Hi ${donorName},</p>
    <p>Thank you — we received your PayPal donation.</p>
    <table role="presentation" style="margin:0 0 22px;padding:16px;border:1px solid #f0d7c7;border-radius:10px;background:#fff8f2;width:100%;">
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Amount</td><td>${currency} ${amountPaid}</td></tr>
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Transaction ID</td><td>${transactionId}</td></tr>
    </table>
    <p>Your gift strengthens heritage cooking, community gatherings, and opportunities for women across the valley.</p>
    <p>Questions? Email ${escapeHtml(clubContact.email)} or call ${escapeHtml(clubContact.phone)}.</p>
    <p>Warm regards,<br />${escapeHtml(clubContact.providerName)}</p>`,
  );
}

export function buildDonationThankYouEmail(props: DonationThankYouEmailProps) {
  return {
    subject: buildDonationThankYouSubject(),
    text: buildDonationThankYouText(props),
    html: buildDonationThankYouHtml(props),
  };
}
