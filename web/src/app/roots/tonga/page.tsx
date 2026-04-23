"use client";

import Link from "next/link";

const tongaHighlights = [
  {
    title: "River Intelligence",
    body: "Tonga cuisine was shaped by life beside the Zambezi, where food had to respond to heat, water cycles, and communal fishing culture.",
  },
  {
    title: "Clay-Pot Technique",
    body: "Slow heat and earthenware cooking gave Pala its softer center, deeper aroma, and layered fermentation profile.",
  },
  {
    title: "Shared Stewardship",
    body: "Grain work was rarely solitary. Milling, stirring, drying, and serving were collective acts tied to kinship and remembrance.",
  },
];

const tongaToday = [
  "It preserves a river-based culinary memory that modernization often pushes aside.",
  "It keeps intergenerational cooking knowledge alive through oral teaching and shared preparation.",
  "It reminds younger cooks that flavor can come from patience, smoke, fermentation, and place rather than speed alone.",
];

const tongaGallery = [
  "https://planeterra.org/wp-content/uploads/2020/07/26.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg",
];

export default function TongaPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <section
        className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-12"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,248,242,0.92), rgba(251,247,242,1))",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <Link href="/roots" className="text-sm font-semibold text-[#d75a1f]">
            ← Back to Roots
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
                Tonga Heritage
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
                The River Memory
                <br />
                of Tonga Food
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6056]">
                The Tonga food story begins along the Zambezi, where grain,
                river life, and clay-pot cooking shaped a cuisine rooted in
                patience and restraint. Their version of Pala is known for its
                gentle fermentation, earth-rich aroma, and symbolic serving
                rituals.
              </p>
            </div>

            <div
              className="min-h-[420px] overflow-hidden rounded-[2rem] border border-[#efe1d6] bg-white shadow-[0_24px_60px_rgba(59,31,12,0.08)]"
              style={{
                backgroundImage:
                  "url('https://planeterra.org/wp-content/uploads/2020/07/26.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {tongaHighlights.map((item) => (
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

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
            Food History
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-[#6f6056]">
            <p>
              Historically, Tonga households prepared grain communally after
              harvest. Women led the milling and fermentation cycles, while
              elders preserved the sequence of soaking, grinding, and steaming
              as both a social and spiritual act.
            </p>
            <p>
              The Tonga relationship with food was never purely practical.
              Dishes were connected to weather, fishing seasons, and the flow of
              the river itself. Clay pots, wood smoke, and low heat helped build
              flavor slowly, creating a cuisine that felt grounded rather than
              decorative.
            </p>
            <p>
              Their Pala traditions were also adaptive. What people caught,
              dried, or harvested influenced the accompaniments, but the grain
              remained the anchor. That consistency gave the meal its identity
              across changing conditions.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#f0dfd3] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(58,30,12,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d75a1f]">
            Why It Matters Today
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#6b5c52]">
            {tongaToday.map((item) => (
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
            Signature Flavor Language
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88">
            Tonga-inspired Pala still emphasizes balance: river herbs, smoked
            fish, and soft textures that mirror the rhythm of life along the
            water. It is a cuisine of calm intensity rather than excess, where
            smoke, grain, and clay work together to create memory on the plate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
          Cultural Gallery
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tongaGallery.map((image) => (
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
    </main>
  );
}
