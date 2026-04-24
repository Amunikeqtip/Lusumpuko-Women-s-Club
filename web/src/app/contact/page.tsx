"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const contactItems = [
  ["Call Us", "+1 (555)\nPALA-DELIGHT", "◔"],
  ["Email", "hello@lusumpukopala.com", "✉"],
  ["Our Hours", "10:00 AM - 9:00 PM", "◷"],
  ["Location", "Lusumpuko Valley,\nZimbabwe", "⌖"],
];

const orderItems = [
  {
    title: "Traditional Pala w/\nPeanut Sauce",
    price: "$25.00",
    qty: "Qty: 2",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe%20Traditionalfood.jpg",
  },
  {
    title: "Spiced Baobab\nRefreshment",
    price: "$4.50",
    qty: "Qty: 1",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shona Style Dried\nGreens",
    price: "$6.00",
    qty: "Qty: 1",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sadza%20and%20Beans.jpg",
  },
];

function SiteHeader() {
  return (
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
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Home</Link>
          <Link href="/about" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">About</Link>
          <Link href="/menu" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Menu</Link>
          <Link href="/roots" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Roots</Link>
          <Link href="/stories" className="rounded-full px-4 py-2 transition hover:bg-white/45 hover:text-[#2c211c]">Explore</Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
          <div className="hidden min-w-[240px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white/82 px-4 py-2 text-sm text-[#8b7c6f] md:flex">
            <span className="text-base text-[#d05a1e]">⌕</span>
            <span>Search dishes...</span>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-[#d75a1f] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813]"
          >
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
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
              <li>Latest News & Blog</li>
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
              <li>+1 (555) PALA-DELIGHT</li>
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
            <Link href="/#footer">Privacy Policy</Link>
            <Link href="/#footer">Terms of Service</Link>
            <Link href="/#footer">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"delivery" | "book">("book");

  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-36 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:pt-40">
        <div>
          <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            Connect with us
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
            Get in Touch with our
            <br />
            <span className="text-[#d75a1f] italic">Heritage</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#706055]">
            Whether you&apos;re curious about the history of Pala, need
            assistance with your order, or want to share a cultural story,
            we&apos;re here to listen.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {contactItems.map(([label, value, icon]) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff1e8] text-lg text-[#d75a1f]">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#968273]">
                    {label}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[1.05rem] font-semibold leading-8 text-[#241711]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="overflow-hidden rounded-[1.8rem] border border-[#eee1d6] bg-white shadow-[0_22px_55px_rgba(55,29,12,0.06)]">
          <div className="border-b border-[#efe1d6] px-7 py-6">
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-[#7d6c60]">
              We typically respond within 2-4 business hours.
            </p>
          </div>
          <div className="px-7 py-7">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-[#65574d]">First Name</label>
                <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" defaultValue="Tariro" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#65574d]">Email Address</label>
                <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" defaultValue="tariro@example.com" />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-[#65574d]">Subject</label>
              <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" defaultValue="Inquiry about catering" />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-[#65574d]">Message</label>
              <textarea className="mt-2 h-32 w-full rounded-xl border border-[#ead9ca] px-4 py-3 outline-none" placeholder="How can we help you today?" />
            </div>
          </div>
          <div className="border-t border-[#efe1d6] px-7 py-6">
            <button className="h-14 w-full rounded-xl bg-[#d7541b] text-base font-semibold text-white transition hover:bg-[#bf4a13]">
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,24,18,0.12),rgba(30,24,18,0.12)), url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[360px] max-w-6xl items-center justify-center px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-xl rounded-[1.8rem] border border-white/35 bg-white/92 px-8 py-10 text-center shadow-[0_22px_55px_rgba(48,25,9,0.18)] backdrop-blur">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1e8] text-2xl text-[#d75a1f]">
              ➤
            </div>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl text-[#241711]">
              Find Us in the Valley
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f6056]">
              123 Heritage Lane, Lusumpuko Valley, Sector 7G,
              <br />
              Zimbabwe
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Victoria+Falls+Sawanga+Mall"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-w-[280px] items-center justify-center rounded-full border border-[#d75a1f] px-6 py-3 text-sm font-semibold text-[#d75a1f] transition hover:bg-[#fff2ea]"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#241711]">
            Complete Your <span className="text-[#d75a1f] underline">Order</span>
          </h2>
          <p className="mt-4 text-base text-[#73635a]">
            Specify how you&apos;d like to receive your meal.
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#eee1d6] bg-white shadow-[0_20px_50px_rgba(51,26,10,0.06)]">
            <div className="grid grid-cols-2 border-b border-[#efe1d6]">
              <button
                type="button"
                onClick={() => setActiveTab("delivery")}
                className={`px-6 py-5 text-sm font-semibold transition ${
                  activeTab === "delivery"
                    ? "bg-[#d7541b] text-white"
                    : "text-[#67574b]"
                }`}
              >
                Delivery
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("book")}
                className={`px-6 py-5 text-sm font-semibold transition ${
                  activeTab === "book"
                    ? "bg-[#d7541b] text-white"
                    : "text-[#67574b]"
                }`}
              >
                Book
              </button>
            </div>

            {activeTab === "delivery" ? (
              <div className="grid gap-5 px-6 py-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Delivery Address</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="Enter your full address" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Delivery Perimeter</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" />
                </div>

                <div className="md:col-span-2 rounded-xl border border-[#f2c9b3] bg-[#fff3ea] px-4 py-4 text-sm text-[#d75a1f]">
                  You are currently within 10km. Delivery is estimated within 45-60 minutes.
                </div>

                <div>
                  <label className="text-sm font-medium text-[#65574d]">Preferred Time</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" defaultValue="18:30" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Contact Phone</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" defaultValue="+263 770 000 000" />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[#65574d]">Special Instructions</label>
                  <textarea className="mt-2 h-32 w-full rounded-xl border border-[#ead9ca] px-4 py-3 outline-none" placeholder="e.g. Gate codes, dietary needs (peanut-free), or 'Leave at the traditional entrance'" />
                </div>
              </div>
            ) : (
              <div className="grid gap-5 px-6 py-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Company Doing the Booking</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="e.g. Valley Heritage Events" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Representative</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="e.g. Tariro Moyo" />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#65574d]">How Many People</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="e.g. 45 guests" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Event Date</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="e.g. 12 August 2026" />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#65574d]">Contact Phone</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="+263 770 000 000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#65574d]">Email</label>
                  <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="e.g. bookings@example.com" />
                </div>

                <div className="md:col-span-2 rounded-xl border border-[#f2c9b3] bg-[#fff3ea] px-4 py-4 text-sm text-[#d75a1f]">
                  Group bookings include menu planning support, serving guidance, and cultural plating recommendations.
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[#65574d]">Special Requests</label>
                  <textarea className="mt-2 h-32 w-full rounded-xl border border-[#ead9ca] px-4 py-3 outline-none" placeholder="Tell us about dietary needs, ceremony type, preferred dishes, seating style, or any special cultural requests." />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="self-start rounded-[1.8rem] border border-[#eee1d6] bg-white shadow-[0_20px_50px_rgba(51,26,10,0.06)] lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-[#efe1d6] px-6 py-5">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#241711]">
              Order Summary
            </h3>
            <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d75a1f]">
              3 items
            </span>
          </div>

          <div className="space-y-5 px-6 py-6">
            {orderItems.map((item) => (
              <div key={item.title} className="flex gap-4 border-b border-[#f2e9e1] pb-5 last:border-b-0">
                <div
                  className="h-16 w-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="flex-1">
                  <p className="whitespace-pre-line font-semibold leading-6 text-[#241711]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#8a7769]">{item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#241711]">{item.price}</p>
                  <button className="mt-1 text-sm text-[#d75a1f]">Remove</button>
                </div>
              </div>
            ))}

            <div className="space-y-3 text-sm text-[#75655a]">
              <div className="flex justify-between"><span>Subtotal</span><span>$35.50</span></div>
              <div className="flex justify-between"><span>Delivery Fee</span><span>$5.00</span></div>
            </div>

            <div className="flex justify-between border-t border-[#f2e9e1] pt-4 font-[family-name:var(--font-display)] text-3xl text-[#241711]">
              <span>Total</span>
              <span>$40.50</span>
            </div>

            <button className="mt-3 h-14 w-full rounded-xl bg-[#d7541b] text-base font-semibold text-white transition hover:bg-[#bf4a13]">
              Confirm and Pay →
            </button>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
