"use client";

import {
  Crosshair,
  Layers,
  Shield,
  Leaf,
  Zap,
  Truck,
  Sparkles,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const iconMap = {
  crosshair: Crosshair,
  layers: Layers,
  shield: Shield,
  leaf: Leaf,
  zap: Zap,
  truck: Truck,
};

const METRICS: Record<string, string> = {
  "High Precision": "0.01mm Tolerance",
  "Custom Solutions": "100% Tailored",
  "Quality Standards": "ISO 9001:2015",
  "Sustainable Materials": "Eco Substrates",
  "Fast Turnaround": "24-48 Hour Dispatch",
  "Reliable Delivery": "99.8% On-Time",
};

export function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white via-[#fcfcfb] to-[#f8f8f6] border-t border-border relative overflow-hidden">
      {/* Visual Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-magenta/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Why Choose Artisan"
          title="Engineering Excellence You Can Count On"
          description="Six core pillars defining our commitment to manufacturing precision, innovation, and long-term enterprise partnership."
          align="center"
        />

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {WHY_CHOOSE.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const metric = METRICS[feature.title] || "Enterprise Standard";
            return (
              <StaggerItem key={feature.title}>
                <div className="group h-full p-7 sm:p-8 rounded-[24px] bg-white border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden">
                  {/* Glowing Accent Corner */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-magenta/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-magenta/15 to-magenta/5 border border-magenta/25 text-magenta group-hover:scale-110 transition-transform duration-400">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20">
                        {metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {feature.description}
                    </p>
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

