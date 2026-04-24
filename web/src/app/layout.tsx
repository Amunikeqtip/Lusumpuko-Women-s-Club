import type { Metadata } from "next";
import "./globals.css";
import { GlobalChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Lusumpuko Women's Club",
  description: "A warm cultural dining landing page for Lusumpuko Pala.",
  icons: {
    icon: "/lwc-favicon.svg",
    shortcut: "/lwc-favicon.svg",
    apple: "/lwc-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#f7f0e8] text-[#2f241d]">
        <div className="flex min-h-screen flex-col pb-28 md:pb-0">
          <div className="flex-1">{children}</div>
        </div>
        <GlobalChrome />
      </body>
    </html>
  );
}
