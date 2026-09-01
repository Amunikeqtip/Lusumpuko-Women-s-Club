import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact — Lusumpuko Women's Club",
  description:
    "Discover how Lusumpuko Women's Club and your support give back to the community and empower women in Victoria Falls.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
