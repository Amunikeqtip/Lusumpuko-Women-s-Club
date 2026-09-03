/** Lusumbuko Women's Club PayPal Hosted Buttons / NCP donation checkout. */
export const PAYPAL_HOSTED_CLIENT_ID =
  "BAAvlJnvZuI2_-aZlgHx_seQcCC4YpLT6jhQEZrCldRjlqrdtX2DY7QkzxdcFjOX_ge7Ph9-w0gCZ91lPo";

export const PAYPAL_HOSTED_BUTTON_ID = "ACKW3HNKYKD4W";

export const PAYPAL_PAYMENT_LINK =
  "https://www.paypal.com/ncp/payment/ACKW3HNKYKD4W";

export const PAYPAL_QR_IMAGE = "/paypal-donate-qr.png";

export function getPayPalHostedClientId() {
  return (
    process.env.NEXT_PUBLIC_PAYPAL_HOSTED_CLIENT_ID?.trim() ||
    PAYPAL_HOSTED_CLIENT_ID
  );
}

export function getPayPalHostedButtonId() {
  return (
    process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID?.trim() ||
    PAYPAL_HOSTED_BUTTON_ID
  );
}

export function getPayPalPaymentLink() {
  return (
    process.env.NEXT_PUBLIC_PAYPAL_PAYMENT_LINK?.trim() || PAYPAL_PAYMENT_LINK
  );
}

export function getPayPalQrImage() {
  return process.env.NEXT_PUBLIC_PAYPAL_QR_IMAGE?.trim() || PAYPAL_QR_IMAGE;
}
