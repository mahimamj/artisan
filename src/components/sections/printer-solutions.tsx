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
    <section id="printers" className="section-padding bg-gradient-to-b from-[#f4f4f1] via-[#e2e8f0]/40 to-[#eaeae7] text-[#1c1c1e] border-y border-[#d8d8d5] relative overflow-hidden">
      {/* Visual Accent Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#026aa0]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#81014d]/10 blur-[140px] rounded-full pointer-events-none" />

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
              className="h-full p-6 sm:p-7 rounded-[26px] bg-gradient-to-br from-white via-white to-[#f0f9ff] border border-[#026aa0]/30 hover:border-[#026aa0]/70 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#026aa0] via-[#03acec] to-[#026aa0] opacity-90" />

              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#026aa0]/10 text-[#026aa0] border border-[#026aa0]/30 flex items-center gap-1.5">
                    <Sparkles size={12} />
                    {printer.brand}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#ae5f05]/10 text-[#ae5f05] border border-[#ae5f05]/30">
                    {printer.speed}
                  </span>
                </div>

                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-52 sm:h-56 rounded-[20px] bg-gradient-to-b from-[#f8fafc] via-white to-[#e0f2fe] border border-[#026aa0]/20 p-3 mb-5 flex items-center justify-center overflow-hidden group-hover:border-[#026aa0]/50 transition-colors">
                  <Image
                    src={printer.image}
                    alt={printer.model}
                    fill
                    className="object-contain p-3 group-hover:scale-108 transition-transform duration-600 ease-out"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#1c1c1e] border border-[#026aa0]/30 shadow-xs">
                      {printer.output}
                    </span>
                  </div>
                </div>

                {/* Model Title */}
                <h3 className="text-2xl font-bold text-[#1c1c1e] mb-2 leading-snug group-hover:text-[#026aa0] transition-colors">
                  {printer.model}
                </h3>

                {/* Feature Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#f1f5f9] border border-border/80 text-[#1c1c1e] text-[11px] font-bold px-3 py-1 rounded-lg">
                    Paper Tray: {printer.tray}
                  </span>
                  <span className="bg-[#026aa0]/10 text-[#026aa0] text-[11px] font-bold px-3 py-1 rounded-lg border border-[#026aa0]/20">
                    ADF + Duplex + Network
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 pt-4 border-t border-border/60 text-xs sm:text-sm">
                  {printer.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#026aa0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#334155] font-semibold">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-4 border-t border-border/60">
                <Button asChild className="w-full bg-[#026aa0] text-white hover:bg-[#025682] font-bold uppercase tracking-wider text-xs h-11 rounded-[14px] shadow-md shadow-[#026aa0]/25 transition-all duration-300">
                  <Link href="/printer-rental#contact-rental" className="flex items-center justify-center gap-2">
                    <span>Rent {printer.brand} Model</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#026aa0] text-white hover:bg-[#025682] font-bold uppercase tracking-wider text-xs sm:text-sm h-12 px-8 rounded-full shadow-lg shadow-[#026aa0]/30 hover:shadow-xl hover:shadow-[#026aa0]/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <Link href="/printer-rental#catalog">
              <span>Explore More Printer Rental Models</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* All-Inclusive Managed Services Guarantee Banner */}
        <FadeIn delay={0.2}>
          <div className="mt-12 sm:mt-16 p-7 sm:p-9 rounded-[28px] bg-gradient-to-r from-white via-[#f0f9ff] to-white border border-[#026aa0]/30 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#026aa0]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex items-start sm:items-center gap-4 relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-[#026aa0]/15 border border-[#026aa0]/40 flex items-center justify-center text-[#026aa0] shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0f172a]">100% Comprehensive Rental Service Guarantee</h4>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed max-w-2xl">
                  Every rental unit includes free genuine toner supply, complete maintenance, hardware breakdown replacement, and rapid 4-hour on-site technician response across Gujarat.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10 shrink-0">
              {PRINTER_SERVICES.map((s) => (
                <span key={s} className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#026aa0]/10 text-[#026aa0] border border-[#026aa0]/30 flex items-center gap-1.5">
                  <Wrench size={14} className="text-[#026aa0]" />
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

