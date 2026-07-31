type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
};

function getFromAddress() {
  return (
    process.env.EMAIL_FROM?.trim() ||
    "Lusumpuko Women's Club <hello@lusumpukopala.com>"
  );
}

export function getOwnerNotificationEmails() {
  const configured = process.env.DONATION_OWNER_EMAIL?.trim();

  if (!configured) {
    return ["hello@lusumpukopala.com"];
  }

  return configured
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function sendEmail(input: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipients = Array.isArray(input.to) ? input.to : [input.to];

  if (!apiKey) {
    console.info("Email not sent (RESEND_API_KEY missing)", {
      to: recipients,
      subject: input.subject,
      text: input.text,
    });
    return { sent: false as const, reason: "RESEND_API_KEY missing" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getFromAddress(),
      to: recipients,
      subject: input.subject,
      html: input.html,
      text: input.text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Failed to send email via Resend", {
      status: response.status,
      detail,
      to: recipients,
      subject: input.subject,
    });
    throw new Error(`Email send failed (${response.status})`);
  }

  return { sent: true as const };
}
