"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const pillars = [
  { label: "Ancient Roots", value: "Tonga" },
  { label: "Regional Depth", value: "Ndebele" },
  { label: "Community Soul", value: "Shona" },
];

const heritageSections = [
  {
    title: "The Tonga: River Sentinels",
    paragraphs: [
      "Hailing from the banks of the Zambezi, the Tonga influence brings a profound connection to the water and the earth. Their contribution to Pala is defined by the use of clay-pot slow-cooking, which allows the grains to swell naturally without losing their nutty integrity.",
      "Traditionally, the Tonga people utilize indigenous Mabele sorghum varieties that thrive in the heat of the valley. Their technique involves a unique double-fermentation process that gives the dish a gentle tang, perfectly balancing the richness of river-harvested additions.",
      "Serving is an act of storytelling for the Tonga. Pala is presented in hand-fired ceramic bowls, often garnished with wild herbs gathered from the Zambezi's edge, symbolizing the harmony between the people and the flowing life-force of the river.",
    ],
    image:
      "https://planeterra.org/wp-content/uploads/2020/07/26.png",
    imageSide: "left",
    badge: "Authentic Heritage",
    cardTitle: "Valley Mvuvhi Pala",
    tag: "River Dish",
  },
  {
    title: "The Ndebele: Bold Artistry",
    paragraphs: [
      "The Ndebele influence is one of vibrancy and structured excellence. Known for their intricate geometric art and cattle-rearing prowess, their take on Pala is hearty and visually striking, often incorporating sun-dried proteins and robust fat profiles.",
      "Technique here is about precision pounding. The grain is stone-ground to a specific coarse texture that holds its form when steamed with rich, bone-marrow-infused broths. This creates a Pala that is as much about texture as it is about taste.",
      "For the Ndebele, every meal is a canvas. Their serving style involves arranging the Pala alongside colorful side-servings, creating a geometric plate that reflects the iconic mural paintings found on their ancestral homes.",
    ],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg",
    imageSide: "right",
    badge: "Authentic Heritage",
    cardTitle: "Royal Ncuma Pala",
    tag: "Highland Legacy",
  },
  {
    title: "The Shona: Guardians of the Soil",
    paragraphs: [
      "Centuries of agricultural mastery define the Shona contribution. Their relationship with the soil is sacred, and this reflects in the selection of pearl millet and finger millet, grains that have sustained the Great Zimbabwe civilization for generations.",
      "Shona techniques emphasize the communal stir. Pala is often prepared in large batches during harvest festivals, where the continuous rhythmic stirring over an open flame creates a smoky depth that cannot be replicated in modern kitchens.",
      "Serving Pala in Shona culture is deeply rooted in respect. It is often served on hand-woven grass mats or wooden platters, emphasizing a return to the earth and the communal bond shared between those eating from the same vessel.",
    ],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg",
    imageSide: "left",
    badge: "Authentic Heritage",
    cardTitle: "Zvimba Harvest Pala",
    tag: "Great Kingdom Roots",
  },
];

const heritageMoments = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
  "https://planeterra.org/wp-content/uploads/2020/07/26.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg",
];

export default function RootsPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader showDesktopSearchPlaceholder />

      <section className="mx-auto max-w-5xl px-6 pb-18 pt-36 text-center sm:px-8 lg:pt-40">
        <p className="inline-flex rounded-full border border-[#f1d1c2] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
          Cultural Foundations
        </p>
        <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl leading-[0.92] tracking-[-0.03em] text-[#241711] sm:text-6xl lg:text-7xl">
          The Three Pillars of <span className="text-[#d75a1f]">Our Taste</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#73655a]">
          Lusumpuko Pala isn&apos;t just a recipe; it&apos;s a tapestry woven from
          the traditions of three distinct cultures. Explore how the Tonga,
          Ndebele, and Shona people have shaped every grain and flavor.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {pillars.map((pillar) => (
            <a
              key={pillar.value}
              href={`/roots/${pillar.value.toLowerCase()}`}
              className="text-center transition hover:-translate-y-1"
            >
              <p className="text-[#d75a1f]">◧</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#9a8677]">
                {pillar.label}
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[#241711]">
                {pillar.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="space-y-24">
          {heritageSections.map((section) => (
            <article
              key={section.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                section.imageSide === "right"
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div className="relative">
                <div
                  className="min-h-[460px] overflow-hidden rounded-[2rem] border border-[#efe2d6] bg-white shadow-[0_24px_60px_rgba(58,31,12,0.08)]"
                  style={{
                    backgroundImage: `url('${section.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute bottom-5 right-5 rounded-[1rem] border border-[#f0dfd3] bg-[#fffaf4] px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d75a1f] shadow-[0_14px_28px_rgba(44,24,11,0.12)]">
                  {section.badge}
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[#241711] sm:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#d75a1f]" />
                <div className="mt-6 space-y-5 text-sm leading-8 text-[#6f6056]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-[#efdfd3] bg-white px-5 py-5 shadow-[0_16px_35px_rgba(55,28,12,0.05)]">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="font-[family-name:var(--font-display)] text-2xl text-[#241711]">
                      {section.cardTitle}
                    </p>
                    <span className="rounded-full bg-[#fff0e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d75a1f]">
                      {section.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#6d5f54]">
                    A living expression of regional wisdom, prepared with the
                    ceremonies, ingredients, and serving traditions that define
                    this cultural lineage.
                  </p>
                  <a
                    href={`/roots/${section.title.toLowerCase().includes("tonga") ? "tonga" : section.title.toLowerCase().includes("ndebele") ? "ndebele" : "shona"}`}
                    className="mt-4 inline-block text-sm font-semibold text-[#d75a1f]"
                  >
                    Read full heritage story →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-4xl">
          Moments of Heritage
        </h2>
        <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#9f8a7c]">
          A Visual Journey Through Our Ceremonies
        </p>

        <div className="mt-10 grid gap-2 md:grid-cols-4">
          {heritageMoments.map((moment) => (
            <div
              key={moment}
              className="aspect-[0.92] overflow-hidden rounded-[1.35rem] shadow-[0_18px_40px_rgba(45,24,11,0.1)]"
              style={{
                backgroundImage: `url('${moment}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#d7541b] py-18 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
            Experience the Heritage Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/88">
            Now that you&apos;ve walked through the roots of our flavor, it&apos;s
            time to taste the tradition for yourself. Our menu features
            varieties from all three cultural pillars.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#menu"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#d7541b] transition hover:bg-[#fff0e6]"
            >
              Explore the Menu
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
            >
              Learn More History
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
