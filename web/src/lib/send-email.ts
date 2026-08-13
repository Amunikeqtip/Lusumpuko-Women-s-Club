import nodemailer from "nodemailer";
import { clubContact } from "../emails/branded";

type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

function getSmtpConfig() {
  const host = process.env.EMAIL_HOST?.trim() || process.env.SMTP_HOST?.trim();
  const user =
    process.env.EMAIL_USERNAME?.trim() || process.env.SMTP_USER?.trim();
  const pass =
    process.env.EMAIL_PASSWORD?.trim() || process.env.SMTP_PASS?.trim();
  const port = Number(process.env.EMAIL_PORT || process.env.SMTP_PORT || 587);

  if (!host || !user || !pass) {
    return null;
  }

  return { host, user, pass, port };
}

export function getOwnerNotificationEmails() {
  const configured = process.env.DONATION_OWNER_EMAIL?.trim();

  if (!configured) {
    return [clubContact.email];
  }

  return configured
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function sendEmail(input: SendEmailInput) {
  const smtp = getSmtpConfig();
  const recipients = Array.isArray(input.to) ? input.to : [input.to];

  if (!smtp) {
    console.info("Email not sent (SMTP settings missing)", {
      to: recipients,
      subject: input.subject,
      text: input.text,
    });
    return { sent: false as const, reason: "SMTP settings missing" };
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    requireTLS: smtp.port === 587,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const from =
    process.env.EMAIL_FROM?.trim() ||
    `"${clubContact.providerName}" <${smtp.user}>`;

  await transporter.sendMail({
    from,
    to: recipients,
    replyTo: input.replyTo,
    subject: input.subject,
    html: input.html,
    text: input.text,
  });

  return { sent: true as const };
}
