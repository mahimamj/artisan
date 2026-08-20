"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f6]/95 backdrop-blur-md border-b border-[#e6e6e6]/80 shadow-xs transition-all duration-300">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/artisan-logo-transparent.png" 
              alt="Artisan Ventures Private Limited" 
              className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 drop-shadow-sm"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] xl:text-[14px] font-semibold tracking-wide text-[#5f6368] hover:text-[#1c1c1e] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-magenta transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild variant="outline" size="sm" className="border-[#1c1c1e]/20 text-[#1c1c1e] bg-transparent hover:bg-black/5 hover:border-[#1c1c1e]/40 text-xs font-semibold tracking-wider uppercase px-4 sm:px-5 h-9 rounded-[10px] transition-all duration-300">
              <Link href="#contact">Request Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#1c1c1e] hover:bg-black/5 transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button asChild size="lg">
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
