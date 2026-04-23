"use client";

import Image from "next/image";

const testimonials = [
  ["Chipo Moyo", "Harare, Zimbabwe", "The Pala here tastes exactly like the one my grandmother used to make in the village. It's more than food; it's a trip down memory lane."],
  ["Thabo Ndlovu", "Bulawayo, Zimbabwe", "Lusumpuko Pala captures the true essence of Ndebele culinary heritage. The spice balance is impeccable and the texture is perfect."],
  ["Tendai Sithole", "Harare, Zimbabwe", "I brought my international friends here to show them real Shona culture. They were blown away by the hospitality and the unique Pala variations."],
  ["Sipho Dube", "Victoria Falls", "Every bite tells a story. The Royal Tonga Pala is a masterpiece. I've been coming here for years and the quality never wavers."],
  ["Nomalanga Ncube", "Gweru", "Finally a place that respects the slow-cooking traditions! You can really tell this wasn't rushed. Absolute excellence."],
  ["Jameson Phiri", "Lusaka, Zambia", "Traveling from across the border just for this Pala is worth it every single time. The service is as warm as the food."],
];

const stories = [
  {
    title: "Sundays at the Valley: A Family Tradition",
    author: "Grace Mambo",
    tag: "Community Legacy",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "The Wedding Feast: A Tonga Celebration",
    author: "Samuel Siachone",
    tag: "Ceremony Legacy",
    image:
      "https://planeterra.org/wp-content/uploads/2020/07/26.png",
  },
];

export default function StoriesPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <header className="fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.72),rgba(255,244,236,0.34))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src="/planeterra.png" alt="Planeterra logo" width={220} height={76} priority className="h-11 w-auto object-contain md:h-12" />
            <div className="hidden h-10 w-px bg-[#ead9ca] sm:block" />
            <div className="hidden sm:block">
              <p className="font-[family-name:var(--font-display)] text-lg leading-none text-[#c74f19] md:text-xl">Lusumpuko Women&apos;s Club</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#8d7869]">Heritage Dining Experience</p>
            </div>
          </div>
          <nav className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/18 p-1.5 text-[0.9rem] font-medium text-[#58473d] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] lg:flex">
            <a href="/" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Home</a>
            <a href="/about" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">About</a>
            <a href="/menu" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Menu</a>
            <a href="/roots" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Roots</a>
            <a href="/stories" className="rounded-full bg-[#d75a1f] px-4 py-2 text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] transition hover:bg-[#c64d14]">Explore</a>
          </nav>
          <a href="/contact" className="rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813]">Order Online</a>
        </div>
      </header>

      <section
        className="pt-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,10,7,0.55),rgba(17,10,7,0.55)), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[0.95] sm:text-6xl">Our Legacy, Your<br />Stories</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/88">Discover how Lusumpuko Pala is more than just a meal. It&apos;s a shared heritage passed down through generations.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-5xl">Community Voices</h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d75a1f]">4.9 / 5.0 Rating</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map(([name, location, quote]) => (
            <article key={name} className="rounded-[1.5rem] border border-[#eee1d6] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(52,28,11,0.05)]">
              <p className="text-4xl leading-none text-[#f0d4c5]">”</p>
              <p className="mt-4 text-sm leading-8 text-[#5f5046]">&quot;{quote}&quot;</p>
              <p className="mt-6 text-[#d75a1f]">★★★★★</p>
              <p className="mt-4 font-semibold text-[#241711]">{name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8777]">{location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">Heritage Narratives</h2>
        <div className="mt-12 space-y-20">
          {stories.map((story, index) => (
            <article key={story.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[#eee1d6] bg-white shadow-[0_18px_42px_rgba(53,28,11,0.07)]" style={{ backgroundImage: `url('${story.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div>
                <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[#d75a1f]">{story.tag}</p>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl text-[#241711]">{story.title}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#a18979]">Story by {story.author}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
