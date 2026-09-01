import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lusumpuko Women's Club",
  description:
    "Get in touch with Lusumpuko Women's Club in Victoria Falls, Zimbabwe. Call, email, or visit us for our heritage dining experience.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
