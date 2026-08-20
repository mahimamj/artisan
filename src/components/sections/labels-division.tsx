"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { LABEL_CATEGORIES } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const CATEGORY_TAGS: Record<string, string[]> = {
  "Pharma Labels": ["Tamper-Evident", "FDA Compliant"],
  "Perfume Labels": ["Tactile Emboss", "Luxury Foil"],
  "FMCG Packaging Labels": ["High-Speed Run", "Vibrant CMYK"],
  "Cosmetic Labels": ["Waterproof PP", "Oil-Resistant"],
  "Pharmaceutical Compliance": ["Security Track", "Zero Defect"],
  "Luxury Fragrance Box Labels": ["Metallic Foil", "Custom Die-Cut"],
  "Food & Beverage Labels": ["Food-Safe Inks", "Moisture Proof"],
  "Skincare & Beauty Labels": ["No-Label Look", "Squeezable PE"],
  "Industrial Barcode & Logistics": ["Thermal Transfer", "High Adhesive"],
};

import { useQuoteModal } from "@/context/quote-modal-context";

export function LabelsDivision() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="labels" className="section-padding bg-background border-t border-border/80 relative overflow-hidden">
      {/* Background Visual Accent Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-magenta/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Division 01 — Manufacturing"
          title="Self-Adhesive Label Solutions & Product Catalog"
          description="High-precision rotary die-cut self-adhesive labels engineered for FMCG, cosmetics, pharmaceuticals, food, and industrial applications."
          align="center"
        />

        {/* CATEGORY SHOWCASE GRID */}
        <div className="mt-10 sm:mt-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {LABEL_CATEGORIES.map((category) => {
              const tags = CATEGORY_TAGS[category.title] || ["Enterprise Grade", "Custom Die-Cut"];
              return (
                <StaggerItem key={category.title}>
                  <div
                    onClick={() => openQuoteModal(category.title)}
                    className="group h-full p-6 sm:p-7 rounded-[24px] bg-white border border-border/90 hover:border-magenta/60 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
                  >
                    {/* Glowing Accent Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Image Container with Zoom */}
                      <div className="relative w-full h-52 sm:h-60 rounded-[18px] overflow-hidden mb-5 border border-border/60 bg-[#f8f8f6]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                        
                        {/* Top Left Floating Tag */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                          {tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-foreground backdrop-blur-md border border-white/40 shadow-xs flex items-center gap-1"
                            >
                              <Sparkles size={10} className="text-magenta" />
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Header Title */}
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300 leading-snug">
                        {category.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Bottom CTA Bar */}
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-magenta group-hover:text-magenta transition-colors">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-magenta/80" />
                        CUSTOM QUOTATION AVAILABLE ↗
                      </span>
                      <div className="h-8 w-8 rounded-full bg-magenta/10 flex items-center justify-center group-hover:bg-magenta group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Global Label Callout Footer Banner */}
        <FadeIn delay={0.2}>
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[24px] bg-gradient-to-r from-[#1c1c1e] to-[#2d2d30] text-white flex flex-col md:flex-row items-center justify-between gap-6 card-shadow">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-magenta/20 border border-magenta/40 flex items-center justify-center text-magenta shrink-0">
                <CheckCircle2 size={26} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Require Custom Label Substrates or High-Volume Runs?</h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1">We print short-run batches starting at 500 units up to millions with zero plate charges on digital equipment.</p>
              </div>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-magenta text-white hover:bg-magenta/90 transition-colors shrink-0 shadow-lg shadow-magenta/30"
            >
              Get Custom Quote →
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
