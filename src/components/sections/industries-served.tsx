"use client";

import { INDUSTRIES } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";
import { Sparkles, ArrowRight } from "lucide-react";

const INDUSTRY_DETAILS: Record<string, { icon: string; material: string; desc: string }> = {
  Pharma: { icon: "💊", material: "White PP & Tamper-Evident", desc: "FDA compliance, batch tracking, & tamper safety." },
  Perfume: { icon: "✨", material: "Clear-on-Clear & Metallic Foil", desc: "Ultra-luxury glass bottle & box embellishments." },
  FMCG: { icon: "🥫", material: "Chromo Paper & White PE", desc: "High-speed automated labeling for retail shelf packaging." },
  Cosmetics: { icon: "💄", material: "Waterproof White PP & Silver PP", desc: "Oil & moisture resistant labels for premium skincare." },
  Agrochemicals: { icon: "🌾", material: "Heavy-Duty PE & Chemical Barrier", desc: "Pesticide & fertilizer container durability." },
  Lubricants: { icon: "🛢️", material: "Silver PE & Industrial Film", desc: "Engine oil bottle labels built for oily environments." },
  Nutraceuticals: { icon: "🌿", material: "Silver PP & Matte Lamination", desc: "Vitamins, supplement jars & wellness packaging." },
  Healthcare: { icon: "🏥", material: "Medical Grade Synthetic", desc: "Hospital specimen & diagnostic bottle safety." },
  Logistics: { icon: "📦", material: "Thermal Transfer Barcode", desc: "Inventory barcode & tracking labels." },
};

export function IndustriesServed() {
  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-[#f8f8f6] via-white to-[#f8fafc] border-t border-border relative overflow-hidden">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-magenta/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Enterprise Sectors"
          title="Industries We Serve & Specialize In"
          description="High-precision labeling engineered for strict regulatory, moisture, and aesthetic standards across key Indian & global market sectors."
          align="center"
        />

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRIES.map((industry) => {
            const info = INDUSTRY_DETAILS[industry] || {
              icon: "🏬",
              material: "Custom Substrates",
              desc: "Tailored self-adhesive label solutions.",
            };
            return (
              <StaggerItem key={industry}>
                <div className="group relative flex flex-col justify-between p-6 rounded-[22px] border border-border/80 bg-white hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1.5 cursor-pointer overflow-hidden">
                  {/* Subtle hover gradient top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <span className="text-3xl p-2.5 rounded-2xl bg-[#f8f8f6] border border-border/60 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20 flex items-center gap-1">
                        <Sparkles size={10} />
                        {info.material}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {industry}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {info.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-magenta">
                    <span>View Solutions</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

