"use client";

import { TESTIMONIALS, CLIENT_LOGOS } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";
import { Quote, CheckCircle2, Building2 } from "lucide-react";

const TESTIMONIAL_COLORS = [
  "from-white via-white to-[#fff0f6] border-[#81014d]/30 hover:border-[#81014d]/60",
  "from-white via-white to-[#f0f9ff] border-[#026aa0]/30 hover:border-[#026aa0]/60",
  "from-white via-white to-[#fffbe8] border-[#ae5f05]/30 hover:border-[#ae5f05]/60",
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#eaeae7] via-[#f4f4f1] to-[#eaeae7] border-t border-[#d8d8d5] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#81014d]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Enterprise Trust"
          title="Client Testimonials & Enterprise Reputation"
          description="Hear from supply chain, operations, and quality leaders who rely on Artisan Ventures for precision manufacturing."
          align="center"
        />

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {TESTIMONIALS.map((testimonial, idx) => {
            const cardTheme = TESTIMONIAL_COLORS[idx % TESTIMONIAL_COLORS.length];
            return (
              <StaggerItem key={testimonial.author}>
                <blockquote className={`group h-full flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-gradient-to-br ${cardTheme} border card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 relative overflow-hidden`}>
                  {/* Large Background Quote Watermark */}
                  <Quote className="absolute -top-2 -right-2 text-[#81014d]/10 h-28 w-28 pointer-events-none group-hover:text-[#81014d]/20 transition-colors duration-400" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-500 text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        Verified Client
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic font-medium relative z-10">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <footer className="mt-8 pt-5 border-t border-border/60 relative z-10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#1c1c1e] text-sm sm:text-base">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-[#5f6368] font-medium mt-0.5">
                        {testimonial.role}, <span className="text-[#81014d] font-bold">{testimonial.company}</span>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-white border border border-border/80 flex items-center justify-center text-[#81014d] shrink-0 shadow-xs">
                      <Building2 size={20} />
                    </div>
                  </footer>
                </blockquote>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-16 sm:mt-20 pt-10 border-t border-border/60">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-foreground-secondary/80 mb-8">
              Trusted by Top National & Global Corporations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-6">
              {CLIENT_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-base sm:text-lg font-bold tracking-tight text-foreground/30 hover:text-magenta transition-colors duration-300 cursor-default select-none uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

