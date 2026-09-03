import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ndebele Heritage — Lusumbuko Women's Club",
  description:
    "Discover the Ndebele heritage and its influence on flavor, fermentation, and wild herbs in the Pala at Lusumbuko Women's Club.",
};

export default function NdebeleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
