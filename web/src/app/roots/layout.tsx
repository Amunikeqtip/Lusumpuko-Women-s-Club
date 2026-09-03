import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Roots — Lusumbuko Women's Club",
  description:
    "Explore the Tonga, Ndebele, and Shona cultural roots and traditions behind the Pala at Lusumbuko Women's Club.",
};

export default function RootsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
