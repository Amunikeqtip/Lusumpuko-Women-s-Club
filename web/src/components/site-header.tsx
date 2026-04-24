"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SiteHeaderProps = {
  desktopSearchSlot?: ReactNode;
  homeHref?: string;
  showDesktopSearchPlaceholder?: boolean;
  variant?: "default" | "home";
};

const navItems = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/menu", key: "menu", label: "Menu" },
  { href: "/roots", key: "roots", label: "Roots" },
  { href: "/stories", key: "stories", label: "Explore" },
] as const;

function isActivePath(pathname: string, key: (typeof navItems)[number]["key"]) {
  if (key === "home") {
    return pathname === "/";
  }

  return pathname === `/${key}` || pathname.startsWith(`/${key}/`);
}

export function SiteHeader({
  desktopSearchSlot,
  homeHref = "/",
  showDesktopSearchPlaceholder = false,
  variant = "default",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const headerClassName =
    variant === "home"
      ? "fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.62),rgba(255,244,236,0.28))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(255,250,244,0.52),rgba(255,244,236,0.18))] max-sm:top-3 max-sm:w-[calc(100%-1rem)] max-sm:rounded-[1.6rem] max-sm:border-[#f1c2a2] max-sm:bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(255,231,216,0.92))] max-sm:px-3 max-sm:py-2.5 max-sm:shadow-[0_20px_55px_rgba(75,32,12,0.16)] md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]"
      : "fixed left-1/2 top-4 z-[999] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 rounded-full border border-white/35 bg-[linear-gradient(135deg,rgba(255,250,244,0.72),rgba(255,244,236,0.34))] px-4 py-3 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl max-sm:top-3 max-sm:w-[calc(100%-1rem)] max-sm:rounded-[1.6rem] max-sm:border-[#f1c2a2] max-sm:bg-[linear-gradient(135deg,rgba(255,248,242,0.98),rgba(255,231,216,0.92))] max-sm:px-3 max-sm:py-2.5 max-sm:shadow-[0_20px_55px_rgba(75,32,12,0.16)] md:w-[calc(100%-3rem)] md:px-6 lg:w-[calc(100%-5rem)]";

  return (
    <header className={headerClassName}>
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

        <nav className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/18 p-1.5 text-[0.9rem] font-medium text-[#58473d] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] lg:flex">
          {navItems.map((item) => {
            const href = item.key === "home" ? homeHref : item.href;
            const active = isActivePath(pathname, item.key);

            return (
              <Link
                key={item.key}
                href={href}
                className={`rounded-full px-4 py-2 transition ${
                  active
                    ? "bg-[#d75a1f] text-white shadow-[0_10px_20px_rgba(215,90,31,0.2)] hover:bg-[#c64d14]"
                    : "hover:bg-white/45 hover:text-[#2c211c]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {(desktopSearchSlot || showDesktopSearchPlaceholder) && (
          <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
            {desktopSearchSlot}
            {!desktopSearchSlot && showDesktopSearchPlaceholder && (
              <div className="hidden min-w-[240px] items-center gap-2 rounded-full border border-[#e8ddd0] bg-white/82 px-4 py-2 text-sm text-[#8b7c6f] md:flex">
                <span className="text-base text-[#d05a1e]">⌕</span>
                <span>Search dishes...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
