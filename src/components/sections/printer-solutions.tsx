"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Printer } from "lucide-react";
import { FEATURED_RENTAL_PRINTERS, PRINTER_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function PrinterSolutions() {
  const [selectedPrinter, setSelectedPrinter] = useState(0);
  const activePrinter = FEATURED_RENTAL_PRINTERS[selectedPrinter];

  return (
    <section id="printers" className="section-padding bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Growth Vertical — Hardware Fleet"
          title="Enterprise Printer Rental Solutions"
          description="Complete printing technology ecosystem — from high-speed A3/A4 multifunction printers to free consumables, maintenance, and instant support."
          dark
          align="center"
        />

        {/* PRINTER MODEL SELECTOR CAROUSEL / TABS */}
        <div className="mt-12 flex justify-center overflow-x-auto pb-4 scrollbar-none">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-white/[0.06] border border-white/10 max-w-full">
            {FEATURED_RENTAL_PRINTERS.map((printer, i) => (
              <button
                key={printer.id}
                onClick={() => setSelectedPrinter(i)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  selectedPrinter === i
                    ? "bg-cyan text-dark shadow-lg shadow-cyan/20 font-bold"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {printer.brand} {printer.model.replace(/^HP (Color )?LaserJet Managed (MFP )?/, "").replace(/^Konica Bizhub /, "").replace(/^Kyocera TASKalfa /, "").replace(/^Sharp /, "")} ({printer.speed})
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE FEATURED PRINTER CARD SPOTLIGHT */}
        <FadeIn key={activePrinter.id} delay={0.1}>
          <div className="mt-8 p-8 lg:p-12 rounded-[28px] bg-white/[0.04] border border-white/15 hover:border-cyan/40 transition-all duration-500 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-[24px] bg-white p-6 shadow-2xl flex items-center justify-center overflow-hidden group">
                  <Image
                    src={activePrinter.image}
                    alt={activePrinter.model}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-dark text-cyan border border-cyan/30">
                      {activePrinter.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Specs & Offerings */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan/20 text-cyan border border-cyan/30">
                    {activePrinter.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {activePrinter.speed} SPEED
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/15">
                    {activePrinter.output}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/15">
                    {activePrinter.tray}
                  </span>
                </div>

                <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                  {activePrinter.model}
                </h3>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Print Speed</span>
                    <span className="text-sm font-bold text-cyan">{activePrinter.speed}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Feeder</span>
                    <span className="text-sm font-bold text-cyan">ADF Feeder</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Duplex</span>
                    <span className="text-sm font-bold text-cyan">Auto 2-Sided</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Network</span>
                    <span className="text-sm font-bold text-cyan">Gigabit LAN</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                  {activePrinter.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Button asChild size="lg" className="bg-cyan text-dark font-bold hover:bg-cyan/90">
                    <Link href="/printer-rental#contact-rental">
                      Request Rental Quote for {activePrinter.brand}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/printer-rental">Explore Full Printer Fleet</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* 6 PRINTER MODEL CARDS GRID */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-8 text-center">
            Complete Rental Fleet Models
          </h3>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_RENTAL_PRINTERS.map((printer, i) => (
              <StaggerItem key={printer.id}>
                <div
                  onClick={() => setSelectedPrinter(i)}
                  className={`h-full p-6 rounded-[20px] bg-white/[0.03] border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    selectedPrinter === i
                      ? "border-cyan bg-white/[0.07] shadow-xl shadow-cyan/10"
                      : "border-white/10 hover:border-white/30 hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan/15 text-cyan border border-cyan/25">
                        {printer.brand}
                      </span>
                      <span className="text-xs font-bold text-amber-400">
                        {printer.speed}
                      </span>
                    </div>

                    <div className="relative w-full aspect-[4/3] rounded-xl bg-white p-3 mb-5 overflow-hidden flex items-center justify-center">
                      <Image
                        src={printer.image}
                        alt={printer.model}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan transition-colors">
                      {printer.model}
                    </h4>

                    <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-semibold text-white/70">
                      <span className="bg-white/10 px-2 py-0.5 rounded">{printer.output}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded">{printer.tray}</span>
                      <span className="bg-cyan/10 text-cyan px-2 py-0.5 rounded">ADF & Duplex</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan group-hover:translate-x-1 transition-transform">
                    <span>View Specifications & Rent</span>
                    <span>→</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Managed Services Included Strip */}
        <FadeIn delay={0.3}>
          <div className="mt-16 p-6 rounded-[20px] bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-cyan flex-shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white">All-Inclusive Printer Rental Guarantee</h4>
                <p className="text-xs text-white/60">Free Toner Supply • 100% Maintenance & Repairs • 4-Hour On-Site Support Response</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {PRINTER_SERVICES.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
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
