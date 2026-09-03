import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Lusumbuko Women's Club",
  description:
    "Our story and history — the Tonga, Ndebele, and Shona roots of the Pala tradition and how Lusumbuko Women's Club preserves it.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
