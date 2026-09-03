import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Lusumbuko Women's Club",
  description:
    "Thank you for your generous donation to Lusumbuko Women's Club. Your support makes a real difference.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
