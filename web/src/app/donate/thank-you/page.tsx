import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

export default function DonateThankYouPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />
      <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,90,31,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(180,120,70,0.12),transparent_42%)]"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            Thank you
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
            Your support means
            <br />
            <span className="text-[#d75a1f] italic">the world</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#706055]">
            If your PayPal payment completed successfully, we have received your
            donation. A confirmation may also appear in your email.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#d75a1f] px-6 text-sm font-semibold text-white transition hover:bg-[#bc4813]"
            >
              Back to home
            </Link>
            <Link
              href="/donate"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#d75a1f] px-6 text-sm font-semibold text-[#d75a1f] transition hover:bg-[#fff2ea]"
            >
              Make another gift
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
