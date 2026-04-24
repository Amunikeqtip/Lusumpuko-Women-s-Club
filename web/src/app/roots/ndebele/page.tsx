"use client";

import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const ndebeleThemes = [
  {
    title: "Art as Structure",
    body: "Ndebele visual culture values pattern, rhythm, and deliberate composition. Those same instincts appear in plating, balance, and the way food is arranged.",
  },
  {
    title: "Strength Through Technique",
    body: "Stone-pounding, grain storage, smoke, and bone-rich broths create dishes with stronger texture and deeper endurance.",
  },
  {
    title: "Ceremonial Presence",
    body: "Meals often do more than nourish. They mark belonging, dignity, celebration, and social order within the home.",
  },
];

const ndebeleRelevance = [
  "It keeps the connection between craft, identity, and everyday food visible.",
  "It shows younger generations that food can carry aesthetics, symbolism, and discipline all at once.",
  "It offers a resilient culinary language rooted in preservation, seasonality, and bold flavor.",
];

const ndebeleGallery = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
];

export default function NdebelePage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader showDesktopSearchPlaceholder />

      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/roots" className="text-sm font-semibold text-[#d75a1f]">
            ← Back to Roots
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <div
              className="min-h-[430px] overflow-hidden rounded-[2rem] border border-[#efe1d6] bg-white shadow-[0_24px_60px_rgba(59,31,12,0.08)]"
              style={{
                backgroundImage:
                  "url('https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div>
              <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
                Ndebele Heritage
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
                Bold Artistry,
                <br />
                Living Memory
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6056]">
                Ndebele foodways celebrate structure, strength, and visual
                identity. Their culinary tradition transformed Pala into a dish
                with bolder body, richer accompaniments, and carefully
                considered presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {ndebeleThemes.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[#eee2d7] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(58,30,12,0.05)]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6e5f54]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
            Cultural Explanation
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-[#6f6056]">
            <p>
              Historically, Ndebele homes relied on careful grain storage,
              stone pounding, and deep knowledge of seasonal meat preservation.
              Meals often carried ceremonial weight and reflected the same
              geometric intentionality seen in mural art and clothing.
            </p>
            <p>
              Ndebele culinary practice values force and refinement together.
              A dish can be earthy and direct while still being beautiful,
              balanced, and exact. That is why texture matters so much: the
              feel of the grain, the density of the broth, and the arrangement
              of color all speak at once.
            </p>
            <p>
              This tradition matters beyond nostalgia. It teaches that heritage
              food can be both functional and expressive, carrying a visual
              language as powerful as the ingredients themselves.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#f0dfd3] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(58,30,12,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d75a1f]">
            Relevance Today
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#6b5c52]">
            {ndebeleRelevance.map((item) => (
              <li key={item} className="rounded-[1rem] bg-[#fff6ef] px-4 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-[#fffaf4] px-8 py-8 shadow-[0_18px_45px_rgba(55,28,12,0.05)]">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
            Signature Ndebele Contribution to Pala
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-[#6d5f54]">
            Ndebele-style Pala today is often paired with hearty relishes,
            roasted proteins, and spice-forward broths that create a strong,
            memorable plate. It contributes confidence to the broader Lusumpuko
            table: more body, more color, and more visual rhythm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
          Visual Heritage
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ndebeleGallery.map((image) => (
            <div
              key={image}
              className="aspect-[0.92] overflow-hidden rounded-[1.5rem] border border-[#eee1d6] shadow-[0_16px_36px_rgba(52,28,11,0.08)]"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
