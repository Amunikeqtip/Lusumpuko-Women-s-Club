import type { Metadata } from "next";
import "./globals.css";
import { GlobalChrome } from "../components/site-chrome";

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
      <body className="bg-[#f7f0e8] text-[#2f241d]">
        <div className="flex min-h-screen flex-col pb-28 md:pb-0">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-[#eadfd5] bg-[#fffaf5] px-6 py-5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9f8b7c]">
            <p>This system is powered by Amunike &amp; Tedwell.</p>
          </footer>
        </div>
        <GlobalChrome />
      </body>
    </html>
  );
}
