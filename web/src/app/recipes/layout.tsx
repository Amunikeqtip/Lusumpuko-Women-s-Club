import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes — Lusumpuko Women's Club",
  description:
    "Traditional homemade Pala recipe from Lusumpuko Women's Club — authentic methods from Tonga, Ndebele, and Shona kitchens.",
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
