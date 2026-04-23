"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const discoverCards = [
  {
    title: "Full Menu",
    subtitle: "Explore our rich seasonal selection",
    palette: "from-[#51412d] via-[#7a5c38] to-[#201814]",
    image:
      "url('https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg')",
  },
  {
    title: "Cultural Roots",
    subtitle: "The stories, rituals, and ingredients behind every dish",
    palette: "from-[#223825] via-[#708969] to-[#101c12]",
    image:
      "url('https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg')",
  },
  {
    title: "Authentic Recipes",
    subtitle: "Traditional methods from Tonga, Ndebele, and Shona kitchens",
    palette: "from-[#3b3127] via-[#82684a] to-[#1b1511]",
    image:
      "url('https://commons.wikimedia.org/wiki/Special:FilePath/Sadza%20and%20Sausage.jpg')",
  },
  {
    title: "Visual Gallery",
    subtitle: "A warm look into our table, plating, and celebrations",
    palette: "from-[#62411d] via-[#b17d35] to-[#1f1208]",
    image:
      "url('https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg')",
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

const dishCatalog = [
  {
    name: "Traditional Ndebele Pala",
    description:
      "Slow-cooked heritage grains, tender protein, seasonal greens, and our signature chili reduction.",
    category: "Signature Plate",
    price: "$12.00",
  },
  {
    name: "White Sadza with Braai",
    description:
      "A hearty Zimbabwean staple served with braai and bright garden salads.",
    category: "Main Dish",
    price: "$10.50",
  },
  {
    name: "Stewed Kapenta and Sadza",
    description:
      "A comforting plate of stewed kapenta, tomato gravy, and hand-finished sadza.",
    category: "Traditional Favorite",
    price: "$11.00",
  },
  {
    name: "Sadza and Beans",
    description:
      "Creamy slow-simmered beans paired with soft sadza and house spices.",
    category: "Vegetarian",
    price: "$8.50",
  },
  {
    name: "Peanut Leaf Relish Bowl",
    description:
      "Leafy greens cooked in a rich peanut sauce, finished with warm traditional seasoning.",
    category: "Sides & Bowls",
    price: "$7.50",
  },
  {
    name: "Shona Heritage Feast",
    description:
      "A celebratory selection of sadza, grilled meats, stews, and seasonal vegetables.",
    category: "Family Platter",
    price: "$23.00",
  },
];

const gramTiles = [
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg')",
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg')",
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg')",
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/Stewed%20Capenta%20and%20Sadza%28as%20it%20is%20known%20in%20Zimbabwe%29%20dish.JPG')",
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg')",
  "url('https://commons.wikimedia.org/wiki/Special:FilePath/Sadza%20and%20Beans.jpg')",
];

const heroBackgroundStyle = {
  backgroundImage:
    "url('https://upload.wikimedia.org/wikipedia/commons/b/b5/Traditional_meal.jpg')",
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

const bestsellerImageStyle = {
  backgroundImage:
    "url('https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg')",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = normalizedQuery
    ? dishCatalog.filter((dish) =>
        `${dish.name} ${dish.description} ${dish.category}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : [];

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  return (
    <main className="relative isolate bg-[#f7f0e8] text-[#2f241d]">
      {isSearchOpen ? (
        <div className="fixed inset-0 z-[1200] flex items-start justify-center bg-[rgba(27,17,11,0.55)] px-4 pb-6 pt-28 backdrop-blur-sm sm:px-6">
          <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/35 bg-[#fff8f2] shadow-[0_30px_90px_rgba(33,20,11,0.28)]">
            <div className="flex items-center justify-between border-b border-[#efdfd1] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#af8d79]">
                  Search Results
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[#2a1c15]">
                  {normalizedQuery
                    ? `Results for "${searchQuery.trim()}"`
                    : "Find a dish"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead7c7] text-[#7d6657] transition hover:bg-white"
                aria-label="Close search results"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto px-6 py-6">
              {normalizedQuery ? (
                searchResults.length > 0 ? (
                  <div className="grid gap-4">
                    {searchResults.map((dish) => (
                      <article
                        key={dish.name}
                        className="rounded-[1.5rem] border border-[#efdfd1] bg-white px-5 py-5 shadow-[0_14px_35px_rgba(68,35,12,0.06)]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cc5f28]">
                              {dish.category}
                            </p>
                            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[#241711]">
                              {dish.name}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#66564b]">
                              {dish.description}
                            </p>
                          </div>
                          <p className="font-[family-name:var(--font-display)] text-2xl text-[#d75a1f]">
                            {dish.price}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[1.5rem] border border-dashed border-[#e7d5c6] bg-white/70 px-6 py-10 text-center">
                    <p className="font-[family-name:var(--font-display)] text-3xl text-[#2a1b14]">
                      No dishes found
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#76665a]">
                      Try searching for terms like sadza, pala, beans, braai,
                      or feast.
                    </p>
                  </div>
                )
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-[#e7d5c6] bg-white/70 px-6 py-10 text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[#2a1b14]">
                    Start typing a dish
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#76665a]">
                    Search the menu for traditional plates, sides, and family
                    platters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <header className="fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.62),rgba(255,244,236,0.28))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(255,250,244,0.52),rgba(255,244,236,0.18))] md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
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
              href="#home"
              className="rounded-full bg-[#d75a1f] px-4 py-2 text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] transition hover:bg-[#c64d14]"
            >
              Home
            </a>
            <a
              href="/about"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              About
            </a>
            <a
              href="/menu"
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
              href="/stories"
              className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]"
            >
              Explore
            </a>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsSearchOpen(true);
              }}
              className="hidden min-w-[270px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white/82 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] md:flex"
            >
              <span className="pl-1 text-base text-[#d05a1e]">⌕</span>
              <input
                type="search"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder="Search dishes..."
                className="w-full bg-transparent text-sm text-[#5f5045] outline-none placeholder:text-[#9a887a]"
                aria-label="Search dishes"
              />
              <button
                type="submit"
                className="rounded-full bg-[#f8eee5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#c45a24] transition hover:bg-[#f3e1d2]"
              >
                Find
              </button>
            </form>
            <a
              href="/contact"
              className="rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813]"
            >
              Order Online
            </a>
          </div>
        </div>
      </header>

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
                  href="/contact"
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
        className="relative z-0 mx-auto max-w-6xl px-6 py-24 text-center sm:px-8 lg:px-12"
      >
        <SectionLabel>Our Cultural Vision</SectionLabel>
        <blockquote className="mx-auto mt-8 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.03em] text-[#241711] sm:text-5xl lg:text-6xl">
          &quot;Food is the most intimate way to share a history. Through
          Lusumpuko Women's Club, we are not just serving meals, we are preserving the
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

      <footer id="footer" className="relative z-0 bg-[#fffaf5] py-16">
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
              <div className="mt-6 flex gap-3 text-[#d75a1f]">
                <a
                  href="#footer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#efc2aa] transition hover:bg-[#fff1e8]"
                >
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
                    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="#footer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#efc2aa] transition hover:bg-[#fff1e8]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.5-.1-1.4-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.6v3H10V21h3.5Z" />
                  </svg>
                </a>
                <a
                  href="#footer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#efc2aa] transition hover:bg-[#fff1e8]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M18.9 3H21l-4.6 5.3L22 21h-4.4l-3.4-4.7L10 21H7.8l4.9-5.7L2 3h4.5l3.1 4.3L13.5 3h2.2-1.8Zm-1.5 15.4h1.2L5.2 5.5H3.9l13.5 12.9Z" />
                  </svg>
                </a>
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
