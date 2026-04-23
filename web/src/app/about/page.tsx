"use client";

import Image from "next/image";

const timelineItems = [
  {
    year: "1800s",
    title: "Traditional Roots",
    body: "The early Tonga tribes refined the cold-pour method of Pala preparation using river-stone mortars.",
    side: "right",
  },
  {
    year: "1950s",
    title: "Regional Spreads",
    body: "Ndebele and Shona influences merge, introducing varied fermentation times and aromatic wild herb pairings.",
    side: "left",
  },
  {
    year: "1990s",
    title: "Modern Palas",
    body: "Innovation meets tradition as Pala enters city markets, becoming a symbol of heritage in a rapidly changing world.",
    side: "right",
  },
  {
    year: "2024",
    title: "Lusumpuko Founding",
    body: "We open our doors to share this timeless culinary art with a global audience, preserving every authentic detail.",
    side: "left",
  },
];

const regions = [
  {
    title: "Tonga North",
    description:
      "Characterized by its intense smokiness and use of sun-dried baobab fruit for a distinct tanginess.",
    link: "Explore Tonga Flavors",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
  },
  {
    title: "Ndebele Central",
    description:
      "A smoother, silkier texture achieved through secondary milling. This variation is celebrated for its nutty undertones and potent pairings.",
    link: "See Ndebele Traditions",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg",
  },
  {
    title: "Shona South",
    description:
      "Famed for Ziyo'y Minger millet blends, resulting in a rich chocolate-brown hue and robust earth notes that stand up to spicy stews.",
    link: "Discover Shona Heritage",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg",
  },
];

const values = [
  {
    title: "Social Unity",
    body: "In our culture, Pala is never eaten alone. It is served in large clay bowls to encourage communal sharing and conversation.",
  },
  {
    title: "Sacred Ritual",
    body: "The preparation of the base grain involves a 48-hour fermentation cycle that aligns with the lunar calendar for optimal flavour.",
  },
  {
    title: "Gastronomy",
    body: "Pala serves as the blank canvas for the rich, spicy stews and vibrant greens of our regional cuisines.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <header className="fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.72),rgba(255,244,236,0.34))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/planeterra.png"
              alt="Planeterra logo"
              width={220}
              height={76}
              priority
              className="h-11 w-auto object-contain md:h-12"
            />
            <div className="hidden h-10 w-px bg-[#ead9ca] sm:block" />
            <div className="hidden sm:block">
              <p className="font-[family-name:var(--font-display)] text-lg leading-none text-[#c74f19] md:text-xl">
                Lusumpuko Women&apos;s Club
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#8d7869]">
                Heritage Dining Experience
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/18 p-1.5 text-[0.9rem] font-medium text-[#58473d] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] lg:flex">
            <a
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              Home
            </a>
            <a
              href="/about"
              className="rounded-full bg-[#d75a1f] px-4 py-2 text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] transition hover:bg-[#c64d14]"
            >
              About
            </a>
            <a
              href="/#menu"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              Menu
            </a>
            <a
              href="/roots"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              Roots
            </a>
            <a
              href="/#footer"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              Explore
            </a>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
            <div className="hidden min-w-[240px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white/82 px-4 py-2 text-sm text-[#8b7c6f] md:flex">
              <span className="text-base text-[#d05a1e]">⌕</span>
              <span>Search dishes...</span>
            </div>
            <a
              href="/#order"
              className="rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813]"
            >
              Order Online
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-[#f8dfd5]" />
            <div
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#f1dfd3] bg-white shadow-[0_28px_65px_rgba(63,34,16,0.1)]"
              style={{
                backgroundImage:
                  "url('https://planeterra.org/wp-content/uploads/2020/07/26.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(23,15,10,0.12))]" />
              <div className="absolute bottom-5 right-5 max-w-[240px] rounded-[1.2rem] bg-[#fffaf4] px-4 py-4 text-sm text-[#5e5046] shadow-[0_16px_30px_rgba(45,25,12,0.14)]">
                <p className="italic leading-6">
                  “The north is the bearer of bold flavor, where the first grain
                  of Pala is always shared with the ancestors.”
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#cb5c22]">
                  Cogo Thandiwe
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="inline-flex rounded-full border border-[#f1d1c2] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
              Our Origins
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
              The Grain of a Thousand Stories
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6e6055]">
              Pala is more than a dish; it is a cultural vessel. Born from the
              fertile soils of the Lusumpuko Valley, this traditional staple has
              been the silent witness to centuries of gatherings, celebrations,
              and resilience.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.25rem] border border-[#f0dfd3] bg-white px-5 py-4 shadow-[0_12px_25px_rgba(56,29,12,0.05)]">
                <p className="font-semibold text-[#241711]">Ancient Wisdom</p>
                <p className="mt-1 text-sm leading-7 text-[#73645a]">
                  Passed down through oral traditions, our Pala recipe remains
                  unchanged after four generations.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[#f0dfd3] bg-white px-5 py-4 shadow-[0_12px_25px_rgba(56,29,12,0.05)]">
                <p className="font-semibold text-[#241711]">Community Forged</p>
                <p className="mt-1 text-sm leading-7 text-[#73645a]">
                  Every harvest season, the village gathers to grind the grain
                  collectively, a tradition we honor today.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#menu"
                className="rounded-full bg-[#d75a1f] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(215,90,31,0.24)] transition hover:bg-[#bf4a13]"
              >
                Explore the Menu
              </a>
              <a
                href="#regional"
                className="rounded-full border border-[#ead9ca] bg-white px-6 py-3 text-sm font-semibold text-[#3f2f27] transition hover:bg-[#fff4ec]"
              >
                Cultural Roots
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711] sm:text-5xl">
          A Legacy Through Time
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#7a6a5d]">
          Tracking the evolution of Pala from ancient hearths to modern dining
          tables.
        </p>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-[#db6d36] md:block" />
          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`grid items-center gap-6 md:grid-cols-2 ${
                  item.side === "left" ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`${
                    item.side === "left" ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <article className="rounded-[1.6rem] border border-[#efe1d6] bg-white px-6 py-6 text-left shadow-[0_20px_45px_rgba(54,28,12,0.06)]">
                    <p className="text-sm font-semibold text-[#d75a1f]">
                      {item.year}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[#241711]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#706055]">
                      {item.body}
                    </p>
                  </article>
                </div>
                <div className="relative hidden h-full md:block">
                  <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fbf7f2] bg-[#d75a1f] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.25)]">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <p className="text-6xl leading-none text-[#f0d5c6]">”</p>
          <blockquote className="mx-auto max-w-4xl font-[family-name:var(--font-display)] text-3xl leading-tight tracking-[-0.02em] text-[#241711] sm:text-5xl">
            Pala is the thread that weaves our generations together. It is the
            first meal a child tastes and the last one elders remember with
            longing.
          </blockquote>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="text-left">
                <p className="text-sm font-semibold text-[#d75a1f]">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6f6056]">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="regional" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711] sm:text-5xl">
              Regional Expressions
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#75675c]">
              While the soul of Pala remains constant, each region of the
              Lusumpuko Valley adds its own unique signature to the craft.
            </p>
          </div>
          <a
            href="/roots"
            className="rounded-full border border-[#ead9ca] bg-white px-5 py-2 text-sm font-semibold text-[#3f2f27] transition hover:bg-[#fff4ec]"
          >
            View All Roots
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {regions.map((region) => (
            <article
              key={region.title}
              className="overflow-hidden rounded-[1.6rem] border border-[#efe2d7] bg-white shadow-[0_18px_44px_rgba(55,30,12,0.07)]"
            >
              <div
                className="h-56"
                style={{
                  backgroundImage: `url('${region.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="px-5 py-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#241711]">
                  {region.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f6056]">
                  {region.description}
                </p>
                <a
                  href="/roots"
                  className="mt-4 inline-block text-sm font-semibold text-[#d75a1f]"
                >
                  {region.link} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <article className="rounded-[1.6rem] bg-white px-6 py-6 shadow-[0_18px_44px_rgba(55,30,12,0.06)]">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">
              The Legacy Keepers
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#6d5f54]">
              The team behind Lusumpuko Pala are direct descendants of the
              valley&apos;s most revered culinary masters. We see ourselves as
              stewards of a living history.
            </p>
            <div className="mt-5 flex -space-x-3">
              {["A", "B", "C", "D"].map((person, index) => (
                <div
                  key={person}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white ${
                    ["bg-[#d75a1f]", "bg-[#7f4d33]", "bg-[#c88f5e]", "bg-[#c94b26]"][index]
                  }`}
                >
                  {person}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.6rem] bg-white px-6 py-6 shadow-[0_18px_44px_rgba(55,30,12,0.06)]">
            <p className="text-xl text-[#d75a1f]">◫</p>
            <h3 className="mt-3 font-semibold text-[#241711]">Source of Truth</h3>
            <p className="mt-2 text-sm leading-7 text-[#6d5f54]">
              We source all our grains directly from communities in the
              Lusumpuko region to ensure realism and authenticity.
            </p>
          </article>

          <article className="rounded-[1.6rem] bg-white px-6 py-6 shadow-[0_18px_44px_rgba(55,30,12,0.06)]">
            <p className="text-xl text-[#d75a1f]">⌘</p>
            <h3 className="mt-3 font-semibold text-[#241711]">
              Educational Mission
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#6d5f54]">
              Beyond serving food, we host monthly workshops to teach the
              youth the traditional technique of stone-grinding.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10 bg-[#d7541b] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
            Ready to Taste the History?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/88">
            Experience the authentic flavors of Lusumpuko Pala delivered to
            your door or visit our traditional roots page to learn about the
            people who made this dish a legend.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#order"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#d7541b] transition hover:bg-[#fff0e6]"
            >
              Order Online Now
            </a>
            <a
              href="/roots"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
            >
              Try the Heritage
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#fffaf5] py-16">
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
                <li>About Our History</li>
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
                <li>Lusumpuko Mission</li>
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
                <li>Mon-Sun: 9am - 9pm</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd5] pt-6 text-xs uppercase tracking-[0.18em] text-[#9f8b7c]">
            <p>© 2026 Lusumpuko Pala. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/#footer">Privacy Policy</a>
              <a href="/#footer">Terms of Service</a>
              <a href="/#footer">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
