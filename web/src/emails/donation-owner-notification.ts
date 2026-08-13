import {
  clubContact,
  escapeHtml,
  renderBrandedEmailHtml,
  valueOrPlaceholder,
} from "./branded";

export type DonationOwnerNotificationProps = {
  donorName?: string;
  donorEmail: string;
  amountPaid: string;
  currency?: string;
  transactionId?: string;
};

function donorDisplayName(donorName: string | undefined, donorEmail: string) {
  return donorName?.trim() || donorEmail || "A supporter";
}

export function buildDonationOwnerNotificationSubject(
  props: DonationOwnerNotificationProps,
) {
  const amount = `${valueOrPlaceholder(props.currency, "USD")} ${valueOrPlaceholder(props.amountPaid, "[Amount]")}`;
  const who = donorDisplayName(props.donorName, props.donorEmail);
  return `PayPal donation received: ${amount} from ${who}`;
}

export function buildDonationOwnerNotificationText(
  props: DonationOwnerNotificationProps,
) {
  const who = donorDisplayName(props.donorName, props.donorEmail);
  const amountPaid = valueOrPlaceholder(props.amountPaid, "[Amount]");
  const currency = valueOrPlaceholder(props.currency, "USD");
  const transactionId = valueOrPlaceholder(props.transactionId, "[Transaction ID]");

  return `${clubContact.providerName}

PayPal donation received

Donor: ${who}
Email: ${props.donorEmail}
Amount paid: ${currency} ${amountPaid}
PayPal transaction: ${transactionId}

Please review the payment in your PayPal account if needed.

${clubContact.address}
${clubContact.email}
${clubContact.phone}`;
}

export function buildDonationOwnerNotificationHtml(
  props: DonationOwnerNotificationProps,
) {
  const who = escapeHtml(donorDisplayName(props.donorName, props.donorEmail));
  const donorEmail = escapeHtml(props.donorEmail);
  const amountPaid = escapeHtml(valueOrPlaceholder(props.amountPaid, "[Amount]"));
  const currency = escapeHtml(valueOrPlaceholder(props.currency, "USD"));
  const transactionId = escapeHtml(
    valueOrPlaceholder(props.transactionId, "[Transaction ID]"),
  );

  return renderBrandedEmailHtml(
    "PayPal donation received",
    `<p><strong>PayPal donation received</strong></p>
    <p>A donation of <strong>${currency} ${amountPaid}</strong> has been made by <strong>${who}</strong>.</p>
    <table role="presentation" style="margin:0 0 22px;padding:16px;border:1px solid #f0d7c7;border-radius:10px;background:#fff8f2;width:100%;">
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Donor</td><td>${who}</td></tr>
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Email</td><td><a href="mailto:${donorEmail}" style="color:#d75a1f;text-decoration:none;">${donorEmail}</a></td></tr>
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Amount paid</td><td>${currency} ${amountPaid}</td></tr>
      <tr><td style="padding:4px 0;font-weight:700;color:#d75a1f;">Transaction ID</td><td>${transactionId}</td></tr>
    </table>
    <p>This alert was generated automatically by the donation system.</p>`,
  );
}

export function buildDonationOwnerNotificationEmail(
  props: DonationOwnerNotificationProps,
) {
  return {
    subject: buildDonationOwnerNotificationSubject(props),
    text: buildDonationOwnerNotificationText(props),
    html: buildDonationOwnerNotificationHtml(props),
  };
}
