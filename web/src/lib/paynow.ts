import { Paynow } from "paynow";

export class PaynowConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PaynowConfigError";
  }
}

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

export function createPaynowClient() {
  const integrationId = process.env.PAYNOW_INTEGRATION_ID?.trim();
  const integrationKey = process.env.PAYNOW_INTEGRATION_KEY?.trim();

  if (!integrationId || !integrationKey) {
    throw new PaynowConfigError(
      "Paynow is not configured. Set PAYNOW_INTEGRATION_ID and PAYNOW_INTEGRATION_KEY.",
    );
  }

  const siteUrl = getSiteUrl();

  return new Paynow(
    integrationId,
    integrationKey,
    `${siteUrl}/api/donate/result`,
    `${siteUrl}/donate/thank-you`,
  );
}
