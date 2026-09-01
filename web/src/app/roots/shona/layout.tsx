import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Heritage — Lusumpuko Women's Club",
  description:
    "Discover the Shona heritage and its contributions to the Pala tradition at Lusumpuko Women's Club.",
};

export default function ShonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
