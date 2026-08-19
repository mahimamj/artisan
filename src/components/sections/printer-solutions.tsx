"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FEATURED_RENTAL_PRINTERS, PRINTER_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/motion/fade-in";

export function PrinterSolutions() {
  return (
    <section id="printers" className="section-padding bg-white text-[#1c1c1e] border-y border-[#e6e6e6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Growth Vertical — Hardware Fleet"
          title="Enterprise Printer Rental Fleet (All 9 Models)"
          description="Explore our complete line-up of A3 and A4 multifunction printer rental models from HP, Konica Minolta, Kyocera, Sharp, and Brother — all with free toner, maintenance, and service."
          align="center"
        />

        {/* 9 FULL FEATURED PRINTER CARDS SHOWCASE GRID */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_RENTAL_PRINTERS.map((printer) => (
            <div
              key={printer.id}
              className="h-full p-5 sm:p-6 rounded-[20px] bg-[#f8f8f6] border border-[#e6e6e6] hover:border-[#0284c7]/50 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
                    {printer.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d97706]/10 text-[#d97706] border border-[#d97706]/20">
                    {printer.speed} SPEED
                  </span>
                </div>

                {/* Unclipped Image Container */}
                <div className="relative w-full h-44 sm:h-48 md:h-52 rounded-[14px] bg-white border border-[#e6e6e6] p-2.5 mb-4 flex items-center justify-center overflow-hidden group-hover:border-[#0284c7]/30 transition-colors">
                  <Image
                    src={printer.image}
                    alt={printer.model}
                    fill
                    className="object-contain p-2 group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 text-[#1c1c1e] border border-[#e6e6e6] shadow-xs">
                      {printer.output}
                    </span>
                  </div>
                </div>

                {/* Model Title */}
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#1c1c1e] mb-2 leading-snug group-hover:text-[#0284c7] transition-colors">
                  {printer.model}
                </h3>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-white border border-[#e6e6e6] text-[#1c1c1e] text-[10px] font-semibold px-2 py-0.5 rounded">
                    {printer.tray}
                  </span>
                  <span className="bg-[#0284c7]/10 text-[#0284c7] text-[10px] font-semibold px-2 py-0.5 rounded">
                    ADF + Duplex + Network
                  </span>
                </div>

                {/* Checklist */}
                <ul className="space-y-1.5 pt-3 border-t border-[#e6e6e6] text-xs text-[#5f6368]">
                  {printer.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#0284c7] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1c1c1e] font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-4 border-t border-[#e6e6e6]">
                <Button asChild className="w-full bg-[#0284c7] text-white hover:bg-[#0284c7]/90 font-bold uppercase tracking-wider text-xs h-10 rounded-[10px] shadow-sm">
                  <Link href="/printer-rental#contact-rental">
                    Rent {printer.brand} ({printer.speed})
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Managed Services Included Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-[20px] bg-[#f8f8f6] border border-[#e6e6e6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#0284c7]/10 border border-[#0284c7]/20 flex items-center justify-center text-[#0284c7] shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1c1c1e]">All 9 Printer Models Include Full Support</h4>
              <p className="text-xs text-[#5f6368] mt-0.5">Free Genuine Toner Replenishment • 100% Maintenance & Repairs • 4-Hour On-Site Support Response</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {PRINTER_SERVICES.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-[#1c1c1e] border border-[#e6e6e6]">
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
