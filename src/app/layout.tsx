import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { QuoteModalProvider } from "@/context/quote-modal-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisan Ventures Private Limited | Label Manufacturing & Printer Rental",
  description:
    "Artisan Ventures Private Limited — Two core business verticals: Precision Label Manufacturing and Enterprise Printer Rental Solutions across India.",
  keywords: [
    "Artisan Ventures",
    "Label Manufacturing",
    "Printer Rental",
    "Industrial Printing",
    "Self adhesive labels",
    "Barcode printers",
    "A3 A4 printer rental",
  ],
  openGraph: {
    title: "Artisan Ventures Private Limited | Two Businesses. One Trusted Partner.",
    description:
      "Precision label manufacturing and reliable printer rental solutions, built to support businesses across India.",
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased bg-[#f8f8f6] text-[#1c1c1e] selection:bg-[#a20160]/15 selection:text-[#1c1c1e]">
        <QuoteModalProvider>
          {children}
        </QuoteModalProvider>
      </body>
    </html>
  );
}
