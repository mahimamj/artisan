import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisan Ventures | Premium Label Manufacturing & Industrial Printing",
  description:
    "Artisan Ventures Private Limited — precision label manufacturing and industrial printer solutions for global enterprise clients. Barcode, thermal, pharmaceutical, and custom labels engineered with 99% quality accuracy.",
  keywords: [
    "label manufacturing",
    "industrial printing",
    "barcode labels",
    "thermal labels",
    "pharmaceutical labels",
    "custom labels",
    "label printers",
    "Artisan Ventures",
  ],
  openGraph: {
    title: "Artisan Ventures | Premium Label Manufacturing",
    description:
      "Precision labels engineered for global brands. Premium labeling and industrial printing solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "Artisan Ventures Private Limited",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
