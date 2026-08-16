"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GatewaySelector() {
  const [hoveredCard, setHoveredCard] = useState<"labels" | "printers" | null>(null);

  return (
    <section id="businesses" className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 flex flex-col justify-between min-h-[calc(100vh-80px)]">
      {/* Hero Header Block */}
      <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="h-[1px] w-6 bg-[#d97706]/60" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#d97706]">
            ARTISAN VENTURES PRIVATE LIMITED
          </span>
          <span className="h-[1px] w-6 bg-[#d97706]/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1e] leading-[1.08] text-balance"
        >
          Two Businesses. <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#1c1c1e]/80">One Trusted Partner.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-base md:text-lg lg:text-xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Precision label manufacturing and reliable printer rental solutions, built to support businesses across India.
        </motion.p>
      </div>

      {/* Two Business Cards Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl w-full flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch"
      >
        {/* CARD 01 — LABEL MANUFACTURING */}
        <Link
          href="/labels"
          className="flex-1 transition-all duration-500 ease-out focus:outline-none group"
          onMouseEnter={() => setHoveredCard("labels")}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            flexGrow: hoveredCard === "labels" ? 1.4 : hoveredCard === "printers" ? 0.75 : 1,
          }}
        >
          <div
            className={`h-full min-h-[380px] lg:min-h-[440px] p-8 lg:p-12 rounded-[24px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border card-shadow ${
              hoveredCard === "labels"
                ? "border-[#a20160]/60 bg-gradient-to-br from-[#a20160]/[0.04] via-white to-white shadow-2xl shadow-[#a20160]/15"
                : "border-[#e6e6e6] bg-white hover:border-[#a20160]/40 card-shadow-hover"
            }`}
          >
            {/* Soft Magenta Radial Ambient Glow */}
            <div
              className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] transition-opacity duration-700 pointer-events-none ${
                hoveredCard === "labels" ? "opacity-40" : "opacity-0"
              }`}
              style={{ background: "radial-gradient(circle, rgba(162,1,96,0.15) 0%, transparent 70%)" }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10">
              <span className="font-serif-heading text-4xl lg:text-5xl font-light text-[#1c1c1e]/20 group-hover:text-[#a20160] transition-colors duration-500">
                01
              </span>
              <span className="px-3.5 py-1 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] bg-[#a20160]/10 text-[#a20160] border border-[#a20160]/20">
                CORE BUSINESS
              </span>
            </div>

            {/* Content Area */}
            <div className="my-8 relative z-10">
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#a20160] transition-colors duration-300">
                Label Manufacturing
              </h2>
              <p className="mt-4 text-base lg:text-lg text-[#5f6368] leading-relaxed max-w-lg">
                Premium self-adhesive labels engineered for FMCG, cosmetics, pharma, food and industrial brands.
              </p>
            </div>

            {/* Bottom CTA Link */}
            <div className="relative z-10 flex items-center gap-3 text-sm lg:text-base font-semibold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#a20160] transition-colors duration-300">
              <span>Explore Labels</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#a20160] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>

        {/* CARD 02 — PRINTER RENTAL */}
        <Link
          href="/printer-rental"
          className="flex-1 transition-all duration-500 ease-out focus:outline-none group"
          onMouseEnter={() => setHoveredCard("printers")}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            flexGrow: hoveredCard === "printers" ? 1.4 : hoveredCard === "labels" ? 0.75 : 1,
          }}
        >
          <div
            className={`h-full min-h-[380px] lg:min-h-[440px] p-8 lg:p-12 rounded-[24px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border card-shadow ${
              hoveredCard === "printers"
                ? "border-[#0284c7]/60 bg-gradient-to-br from-[#0284c7]/[0.04] via-white to-white shadow-2xl shadow-[#0284c7]/15"
                : "border-[#e6e6e6] bg-white hover:border-[#0284c7]/40 card-shadow-hover"
            }`}
          >
            {/* Soft Blue Radial Ambient Glow */}
            <div
              className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] transition-opacity duration-700 pointer-events-none ${
                hoveredCard === "printers" ? "opacity-40" : "opacity-0"
              }`}
              style={{ background: "radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 70%)" }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10">
              <span className="font-serif-heading text-4xl lg:text-5xl font-light text-[#1c1c1e]/20 group-hover:text-[#0284c7] transition-colors duration-500">
                02
              </span>
              <span className="px-3.5 py-1 rounded-full text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
                GROWTH VERTICAL
              </span>
            </div>

            {/* Content Area */}
            <div className="my-8 relative z-10">
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#0284c7] transition-colors duration-300">
                Printer Rental
              </h2>
              <p className="mt-4 text-base lg:text-lg text-[#5f6368] leading-relaxed max-w-lg">
                A4 and A3 colour and monochrome printer solutions with installation, maintenance and service support.
              </p>
            </div>

            {/* Bottom CTA Link */}
            <div className="relative z-10 flex items-center gap-3 text-sm lg:text-base font-semibold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#0284c7] transition-colors duration-300">
              <span>Explore Printer Rental</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
