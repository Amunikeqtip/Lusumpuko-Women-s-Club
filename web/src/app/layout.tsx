import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lusumpuko Women's Club",
  description: "A warm cultural dining landing page for Lusumpuko Pala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
