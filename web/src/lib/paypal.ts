export type PayPalDonationInput = {
  amount: number;
  email: string;
  name?: string;
};

type PayPalTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

function getPayPalCredentials() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.trim();
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET?.trim();
  const apiBase = (
    process.env.PAYPAL_API_BASE?.trim() || "https://api-m.sandbox.paypal.com"
  ).replace(/\/$/, "");

  if (!clientId || !clientSecret) {
    throw new Error(
      "PayPal REST credentials are missing. Set NEXT_PUBLIC_PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET.",
    );
  }

  return { clientId, clientSecret, apiBase };
}

export function formatMoney(amount: number) {
  return amount.toFixed(2);
}

export function normalizeDonationAmount(value: unknown) {
  const amount =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : NaN;

  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return Math.round(amount * 100) / 100;
}

async function getAccessToken() {
  const { clientId, clientSecret, apiBase } = getPayPalCredentials();
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = (await response.json()) as PayPalTokenResponse;
  if (!response.ok || !data.access_token) {
    throw new Error(
      data.error_description || data.error || "Unable to authenticate with PayPal.",
    );
  }

  return { accessToken: data.access_token, apiBase };
}

export async function paypalRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const { accessToken, apiBase } = await getAccessToken();
  const response = await fetch(`${apiBase}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  const data = (await response.json().catch(() => ({}))) as T & {
    message?: string;
    details?: Array<{ description?: string }>;
  };

  if (!response.ok) {
    const detail =
      data.details?.[0]?.description ||
      data.message ||
      `PayPal request failed (${response.status})`;
    throw new Error(detail);
  }

  return data;
}

export async function createPayPalDonationOrder(input: PayPalDonationInput) {
  const amount = normalizeDonationAmount(input.amount);
  if (amount === null) {
    throw new Error("Enter a valid donation amount greater than zero.");
  }

  const email = input.email.trim();
  if (!email) {
    throw new Error("Email is required.");
  }

  const name = input.name?.trim() || undefined;
  const customId = `lwc-donate-${Date.now().toString(36)}`.slice(0, 127);
  const description = name
    ? `Donation from ${name}`.slice(0, 127)
    : "Donation to Lusumbuko Women's Club";
  const value = formatMoney(amount);

  const order = await paypalRequest<{ id: string; status?: string }>(
    "/v2/checkout/orders",
    {
      method: "POST",
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            custom_id: customId,
            description,
            amount: {
              currency_code: "USD",
              value,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value,
                },
              },
            },
            items: [
              {
                name: "Donation — Lusumbuko Women's Club".slice(0, 127),
                quantity: "1",
                unit_amount: {
                  currency_code: "USD",
                  value,
                },
                category: "DIGITAL_GOODS",
              },
            ],
          },
        ],
        application_context: {
          brand_name: "Lusumbuko Women's Club",
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    },
  );

  return {
    orderId: order.id,
    amount,
    currency: "USD" as const,
    customId,
    email,
    name,
  };
}

export async function capturePayPalOrder(orderId: string) {
  const capture = await paypalRequest<{
    id: string;
    status?: string;
    purchase_units?: Array<{
      payments?: {
        captures?: Array<{
          id?: string;
          status?: string;
          amount?: { value?: string; currency_code?: string };
        }>;
      };
    }>;
  }>(`/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {
    method: "POST",
    body: JSON.stringify({}),
  });

  const payment = capture.purchase_units?.[0]?.payments?.captures?.[0];

  return {
    orderId: capture.id,
    status: capture.status ?? payment?.status ?? "UNKNOWN",
    transactionId: payment?.id ?? capture.id,
    amount: payment?.amount?.value ?? null,
    currency: payment?.amount?.currency_code ?? "USD",
  };
}
