import { escapeHtml, formatAmount, formatDate } from "./utils";

export type DonationThankYouEmailProps = {
  donorName?: string;
  amount: number;
  currency?: string;
  reference: string;
  paynowReference?: string;
  donatedAt?: Date | string;
  siteUrl?: string;
};

export function getDonationThankYouSubject() {
  return "Thank you for your generous donation — Lusumpuko Women's Club";
}

export function renderDonationThankYouText(props: DonationThankYouEmailProps) {
  const {
    donorName,
    amount,
    currency = "USD",
    reference,
    paynowReference,
    donatedAt,
    siteUrl = "https://lusumpukopala.com",
  } = props;

  const greeting = donorName?.trim()
    ? `Dear ${donorName.trim()},`
    : "Dear Supporter,";
  const formattedAmount = formatAmount(amount, currency);
  const formattedDate = formatDate(donatedAt);

  return [
    greeting,
    "",
    "On behalf of Lusumpuko Women's Club, thank you for your generous donation. Your support strengthens our work to preserve cultural heritage, nurture community gathering, and create meaningful opportunities for women.",
    "",
    "Donation details",
    `Amount: ${formattedAmount}`,
    `Date: ${formattedDate}`,
    `Reference: ${reference}`,
    paynowReference ? `Paynow reference: ${paynowReference}` : null,
    "",
    "This message confirms that we have received your gift with sincere gratitude. Your contribution helps sustain the traditions, kitchens, and community programmes that define Lusumpuko.",
    "",
    "If you have any questions about your donation, please contact us at hello@lusumpukopala.com.",
    "",
    "With warm regards,",
    "Lusumpuko Women's Club",
    siteUrl,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export function renderDonationThankYouHtml(props: DonationThankYouEmailProps) {
  const {
    donorName,
    amount,
    currency = "USD",
    reference,
    paynowReference,
    donatedAt,
    siteUrl = "https://lusumpukopala.com",
  } = props;

  const safeName = donorName?.trim() ? escapeHtml(donorName.trim()) : "";
  const greeting = safeName ? `Dear ${safeName},` : "Dear Supporter,";
  const formattedAmount = escapeHtml(formatAmount(amount, currency));
  const formattedDate = escapeHtml(formatDate(donatedAt));
  const safeReference = escapeHtml(reference);
  const safePaynowReference = paynowReference
    ? escapeHtml(paynowReference)
    : "";
  const safeSiteUrl = escapeHtml(siteUrl);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${escapeHtml(getDonationThankYouSubject())}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4efe8;color:#2a1c15;font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
      Thank you for supporting Lusumpuko Women's Club. Your donation has been received with gratitude.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4efe8;margin:0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #ead9ca;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#d75a1f 0%,#bc4813 100%);padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.88);font-weight:700;">
                  Lusumpuko Women's Club
                </p>
                <h1 style="margin:12px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;font-weight:400;color:#ffffff;">
                  Thank you for your donation
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 32px 28px;">
                <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#2a1c15;">
                  ${greeting}
                </p>
                <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#4d3f35;">
                  On behalf of Lusumpuko Women's Club, we extend our sincere thanks for your generous support. Your gift strengthens our commitment to preserving cultural heritage, nurturing community gatherings, and creating meaningful opportunities for women.
                </p>
                <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#4d3f35;">
                  We are grateful to confirm that your donation has been received.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff8f2;border:1px solid #f0d7c7;border-radius:14px;">
                  <tr>
                    <td style="padding:22px 24px;">
                      <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#cb5c22;font-weight:700;">
                        Donation details
                      </p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#2a1c15;">
                        <tr>
                          <td style="padding:6px 0;color:#7a675b;width:42%;">Amount</td>
                          <td style="padding:6px 0;font-weight:700;text-align:right;">${formattedAmount}</td>
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
                <p style="margin:24px 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#4d3f35;">
                  Your contribution helps sustain the traditions, kitchens, and community programmes that define Lusumpuko. We are honoured to have your support.
                </p>
                <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#4d3f35;">
                  Should you have any questions regarding this donation, please contact us at
                  <a href="mailto:hello@lusumpukopala.com" style="color:#d75a1f;text-decoration:none;font-weight:600;">hello@lusumpukopala.com</a>.
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#2a1c15;">
                  With warm regards,<br />
                  <strong>Lusumpuko Women's Club</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 32px 28px;border-top:1px solid #efe1d6;background-color:#fbf7f2;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#7a675b;">
                  This email acknowledges your donation to Lusumpuko Women's Club.
                </p>
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

export function buildDonationThankYouEmail(props: DonationThankYouEmailProps) {
  return {
    subject: getDonationThankYouSubject(),
    text: renderDonationThankYouText(props),
    html: renderDonationThankYouHtml(props),
  };
}
