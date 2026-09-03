export const clubContact = {
  providerName: "Lusumbuko Women's Club",
  email: "info@lusumpuko.com",
  phone: "+263 772898470",
  address: "Victoria Falls, Zimbabwe",
  website: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://Lusumbukopala.com",
  logoPath: "/planeterra.png",
};

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function valueOrPlaceholder(value: string | undefined, placeholder: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : placeholder;
}

export function renderBrandedEmailHtml(preview: string, body: string) {
  const name = escapeHtml(clubContact.providerName);
  const address = escapeHtml(clubContact.address);
  const email = escapeHtml(clubContact.email);
  const phone = escapeHtml(clubContact.phone);
  const logoSrc = `${clubContact.website}${clubContact.logoPath}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;background:#f4efe8;color:#2a1c15;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe8;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #ead9ca;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;border-bottom:1px solid #efe1d6;background:#fffaf5;">
                <img src="${logoSrc}" alt="${name} logo" width="132" style="display:block;height:auto;margin-bottom:14px;" />
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;color:#d75a1f;">${name}</div>
                <div style="font-size:13px;line-height:20px;color:#7a675b;margin-top:6px;">
                  ${address}<br />
                  ${email} | ${phone}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;font-size:15px;line-height:24px;color:#2a1c15;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background:#241711;color:#ffffff;font-size:12px;line-height:18px;">
                ${name}<br />
                ${address}<br />
                Email: ${email} | Phone: ${phone}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
