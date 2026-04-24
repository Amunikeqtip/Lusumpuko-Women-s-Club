"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiHome,
  FiInfo,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
} from "react-icons/fi";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const mobileNavItems: NavItem[] = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/about", label: "About", icon: FiInfo },
  { href: "/menu", label: "Menu", icon: FiMenu },
  { href: "/roots", label: "Roots", icon: FiMapPin },
  { href: "/stories", label: "Stories", icon: FiMessageCircle },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalChrome() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-[1200] px-3 pb-3 md:hidden">
        <div className="mx-auto max-w-md rounded-[1.5rem] border border-white/40 bg-[linear-gradient(135deg,rgba(255,250,244,0.92),rgba(255,244,236,0.76))] p-2 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl">
          <div className="grid grid-cols-5 gap-1">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center rounded-[1rem] px-2 py-2 text-[0.65rem] font-semibold transition ${
                    active
                      ? "bg-[#d75a1f] text-white shadow-[0_10px_20px_rgba(215,90,31,0.22)]"
                      : "text-[#6b5a4d] hover:bg-white/70 hover:text-[#2c211c]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="text-lg" aria-hidden="true" />
                  <span className="mt-1">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="fixed bottom-24 right-3 z-[1200] md:bottom-8 md:right-6">
        <div className="flex items-center gap-2 rounded-full border border-white/40 bg-[linear-gradient(135deg,rgba(255,250,244,0.94),rgba(255,244,236,0.84))] p-2 shadow-[0_18px_55px_rgba(53,32,14,0.18)] backdrop-blur-xl">
          <a
            href="https://wa.me/263770000000?text=Hello%20Lusumpuko%20team%2C%20I%27d%20like%20to%20make%20an%20order%20or%20enquiry."
            target="_blank"
            rel="noreferrer"
            aria-label="Message us on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
          >
            <FaWhatsapp className="text-[1.25rem]" aria-hidden="true" />
          </a>
          <a
            href="mailto:hello@lusumpukopala.com?subject=Order%20or%20Enquiry"
            aria-label="Send us an email"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#d75a1f] shadow-[inset_0_0_0_1px_rgba(215,90,31,0.18)] transition hover:scale-105"
          >
            <FiMail className="text-[1.15rem]" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            aria-label="Order online"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#d75a1f] px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(215,90,31,0.28)] transition hover:bg-[#bc4813] hover:scale-105"
          >
            <FiArrowRight className="text-base" aria-hidden="true" />
            <span>Order Now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
