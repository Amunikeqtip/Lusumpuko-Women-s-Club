import Link from "next/link";

type SiteFooterProps = {
  id?: string;
  showSocialIcons?: boolean;
};

const footerLinkClassName =
  "group inline-flex items-center gap-2 rounded-full px-2 py-1 -mx-2 text-[#47392f] underline decoration-[#d8b39d] underline-offset-4 transition duration-200 hover:bg-[#fff1e8] hover:text-[#d75a1f] hover:decoration-[#d75a1f]";

const legalLinkClassName =
  "inline-flex rounded-full px-2 py-1 -mx-2 text-[#8f7868] underline decoration-[#d9c2b3] underline-offset-4 transition hover:bg-[#fff1e8] hover:text-[#d75a1f] hover:decoration-[#d75a1f]";

export function SiteFooter({
  id,
  showSocialIcons = false,
}: SiteFooterProps) {
  return (
    <footer id={id} className="bg-[#fffaf5] py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[#d75a1f]">◇</span>
              <p className="font-[family-name:var(--font-display)] text-2xl text-[#271913]">
                Lusumpuko Women&apos;s Club
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
              <li>
                <Link href="/about" className={footerLinkClassName}>
                  About Our History
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/roots" className={footerLinkClassName}>
                  Cultural Traditions
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className={footerLinkClassName}>
                  Full Menu
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/homemade-classic-pala"
                  className={footerLinkClassName}
                >
                  Home Recipes
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/stories" className={footerLinkClassName}>
                  Visual Gallery
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
              Community
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#54463b]">
              <li>
                <Link href="/stories" className={footerLinkClassName}>
                  Customer Testimonials
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/stories" className={footerLinkClassName}>
                  Latest News &amp; Blog
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClassName}>
                  Ordering Support
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClassName}>
                  Contact Us
                  <span aria-hidden="true" className="text-[0.7rem] transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a08675]">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#54463b]">
              <li>Victoria Falls, Zimbabwe</li>
              <li>+263 77677288</li>
              <li>hello@lusumpuko.com</li>
            </ul>
            {showSocialIcons && (
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
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.9"
                      fill="currentColor"
                      stroke="none"
                    />
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
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadfd5] pt-6 text-xs uppercase tracking-[0.18em] text-[#9f8b7c]">
          <p>© 2026 Lusumpuko Pala. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/#footer" className={legalLinkClassName}>
              Privacy Policy
            </Link>
            <Link href="/#footer" className={legalLinkClassName}>
              Terms of Service
            </Link>
            <Link href="/#footer" className={legalLinkClassName}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
