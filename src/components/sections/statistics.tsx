"use client";

import { STATISTICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Sparkles, Trophy, Zap, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const STAT_THEMES = [
  { icon: Trophy, badge: "Industry Leader", color: "text-[#81014d]", bg: "bg-[#81014d]/10", border: "border-[#81014d]/30", gradient: "from-[#81014d]/10 via-white to-white" },
  { icon: Zap, badge: "Low MOQ Flex", color: "text-[#026aa0]", bg: "bg-[#026aa0]/10", border: "border-[#026aa0]/30", gradient: "from-[#026aa0]/10 via-white to-white" },
  { icon: Sparkles, badge: "Hi-Res Print", color: "text-[#ae5f05]", bg: "bg-[#ae5f05]/10", border: "border-[#ae5f05]/30", gradient: "from-[#ae5f05]/10 via-white to-white" },
  { icon: ShieldCheck, badge: "ISO Certified", color: "text-[#059669]", bg: "bg-[#059669]/10", border: "border-[#059669]/30", gradient: "from-[#059669]/10 via-white to-white" },
];

export function Statistics() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#eaeae7] via-[#f4f4f1] to-[#eaeae7] border-y border-[#d8d8d5] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#81014d]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#026aa0]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATISTICS.map((stat, idx) => {
              const theme = STAT_THEMES[idx % STAT_THEMES.length];
              const IconComp = theme.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative p-5 sm:p-6 rounded-[22px] bg-gradient-to-br ${theme.gradient} border ${theme.border} card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.bg} ${theme.border} border ${theme.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp size={20} strokeWidth={2} />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider ${theme.color} ${theme.bg} border ${theme.border} px-2.5 py-1 rounded-full`}>
                      {theme.badge}
                    </span>
                  </div>

                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    className="p-0 bg-transparent border-0 shadow-none text-left"
                  />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

