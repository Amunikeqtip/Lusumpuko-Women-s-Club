"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  homeHref?: string;
  variant?: "default" | "home";
};

type NavLink = {
  href: string;
  label: string;
};

type NavItem =
  | { type: "link"; key: string; href: string; label: string; accent?: boolean }
  | {
      type: "dropdown";
      key: string;
      href: string;
      label: string;
      items: NavLink[];
    };

const navItems: NavItem[] = [
  { type: "link", key: "home", href: "/", label: "Home" },
  { type: "link", key: "donate", href: "/donate", label: "Donate", accent: true },
  {
    type: "dropdown",
    key: "explore",
    href: "/roots",
    label: "Explore",
    items: [
      { href: "/roots", label: "Roots" },
      { href: "/menu", label: "Menu" },
    ],
  },
  {
    type: "dropdown",
    key: "about",
    href: "/about",
    label: "About Us",
    items: [
      { href: "/about", label: "About Us" },
      { href: "/impact", label: "Impact" },
    ],
  },
  { type: "link", key: "contact", href: "/contact", label: "Contact" },
];

function pathMatches(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavDropdown({
  href,
  label,
  items,
  active,
  open,
  onToggle,
  onClose,
}: {
  href: string;
  label: string;
  items: NavLink[];
  active: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const labelClassName = `px-2.5 py-1.5 transition xl:px-3 ${
    active ? "font-semibold text-[#241711]" : "hover:text-[#d75a1f]"
  }`;

  return (
    <div className="relative">
      <div className="inline-flex items-center">
        <Link href={href} className={labelClassName}>
          {label}
        </Link>
        <button
          type="button"
          aria-label={`${open ? "Close" : "Open"} ${label} menu`}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={onToggle}
          className={`-ml-1 inline-flex items-center rounded-md px-1.5 py-1.5 transition ${
            active || open ? "text-[#241711]" : "hover:text-[#d75a1f]"
          }`}
        >
          <span aria-hidden="true" className="text-[0.65rem] opacity-70">
            {open ? "▴" : "▾"}
          </span>
        </button>
      </div>

      {open ? (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-[1000] mt-1 min-w-[10.5rem] -translate-x-1/2 rounded-2xl border border-[#efe1d6] bg-[#fffaf5] py-2 shadow-[0_18px_40px_rgba(53,32,14,0.14)]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="block px-4 py-2.5 text-sm text-[#58473d] transition hover:bg-[#fff1e8] hover:text-[#d75a1f]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Traditional ribbon: earth black, terracotta, ochre, ivory, green, clay */
const headerRibbon =
  "repeating-linear-gradient(90deg,#1a120c 0 7px,#c94b26 7px 14px,#e0a04a 14px 21px,#fff6ec 21px 28px,#3f6b45 28px 35px,#7f4d33 35px 42px)";

export function SiteHeader({
  homeHref = "/",
  variant = "default",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const shellClassName =
    "fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full p-[3px] shadow-[0_18px_55px_rgba(53,32,14,0.18)] max-sm:top-3 max-sm:w-[calc(100%-1rem)] max-sm:rounded-[1.6rem] max-sm:p-[2.5px] max-sm:shadow-[0_20px_55px_rgba(75,32,12,0.16)] md:w-[calc(100%-3rem)] lg:w-[calc(100%-5rem)]";
  const innerClassName =
    variant === "home"
      ? "rounded-full bg-[linear-gradient(135deg,rgba(255,250,244,0.92),rgba(255,244,236,0.78))] px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(255,250,244,0.78),rgba(255,244,236,0.55))] max-sm:rounded-[calc(1.6rem-2.5px)] max-sm:bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(255,231,216,0.94))] max-sm:px-3 max-sm:py-2.5 md:px-6"
      : "rounded-full bg-[linear-gradient(135deg,rgba(255,250,244,0.96),rgba(255,244,236,0.88))] px-4 py-3 backdrop-blur-xl max-sm:rounded-[calc(1.6rem-2.5px)] max-sm:bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(255,231,216,0.94))] max-sm:px-3 max-sm:py-2.5 md:px-6";

  return (
    <header
      className={shellClassName}
      style={{ backgroundImage: headerRibbon }}
      aria-label="Site header"
    >
      <div className={innerClassName}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Image
              src="/planeterra.png"
              alt="Planeterra logo"
              width={220}
              height={76}
              priority
              className="h-9 w-auto object-contain sm:h-11 md:h-12"
            />
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

          <nav className="hidden items-center gap-1 text-[0.9rem] font-medium text-[#58473d] lg:flex xl:gap-2">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                const active =
                  pathMatches(pathname, item.href) ||
                  item.items.some((entry) => pathMatches(pathname, entry.href));

                return (
                  <NavDropdown
                    key={item.key}
                    href={item.href}
                    label={item.label}
                    items={item.items}
                    active={active}
                    open={openDropdown === item.key}
                    onToggle={() =>
                      setOpenDropdown((current) =>
                        current === item.key ? null : item.key,
                      )
                    }
                    onClose={() => setOpenDropdown(null)}
                  />
                );
              }

              const href = item.key === "home" ? homeHref : item.href;
              const active = pathMatches(pathname, item.href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-2.5 py-1.5 transition xl:px-3 ${
                    item.accent
                      ? active
                        ? "font-semibold text-[#d75a1f]"
                        : "font-semibold text-[#d75a1f] hover:text-[#bc4813]"
                      : active
                        ? "font-semibold text-[#241711]"
                        : "hover:text-[#d75a1f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
