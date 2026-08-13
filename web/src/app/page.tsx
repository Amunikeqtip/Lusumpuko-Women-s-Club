"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { LWC, lwcUrl } from "../lib/lusumpuko-images";

const discoverCards = [
  {
    title: "Full Menu",
    subtitle: "Explore our rich seasonal selection",
    palette: "from-[#51412d] via-[#7a5c38] to-[#201814]",
    image: lwcUrl(LWC.foodSadzaMeat),
  },
  {
    title: "Cultural Roots",
    subtitle: "The stories, rituals, and ingredients behind every dish",
    palette: "from-[#223825] via-[#708969] to-[#101c12]",
    image: lwcUrl(LWC.foodHarvestBasket),
  },
  {
    title: "Authentic Recipes",
    subtitle: "Traditional methods from Tonga, Ndebele, and Shona kitchens",
    palette: "from-[#3b3127] via-[#82684a] to-[#1b1511]",
    image: lwcUrl(LWC.foodMopaneSadza),
  },
  {
    title: "Visual Gallery",
    subtitle: "A warm look into our table, plating, and celebrations",
    palette: "from-[#62411d] via-[#b17d35] to-[#1f1208]",
    image: lwcUrl(LWC.foodBreakfastTray),
  },
];

const testimonials = [
  {
    quote:
      "The Ndebele Pala felt like a homecoming. The depth of flavour was unmatched and deeply comforting.",
    name: "Samuel M.",
    city: "Harare",
  },
  {
    quote:
      "The care in every dish stands out immediately. It felt refined while still honoring tradition.",
    name: "Elena K.",
    city: "Aliwal North",
  },
  {
    quote:
      "Hosting with Lusumpuko felt personal and warm. The food was beautifully presented and truly memorable.",
    name: "Themba Z.",
    city: "Cape Town",
  },
];

const gramTiles = [
  lwcUrl(LWC.foodSadzaMeat),
  lwcUrl(LWC.foodMopaneSadza),
  lwcUrl(LWC.foodGreensBowl),
  lwcUrl(LWC.foodBreakfastTray),
  lwcUrl(LWC.foodHarvestBasket),
  lwcUrl(LWC.foodPumpkinLeaves),
];

const heroBackgroundStyle = {
  backgroundImage: lwcUrl(LWC.outdoorGroupSign),
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

const bestsellerImageStyle = {
  backgroundImage: lwcUrl(LWC.foodSadzaMeat),
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center font-sans text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-[#cb5c22]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative isolate bg-[#f7f0e8] text-[#2f241d]">
      <SiteHeader homeHref="#home" variant="home" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0" style={heroBackgroundStyle} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,13,8,0.4)_0%,rgba(23,13,8,0.48)_24%,rgba(23,13,8,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(231,168,82,0.18),transparent_24%),radial-gradient(circle_at_58%_38%,rgba(111,173,104,0.16),transparent_28%),radial-gradient(circle_at_center,transparent_0%,transparent_38%,rgba(12,7,4,0.32)_72%,rgba(12,7,4,0.68)_100%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-10">
          <div
            id="home"
            className="mx-auto flex flex-1 items-center justify-center px-4 pb-20 pt-36 text-center sm:px-8 sm:pt-40 lg:px-12"
          >
            <div className="max-w-4xl text-white">
              <span className="inline-flex rounded-full border border-white/35 bg-white/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur">
                Discover the taste of heritage
              </span>
              <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
                Experience the Soul
                <br />
                of Tradition
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                Journey through the rich flavors of Tonga, Ndebele, and Shona
                culinary arts. Authentic Pala, prepared with ancestral wisdom
                and modern passion.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#e15d1f] px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(225,93,31,0.32)] transition hover:bg-[#c74b11]"
                >
                  Share Our Table
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-white/45 bg-white/12 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
                >
                  Explore Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-0 mx-auto max-w-6xl px-6 py-24 text-center sm:px-8 lg:px-12"
      >
        <SectionLabel>Our Cultural Vision</SectionLabel>
        <blockquote className="mx-auto mt-8 max-w-4xl font-[family-name:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[#241711] sm:text-5xl lg:text-6xl">
          &quot;Food is the most intimate way to share a history. Through
          Lusumpuko Women&apos;s Club, we are not just serving meals, we are preserving the
          echoes of our ancestors for the generations of tomorrow.&quot;
        </blockquote>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f7d7bc,transparent_26%),linear-gradient(135deg,#6f3f2d,#d59b63)] text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.12)]">
            GS
          </div>
          <p className="mt-4 text-sm font-semibold text-[#2f241d]">
            Grace Sibanda
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#8d7a6d]">
            Visionary &amp; Master Chef
          </p>
        </div>
      </section>

      <section id="menu" className="relative z-0 bg-[#fffaf5] py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#251711] sm:text-4xl">
                Chef&apos;s Signature Selection
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-[#736356]">
                The most celebrated dish this season, hand-picked for you and
                presented with the warmth of home.
              </p>
            </div>
            <a
              href="#discover"
              className="text-sm font-semibold text-[#d75a1f] transition hover:text-[#a94215]"
            >
              See all menu items →
            </a>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#efe1d3] bg-white shadow-[0_24px_60px_rgba(78,46,18,0.08)] lg:grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[320px]" style={bestsellerImageStyle}>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,14,7,0.08)_0%,rgba(24,14,7,0.22)_100%)]" />
              <span className="absolute left-5 top-5 rounded-full bg-[#ff7e45] px-3 py-1 text-xs font-semibold text-white shadow">
                Bestseller
              </span>
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#241812]">
                    Traditional Ndebele
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#a38c7c]">
                    Slow-cooked Pala
                  </p>
                </div>
                <p className="font-[family-name:var(--font-display)] text-3xl text-[#d75a1f]">
                  $12.00
                </p>
              </div>

              <p className="mt-6 text-sm leading-8 text-[#6e5f53]">
                Slow-cooked with heritage grains, sun-dried herbs, and tender
                protein, our Ndebele-style Pala is a testament to resilience
                and flavor. Served with a side of seasonal greens and our
                signature hot chili reduction.
              </p>

              <div className="mt-6 grid gap-4 border-y border-[#f0e6dc] py-5 text-sm text-[#4f4036] sm:grid-cols-2">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ab9382]">
                    Preparation
                  </p>
                  <p className="mt-2 font-medium">8 Hours Slow Cooked</p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ab9382]">
                    Origin
                  </p>
                  <p className="mt-2 font-medium">Matabeleland South</p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#d75a1f] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(215,90,31,0.18)] transition hover:bg-[#bf4a13] sm:w-auto"
              >
                Contact Us About This Dish
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="table"
        className="relative z-0 overflow-hidden border-y border-[#eadbcf] bg-[linear-gradient(180deg,#2a1810_0%,#1a100c_55%,#140c09_100%)] py-20 text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,90,31,0.18),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(224,160,74,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="mx-auto w-full max-w-[320px]">
            <div
              className="rounded-[1.75rem] p-[3px] shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,#1a120c 0 7px,#c94b26 7px 14px,#e0a04a 14px 21px,#fff6ec 21px 28px,#3f6b45 28px 35px,#7f4d33 35px 42px)",
              }}
            >
              <div className="overflow-hidden rounded-[calc(1.75rem-3px)] bg-black">
                <video
                  className="aspect-[9/16] h-auto w-full object-cover"
                  poster={LWC.tableExperiencePoster}
                  src={LWC.tableExperienceVideo}
                  controls
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="max-w-xl lg:pl-4">
            <p className="inline-flex rounded-full border border-white/25 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f0c9a8]">
              At our table
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl">
              Guests gather.
              <br />
              <span className="text-[#e8a15a]">Tradition is served.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78">
              Step into an evening with Lusumpuko Women&apos;s Club — warm light,
              shared plates, and the welcome of a real communal table in Victoria
              Falls.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-white/72">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d75a1f]" />
                Traditional dishes served with care and celebration
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a04a]" />
                A setting made for gathering, not rushing
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6fad68]" />
                Come share our table — we would love to host you
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#d75a1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bf4a13]"
              >
                Share Our Table
              </Link>
              <Link
                href="/menu"
                className="rounded-full border border-white/30 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
              >
                Browse the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="relative z-0 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711] sm:text-5xl">
              Discover More
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#76685c]">
              Dive deeper into our world, from the history of our ingredients to
              the techniques used in our kitchens.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {discoverCards.map((card) => (
              <article
                key={card.title}
                className={`group relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${card.palette} p-5 text-white shadow-[0_20px_50px_rgba(51,27,9,0.16)]`}
                style={{
                  backgroundImage: `${card.image}, linear-gradient(135deg, rgba(21,14,10,0.08), rgba(21,14,10,0.42))`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(to_top,rgba(10,7,6,0.78),rgba(10,7,6,0.1))]" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-[family-name:var(--font-display)] text-2xl">
                    {card.title}
                  </p>
                  <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/82">
                    {card.subtitle}
                  </p>
                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg transition group-hover:translate-x-1">
                    ↗
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-0 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711] sm:text-5xl">
                Stories from Our Community
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#76685c]">
                Taste is subjective, but tradition is universal. See why
                thousands choose Lusumpuko Pala for their cultural celebrations.
              </p>
            </div>
            <a
              href="#footer"
              className="rounded-full border border-[#efb293] px-5 py-2 text-sm font-semibold text-[#d75a1f] transition hover:bg-[#fff2ea]"
            >
              Read long-form stories
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="rounded-[1.6rem] border border-[#efe2d7] bg-white p-7 shadow-[0_16px_40px_rgba(65,34,13,0.06)]"
              >
                <p className="text-lg tracking-[0.25em] text-[#d75a1f]">★★★★★</p>
                <p className="mt-5 text-sm leading-8 text-[#5b4b3f]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f1c39c,#7f4d33)] text-sm font-semibold text-white">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2b1d17]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9b8676]">
                      {testimonial.city}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-0 border-y border-[#eadbcf] bg-[#fffaf5] py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#efc2aa] text-[#d75a1f]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.9"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#261813]">
                On the Gram
              </h2>
            </div>
            <a href="#footer" className="text-sm font-semibold text-[#d75a1f]">
              @LusumpukoPala ↗
            </a>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {gramTiles.map((tile, index) => (
              <div
                key={tile}
                className="aspect-square overflow-hidden rounded-[1.2rem] shadow-[0_16px_35px_rgba(48,25,8,0.12)]"
                style={{
                  backgroundImage: `${tile}`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.2),transparent_18%),linear-gradient(to_top,rgba(8,5,4,0.22),rgba(8,5,4,0.02))]" />
                <span className="sr-only">Gallery item {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-0 bg-[#d7541b] py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
              Join the Lusumpuko Family
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Receive exclusive heritage recipes, cultural insights, and early
              access to our seasonal Pala invitations.
            </p>
          </div>

          <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="h-14 flex-1 rounded-full border border-white/20 bg-white/14 px-5 text-sm text-white outline-none placeholder:text-white/65"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-white px-6 text-sm font-semibold text-[#d7541b] transition hover:bg-[#fff0e7]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      <SiteFooter id="footer" showSocialIcons />
    </main>
  );
}
