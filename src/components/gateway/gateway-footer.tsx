"use client";

import Link from "next/link";

export function GatewayFooter() {
  return (
    <footer className="relative z-10 border-t border-[#e6e6e6] bg-[#f8f8f6] py-10 px-6 lg:px-12 text-[#5f6368] text-xs md:text-sm">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/artisan-logo-transparent.png"
            alt="Artisan Ventures Logo"
            className="h-7 w-auto object-contain opacity-90"
          />
          <span className="text-[#1c1c1e]/20">|</span>
          <p>© {new Date().getFullYear()} Artisan Ventures Private Limited. | +91 88660 09344 | kunalartisan@gmail.com</p>
        </div>

        <div className="flex items-center gap-8 text-xs uppercase tracking-wider text-[#5f6368]">
          <Link href="/labels" className="hover:text-[#1c1c1e] transition-colors">
            Label Manufacturing
          </Link>
          <Link href="/printer-rental" className="hover:text-[#1c1c1e] transition-colors">
            Printer Rental
          </Link>
          <Link href="/labels#contact" className="hover:text-[#1c1c1e] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
