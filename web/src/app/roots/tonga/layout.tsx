import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonga Heritage — Lusumpuko Women's Club",
  description:
    "Discover the Tonga heritage and foundational culinary traditions behind Pala at Lusumpuko Women's Club.",
};

export default function TongaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
