"use client";

import Image from "next/image";
import Link from "next/link";

const ingredients = [
  "500g Traditional Stone-Ground Flour",
  "250ml Artisan Spring Water (Chilled)",
  "1 tsp Himalayan Pink Salt",
  "2 tbsp Clarified Butter (Ghee)",
  "1 tbsp Lusumpuko Signature Spice Blend",
  "150g Seasonal Roasted Vegetables",
  "100g Shredded Slow-Cooked Beef",
  "1 cup Fresh Herb Garnish",
];

const steps = [
  {
    title: "The Foundation: Mixing the Dough",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    body: "In a large wooden bowl, combine the stone-ground flour and pink salt. Slowly incorporate the chilled water while stirring with your hands. The goal is to reach a firm but pliable consistency.",
  },
  {
    title: "Resting & Aeration",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    body: "Cover the dough with a damp cotton cloth and let it rest in a shaded spot for 30 minutes. This allows the gluten to relax, making it easier to achieve the signature thin layers.",
  },
  {
    title: "The Traditional Fold",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20plate%20of%20sadza.jpg",
    body: "Dust your surface with extra flour. Roll the dough into thin, translucent circles. Brush with clarified butter and sprinkle the signature spice blend.",
  },
  {
    title: "Stone-Fired Searing",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=80",
    body: "Heat a heavy cast-iron skillet or traditional clay stone over medium-high heat. Sear the folded Pala for 3 to 4 minutes on each side until golden bubbles appear.",
  },
  {
    title: "The Community Serving",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
    body: "Slice into triangles and serve while steaming hot. Accompany with seasonal roasted vegetables or slow-cooked meat. It’s best enjoyed shared among family.",
  },
];

const pairings = [
  {
    title: "Spiced Tomato Relish",
    tag: "Side Dish",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hibiscus Valley Tea",
    tag: "Drinks",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Slow-Roasted Lamb",
    tag: "Traditional",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function RecipePage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <header className="fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.72),rgba(255,244,236,0.34))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src="/planeterra.png" alt="Planeterra logo" width={220} height={76} priority className="h-11 w-auto object-contain md:h-12" />
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
            <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Home</Link>
            <Link href="/about" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">About</Link>
            <Link href="/menu" className="rounded-full bg-[#d75a1f] px-4 py-2 text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] transition hover:bg-[#c64d14]">Menu</Link>
            <Link href="/roots" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Roots</Link>
            <Link href="/stories" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Explore</Link>
          </nav>
          <div className="text-right sm:hidden">
            <p className="font-[family-name:var(--font-display)] text-sm leading-tight text-[#c74f19]">
              Lusumpuko Woman&apos;s Club
            </p>
          </div>
          <a href="/contact" className="hidden rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813] md:inline-flex">Order Online</a>
        </div>
      </header>

      <section
        className="relative min-h-[420px] overflow-hidden pt-36"
        style={{
          backgroundImage:
            "linear-gradient(rgba(25,17,12,0.42),rgba(25,17,12,0.48)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 text-white sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="rounded-full bg-[#d75a1f] px-3 py-1">Traditional Favorite</span>
            <span className="rounded-full bg-white/12 px-3 py-1">Ndebele Style</span>
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl sm:text-6xl">
            Homemade Classic Pala
          </h1>
          <p className="mt-4 text-sm font-medium text-white/88">
            ★★★★☆ 4.9 (124 reviews)  |  by Chef Lungile
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
        <aside>
          <div className="rounded-[1.6rem] border border-[#eee1d6] bg-white p-6 shadow-[0_18px_42px_rgba(58,30,12,0.06)]">
            <div className="flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">Ingredients</h2>
              <span className="rounded-full bg-[#f8ece3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#cf6028]">4 servings</span>
            </div>
            <div className="mt-6 space-y-3">
              {ingredients.map((ingredient) => (
                <label key={ingredient} className="flex items-start gap-3 text-sm leading-6 text-[#65564c]">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#d6b8a0]" />
                  <span>{ingredient}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-[#eee1d6] bg-white p-6 shadow-[0_18px_42px_rgba(58,30,12,0.06)]">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#241711]">Required Tools</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {["Rolling Pin", "Cast Iron Skillet", "Wooden Bowl", "Linen Cloth"].map((tool) => (
                <div key={tool} className="rounded-full border border-[#ead8ca] px-4 py-3 text-sm font-medium text-[#5e5046]">
                  {tool}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.2rem] bg-[#fff3ea] p-4">
              <p className="font-semibold text-[#d75a1f]">Nutritional Info</p>
              <div className="mt-3 space-y-2 text-sm text-[#5f4f45]">
                <div className="flex justify-between"><span>Calories</span><span>320 kcal</span></div>
                <div className="flex justify-between"><span>Protein</span><span>12g</span></div>
                <div className="flex justify-between"><span>Fiber</span><span>8g</span></div>
              </div>
            </div>
          </div>
        </aside>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Mastering the Pala</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#6f6056]">
            Authentic Pala is more than just a recipe; it&apos;s a meditative
            practice that has been passed down through generations. Follow these
            steps carefully to achieve the perfect balance of soft interior and
            crispy, golden exterior.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Prep Time", "20 Minutes"],
              ["Cook Time", "45 Minutes"],
              ["Servings", "4 People"],
              ["Difficulty", "Intermediate"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1rem] border border-[#eee1d6] bg-white px-4 py-4 text-sm shadow-[0_10px_25px_rgba(50,27,10,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a08c7d]">{label}</p>
                <p className="mt-2 font-semibold text-[#241711]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <article key={step.title} className="grid overflow-hidden rounded-[1.5rem] border border-[#eee1d6] bg-white shadow-[0_14px_34px_rgba(51,26,10,0.05)] md:grid-cols-[240px_1fr]">
                <div
                  className="relative min-h-[170px]"
                  style={{
                    backgroundImage: `url('${step.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#d75a1f] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[#6d5f54]">{step.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#f0d7c7] bg-[#fff5ee] px-6 py-5">
            <p className="font-semibold text-[#d75a1f]">Secrets for the Perfect Crust</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#6c5d52]">
              <li>Always use chilled water to ensure the dough remains flaky and light.</li>
              <li>Let the dough rest in a cool place for at least 30 minutes before folding.</li>
              <li>Apply a thin layer of clarified butter between layers for that authentic Ndebele crunch.</li>
            </ul>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">Watch the Walkthrough</h3>
                <p className="mt-2 text-sm text-[#78675c]">
                  See the traditional folding technique in action with Chef Lungile.
                </p>
              </div>
              <a href="/menu" className="rounded-full border border-[#ead8ca] px-5 py-2 text-sm font-semibold text-[#4f4138]">
                Full Video Library →
              </a>
            </div>
            <div
              className="mt-5 h-[320px] overflow-hidden rounded-[1.6rem] shadow-[0_18px_46px_rgba(46,24,11,0.12)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20,12,8,0.14),rgba(20,12,8,0.14)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-display)] text-4xl text-[#241711]">
          Perfect Pairings for your Pala
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pairings.map((pairing) => (
            <article key={pairing.title} className="overflow-hidden rounded-[1.35rem] border border-[#eee1d6] bg-white shadow-[0_16px_36px_rgba(55,29,12,0.06)]">
              <div
                className="relative h-56"
                style={{
                  backgroundImage: `url('${pairing.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#241711]">
                  {pairing.tag}
                </span>
              </div>
              <div className="px-5 py-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#241711]">{pairing.title}</h3>
                <a href="/menu" className="mt-3 inline-block text-sm font-semibold text-[#5f5146]">
                  Explore in Menu →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
