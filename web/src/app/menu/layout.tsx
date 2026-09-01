import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Lusumpuko Women's Club",
  description:
    "Browse the full Lusumpuko Women's Club menu — rich seasonal dishes and drinks inspired by Tonga, Ndebele, and Shona traditions.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
