"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useId, useState, type ReactNode } from "react";
import {
  getPayPalHostedButtonId,
  getPayPalHostedClientId,
  getPayPalPaymentLink,
  getPayPalQrImage,
} from "../lib/paypal-config";

type PayPalHostedButtonProps = {
  className?: string;
};

function PaymentOption({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full min-h-[280px] flex-col rounded-[1.4rem] border border-[#eee1d6] bg-[#fffaf6] p-4 sm:p-5">
      <div className="mb-4 border-b border-[#efe1d6] pb-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#cb5c22]">
          {step}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-[#241711]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[#7d6c60]">{description}</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">{children}</div>
    </div>
  );
}

export function PayPalHostedButton({ className }: PayPalHostedButtonProps) {
  const clientId = getPayPalHostedClientId();
  const hostedButtonId = getPayPalHostedButtonId();
  const paymentLink = getPayPalPaymentLink();
  const qrImageSrc = getPayPalQrImage();

  const reactId = useId().replace(/:/g, "");
  const containerId = `paypal-container-${hostedButtonId}-${reactId}`;
  const [sdkReady, setSdkReady] = useState(false);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    if (!sdkReady || !window.paypal?.HostedButtons) {
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      return;
    }

    if (container.childNodes.length > 0) {
      return;
    }

    let cancelled = false;

    Promise.resolve(
      window.paypal.HostedButtons({ hostedButtonId }).render(`#${containerId}`),
    ).catch(() => {
      if (!cancelled) {
        setRenderError(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [sdkReady, hostedButtonId, containerId]);

  const sdkSrc = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&components=hosted-buttons&disable-funding=venmo&currency=USD`;

  return (
    <div
      className={
        className ??
        "rounded-[1.8rem] border border-[#eee1d6] bg-white p-5 shadow-[0_22px_55px_rgba(55,29,12,0.06)] sm:p-7"
      }
    >
      <Script
        id="paypal-hosted-buttons-sdk"
        src={sdkSrc}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
      />

      <p className="mb-5 text-sm font-semibold text-[#65574d]">
        Choose any PayPal option below — all three go to the same secure checkout.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
        <PaymentOption
          step="Option 1"
          title="Stacked buttons"
          description="Pay on this page with PayPal or card."
        >
          <div className="w-full min-h-[120px]">
            <div id={containerId} />
            {renderError ? (
              <p className="mt-3 text-center text-sm text-[#7d6c60]">
                Buttons failed to load. Use the QR code or payment link instead.
              </p>
            ) : null}
          </div>
        </PaymentOption>

        <PaymentOption
          step="Option 2"
          title="QR code"
          description="Scan with your phone to open PayPal checkout."
        >
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[220px] flex-col items-center transition-opacity hover:opacity-90"
            aria-label="Scan QR code to donate with PayPal"
          >
            <Image
              src={qrImageSrc}
              alt="Donation — Lusumbuko Women's Club PayPal QR code"
              width={220}
              height={260}
              className="h-auto w-full rounded-xl border border-[#efe1d6] bg-white object-contain"
              priority
            />
            <span className="mt-3 text-xs font-semibold text-[#9a8777]">
              Scan to pay on mobile
            </span>
          </a>
        </PaymentOption>

        <PaymentOption
          step="Option 3"
          title="Payment link"
          description="Open the PayPal payment page in a new tab."
        >
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#0070ba] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#005ea6]"
          >
            Open PayPal payment link
          </a>
          <p className="mt-3 break-all text-center text-xs leading-5 text-[#9a8777]">
            {paymentLink}
          </p>
        </PaymentOption>
      </div>
    </div>
  );
}
