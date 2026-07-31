"use client";

import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const impactStories = [
  {
    title: "Meals shared across the valley",
    summary:
      "Each season, the women of Lusumpuko prepare and deliver nourishing meals to families facing hard months — carrying the same care they bring to the Pala table into homes that need it most.",
    place: "Victoria Falls & surrounds",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Kitchen skills for the next generation",
    summary:
      "Through hands-on gatherings, club members teach young women traditional cooking methods, food hygiene, and how to turn heritage recipes into livelihood — so culture and income grow together.",
    place: "Community kitchens",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Support when celebration meets need",
    summary:
      "From school feeding days to quiet gifts of grain and oil, Lusumpuko Women’s Club answers local requests with dignity — never as charity theatre, always as neighbours standing with neighbours.",
    place: "Local partnerships",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
  },
];

const gallery = [
  {
    title: "Morning prep for community meals",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Women gathering to pack food parcels",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Teaching days in the shared kitchen",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Delivering warmth to nearby homes",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Harvest shared from local gardens",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Community celebration after service",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ImpactPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />
      <section
        className="relative min-h-[88vh] overflow-hidden pt-28"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(20,12,8,0.72) 8%, rgba(20,12,8,0.38) 55%, rgba(20,12,8,0.2) 100%), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[calc(88vh-7rem)] max-w-6xl flex-col justify-end px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <p className="impact-fade-up font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
            Lusumpuko Women&apos;s Club
          </p>
          <h1 className="impact-fade-up impact-delay-1 mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl">
            The giving we carry into the community
          </h1>
          <p className="impact-fade-up impact-delay-2 mt-6 max-w-xl text-base leading-8 text-white/88">
            Stories and photographs of the meals, skills, and care Lusumpuko women
            share with families and neighbours beyond our dining table.
          </p>
          <div className="impact-fade-up impact-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#stories"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#d75a1f] px-6 text-sm font-semibold text-white transition hover:bg-[#bc4813]"
            >
              Read the work
            </a>
            <Link
              href="/donate"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/55 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
            >
              Support this work
            </Link>
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
          Community reads
        </p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight text-[#241711] sm:text-5xl">
          How Lusumpuko women give back
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#706055]">
          These are the efforts our members lead for others — not fundraising
          appeals, but a record of presence, food, and dignity in the places we call home.
        </p>

        <div className="mt-16 space-y-24">
          {impactStories.map((story, index) => (
            <article
              key={story.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#efe4d8] shadow-[0_18px_42px_rgba(53,28,11,0.07)]"
                style={{
                  backgroundImage: `url('${story.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={story.title}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a18979]">
                  {story.place}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-4xl">
                  {story.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#706055]">
                  {story.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#efe1d6] bg-[#fffaf5] py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            In pictures
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl text-[#241711] sm:text-5xl">
            Moments from the work
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#706055]">
            A visual record of preparation days, deliveries, teaching, and the
            gatherings that follow.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.4rem] ${
                  index === 0 || index === 5 ? "sm:col-span-2 lg:col-span-1" : ""
                } ${index === 0 ? "min-h-[280px] lg:row-span-2 lg:min-h-full" : "min-h-[220px]"}`}
              >
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium leading-6 text-white">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,#3a2418_0%,#6b3a22_45%,#d75a1f_100%)]"
          />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white sm:text-5xl">
              Help us keep giving
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/88">
              When you donate to Lusumpuko Women&apos;s Club, you strengthen the
              same hands that cook, teach, and deliver care across our community.
            </p>
            <Link
              href="/donate"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#d75a1f] transition hover:bg-[#fff2ea]"
            >
              Donate now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
