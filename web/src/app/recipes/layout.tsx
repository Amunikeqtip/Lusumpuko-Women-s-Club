import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes — Lusumbuko Women's Club",
  description:
    "Traditional homemade Pala recipe from Lusumbuko Women's Club — authentic methods from Tonga, Ndebele, and Shona kitchens.",
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
