"use client";

import Link from "next/link";
import { ArrowUp, ShieldCheck } from "lucide-react";

export function GatewayFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-border bg-background py-10 px-6 lg:px-12 text-foreground-secondary text-xs md:text-sm">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta via-[#0284c7] to-magenta" />

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src="/artisan-logo.png"
            alt="Artisan Ventures Logo"
            className="h-10 w-auto object-contain opacity-95"
          />
          <span className="hidden sm:inline text-foreground/20">|</span>
          <p>© {new Date().getFullYear()} Artisan Ventures Private Limited & Group Company <strong className="text-magenta">Kalpa Digi World</strong> (Digital Printing) | Kunal@artisanven.com (+91 98257 44787) | Sales@artisanven.com (+91 93771 44222)</p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-foreground-secondary">
          <Link href="/labels" className="hover:text-magenta transition-colors">
            Label Division
          </Link>
          <Link href="/printer-rental" className="hover:text-[#0284c7] transition-colors">
            Printer Fleet
          </Link>
          <Link href="/labels#contact" className="hover:text-magenta transition-colors">
            Contact
          </Link>
          <button
            onClick={scrollToTop}
            className="h-9 w-9 rounded-full bg-white border border-border/80 flex items-center justify-center text-foreground hover:text-magenta hover:border-magenta transition-all duration-300 card-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

