"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GatewaySelector() {
  const [hoveredCard, setHoveredCard] = useState<"labels" | "printers" | null>(null);

  return (
    <section id="businesses" className="relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20 px-5 sm:px-6 lg:px-12">
      {/* Hero Header Block */}
      <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12 lg:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="h-[1px] w-6 bg-[#d97706]/60" />
          <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#d97706]">
            ARTISAN VENTURES PRIVATE LIMITED
          </span>
          <span className="h-[1px] w-6 bg-[#d97706]/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1e] leading-[1.1] text-balance"
        >
          Two Businesses. <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#1c1c1e]/80">One Trusted Partner.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Precision label manufacturing and reliable printer rental solutions, built to support businesses across India.
        </motion.p>
      </div>

      {/* Business Cards Panel — 70% Labels / 30% Printer Proportion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl w-full flex flex-col md:flex-row gap-5 sm:gap-6 lg:gap-8 items-stretch"
      >
        {/* CARD 01 — LABEL MANUFACTURING (70% AREA) */}
        <Link
          href="/labels"
          className="w-full md:w-[68%] md:flex-[7] transition-all duration-500 ease-out focus:outline-none group"
          onMouseEnter={() => setHoveredCard("labels")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] p-6 sm:p-8 lg:p-10 rounded-[20px] sm:rounded-[24px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border card-shadow ${
              hoveredCard === "labels"
                ? "border-[#81014d]/60 bg-gradient-to-br from-[#81014d]/[0.06] via-white to-[#f4f4f1] shadow-2xl shadow-[#81014d]/20"
                : "border-[#d8d8d5] bg-white hover:border-[#81014d]/50 card-shadow-hover"
            }`}
          >
            {/* Light Background Picture with Soft Blend */}
            <div
              className="absolute inset-0 bg-cover bg-right-center opacity-[0.14] group-hover:opacity-[0.22] transition-opacity duration-700 pointer-events-none mix-blend-multiply"
              style={{ backgroundImage: "url('/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png')" }}
            />

            {/* Soft Magenta Radial Ambient Glow */}
            <div
              className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[90px] transition-opacity duration-700 pointer-events-none ${
                hoveredCard === "labels" ? "opacity-50" : "opacity-0"
              }`}
              style={{ background: "radial-gradient(circle, rgba(129,1,77,0.2) 0%, transparent 70%)" }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10">
              <span className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c1c1e]/20 group-hover:text-[#81014d] transition-colors duration-500">
                01
              </span>
              <span className="px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-[#81014d]/10 text-[#81014d] border border-[#81014d]/30 backdrop-blur-sm">
                70% CORE VERTICAL — MANUFACTURING
              </span>
            </div>

            {/* Content Area */}
            <div className="my-6 sm:my-10 relative z-10">
              <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#81014d] transition-colors duration-300">
                Label Manufacturing
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#4a4d52] leading-relaxed max-w-xl">
                High-precision flexographic and digital rotary die-cut self-adhesive labels engineered for FMCG, luxury perfume, pharmaceuticals, cosmetics, and enterprise packaging.
              </p>
            </div>

            {/* Bottom CTA Link */}
            <div className="relative z-10 flex items-center gap-3 text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#81014d] transition-colors duration-300">
              <span>Explore Label Division</span>
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#81014d] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>

        {/* CARD 02 — PRINTER RENTAL (30% AREA) */}
        <Link
          href="/printer-rental"
          className="w-full md:w-[32%] md:flex-[3] transition-all duration-500 ease-out focus:outline-none group"
          onMouseEnter={() => setHoveredCard("printers")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border card-shadow ${
              hoveredCard === "printers"
                ? "border-[#026aa0]/60 bg-gradient-to-br from-[#026aa0]/[0.06] via-white to-[#f4f4f1] shadow-2xl shadow-[#026aa0]/20"
                : "border-[#d8d8d5] bg-white hover:border-[#026aa0]/50 card-shadow-hover"
            }`}
          >
            {/* Light Background Picture with Soft Blend */}
            <div
              className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat opacity-[0.16] group-hover:opacity-[0.25] transition-opacity duration-700 pointer-events-none mix-blend-multiply"
              style={{ backgroundImage: "url('/printers/canon-ir-c3326.png')" }}
            />

            {/* Soft Blue Radial Ambient Glow */}
            <div
              className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] transition-opacity duration-700 pointer-events-none ${
                hoveredCard === "printers" ? "opacity-50" : "opacity-0"
              }`}
              style={{ background: "radial-gradient(circle, rgba(2,106,160,0.2) 0%, transparent 70%)" }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10">
              <span className="font-serif-heading text-3xl sm:text-4xl font-light text-[#1c1c1e]/20 group-hover:text-[#026aa0] transition-colors duration-500">
                02
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] bg-[#026aa0]/10 text-[#026aa0] border border-[#026aa0]/30 backdrop-blur-sm">
                30% RENTAL
              </span>
            </div>

            {/* Content Area */}
            <div className="my-5 sm:my-8 relative z-10">
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#026aa0] transition-colors duration-300">
                Printer Rental
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-[#4a4d52] leading-relaxed">
                Enterprise A4/A3 MFP color and monochrome printer rental fleets with free service & maintenance.
              </p>
            </div>

            {/* Bottom CTA Link */}
            <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#026aa0] transition-colors duration-300">
              <span>Printer Rental</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#026aa0] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Subtle Group Company Note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 sm:mt-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dfdfdc] border border-[#d0d0cd] text-xs text-[#4a4d52]">
          <span className="font-medium">Group Company for Digital Printing:</span>
          <span className="font-bold text-[#1c1c1e]">Kalpa Digi World</span>
        </div>
      </motion.div>
    </section>
  );
}
