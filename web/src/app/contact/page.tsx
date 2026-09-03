import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { LWC } from "../../lib/lusumpuko-images";

const contactItems = [
  ["Call Us", "+263 772898470", "◔"],
  ["Email", "info@lusumpuko.com", "✉"],
  ["Our Hours", "10:00 AM - 9:00 PM", "◷"],
  ["Location", "Victoria Falls,\nZimbabwe", "⌖"],
];

export default function ContactPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-36 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:pt-40">
        <div>
          <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
            Connect with us
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.03em] text-[#241711] sm:text-6xl">
            Come share
            <br />
            <span className="text-[#d75a1f] italic">our table</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#706055]">
            Traditional food is how we welcome people. Whether you are planning
            a gathering or simply wish to taste Pala with us, write to us —
            we would love to host you.
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
                <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#65574d]">Email Address</label>
                <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-[#65574d]">Subject</label>
              <input className="mt-2 h-14 w-full rounded-xl border border-[#ead9ca] px-4 outline-none" placeholder="I'd like to visit or host a gathering" />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-[#65574d]">Message</label>
              <textarea
                className="mt-2 h-32 w-full rounded-xl border border-[#ead9ca] px-4 py-3 outline-none"
                placeholder="Tell us when you'd like to visit, or what kind of gathering you have in mind."
              />
            </div>
          </div>
          <div className="border-t border-[#efe1d6] px-7 py-6">
            <button type="button" className="h-14 w-full rounded-xl bg-[#d7541b] text-base font-semibold text-white transition hover:bg-[#bf4a13]">
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30,24,18,0.12),rgba(30,24,18,0.12)), url('${LWC.outdoorGroupSign}')`,
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
              Find Us in Victoria Falls
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f6056]">
              Lusumbuko Women&apos;s Club
              <br />
              Victoria Falls, Zimbabwe
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

      <section className="bg-[#d7541b] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
            A place is set for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/88">
            From quiet meals to celebrations, we welcome guests who value
            heritage, hospitality, and real Zimbabwean flavour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@lusumpuko.com?subject=I'd%20like%20to%20share%20your%20table"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#d7541b] transition hover:bg-[#fff0e6]"
            >
              Email info@lusumpuko.com
            </a>
            <Link
              href="/menu"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
            >
              Browse the Menu
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
