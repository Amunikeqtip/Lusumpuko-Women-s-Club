import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonga Heritage — Lusumbuko Women's Club",
  description:
    "Discover the Tonga heritage and foundational culinary traditions behind Pala at Lusumbuko Women's Club.",
};

export default function TongaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
