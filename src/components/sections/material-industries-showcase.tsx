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

export function MaterialIndustriesShowcase() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background border-t border-border/80 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* MATERIAL IN SQUARE BLOCKS */}
        <SectionHeader
          label="Label Substrates & Materials"
          title="High-Performance Label Substrate Portfolio"
          description="Select from our high-precision paper, waterproof film, luxury metallic, and crystal-clear glass finish substrates engineered for enterprise packaging."
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

      </div>
    </section>
  );
}
