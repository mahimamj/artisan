"use client";

import { STATISTICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Sparkles, Trophy, Zap, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const STAT_ICONS = [
  { icon: Trophy, badge: "Industry Benchmark" },
  { icon: Zap, badge: "Low MOQ Flex" },
  { icon: Sparkles, badge: "Hi-Res Print" },
  { icon: ShieldCheck, badge: "ISO 9001:2015" },
];

export function Statistics() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#f8f8f6] via-white to-[#f8f8f6] border-y border-border/70 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-magenta/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0284c7]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATISTICS.map((stat, idx) => {
              const meta = STAT_ICONS[idx % STAT_ICONS.length];
              const IconComp = meta.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-5 sm:p-6 rounded-[22px] bg-white/90 backdrop-blur-md border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta/20 via-magenta to-[#0284c7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-magenta/10 border border-magenta/20 text-magenta group-hover:scale-110 transition-transform duration-300">
                      <IconComp size={18} strokeWidth={2} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-magenta/90 bg-magenta/5 border border-magenta/15 px-2 py-0.5 rounded-full">
                      {meta.badge}
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

