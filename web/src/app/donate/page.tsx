"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const PRESET_AMOUNTS = [10, 25, 50, 100] as const;

export default function DonatePage() {
  const [selectedPreset, setSelectedPreset] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const amount = useMemo(() => {
    if (selectedPreset === "custom") {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) ? parsed : NaN;
    }

    return selectedPreset;
  }, [customAmount, selectedPreset]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!Number.isFinite(amount) || amount <= 0) {
      setError("Enter a valid donation amount greater than zero.");
      return;
    }

    if (!email.trim()) {
      setError("Enter your email address to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          email: email.trim(),
          name: name.trim() || undefined,
        }),
      });

      const data = (await response.json()) as {
        redirectUrl?: string;
        error?: string;
      };

      if (!response.ok || !data.redirectUrl) {
        setError(
          data.error ??
            "Unable to start Paynow checkout. Please try again shortly.",
        );
        return;
      }

      window.location.href = data.redirectUrl;
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,90,31,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(180,120,70,0.12),transparent_40%)]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
              Support the club
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
              Donate to
              <br />
              <span className="text-[#d75a1f] italic">Lusumpuko</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#706055]">
              Your gift helps Lusumpuko Women&apos;s Club sustain heritage cooking,
              community gatherings, and opportunities for women across the valley.
            </p>
            <Link
              href="/impact"
              className="mt-6 inline-flex text-sm font-semibold text-[#d75a1f] transition hover:text-[#a94215]"
            >
              See the work your gift supports →
            </Link>
          </div>

          <form
            onSubmit={onSubmit}
            className="overflow-hidden rounded-[1.8rem] border border-[#eee1d6] bg-white shadow-[0_22px_55px_rgba(55,29,12,0.06)]"
          >
            <div className="border-b border-[#efe1d6] px-7 py-6">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-4xl">
                Choose an amount
              </h2>
              <p className="mt-2 text-sm text-[#7d6c60]">
                Secure checkout is powered by Paynow.
              </p>
            </div>

            <div className="space-y-6 px-7 py-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PRESET_AMOUNTS.map((preset) => {
                  const active = selectedPreset === preset;

                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSelectedPreset(preset)}
                      className={`h-14 rounded-xl text-base font-semibold transition ${
                        active
                          ? "bg-[#d75a1f] text-white shadow-[0_12px_24px_rgba(215,90,31,0.22)]"
                          : "border border-[#ead9ca] bg-[#fffaf6] text-[#241711] hover:border-[#d75a1f]/60"
                      }`}
                    >
                      ${preset}
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="text-sm font-medium text-[#65574d]" htmlFor="custom-amount">
                  Custom amount (USD)
                </label>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#968273]">
                    $
                  </span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="Enter amount"
                    value={customAmount}
                    onFocus={() => setSelectedPreset("custom")}
                    onChange={(event) => {
                      setSelectedPreset("custom");
                      setCustomAmount(event.target.value);
                    }}
                    className={`h-14 w-full rounded-xl border px-4 pl-8 outline-none transition ${
                      selectedPreset === "custom"
                        ? "border-[#d75a1f] bg-white"
                        : "border-[#ead9ca] bg-[#fffaf6]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#65574d]" htmlFor="donor-name">
                  Name <span className="font-normal text-[#968273]">(optional)</span>
                </label>
                <input
                  id="donor-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#65574d]" htmlFor="donor-email">
                  Email address
                </label>
                <input
                  id="donor-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              {error ? (
                <p
                  role="alert"
                  className="rounded-xl border border-[#f0c7b4] bg-[#fff1e8] px-4 py-3 text-sm leading-6 text-[#8a3d16]"
                >
                  {error}
                </p>
              ) : null}
            </div>

            <div className="border-t border-[#efe1d6] px-7 py-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 w-full rounded-xl bg-[#d7541b] text-base font-semibold text-white transition hover:bg-[#bf4a13] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? "Connecting to Paynow..."
                  : `Donate${Number.isFinite(amount) && amount > 0 ? ` $${amount}` : ""}`}
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
