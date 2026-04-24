"use client";

import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const shonaThemes = [
  {
    title: "Soil Knowledge",
    body: "Shona food culture is deeply agricultural, shaped by millet cultivation, storage knowledge, and seasonal stewardship.",
  },
  {
    title: "Communal Fire",
    body: "Large shared cooking vessels and rhythmic stirring created meals that were physically collective from the start.",
  },
  {
    title: "Respectful Serving",
    body: "Presentation reflected mutual care, with food often centered on shared vessels, woven mats, and the ethics of eating together.",
  },
];

const shonaRelevance = [
  "It keeps agricultural memory connected to everyday cooking.",
  "It shows how food can still anchor family gatherings in a fast, urbanizing world.",
  "It preserves respect-based serving culture in an era of individual portions and convenience meals.",
];

const shonaGallery = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Stewed%20Capenta%20and%20Sadza%28as%20it%20is%20known%20in%20Zimbabwe%29%20dish.JPG",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Sadza%20and%20Beans.jpg",
];

export default function ShonaPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader showDesktopSearchPlaceholder />

      <section className="px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/roots" className="text-sm font-semibold text-[#d75a1f]">
            ← Back to Roots
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
                Shona Heritage
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
                Guardians of Grain,
                <br />
                Fire, and Soil
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6056]">
                The Shona approach to food is deeply tied to soil stewardship,
                agriculture, and the ceremonial role of grain in communal life.
                Their contribution to Pala is grounded in millet knowledge,
                seasonal timing, and hospitality.
              </p>
            </div>

            <div
              className="min-h-[430px] overflow-hidden rounded-[2rem] border border-[#efe1d6] bg-white shadow-[0_24px_60px_rgba(59,31,12,0.08)]"
              style={{
                backgroundImage:
                  "url('https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {shonaThemes.map((item) => (
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

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
            Cultural Explanation
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-[#6f6056]">
            <p>
              Historically, Shona families prepared large shared batches during
              harvests and family gatherings. The dish carried memory, respect,
              and continuity, especially when served from common vessels during
              ritual or celebration.
            </p>
            <p>
              The Shona contribution to Pala is not only about ingredients but
              about worldview. Food grows from land, land requires care, and
              meals should return people to one another. That relationship makes
              the dish feel grounded, agricultural, and quietly ceremonial.
            </p>
            <p>
              In modern life, this matters because it offers a model of food
              that resists fragmentation. Shona culinary practice reminds people
              that grain can still be a center of belonging, not just a side.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#f0dfd3] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(58,30,12,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d75a1f]">
            Relevance Today
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#6b5c52]">
            {shonaRelevance.map((item) => (
              <li key={item} className="rounded-[1rem] bg-[#fff6ef] px-4 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-[#d7541b] px-8 py-10 text-white shadow-[0_22px_55px_rgba(138,52,13,0.22)]">
          <h2 className="font-[family-name:var(--font-display)] text-4xl">
            What the Shona Keep Alive
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88">
            Shona-inspired Pala highlights earthy grains, slow stirring,
            generous shared portions, and pairings that honor the agricultural
            roots of the cuisine. It keeps the relationship between grain,
            labor, celebration, and respect visible in the present.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
          Cultural Gallery
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {shonaGallery.map((image) => (
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
