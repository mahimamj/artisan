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

const PILLAR_COLORS = [
  { text: "text-[#81014d]", bg: "bg-[#81014d]/10", border: "border-[#81014d]/30", gradient: "from-[#81014d]/10 via-white to-white" },
  { text: "text-[#026aa0]", bg: "bg-[#026aa0]/10", border: "border-[#026aa0]/30", gradient: "from-[#026aa0]/10 via-white to-white" },
  { text: "text-[#ae5f05]", bg: "bg-[#ae5f05]/10", border: "border-[#ae5f05]/30", gradient: "from-[#ae5f05]/10 via-white to-white" },
  { text: "text-[#059669]", bg: "bg-[#059669]/10", border: "border-[#059669]/30", gradient: "from-[#059669]/10 via-white to-white" },
  { text: "text-[#7c3aed]", bg: "bg-[#7c3aed]/10", border: "border-[#7c3aed]/30", gradient: "from-[#7c3aed]/10 via-white to-white" },
  { text: "text-[#0d9488]", bg: "bg-[#0d9488]/10", border: "border-[#0d9488]/30", gradient: "from-[#0d9488]/10 via-white to-white" },
];

export function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#eaeae7] via-[#f4f4f1] to-[#eaeae7] border-t border-[#d8d8d5] relative overflow-hidden">
      {/* Visual Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#81014d]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Why Choose Artisan"
          title="Engineering Excellence You Can Count On"
          description="Six core pillars defining our commitment to manufacturing precision, innovation, and long-term enterprise partnership."
          align="center"
        />

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {WHY_CHOOSE.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const metric = METRICS[feature.title] || "Enterprise Standard";
            const theme = PILLAR_COLORS[idx % PILLAR_COLORS.length];
            return (
              <StaggerItem key={feature.title}>
                <div className={`group h-full p-7 sm:p-8 rounded-[26px] bg-gradient-to-br ${theme.gradient} border ${theme.border} card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden`}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-[20px] ${theme.bg} ${theme.border} border ${theme.text} group-hover:scale-110 transition-transform duration-400`}>
                        <Icon size={26} strokeWidth={2} />
                      </div>
                      <span className={`px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${theme.text} ${theme.bg} border ${theme.border}`}>
                        {metric}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold tracking-tight text-[#1c1c1e] group-hover:${theme.text} transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#4a4d52] leading-relaxed">
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

