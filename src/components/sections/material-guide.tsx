"use client";

import { useState } from "react";
import { Check, Sparkles, Layers, ShieldCheck, Box } from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const MATERIAL_RANGE = [
  {
    name: "Chromo Paper",
    tag: "Economical & Versatile",
    description: "High-gloss paper stock ideal for fast-moving consumer goods and dry product packaging.",
    bestFor: "Food packaging, retail cartons, dry-use items, barcodes & price tags.",
    properties: ["High Print Clarity", "Cost Effective", "Smooth Gloss Finish"],
  },
  {
    name: "White PP (Polypropylene)",
    tag: "Waterproof & Durable",
    description: "Tear-resistant film built to withstand moisture, oils, and harsh handling.",
    bestFor: "Cosmetics, shampoos, pharmaceuticals, beverage bottles.",
    properties: ["Water & Oil Proof", "Squeezable & Flexible", "Gloss / Matte Lamination"],
  },
  {
    name: "White PE (Polyethylene)",
    tag: "Ultra Flexible & Squeezable",
    description: "Highly flexible film that conforms perfectly to curved, squeezable containers without wrinkling.",
    bestFor: "Squeeze bottles, detergents, liquid soap, personal care products.",
    properties: ["No-Crease Flexibility", "Chemical Resistance", "Strong Adhesive Bond"],
  },
  {
    name: "Silver PP / PE",
    tag: "Premium Metallic Finish",
    description: "Reflective metallic substrates that give labels a high-end luxury foil look.",
    bestFor: "Nutraceuticals, premium cosmetics, engine oils, luxury items.",
    properties: ["Mirror Metallic Effect", "High Shelf Appeal", "Custom Tinting Capable"],
  },
  {
    name: "Transparent PP / PE",
    tag: "No-Label Look",
    description: "Crystal-clear film that blends seamlessly into transparent containers.",
    bestFor: "Glass bottles, clear PET jars, cosmetic lotions, premium drinks.",
    properties: ["Seamless Transparency", "UV Resistant", "Waterproof Performance"],
  },
  {
    name: "Clear-on-Clear Labels",
    tag: "Ultra-Premium Glass Finish",
    description: "Highest clarity liner and facestock for invisible label edge illusion.",
    bestFor: "High-end skincare, perfumes, luxury glass bottle packaging.",
    properties: ["Zero Haze Clarity", "Luxury Packaging Standard", "Precision Die-Cutting"],
  },
];

const FINISHING_OPTIONS = [
  {
    title: "Foil Stamping (Hot / Cold)",
    description: "Gold, silver, rose gold, and holographic metallic accents that command immediate shelf attention.",
    icon: Sparkles,
  },
  {
    title: "Spot UV & Tactile Varnish",
    description: "Selective gloss highlights and 3D textured varnish to create tactile luxury experiences.",
    icon: Layers,
  },
  {
    title: "Matte & Gloss Lamination",
    description: "Protective film barriers that shield against scuffing, water, chemicals, and outdoor UV rays.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Layer & Booklet Labels",
    description: "Extended printable surface area for complex pharma ingredients, usage instructions, or multi-language legal details.",
    icon: Box,
  },
];

export function MaterialGuide() {
  const [activeTab, setActiveTab] = useState<"materials" | "finishing">("materials");

  return (
    <section id="materials" className="section-padding bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Substrates & Enhancements"
          title="Material & Finishing Range"
          description="Tailored label materials and premium embellishments designed for maximum durability and visual impact."
          align="center"
        />

        {/* Tab Selector Buttons */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-background-secondary border border-border card-shadow">
            <button
              onClick={() => setActiveTab("materials")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "materials"
                  ? "bg-magenta text-white shadow-md shadow-magenta/20"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              Label Substrates & Materials
            </button>
            <button
              onClick={() => setActiveTab("finishing")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "finishing"
                  ? "bg-magenta text-white shadow-md shadow-magenta/20"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              Finishing & Embellishments
            </button>
          </div>
        </div>

        {/* MATERIALS GRID */}
        {activeTab === "materials" && (
          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATERIAL_RANGE.map((mat) => (
              <StaggerItem key={mat.name}>
                <div className="group h-full flex flex-col justify-between p-8 rounded-[20px] bg-background-secondary border border-border hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20">
                        {mat.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {mat.name}
                    </h3>
                    <p className="mt-3 text-[14px] text-foreground-secondary leading-relaxed">
                      {mat.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-border/60">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-secondary/70 block mb-2">
                        Best Applications
                      </span>
                      <p className="text-xs text-foreground font-medium leading-relaxed">
                        {mat.bestFor}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <ul className="space-y-2">
                      {mat.properties.map((prop) => (
                        <li key={prop} className="flex items-center gap-2 text-xs text-foreground-secondary">
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
          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FINISHING_OPTIONS.map((finish) => {
              const Icon = finish.icon;
              return (
                <StaggerItem key={finish.title}>
                  <div className="group p-8 lg:p-10 rounded-[20px] bg-background-secondary border border-border hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 flex items-start gap-6">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-[16px] bg-magenta/10 border border-magenta/20 text-magenta group-hover:scale-110 transition-transform duration-300">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                        {finish.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-foreground-secondary leading-relaxed">
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
