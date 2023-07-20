import { Providers } from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const lufgaFont = localFont({
  src: "./lufga.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oopsum",
  description: "Crypto platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lufgaFont.className}>
      <body className="bg-sidebar max-w-[1800px] mx-auto">
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
