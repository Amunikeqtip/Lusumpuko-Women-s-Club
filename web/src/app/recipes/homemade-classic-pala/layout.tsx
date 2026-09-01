import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homemade Classic Pala — Lusumpuko Women's Club",
  description:
    "Learn how to make the classic homemade Pala at home with this traditional recipe from Lusumpuko Women's Club.",
};

export default function PalaRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
