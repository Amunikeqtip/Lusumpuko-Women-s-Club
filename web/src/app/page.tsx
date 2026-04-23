"use client";

import Image from "next/image";

const discoverCards = [
  {
    title: "Full Menu",
    subtitle: "Explore our rich seasonal selection",
    palette: "from-[#51412d] via-[#7a5c38] to-[#201814]",
  },
  {
    title: "Cultural Roots",
    subtitle: "The stories, rituals, and ingredients behind every dish",
    palette: "from-[#223825] via-[#708969] to-[#101c12]",
  },
  {
    title: "Authentic Recipes",
    subtitle: "Traditional methods from Tonga, Ndebele, and Shona kitchens",
    palette: "from-[#3b3127] via-[#82684a] to-[#1b1511]",
  },
  {
    title: "Visual Gallery",
    subtitle: "A warm look into our table, plating, and celebrations",
    palette: "from-[#62411d] via-[#b17d35] to-[#1f1208]",
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
      "Ordering online was seamless, and the meal arrived beautifully presented. Truly memorable food.",
    name: "Themba Z.",
    city: "Cape Town",
  },
];

const gramTiles = [
  "from-[#3d2d1d] via-[#795431] to-[#17110c]",
  "from-[#37562b] via-[#9ac15e] to-[#152214]",
  "from-[#783b20] via-[#dc8d48] to-[#25140d]",
  "from-[#5a2f22] via-[#a35a3c] to-[#1d100a]",
  "from-[#825322] via-[#db9f46] to-[#25150a]",
  "from-[#81464d] via-[#efb5c5] to-[#291219]",
];

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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(231,168,82,0.78),transparent_20%),radial-gradient(circle_at_58%_38%,rgba(111,173,104,0.88),transparent_28%),radial-gradient(circle_at_44%_40%,rgba(134,34,38,0.58),transparent_16%),radial-gradient(circle_at_62%_58%,rgba(110,51,143,0.38),transparent_12%),radial-gradient(circle_at_36%_53%,rgba(198,230,164,0.8),transparent_16%),radial-gradient(circle_at_54%_48%,rgba(250,244,233,0.55),transparent_21%),linear-gradient(rgba(31,21,12,0.5),rgba(31,21,12,0.6)),repeating-linear-gradient(90deg,#6a5646_0px,#6a5646_3px,#5d4939_3px,#5d4939_12px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_32%,rgba(12,7,4,0.42)_72%,rgba(12,7,4,0.78)_100%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-10">
          <header className="fixed left-1/2 top-4 z-[120] isolate w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/55 bg-[#fffaf4]/95 px-4 py-3 shadow-[0_16px_50px_rgba(53,32,14,0.12)] backdrop-blur md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <Image
                  src="/planeterra.png"
                  alt="Planeterra logo"
                  width={220}
                  height={76}
                  priority
                  className="h-11 w-auto object-contain md:h-12"
                />
              </div>

              <nav className="hidden items-center gap-6 text-sm text-[#6b5a4a] lg:flex">
                <a href="#home" className="text-[#d05a1e]">
                  Home
                </a>
                <a href="#about" className="transition hover:text-[#d05a1e]">
                  About
                </a>
                <a href="#menu" className="transition hover:text-[#d05a1e]">
                  Menu
                </a>
                <a href="#roots" className="transition hover:text-[#d05a1e]">
                  Roots
                </a>
                <a href="#explore" className="transition hover:text-[#d05a1e]">
                  Explore
                </a>
              </nav>

              <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
                <div className="hidden min-w-[220px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white px-4 py-2 text-sm text-[#8b7c6f] md:flex">
                  <span className="text-base text-[#d05a1e]">⌕</span>
                  <span>Search dishes...</span>
                </div>
                <a
                  href="#order"
                  className="rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813]"
                >
                  Order Online
                </a>
              </div>
            </div>
          </header>

          <div
            id="home"
            className="mx-auto flex flex-1 items-center justify-center px-4 pb-20 pt-36 text-center sm:px-8 sm:pt-40 lg:px-12"
          >
            <div className="max-w-4xl text-white">
              <span className="inline-flex rounded-full border border-white/35 bg-white/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur">
                Discover the taste of heritage
              </span>
              <h1 className="mt-8 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
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
                  href="#order"
                  className="rounded-full bg-[#e15d1f] px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(225,93,31,0.32)] transition hover:bg-[#c74b11]"
                >
                  Order Online Now
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
        className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-8 lg:px-12"
      >
        <SectionLabel>Our Cultural Vision</SectionLabel>
        <blockquote className="mx-auto mt-8 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.03em] text-[#241711] sm:text-5xl lg:text-6xl">
          &quot;Food is the most intimate way to share a history. Through
          Lusumpuko Pala, we are not just serving meals, we are preserving the
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

      <section id="menu" className="bg-[#fffaf5] py-20">
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
            <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_50%_52%,rgba(235,114,53,0.95),rgba(190,88,36,0.88)_22%,rgba(221,226,218,0.92)_23%,rgba(231,236,230,0.96)_34%,rgba(191,208,189,0.82)_43%,rgba(228,229,223,0.95)_52%,rgba(240,245,241,1)_100%),radial-gradient(circle_at_12%_18%,rgba(245,161,136,0.88),transparent_9%),radial-gradient(circle_at_82%_80%,rgba(186,226,182,0.95),transparent_14%),linear-gradient(135deg,#f4f1eb,#e7e4de)]">
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
                id="order"
                href="#footer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#d75a1f] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(215,90,31,0.18)] transition hover:bg-[#bf4a13] sm:w-auto"
              >
                Order This Dish
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="py-20">
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
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.24),transparent_24%),linear-gradient(to_top,rgba(10,7,6,0.72),rgba(10,7,6,0.05))]" />
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

      <section className="py-20">
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

      <section className="border-y border-[#eadbcf] bg-[#fffaf5] py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#d75a1f]">◌</span>
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
                className={`aspect-square overflow-hidden rounded-[1.2rem] bg-gradient-to-br ${tile} shadow-[0_16px_35px_rgba(48,25,8,0.12)]`}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.28),transparent_18%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(to_top,rgba(8,5,4,0.2),rgba(8,5,4,0.02))]" />
                <span className="sr-only">Gallery item {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d7541b] py-16 text-white">
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

      <footer id="footer" className="bg-[#fffaf5] py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[#d75a1f]">◇</span>
                <p className="font-[family-name:var(--font-display)] text-2xl text-[#271913]">
                  Lusumpuko Pala
                </p>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#6e5f53]">
                Preserving the legacy of traditional Pala through authentic
                flavors and cultural storytelling.
              </p>
              <div className="mt-6 flex max-w-sm gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 flex-1 rounded-full border border-[#eadbce] bg-white px-4 text-sm outline-none placeholder:text-[#9c8778]"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#d75a1f] px-5 text-sm font-semibold text-white"
                >
                  Join
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
                The Experience
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#54463b]">
                <li>About Our Story</li>
                <li>Cultural Traditions</li>
                <li>Full Menu</li>
                <li>Home Recipes</li>
                <li>Visual Gallery</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
                Community
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#54463b]">
                <li>Customer Testimonials</li>
                <li>Loyal Member Salon</li>
                <li>Ordering Support</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
                Get In Touch
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#54463b]">
                <li>123 Heritage Lane, Lusumpuko Valley</li>
                <li>+1 555 PALA DELIGHT</li>
                <li>Mon-Sun: 10am - 9pm</li>
              </ul>
              <div className="mt-6 flex gap-4 text-[#d75a1f]">
                <span>◎</span>
                <span>◐</span>
                <span>◌</span>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd5] pt-6 text-xs uppercase tracking-[0.18em] text-[#9f8b7c]">
            <p>© 2026 Lusumpuko Pala. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#footer">Privacy Policy</a>
              <a href="#footer">Terms of Service</a>
              <a href="#footer">Rewards</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
