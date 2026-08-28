"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { useQuoteModal } from "@/context/quote-modal-context";

const SQUARE_MATERIALS = [
  {
    name: "Chromo Paper",
    sub: "High-Gloss Paper",
    image: "/categories/fmcg/Gemini_Generated_Image_hisj06hisj06hisj.png",
    tag: "DRY GOODS",
  },
  {
    name: "White PP",
    sub: "100% Waterproof Film",
    image: "/categories/cosmetic/Gemini_Generated_Image_hghmnnhghmnnhghm.png",
    tag: "COSMETICS & PHARMA",
  },
  {
    name: "White PE",
    sub: "Ultra Squeezable",
    image: "/categories/cosmetic/Gemini_Generated_Image_fu5cscfu5cscfu5c.png",
    tag: "SQUEEZE BOTTLES",
  },
  {
    name: "Silver PP / PE",
    sub: "Mirror Metallic Foil",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png",
    tag: "LUXURY FOILING",
  },
  {
    name: "Transparent PP",
    sub: "No-Label Look Film",
    image: "/categories/pharma/Gemini_Generated_Image_9owg3w9owg3w9owg.png",
    tag: "CLEAR CONTAINERS",
  },
  {
    name: "Clear-on-Clear",
    sub: "Zero-Haze Glass Finish",
    image: "/categories/perfume/Gemini_Generated_Image_wsoo7ywsoo7ywsoo.png",
    tag: "HIGH-END PERFUME",
  },
];

const ZIGZAG_INDUSTRIES = [
  {
    title: "Pharmaceuticals & Healthcare",
    subtitle: "FDA-Compliant & Tamper-Evident Security Labels",
    description:
      "Precision-engineered security tracking, anti-counterfeiting serialization, and tamper-evident micro-perforated labels engineered for stringent pharmaceutical and hospital compliance.",
    image: "/categories/pharma/Gemini_Generated_Image_9owg3w9owg3w9owg.png",
    highlights: ["Tamper-Evident Void Security", "2D Barcode Serialization", "Cryogenic & Chemical Resistance"],
  },
  {
    title: "Cosmetics & Luxury Fragrances",
    subtitle: "High-Tactile Embossed & Metallic Foil Embellishments",
    description:
      "Stunning tactile finishes featuring hot & cold foil stamping, 3D spot UV varnish, and clear-on-clear no-label substrates designed for high-end beauty, skincare, and perfume bottles.",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png",
    highlights: ["Tactile 3D Embossing", "Gold & Silver Hot Foil", "Oil & Water Resistant PP"],
  },
  {
    title: "FMCG, Food & Retail Packaging",
    subtitle: "High-Speed Rotary Die-Cut Product Labels",
    description:
      "Vibrant high-speed flexo printed labels optimized for high-volume automated applicator lines across food jars, beverages, household products, and retail packaging.",
    image: "/categories/fmcg/Gemini_Generated_Image_hisj06hisj06hisj.png",
    highlights: ["Food-Safe Low Migration Inks", "High Moisture Resistance", "Squeezable PE Substrates"],
  },
];

export function MaterialIndustriesShowcase() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background border-t border-border/80 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* PART 1: MATERIAL IN SQUARE BLOCKS */}
        <SectionHeader
          label="Label Substrates & Materials"
          title="Engineered Material Range in Square Blocks"
          description="Select from our range of high-performance paper, film, metallic, and clear substrates."
          align="center"
        />

        <div className="mt-10 sm:mt-12">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {SQUARE_MATERIALS.map((mat) => (
              <StaggerItem key={mat.name}>
                <div
                  onClick={() => openQuoteModal(mat.name)}
                  className="group relative aspect-square p-4 sm:p-5 rounded-[22px] bg-white border border-border/90 hover:border-magenta/60 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
                >
                  <Image
                    src={mat.image}
                    alt={mat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600 ease-out"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <span className="relative z-10 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-white/90 text-[#1c1c1e] backdrop-blur-md self-start border border-white/40">
                    {mat.tag}
                  </span>

                  {/* Bottom Info */}
                  <div className="relative z-10 text-white">
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {mat.name}
                    </h4>
                    <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5">
                      {mat.sub}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* PART 2: INDUSTRIES IN ZIG-ZAG FORMATION */}
        <div className="mt-20 sm:mt-28">
          <SectionHeader
            label="Industry Specializations"
            title="Industries We Serve in Zig-Zag Formation"
            description="Tailored label manufacturing for specialized industrial applications."
            align="center"
          />

          <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-20">
            {ZIGZAG_INDUSTRIES.map((ind, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <FadeIn key={ind.title}>
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center gap-8 sm:gap-12 lg:gap-16 p-7 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-border/90 card-shadow hover:card-shadow-hover transition-all duration-400`}
                  >
                    {/* Image Block */}
                    <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-[24px] overflow-hidden border border-border/60 bg-[#f4f4f1] shrink-0">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content Block */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20 self-start mb-3">
                        INDUSTRY VERTICAL 0{idx + 1}
                      </span>

                      <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1c1e] tracking-tight">
                        {ind.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm font-semibold text-magenta">
                        {ind.subtitle}
                      </p>

                      <p className="mt-4 text-xs sm:text-base text-[#4a4d52] leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="mt-6 space-y-2.5">
                        {ind.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1c1c1e]">
                            <CheckCircle2 size={16} className="text-magenta shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <button
                          onClick={() => openQuoteModal(ind.title)}
                          className="px-6 py-3 rounded-xl bg-magenta text-white hover:bg-magenta/90 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                        >
                          <span>Inquire For {ind.title}</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
