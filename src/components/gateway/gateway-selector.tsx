"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ShoppingBag,
  ShoppingCart,
  Printer,
  Scroll,
  Target,
  Award,
  Settings,
  Headphones,
} from "lucide-react";
import { useQuoteModal } from "@/context/quote-modal-context";

const HERO_IMAGES = [
  "/hero-banner-bg.jpg",
  "/hero-banner-bg-2.jpg",
  "/hero-banner-bg-3.jpg",
  "/hero-banner-bg-4.jpg",
];

export function GatewaySelector() {
  const { openQuoteModal } = useQuoteModal();
  const [hoveredCard, setHoveredCard] = useState<"labels" | "printers" | null>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-rotate ONLY background image every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 w-full">
      {/* 1. FULL-WIDTH HERO BANNER SECTION (Fixed Text, Auto-Rotating Background Images every 3s) */}
      <section className="relative w-full bg-[#0b0812] text-white pt-28 pb-36 sm:pt-32 sm:pb-44 lg:pt-36 lg:pb-52 overflow-hidden">
        {/* Background Image Carousel with Ultra-Smooth 1.2s Crossfade */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={HERO_IMAGES[currentBgIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-0 bg-cover bg-right-center sm:bg-right filter brightness-90 contrast-110 pointer-events-none"
            style={{ backgroundImage: `url('${HERO_IMAGES[currentBgIndex]}')` }}
          />
        </AnimatePresence>

        {/* Dark Scrim Overlays for High Contrast Left-Aligned Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0812] via-[#0b0812]/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0812] via-transparent to-black/40 pointer-events-none" />

        {/* Content Container (FIXED TEXT CONTENT) */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl text-left min-h-[280px] sm:min-h-[300px] flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Eyebrow Header */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1.5px] w-8 sm:w-10 bg-[#f59e0b]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                ARTISAN VENTURES PRIVATE LIMITED
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Two Businesses. <br />
              <span className="italic font-serif text-[#fef08a]">One Trusted Partner.</span>
            </h1>

            {/* Divider Ornament Line */}
            <div className="flex items-center gap-2 py-0.5">
              <span className="w-12 h-[1.5px] bg-[#f59e0b]/60" />
              <span className="text-[#f59e0b] text-xs">❖</span>
            </div>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-base lg:text-lg text-white/85 leading-relaxed text-balance">
              Precision label manufacturing and reliable printer rental solutions, built to support businesses across India.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => openQuoteModal("Free Sample Pack")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#81014d] hover:bg-[#a20160] active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#81014d]/40 flex items-center justify-center gap-2 transform sm:hover:-translate-y-0.5"
              >
                <ShoppingBag size={16} />
                <span>REQUEST FREE SAMPLE</span>
              </button>

              <button
                onClick={() => openQuoteModal("Order Request")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 transform sm:hover:-translate-y-0.5"
              >
                <ShoppingCart size={16} />
                <span>REQUEST TO ORDER</span>
              </button>
            </div>
          </div>

          {/* Background Image Carousel Progress Bars (3-Second Animation) */}
          <div className="pt-6 sm:pt-8 flex items-center gap-3">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBgIndex(idx)}
                aria-label={`Go to background image ${idx + 1}`}
                className="group relative h-2 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/40 focus:outline-none"
                style={{ width: currentBgIndex === idx ? "44px" : "12px" }}
              >
                {currentBgIndex === idx && (
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="absolute inset-0 bg-[#f59e0b] shadow-sm shadow-[#f59e0b]/50"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OVERLAPPING SECTION CONTAINER (Cards float ON TOP of the Banner bottom) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 -mt-20 sm:-mt-28 lg:-mt-32 relative z-20 space-y-10 sm:space-y-14 pb-16 lg:pb-24">
        {/* 2. SPLIT CARDS (EXACT RATIO: 70% LABEL MANUFACTURING / 30% PRINTER RENTAL ON DESKTOP, CLEAN STACKED ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col md:flex-row gap-6 items-stretch"
        >
          {/* CARD 01 — LABEL MANUFACTURING (70% WIDTH RATIO ON DESKTOP) */}
          <Link
            href="/labels"
            className="w-full md:w-[68%] md:flex-[7] transition-all duration-500 ease-out focus:outline-none group"
            onMouseEnter={() => setHoveredCard("labels")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] p-6 sm:p-10 rounded-[28px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border ${
                hoveredCard === "labels"
                  ? "border-[#81014d]/60 bg-gradient-to-br from-[#81014d]/[0.08] via-white to-[#f8f8f6] shadow-2xl shadow-[#81014d]/25"
                  : "border-[#d8d8d5] bg-gradient-to-br from-[#fcfcfb] via-white to-[#f4f4f1] shadow-xl hover:shadow-2xl"
              }`}
            >
              {/* Background Machine Picture Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-right-center opacity-[0.25] group-hover:opacity-[0.40] transition-opacity duration-700 pointer-events-none mix-blend-multiply filter contrast-110 brightness-95"
                style={{ backgroundImage: "url('/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png')" }}
              />

              {/* Subtle Gradient Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none" />

              {/* Top Bar Header (01 Number Accent) */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-serif-heading text-4xl sm:text-5xl font-light text-[#ae5f05]">
                    01
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#ae5f05]/40" />
                </div>
              </div>

              {/* Content Body */}
              <div className="my-4 sm:my-8 relative z-10 space-y-3 sm:space-y-4">
                {/* Round Amber Circle Badge Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#ae5f05] text-white flex items-center justify-center shadow-lg shadow-[#ae5f05]/30 group-hover:scale-110 transition-transform duration-300">
                  <Scroll className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#81014d] transition-colors duration-300">
                  Label Manufacturing
                </h2>
                <p className="text-xs sm:text-base text-[#4a4d52] font-medium leading-relaxed max-w-xl">
                  High-precision flexographic and digital rotary die-cut self-adhesive labels engineered for FMCG, luxury perfume, pharmaceuticals, cosmetics, and enterprise packaging.
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="relative z-10 flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#81014d] transition-colors duration-300">
                <span>EXPLORE LABEL DIVISION</span>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#81014d] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* CARD 02 — PRINTER RENTAL (30% WIDTH RATIO ON DESKTOP) */}
          <Link
            href="/printer-rental"
            className="w-full md:w-[32%] md:flex-[3] transition-all duration-500 ease-out focus:outline-none group"
            onMouseEnter={() => setHoveredCard("printers")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] p-6 sm:p-10 rounded-[28px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden border ${
                hoveredCard === "printers"
                  ? "border-[#81014d]/60 bg-gradient-to-br from-[#81014d]/[0.08] via-white to-[#f8f8f6] shadow-2xl shadow-[#81014d]/25"
                  : "border-[#d8d8d5] bg-gradient-to-br from-[#fdfbfd] via-white to-[#f7f4f7] shadow-xl hover:shadow-2xl"
              }`}
            >
              {/* Background MFP Printer Picture Overlay */}
              <div
                className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat opacity-[0.35] group-hover:opacity-[0.55] transition-opacity duration-700 pointer-events-none mix-blend-multiply filter contrast-110 brightness-95"
                style={{ backgroundImage: "url('/printers/canon-ir-c3326.png')" }}
              />

              {/* Subtle Gradient Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent pointer-events-none" />

              {/* Top Bar Header (02 Number Accent) */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-serif-heading text-4xl sm:text-5xl font-light text-[#81014d]">
                    02
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#81014d]/40" />
                </div>
              </div>

              {/* Content Body */}
              <div className="my-4 sm:my-8 relative z-10 space-y-3 sm:space-y-4">
                {/* Round Magenta Circle Badge Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#81014d] text-white flex items-center justify-center shadow-lg shadow-[#81014d]/30 group-hover:scale-110 transition-transform duration-300">
                  <Printer className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#1c1c1e] tracking-tight group-hover:text-[#81014d] transition-colors duration-300">
                  Printer Rental
                </h2>
                <p className="text-xs sm:text-sm text-[#4a4d52] font-medium leading-relaxed">
                  Enterprise A4/A3 MFP color and monochrome printer rental fleets with free service & maintenance to keep your business running seamlessly.
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="relative z-10 flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1c1c1e] group-hover:text-[#81014d] transition-colors duration-300">
                <span>PRINTER RENTAL</span>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1c1c1e] group-hover:bg-[#81014d] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 3. GROUP COMPANY BANNER — KALPA DIGI WORLD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://kalpadigiworld.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Kalpa Digi World Website (https://kalpadigiworld.com/)"
            className="group block relative overflow-hidden rounded-2xl border border-[#d8d8d5] bg-gradient-to-r from-white via-[#fcfbfd] to-white p-6 sm:p-7 px-6 sm:px-8 shadow-sm hover:shadow-xl hover:border-[#81014d]/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              {/* Left: Kalpa Logo & Info */}
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full md:w-auto">
                <div className="p-3 rounded-xl bg-white shadow-xs border border-[#e6e6e6] group-hover:border-[#81014d]/30 transition-colors flex items-center justify-center shrink-0">
                  <img
                    src="/kalpa-digi-world-logo.png"
                    alt="Kalpa Digi World Logo"
                    className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.18em] bg-[#81014d]/10 text-[#81014d] border border-[#81014d]/20">
                    GROUP COMPANY FOR DIGITAL PRINTING
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#1c1c1e] group-hover:text-[#81014d] transition-colors">
                    Kalpa Digi World — Custom Short-Run & Variable Digital Labels
                  </h3>
                  <p className="text-xs text-[#5f6368]">
                    Click to visit official website: kalpadigiworld.com
                  </p>
                </div>
              </div>

              {/* Right: Action Button */}
              <div className="shrink-0 w-full sm:w-auto text-center">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#81014d] group-hover:bg-[#6b0140] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group-hover:gap-3 w-full sm:w-auto">
                  <span>VISIT KALPA DIGI WORLD WEBSITE</span>
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* 4. WHY BUSINESSES TRUST US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#12071f] via-[#1a082b] to-[#0a0414] text-white p-8 sm:p-12 lg:p-14 border border-white/10 card-shadow relative overflow-hidden"
        >
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10 sm:mb-12">
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Why Businesses <span className="italic font-serif text-[#fef08a] text-gradient-gold">Trust Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="w-6 h-[1px] bg-white/20" />
              <span className="text-[#f59e0b] text-xs">❖</span>
              <span className="w-6 h-[1px] bg-white/20" />
            </div>
          </div>

          {/* 4 Feature Columns (2x2 Grid on Mobile, 4 Columns on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:divide-x lg:divide-white/10">
            {/* Feature 1 */}
            <div className="text-center lg:px-4 space-y-2.5 sm:space-y-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 text-[#f59e0b] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-300">
                <Target size={22} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                PRECISE PRINTING
              </h4>
              <p className="text-xs text-white/70">
                Every detail. Every time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center lg:px-4 space-y-2.5 sm:space-y-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 text-[#f59e0b] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-300">
                <Award size={22} />
              </div>
              <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white">
                PREMIUM QUALITY
              </h4>
              <p className="text-[10px] sm:text-xs text-white/70">
                Materials that define excellence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center lg:px-4 space-y-2.5 sm:space-y-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 text-[#f59e0b] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-300">
                <Settings size={22} />
              </div>
              <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white">
                RELIABLE PERFORMANCE
              </h4>
              <p className="text-[10px] sm:text-xs text-white/70">
                Consistent results for your business.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center lg:px-4 space-y-2.5 sm:space-y-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 text-[#f59e0b] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-300">
                <Headphones size={22} />
              </div>
              <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white">
                DEDICATED SUPPORT
              </h4>
              <p className="text-[10px] sm:text-xs text-white/70">
                Always here to help you grow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
