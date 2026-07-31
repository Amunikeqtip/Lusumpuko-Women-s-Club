import { escapeHtml, formatAmount, formatDate } from "./utils";

export type DonationOwnerNotificationProps = {
  donorName?: string;
  donorEmail: string;
  amount: number;
  currency?: string;
  reference: string;
  paynowReference?: string;
  donatedAt?: Date | string;
  status?: string;
  siteUrl?: string;
};

function donorDisplayName(donorName: string | undefined, donorEmail: string) {
  const name = donorName?.trim();
  return name || "A supporter";
}

export function getDonationOwnerNotificationSubject(
  props: Pick<DonationOwnerNotificationProps, "amount" | "currency" | "donorName" | "donorEmail">,
) {
  const amount = formatAmount(props.amount, props.currency ?? "USD");
  const who = donorDisplayName(props.donorName, props.donorEmail);
  return `New donation received: ${amount} from ${who}`;
}

export function renderDonationOwnerNotificationText(
  props: DonationOwnerNotificationProps,
) {
  const {
    donorName,
    donorEmail,
    amount,
    currency = "USD",
    reference,
    paynowReference,
    donatedAt,
    status = "Paid",
    siteUrl = "https://lusumpukopala.com",
  } = props;

  const who = donorDisplayName(donorName, donorEmail);
  const formattedAmount = formatAmount(amount, currency);

  return [
    "Lusumpuko Women's Club — Donation alert",
    "",
    "A new donation has been received.",
    "",
    "Donation summary",
    `Amount: ${formattedAmount}`,
    `Donor: ${who}`,
    `Donor email: ${donorEmail}`,
    `Status: ${status}`,
    `Date: ${formatDate(donatedAt)}`,
    `Reference: ${reference}`,
    paynowReference ? `Paynow reference: ${paynowReference}` : null,
    "",
    "Please log in to your Paynow merchant account if you need the full transaction record.",
    "",
    siteUrl,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export function renderDonationOwnerNotificationHtml(
  props: DonationOwnerNotificationProps,
) {
  const {
    donorName,
    donorEmail,
    amount,
    currency = "USD",
    reference,
    paynowReference,
    donatedAt,
    status = "Paid",
    siteUrl = "https://lusumpukopala.com",
  } = props;

  const who = escapeHtml(donorDisplayName(donorName, donorEmail));
  const safeEmail = escapeHtml(donorEmail);
  const formattedAmount = escapeHtml(formatAmount(amount, currency));
  const formattedDate = escapeHtml(formatDate(donatedAt));
  const safeReference = escapeHtml(reference);
  const safePaynowReference = paynowReference
    ? escapeHtml(paynowReference)
    : "";
  const safeStatus = escapeHtml(status);
  const safeSiteUrl = escapeHtml(siteUrl);
  const subject = escapeHtml(getDonationOwnerNotificationSubject(props));

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4efe8;color:#2a1c15;font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4efe8;margin:0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #ead9ca;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="background:#241711;padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.72);font-weight:700;">
                  Internal notification
                </p>
                <h1 style="margin:12px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.15;font-weight:400;color:#ffffff;">
                  New donation received
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 32px 28px;">
                <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#4d3f35;">
                  A donation of <strong style="color:#241711;">${formattedAmount}</strong> has been made by
                  <strong style="color:#241711;">${who}</strong>.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff8f2;border:1px solid #f0d7c7;border-radius:14px;">
                  <tr>
                    <td style="padding:22px 24px;">
                      <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#cb5c22;font-weight:700;">
                        Donation summary
                      </p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#2a1c15;">
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;width:42%;">Amount</td>
                          <td style="padding:6px 0;font-weight:700;text-align:right;">${formattedAmount}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;">Donor</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">${who}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;">Donor email</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">
                            <a href="mailto:${safeEmail}" style="color:#d75a1f;text-decoration:none;">${safeEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;">Status</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">${safeStatus}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;">Date</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">${formattedDate}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;">Reference</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">${safeReference}</td>
                        </tr>
                        ${
                          safePaynowReference
                            ? `<tr>
                          <td style="padding:6px 0;color:#7a675b;">Paynow reference</td>
                          <td style="padding:6px 0;font-weight:600;text-align:right;">${safePaynowReference}</td>
                        </tr>`
                            : ""
                        }
                      </table>
                    </td>
                  </tr>
                </table>
                <p style="margin:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#7a675b;">
                  This alert was generated automatically by the Lusumpuko Women's Club donation system.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 32px 28px;border-top:1px solid #efe1d6;background-color:#fbf7f2;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;">
                  <a href="${safeSiteUrl}" style="color:#d75a1f;text-decoration:none;font-weight:600;">${safeSiteUrl.replace(/^https?:\/\//, "")}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildDonationOwnerNotificationEmail(
  props: DonationOwnerNotificationProps,
) {
  return {
    subject: getDonationOwnerNotificationSubject(props),
    text: renderDonationOwnerNotificationText(props),
    html: renderDonationOwnerNotificationHtml(props),
  };
}
