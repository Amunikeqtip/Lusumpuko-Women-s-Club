import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lusumpuko.com";

type SitemapEntry = {
  label: string;
  href: string;
  description: string;
};

type SitemapSection = {
  title: string;
  entries: SitemapEntry[];
};

const sections: SitemapSection[] = [
  {
    title: "Home",
    entries: [
      {
        label: "Homepage",
        href: "/",
        description: "Welcome to Lusumbuko Women's Club — heritage dining in Victoria Falls",
      },
    ],
  },
  {
    title: "Experience",
    entries: [
      {
        label: "About Our History",
        href: "/about",
        description: "Our story, timeline, and the cultural journey of Pala",
      },
      {
        label: "Cultural Roots",
        href: "/roots",
        description: "Explore the Tonga, Ndebele, and Shona traditions behind our cuisine",
      },
      {
        label: "Tonga Heritage",
        href: "/roots/tonga",
        description: "The foundational Tonga culinary traditions of Pala",
      },
      {
        label: "Ndebele Heritage",
        href: "/roots/ndebele",
        description: "Ndebele influences on flavor, fermentation, and wild herbs",
      },
      {
        label: "Shona Heritage",
        href: "/roots/shona",
        description: "Shona contributions to the Pala tradition",
      },
      {
        label: "Full Menu",
        href: "/menu",
        description: "Browse our seasonal selection of dishes and drinks",
      },
      {
        label: "Home Recipes",
        href: "/recipes/homemade-classic-pala",
        description: "Classic homemade Pala recipe to try in your own kitchen",
      },
      {
        label: "Visual Gallery",
        href: "/stories",
        description: "Photos and stories from our table, plating, and celebrations",
      },
    ],
  },
  {
    title: "Community",
    entries: [
      {
        label: "Our Giving & Impact",
        href: "/impact",
        description: "How your support empowers women in Victoria Falls",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Get in touch — phone, email, and location details",
      },
    ],
  },
  {
    title: "Support",
    entries: [
      {
        label: "Donate",
        href: "/donate",
        description: "Support our mission through a secure PayPal donation",
      },
    ],
  },
];

export const metadata = {
  title: "Sitemap — Lusumbuko Women's Club",
  description:
    "Complete site map for Lusumbuko Women's Club. Find every page on our website quickly.",
  alternates: {
    canonical: `${siteUrl}/sitemap`,
  },
};

export default function SitemapPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2a1c15]">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <p className="inline-flex rounded-full border border-[#f0d7c7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#cb5c22]">
          Site Map
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#271913] sm:text-5xl">
          Explore Our Site
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6e5f53]">
                Every page on lusumpuko.com in one place. Jump straight to the section
          that interests you.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
                {section.title}
              </h2>
              <ul className="mt-4 divide-y divide-[#eadfd5] rounded-2xl border border-[#eadfd5] bg-[#fffaf5]">
                {section.entries.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="flex flex-col gap-1 px-6 py-4 transition hover:bg-[#fff1e8] sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="font-medium text-[#271913] underline decoration-[#d8b39d] underline-offset-4 transition hover:text-[#d75a1f] hover:decoration-[#d75a1f]">
                        {entry.label}
                      </span>
                      <span className="text-sm text-[#8f7868]">
                        {entry.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
