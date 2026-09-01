import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories & Gallery — Lusumpuko Women's Club",
  description:
    "Browse the Lusumpuko Women's Club gallery — photos and stories from our table, plating, and celebrations.",
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
