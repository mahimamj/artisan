"use client";

import { useState } from "react";
import { Check, Sparkles, Layers, ShieldCheck, Box, Droplets, Sun, Flame, ShieldAlert } from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

import Image from "next/image";

const MATERIAL_RANGE = [
  {
    name: "Chromo Paper",
    tag: "Economical & Versatile",
    image: "/categories/fmcg/Gemini_Generated_Image_hisj06hisj06hisj.png",
    description: "High-gloss paper stock ideal for fast-moving consumer goods and dry product packaging.",
    bestFor: "Food packaging, retail cartons, dry-use items, barcodes & price tags.",
    properties: ["High Print Clarity", "Cost Effective", "Smooth Gloss Finish"],
    badges: [{ label: "Dry Application", icon: Sun, color: "bg-amber-500/10 text-amber-600 border-amber-500/20" }],
  },
  {
    name: "White PP (Polypropylene)",
    tag: "Waterproof & Durable",
    image: "/categories/cosmetic/Gemini_Generated_Image_hghmnnhghmnnhghm.png",
    description: "Tear-resistant film built to withstand moisture, oils, and harsh handling.",
    bestFor: "Cosmetics, shampoos, pharmaceuticals, beverage bottles.",
    properties: ["Water & Oil Proof", "Squeezable & Flexible", "Gloss / Matte Lamination"],
    badges: [
      { label: "100% Waterproof", icon: Droplets, color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
      { label: "Tear Proof", icon: ShieldAlert, color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
    ],
  },
  {
    name: "White PE (Polyethylene)",
    tag: "Ultra Flexible & Squeezable",
    image: "/categories/cosmetic/Gemini_Generated_Image_fu5cscfu5cscfu5c.png",
    description: "Highly flexible film that conforms perfectly to curved, squeezable containers without wrinkling.",
    bestFor: "Squeeze bottles, detergents, liquid soap, personal care products.",
    properties: ["No-Crease Flexibility", "Chemical Resistance", "Strong Adhesive Bond"],
    badges: [
      { label: "High Flex", icon: Layers, color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
      { label: "Chemical Guard", icon: ShieldCheck, color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
    ],
  },
  {
    name: "Silver PP / PE",
    tag: "Premium Metallic Finish",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png",
    description: "Reflective metallic substrates that give labels a high-end luxury foil look.",
    bestFor: "Nutraceuticals, premium cosmetics, engine oils, luxury items.",
    properties: ["Mirror Metallic Effect", "High Shelf Appeal", "Custom Tinting Capable"],
    badges: [
      { label: "Mirror Chrome", icon: Sparkles, color: "bg-magenta/10 text-magenta border-magenta/20" },
      { label: "UV Barrier", icon: Sun, color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    ],
  },
  {
    name: "Transparent PP / PE",
    tag: "No-Label Look",
    image: "/categories/pharma/Gemini_Generated_Image_9owg3w9owg3w9owg.png",
    description: "Crystal-clear film that blends seamlessly into transparent containers.",
    bestFor: "Glass bottles, clear PET jars, cosmetic lotions, premium drinks.",
    properties: ["Seamless Transparency", "UV Resistant", "Waterproof Performance"],
    badges: [
      { label: "Ultra Clear", icon: Sparkles, color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
      { label: "Glass Bond", icon: Droplets, color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    ],
  },
  {
    name: "Clear-on-Clear Labels",
    tag: "Ultra-Premium Glass Finish",
    image: "/categories/perfume/Gemini_Generated_Image_wsoo7ywsoo7ywsoo.png",
    description: "Highest clarity liner and facestock for invisible label edge illusion.",
    bestFor: "High-end skincare, perfumes, luxury glass bottle packaging.",
    properties: ["Zero Haze Clarity", "Luxury Packaging Standard", "Precision Die-Cutting"],
    badges: [
      { label: "Zero Haze", icon: Sparkles, color: "bg-magenta/10 text-magenta border-magenta/20" },
      { label: "Luxury Grade", icon: ShieldCheck, color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    ],
  },
];

const FINISHING_OPTIONS = [
  {
    title: "Foil Stamping (Hot / Cold)",
    description: "Gold, silver, rose gold, and holographic metallic accents that command immediate shelf attention.",
    icon: Sparkles,
    highlight: "Metallic Sheen",
  },
  {
    title: "Spot UV & Tactile Varnish",
    description: "Selective gloss highlights and 3D textured varnish to create tactile luxury experiences.",
    icon: Layers,
    highlight: "3D Texture Effect",
  },
  {
    title: "Matte & Gloss Lamination",
    description: "Protective film barriers that shield against scuffing, water, chemicals, and outdoor UV rays.",
    icon: ShieldCheck,
    highlight: "Scuff & Water Barrier",
  },
  {
    title: "Multi-Layer & Booklet Labels",
    description: "Extended printable surface area for complex pharma ingredients, usage instructions, or multi-language legal details.",
    icon: Box,
    highlight: "Extended Content",
  },
];

export function MaterialGuide() {
  const [activeTab, setActiveTab] = useState<"materials" | "finishing">("materials");

  return (
    <section id="materials" className="section-padding bg-gradient-to-b from-[#f8f8f6] via-white to-[#fcfcfb] border-t border-border relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-magenta/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Substrates & Embellishments"
          title="Label Material Range & Finishing Guide"
          description="Tailored label substrates and premium finishing embellishments engineered for moisture, durability, and high-impact visual luxury."
          align="center"
        />

        {/* Tab Selector Buttons */}
        <div className="mt-8 sm:mt-10 flex justify-center px-2">
          <div className="w-full max-w-md sm:max-w-none sm:w-auto inline-flex flex-col sm:flex-row p-1.5 rounded-2xl sm:rounded-full bg-white border border-border/90 card-shadow gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab("materials")}
              className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "materials"
                  ? "bg-magenta text-white shadow-md shadow-magenta/25"
                  : "text-foreground-secondary hover:text-foreground hover:bg-[#f8f8f6]"
              }`}
            >
              <Droplets size={14} className="shrink-0" />
              <span>Substrates & Materials ({MATERIAL_RANGE.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("finishing")}
              className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "finishing"
                  ? "bg-magenta text-white shadow-md shadow-magenta/25"
                  : "text-foreground-secondary hover:text-foreground hover:bg-[#f8f8f6]"
              }`}
            >
              <Sparkles size={14} className="shrink-0" />
              <span>Finishing Options ({FINISHING_OPTIONS.length})</span>
            </button>
          </div>
        </div>

        {/* MATERIALS GRID */}
        {activeTab === "materials" && (
          <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {MATERIAL_RANGE.map((mat) => (
              <StaggerItem key={mat.name}>
                <div className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-[24px] bg-white border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1 relative overflow-hidden">
                  <div>
                    {/* Material Background Image Preview Container */}
                    <div className="relative w-full h-44 rounded-[16px] overflow-hidden mb-5 border border-border/60 bg-[#f4f4f1]">
                      <Image
                        src={mat.image}
                        alt={mat.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20">
                        {mat.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {mat.name}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {mat.description}
                    </p>

                    {/* Resistance Radar Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {mat.badges.map((b) => {
                        const BIcon = b.icon;
                        return (
                          <span
                            key={b.label}
                            className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border flex items-center gap-1 ${b.color}`}
                          >
                            <BIcon size={11} />
                            {b.label}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-5 pt-4 border-t border-border/60">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary/70 block mb-1">
                        Recommended Applications
                      </span>
                      <p className="text-xs text-foreground font-semibold leading-relaxed">
                        {mat.bestFor}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/40">
                    <ul className="space-y-1.5">
                      {mat.properties.map((prop) => (
                        <li key={prop} className="flex items-center gap-2 text-xs font-medium text-foreground-secondary">
                          <Check size={14} className="text-magenta flex-shrink-0" />
                          <span>{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* FINISHING GRID */}
        {activeTab === "finishing" && (
          <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {FINISHING_OPTIONS.map((finish) => {
              const Icon = finish.icon;
              return (
                <StaggerItem key={finish.title}>
                  <div className="group p-7 sm:p-8 rounded-[24px] bg-white border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 flex items-start gap-5 relative overflow-hidden">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-magenta/15 to-magenta/5 border border-magenta/25 text-magenta group-hover:scale-110 transition-transform duration-400">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                          {finish.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0">
                          {finish.highlight}
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                        {finish.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}

