"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FEATURED_RENTAL_PRINTERS, PRINTER_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function PrinterSolutions() {
  const [selectedPrinter, setSelectedPrinter] = useState(0);
  const activePrinter = FEATURED_RENTAL_PRINTERS[selectedPrinter];

  return (
    <section id="printers" className="py-12 sm:py-16 md:py-20 bg-white text-[#1c1c1e] border-y border-[#e6e6e6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Growth Vertical — Hardware Fleet"
          title="Enterprise Printer Rental Solutions"
          description="Complete printing technology ecosystem — from high-speed A3/A4 multifunction printers to free consumables, maintenance, and instant support."
          align="center"
        />

        {/* PRINTER MODEL SELECTOR CAROUSEL / TABS */}
        <div className="mt-8 sm:mt-10 flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#f8f8f6] border border-[#e6e6e6] max-w-full card-shadow">
            {FEATURED_RENTAL_PRINTERS.map((printer, i) => (
              <button
                key={printer.id}
                onClick={() => setSelectedPrinter(i)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  selectedPrinter === i
                    ? "bg-[#0284c7] text-white shadow-md shadow-[#0284c7]/20 font-bold"
                    : "text-[#5f6368] hover:text-[#1c1c1e] hover:bg-black/5"
                }`}
              >
                {printer.brand} {printer.model.replace(/^HP (Color )?LaserJet Managed (MFP )?/, "").replace(/^Konica Bizhub /, "").replace(/^Kyocera TASKalfa /, "").replace(/^Sharp /, "")} ({printer.speed})
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE FEATURED PRINTER CARD SPOTLIGHT */}
        <FadeIn key={activePrinter.id} delay={0.1}>
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 lg:p-10 rounded-[20px] sm:rounded-[24px] bg-[#f8f8f6] border border-[#e6e6e6] hover:border-[#0284c7]/40 card-shadow transition-all duration-500 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Image (Fully unclipped) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-[20px] bg-white p-4 border border-[#e6e6e6] shadow-sm flex items-center justify-center group overflow-visible">
                  <Image
                    src={activePrinter.image}
                    alt={activePrinter.model}
                    fill
                    className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
                      {activePrinter.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Specs & Offerings */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
                    {activePrinter.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#d97706]/10 text-[#d97706] border border-[#d97706]/20">
                    {activePrinter.speed} SPEED
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#1c1c1e] border border-[#e6e6e6]">
                    {activePrinter.output}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#1c1c1e] border border-[#e6e6e6]">
                    {activePrinter.tray}
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1c1c1e] mt-1">
                  {activePrinter.model}
                </h3>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-[#e6e6e6] text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5f6368] block">Print Speed</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0284c7]">{activePrinter.speed}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#e6e6e6] text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5f6368] block">Feeder</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0284c7]">ADF Feeder</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#e6e6e6] text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5f6368] block">Duplex</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0284c7]">Auto 2-Sided</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#e6e6e6] text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5f6368] block">Network</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0284c7]">Gigabit LAN</span>
                  </div>
                </div>

                <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-[#5f6368]">
                  {activePrinter.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#0284c7] flex-shrink-0" />
                      <span className="text-[#1c1c1e] font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 items-center">
                  <Button asChild size="default" className="bg-[#0284c7] text-white font-bold hover:bg-[#0284c7]/90 text-xs uppercase tracking-wider">
                    <Link href="/printer-rental#contact-rental">
                      Request Rental Quote for {activePrinter.brand}
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="default" className="border-[#e6e6e6] text-[#1c1c1e] hover:bg-black/5 text-xs uppercase tracking-wider">
                    <Link href="/printer-rental">Explore Full Printer Fleet</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* 9 PRINTER MODEL CARDS GRID */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6368] mb-6 text-center">
            Complete Rental Fleet Models
          </h3>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURED_RENTAL_PRINTERS.map((printer, i) => (
              <StaggerItem key={printer.id}>
                <div
                  onClick={() => setSelectedPrinter(i)}
                  className={`h-full p-5 sm:p-6 rounded-[20px] bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between group card-shadow hover:card-shadow-hover ${
                    selectedPrinter === i
                      ? "border-[#0284c7] shadow-lg shadow-[#0284c7]/10"
                      : "border-[#e6e6e6] hover:border-[#0284c7]/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
                        {printer.brand}
                      </span>
                      <span className="text-xs font-bold text-[#d97706]">
                        {printer.speed}
                      </span>
                    </div>

                    {/* Card Image Container (Fully unclipped) */}
                    <div className="relative w-full h-44 sm:h-48 md:h-52 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] p-3 mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={printer.image}
                        alt={printer.model}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#1c1c1e] group-hover:text-[#0284c7] transition-colors leading-snug">
                      {printer.model}
                    </h4>

                    <div className="mt-2 flex flex-wrap gap-1 text-[10px] sm:text-[11px] font-semibold text-[#5f6368]">
                      <span className="bg-[#f8f8f6] border border-[#e6e6e6] px-2 py-0.5 rounded">{printer.output}</span>
                      <span className="bg-[#f8f8f6] border border-[#e6e6e6] px-2 py-0.5 rounded">{printer.tray}</span>
                      <span className="bg-[#0284c7]/10 text-[#0284c7] px-2 py-0.5 rounded">ADF & Duplex</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#e6e6e6] flex items-center justify-between text-xs font-semibold text-[#0284c7] group-hover:translate-x-1 transition-transform">
                    <span>View Specifications & Rent</span>
                    <span>→</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Managed Services Included Strip */}
        <FadeIn delay={0.25}>
          <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-[20px] bg-[#f8f8f6] border border-[#e6e6e6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={26} className="text-[#0284c7] flex-shrink-0" />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#1c1c1e]">All-Inclusive Printer Rental Guarantee</h4>
                <p className="text-xs text-[#5f6368]">Free Toner Supply • 100% Maintenance & Repairs • 4-Hour On-Site Support Response</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {PRINTER_SERVICES.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white text-[#1c1c1e] border border-[#e6e6e6]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
