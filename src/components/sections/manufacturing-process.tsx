"use client";

import { MANUFACTURING_STEPS } from "@/lib/constants";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from "@/components/motion/fade-in";
import { Search, Palette, Printer, Sparkles, Scissors, ShieldCheck, Truck } from "lucide-react";

const STEP_ICONS = [Search, Palette, Printer, Sparkles, Scissors, ShieldCheck, Truck];

export function ManufacturingProcess() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#f8fafc] via-white to-[#f8f8f6] overflow-hidden relative border-t border-border">
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-magenta/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="7-Step Quality Pipeline"
          title="7-Stage Manufacturing Excellence"
          description="Every single label passes through our rigorous 7-stage production & automated optical inspection pipeline before dispatch."
          align="center"
        />

        <div className="mt-12 sm:mt-16 relative">
          {/* Illuminated Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[64px] left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-magenta/20 via-magenta to-[#0284c7]/40 z-0" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 lg:gap-3">
            {MANUFACTURING_STEPS.map((step, index) => {
              const IconComponent = STEP_ICONS[index % STEP_ICONS.length];
              return (
                <StaggerItem key={step.title}>
                  <div className="group h-full flex flex-col items-center text-center p-5 rounded-[22px] bg-white border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1.5 relative z-10">
                    {/* Glowing Number Badge */}
                    <div className="relative mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-white to-[#f8f8f6] border border-border/90 card-shadow group-hover:border-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-400">
                        <IconComponent size={24} className="text-magenta group-hover:text-white transition-colors duration-400" />
                      </div>
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-magenta text-white shadow-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Quality Guarantee Callout */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20">
              <Sparkles size={14} />
              Zero-Defect Automated Camera Inspection Guaranteed On Every Roll
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

