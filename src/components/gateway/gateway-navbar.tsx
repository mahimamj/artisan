"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function GatewayNavbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/labels#about" },
    { label: "Our Businesses", href: "#businesses" },
    { label: "Capabilities", href: "/labels#labels" },
    { label: "Industries", href: "/labels#industries" },
    { label: "Contact", href: "/labels#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f6]/80 backdrop-blur-md border-b border-[#e6e6e6]/60 py-5 px-6 lg:px-12 transition-all duration-300"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Left: Official Logo Asset (Transparent / Light theme ready) */}
        <Link href="/" className="flex items-center group py-1">
          <img
            src="/artisan-logo-transparent.png"
            alt="Artisan Ventures Private Limited"
            className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#5f6368] hover:text-[#1c1c1e] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#a20160] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: Request a Quote Primary Outlined Button */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[#1c1c1e]/20 text-[#1c1c1e] bg-transparent hover:bg-black/5 hover:border-[#1c1c1e]/40 text-xs font-semibold tracking-wider uppercase px-6 h-10 rounded-[12px] transition-all duration-300"
          >
            <Link href="/labels#contact">Request a Quote</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
