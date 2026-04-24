"use client";

import Image from "next/image";
import Link from "next/link";

const traditionalPala = [
  {
    title: "Zambezi River Pala",
    price: "$18.50",
    tag: "Tonga",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg",
    description: "The original Tonga recipe prepared with sun-dried fish and millet grain.",
  },
  {
    title: "Royal Ndebele Platter",
    price: "$22.00",
    tag: "Ndebele",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
    description: "A celebratory Pala dish in beef marrow and slow-cooked greens.",
  },
  {
    title: "Eastern Highlands Pala",
    price: "$16.50",
    tag: "Shona",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20meal.jpg",
    description: "Stone-steamed preparation featuring forest mushrooms and finger millet.",
  },
  {
    title: "Mosi-oa-Tunya Special",
    price: "$19.50",
    tag: "Tonga",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/White%20sadza%2C%20braai%20and%20salads.jpg",
    description: "Named after the mighty falls, with river herbs, zingi, and robust relish.",
  },
  {
    title: "Matobo Heritage Bowl",
    price: "$17.00",
    tag: "Ndebele",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sadza%20and%20Beans.jpg",
    description: "Centuries-old recipe using grain stone in traditional clay granaries.",
  },
  {
    title: "Great Zimbabwe Pala",
    price: "$21.00",
    tag: "Shona",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Stewed%20Capenta%20and%20Sadza%28as%20it%20is%20known%20in%20Zimbabwe%29%20dish.JPG",
    description: "Bold and enduring flavor profile with cured meats and firm texture.",
  },
];

const chefsVariations = [
  {
    title: "Spiced Fusion Pala",
    price: "$24.00",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    description: "A modern interpretation where Cape Malay spices and aromatic basil blend.",
  },
  {
    title: "Seafood Symphony Pala",
    price: "$29.50",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    description: "Luxury variation with grilled prawns and calamari in a light Pala base.",
  },
  {
    title: "Vegetarian Oasis",
    price: "$16.00",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    description: "Garden-fresh variation with roasted butternut and toasted pumpkin seeds.",
  },
  {
    title: "Smoky Highland Venison",
    price: "$26.00",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    description: "Game-meat variation using traditional smoking techniques with oak wood.",
  },
  {
    title: "Chili-Ginger Kick",
    price: "$19.00",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    description: "A bold, contemporary version for those who enjoy heat and zest.",
  },
  {
    title: "Nutty Protein Power",
    price: "$20.00",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    description: "High-energy version with crushed nuts and high-protein local pulses.",
  },
];

const sidesAndDrinks = [
  {
    group: "Side Dishes",
    items: [
      {
        title: "Crispy Okra Fries",
        price: "$6.50",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Sweet Potato Mash",
        price: "$5.50",
        image:
          "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Traditional Relish",
        price: "$4.00",
        image:
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Grilled Maize Cob",
        price: "$4.50",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    group: "House Drinks",
    items: [
      {
        title: "Baobab Breeze",
        price: "$5.00",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Mazoe Gold Cooler",
        price: "$4.50",
        image:
          "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Rooibos Iced Tea",
        price: "$5.50",
        image:
          "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

function MenuCard({
  title,
  price,
  image,
  description,
  tag,
}: {
  title: string;
  price: string;
  image: string;
  description: string;
  tag?: string;
}) {
  return (
    <article className="overflow-hidden rounded-[1.35rem] border border-[#eee1d6] bg-white shadow-[0_18px_40px_rgba(59,31,12,0.06)]">
      <div
        className="relative h-48"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d75a1f]">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#241711]">
            {title}
          </h3>
          <p className="text-lg font-semibold text-[#d75a1f]">{price}</p>
        </div>
        <p className="mt-3 text-sm leading-7 text-[#6f6056]">{description}</p>
        <div className="mt-5 flex items-center justify-between text-sm">
          <a href="/recipes/homemade-classic-pala" className="font-semibold text-[#241711]">
            View Details →
          </a>
          <a
            href="/recipes/homemade-classic-pala"
            className="rounded-full border border-[#ead8ca] px-3 py-1.5 font-semibold text-[#6a594d] transition hover:bg-[#fff4eb]"
          >
            + Order
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <header className="fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.72),rgba(255,244,236,0.34))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl max-sm:top-3 max-sm:w-[calc(100%-1rem)] max-sm:rounded-[1.6rem] max-sm:border-[#f1c2a2] max-sm:bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(255,231,216,0.92))] max-sm:px-3 max-sm:py-2.5 max-sm:shadow-[0_20px_55px_rgba(75,32,12,0.16)] md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Image src="/planeterra.png" alt="Planeterra logo" width={220} height={76} priority className="h-9 w-auto object-contain sm:h-11 md:h-12" />
            <div className="h-9 w-px bg-[#ead9ca] sm:h-10" />
            <div>
              <p className="font-[family-name:var(--font-display)] text-[0.95rem] leading-none text-[#c74f19] sm:text-lg md:text-xl">
                Lusumpuko Women&apos;s Club
              </p>
              <p className="mt-1 text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#8d7869] sm:text-[0.65rem] sm:tracking-[0.3em]">
                Heritage Dining Experience
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/18 p-1.5 text-[0.9rem] font-medium text-[#58473d] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] lg:flex">
            <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Home</Link>
            <Link href="/about" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">About</Link>
            <Link href="/menu" className="rounded-full bg-[#d75a1f] px-4 py-2 text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] transition hover:bg-[#c64d14]">Menu</Link>
            <Link href="/roots" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Roots</Link>
            <Link href="/stories" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Explore</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
            <div className="hidden min-w-[240px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white/82 px-4 py-2 text-sm text-[#8b7c6f] md:flex">
              <span className="text-base text-[#d05a1e]">⌕</span>
              <span>Search dishes...</span>
            </div>
            <a href="/contact" className="hidden rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813] md:inline-flex">Order Online</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#efe0d5] bg-[linear-gradient(135deg,#fff6f0,#fffdfb)] px-8 py-14 shadow-[0_18px_45px_rgba(60,31,12,0.05)]">
          <div className="absolute right-0 top-0 h-full w-[28rem] bg-[radial-gradient(circle_at_center,rgba(218,108,52,0.08),transparent_45%)]" />
          <p className="inline-flex rounded-full border border-[#f0d3c4] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            Our Culinary Catalog
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
            Discover the <span className="text-[#d75a1f]">Art</span> of Pala
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#716158]">
            From the riverbanks of the Zambezi to the highlands of the Eastern
            Highlands, explore a menu rooted in centuries of heritage and refined
            for modern tastes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] border border-[#eee2d8] bg-white px-5 py-4 shadow-[0_14px_35px_rgba(51,27,9,0.04)]">
          <div className="flex flex-wrap gap-3 text-sm">
            {["All", "Traditional", "Variations", "Sides", "Drinks"].map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full px-4 py-2 font-semibold ${
                  index === 0
                    ? "bg-[#d75a1f] text-white"
                    : "border border-[#ead9ca] bg-[#fffaf4] text-[#6b5a4d]"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
          <div className="flex min-w-[260px] items-center gap-2 rounded-full border border-[#ead9ca] bg-[#fffaf4] px-4 py-2 text-sm text-[#958377]">
            <span>⌕</span>
            <span>Search flavors...</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Traditional Pala</h2>
            <p className="mt-2 text-sm text-[#7b6a5d]">Ancient recipes preserved in their purest form.</p>
          </div>
          <span className="rounded-full border border-[#ead9ca] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7e6c60]">
            6 items
          </span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {traditionalPala.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Chef&apos;s Variations</h2>
            <p className="mt-2 text-sm text-[#7b6a5d]">Contemporary interpretations and seasonal fusion.</p>
          </div>
          <span className="rounded-full border border-[#ead9ca] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7e6c60]">
            6 items
          </span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {chefsVariations.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {sidesAndDrinks.map((group) => (
            <div key={group.group}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">{group.group}</h2>
                <p className="text-sm text-[#7b6a5d]">
                  {group.group === "Side Dishes" ? "Perfect pairings" : "Refreshing botanical blends"}
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {group.items.map((item) => (
                  <MenuCard
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description="Explore in menu with regional notes, serving tips, and pairing recommendations."
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Dietary Guidelines</h2>
          <p className="mt-4 text-sm leading-7 text-[#746559]">
            We take pride in our traditional preparation methods. If you have
            specific allergens or dietary requirements, please consult our team
            or check the detailed ingredient lists.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Gluten Free Options", "Nut Allergy Warning", "Vegan Selection", "Spicy Heat Map"].map((item) => (
              <div key={item} className="rounded-[1rem] border border-[#eee2d7] bg-white px-4 py-4 text-sm font-medium text-[#51453c]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Frequently Asked</h2>
          <div className="mt-6 space-y-4">
            {[
              "What is the 'Pala' base made of?",
              "Can I customize my spice level?",
              "Do you offer large group catering?",
            ].map((question) => (
              <div key={question} className="rounded-[1rem] border border-[#eee2d7] bg-white px-5 py-4">
                <p className="font-semibold text-[#241711]">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d7541b] py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:px-8 lg:flex-row lg:px-12">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl">Printable Culinary Guide</p>
            <p className="mt-2 text-sm text-white/86">
              Download our full menu with cultural history and nutritional facts.
            </p>
          </div>
          <a href="/menu" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#d7541b]">
            Download PDF Menu
          </a>
        </div>
      </section>
    </main>
  );
}
