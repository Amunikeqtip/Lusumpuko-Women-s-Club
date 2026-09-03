import Link from "next/link";
import { PayPalHostedButton } from "../../components/paypal-hosted-button";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function DonatePage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pb-12 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,90,31,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(180,120,70,0.12),transparent_40%)]"
        />

        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            Support the club
          </p>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
            Donate to <span className="text-[#d75a1f] italic">Lusumbuko</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#706055]">
            Your gift helps Lusumbuko Women&apos;s Club sustain heritage cooking,
            community gatherings, and opportunities for women across the valley.
          </p>
          <Link
            href="/impact"
            className="mt-6 inline-flex text-sm font-semibold text-[#d75a1f] transition hover:text-[#a94215]"
          >
            See the work your gift supports →
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#cb5c22]">
            Also accept PayPal
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-4xl">
            Prefer to pay with PayPal?
          </h2>
          <p className="mt-3 mb-8 max-w-2xl text-sm leading-7 text-[#706055]">
            Support the club with our PayPal quick-pay — stacked buttons, QR code,
            or payment link.
          </p>
          <PayPalHostedButton />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
