"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GatewayNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/labels#about" },
    { label: "Our Businesses", href: "#businesses" },
    { label: "Printer Rental", href: "/printer-rental" },
    { label: "Capabilities", href: "/labels#labels" },
    { label: "Industries", href: "/labels#industries" },
    { label: "Contact", href: "/labels#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f6]/90 backdrop-blur-md border-b border-[#e6e6e6]/80 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Left: Official Logo */}
        <Link href="/" className="flex items-center group py-1">
          <img
            src="/artisan-logo-transparent.png"
            alt="Artisan Ventures Private Limited"
            className="h-9 sm:h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] xl:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#5f6368] hover:text-[#1c1c1e] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#a20160] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex border-[#1c1c1e]/20 text-[#1c1c1e] bg-transparent hover:bg-black/5 hover:border-[#1c1c1e]/40 text-xs font-semibold tracking-wider uppercase px-4 sm:px-5 h-9 rounded-[10px] transition-all duration-300"
          >
            <Link href="/labels#contact">Request a Quote</Link>
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
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-[#a20160] text-white hover:bg-[#a20160]/90 text-xs font-bold uppercase tracking-wider h-11 rounded-xl"
                >
                  <Link href="/labels#contact" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
