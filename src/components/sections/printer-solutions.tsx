"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { FEATURED_RENTAL_PRINTERS, PRINTER_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeader, FadeIn } from "@/components/motion/fade-in";

const HOME_PRINTER_IDS = ["sharp-bp-50m45", "brother-dcp-l5660dn", "canon-ir-c3326"];

export function PrinterSolutions() {
  const homePrinters = FEATURED_RENTAL_PRINTERS.filter((p) =>
    HOME_PRINTER_IDS.includes(p.id)
  ).sort((a, b) => HOME_PRINTER_IDS.indexOf(a.id) - HOME_PRINTER_IDS.indexOf(b.id));

  return (
    <section id="printers" className="section-padding bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f5f9] text-[#1c1c1e] border-y border-border/80 relative overflow-hidden">
      {/* Visual Accent Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0284c7]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-magenta/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Enterprise Fleet Solutions"
          title="Multifunction Industrial Printer Rental Fleet"
          description="Explore our enterprise fleet featuring high-performance A3 & A4 monochrome and color models — zero capital expenditure, 100% free toner, and guaranteed 4-hour service response."
          align="center"
        />

        {/* PRINTER SHOWCASE GRID (Top 3 Models Only) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {homePrinters.map((printer) => (
            <div
              key={printer.id}
              className="h-full p-6 rounded-[24px] bg-white border border-border/90 hover:border-[#0284c7]/60 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20 flex items-center gap-1">
                    <Sparkles size={11} />
                    {printer.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#d97706]/10 text-[#b45309] border border-[#d97706]/20">
                    {printer.speed}
                  </span>
                </div>

                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-48 sm:h-52 rounded-[18px] bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-border/60 p-3 mb-4 flex items-center justify-center overflow-hidden group-hover:border-[#0284c7]/30 transition-colors">
                  <Image
                    src={printer.image}
                    alt={printer.model}
                    fill
                    className="object-contain p-3 group-hover:scale-106 transition-transform duration-600 ease-out"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-white/95 text-[#1c1c1e] border border-border/80 shadow-xs">
                      {printer.output}
                    </span>
                  </div>
                </div>

                {/* Model Title */}
                <h3 className="text-xl font-bold text-[#1c1c1e] mb-2 leading-snug group-hover:text-[#0284c7] transition-colors">
                  {printer.model}
                </h3>

                {/* Feature Specs */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="bg-[#f1f5f9] border border-border/70 text-[#1c1c1e] text-[10px] font-bold px-2.5 py-1 rounded-md">
                    Paper Tray: {printer.tray}
                  </span>
                  <span className="bg-[#0284c7]/10 text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md">
                    ADF + Duplex + Network
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2 pt-3.5 border-t border-border/60 text-xs">
                  {printer.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-[#0284c7] flex-shrink-0 mt-0.5" />
                      <span className="text-[#334155] font-semibold">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-border/60">
                <Button asChild className="w-full bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold uppercase tracking-wider text-xs h-11 rounded-[12px] shadow-md shadow-[#0284c7]/20 transition-all duration-300">
                  <Link href="/printer-rental#contact-rental" className="flex items-center justify-center gap-2">
                    <span>Rent {printer.brand} Model</span>
                    <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold uppercase tracking-wider text-xs sm:text-sm h-12 px-8 rounded-full shadow-lg shadow-[#0284c7]/25 hover:shadow-xl hover:shadow-[#0284c7]/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <Link href="/printer-rental#catalog">
              <span>Explore More Printer Rental Models</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* All-Inclusive Managed Services Guarantee Banner */}
        <FadeIn delay={0.2}>
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[24px] bg-white border border-border/90 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0284c7]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex items-start sm:items-center gap-4 relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-[#0284c7]/10 border border-[#0284c7]/30 flex items-center justify-center text-[#0284c7] shrink-0">
                <ShieldCheck size={30} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">100% Comprehensive Rental Service Guarantee</h4>
                <p className="text-xs sm:text-sm text-[#64748b] mt-1 leading-relaxed">
                  Every rental unit includes free genuine toner supply, complete maintenance, hardware breakdown replacement, and rapid 4-hour on-site technician response across Gujarat.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10 shrink-0">
              {PRINTER_SERVICES.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#f8fafc] text-[#0f172a] border border-border flex items-center gap-1.5">
                  <Wrench size={13} className="text-[#0284c7]" />
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

