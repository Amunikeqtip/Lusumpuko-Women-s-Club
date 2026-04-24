"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

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
      <SiteHeader />

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
