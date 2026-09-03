import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Lusumbuko Women's Club",
  description:
    "Support Lusumbuko Women's Club — your donation empowers women and preserves the legacy of traditional Pala in Victoria Falls.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
