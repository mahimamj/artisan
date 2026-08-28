"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useQuoteModal } from "@/context/quote-modal-context";

export function GatewayNavbar() {
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/labels#about" },
    { label: "Labels", href: "/labels" },
    { label: "Printer Solution", href: "/printer-rental" },
    { label: "Catalog", href: "/labels#catalog" },
    { label: "Contact", href: "/labels#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#eaeae7]/95 backdrop-blur-md border-b border-[#d8d8d5] transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Left: Official Logo */}
        <Link href="/" className="flex items-center group py-1">
          <img
            src="/artisan-logo.png"
            alt="Artisan Ventures Private Limited"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] xl:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#4a4d52] hover:text-[#1c1c1e] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#81014d] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => openQuoteModal("Order Request")}
            className="hidden sm:inline-flex border-[#1c1c1e]/20 text-[#1c1c1e] bg-transparent hover:bg-black/5 hover:border-[#1c1c1e]/40 text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-3.5 sm:px-4 h-9 rounded-[10px] transition-all duration-300"
          >
            Request to Order
          </Button>

          <Button
            size="sm"
            onClick={() => openQuoteModal("Free Sample Pack")}
            className="hidden sm:inline-flex bg-[#81014d] hover:bg-[#6b0140] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-3.5 sm:px-4 h-9 rounded-[10px] transition-all duration-300 shadow-sm"
          >
            Request Free Sample
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1c1c1e] hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-[#e6e6e6] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-[#1c1c1e] hover:text-[#a20160] py-2 border-b border-[#f1f5f9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal("Order Request");
                  }}
                  className="w-full border-[#1c1c1e]/20 text-[#1c1c1e] text-xs font-bold uppercase tracking-wider h-10 rounded-xl"
                >
                  Request to Order
                </Button>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal("Free Sample Pack");
                  }}
                  className="w-full bg-[#a20160] text-white hover:bg-[#a20160]/90 text-xs font-bold uppercase tracking-wider h-10 rounded-xl shadow-sm"
                >
                  Request Free Sample
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
