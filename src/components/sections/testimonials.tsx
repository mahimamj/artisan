"use client";

import { TESTIMONIALS, CLIENT_LOGOS } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";
import { Quote, CheckCircle2, Building2 } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#f8f8f6] via-white to-[#f8fafc] border-t border-border relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-magenta/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Enterprise Trust"
          title="Client Testimonials & Enterprise Reputation"
          description="Hear from supply chain, operations, and quality leaders who rely on Artisan Ventures for precision manufacturing."
          align="center"
        />

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {TESTIMONIALS.map((testimonial, idx) => (
            <StaggerItem key={testimonial.author}>
              <blockquote className="group h-full flex flex-col justify-between p-7 sm:p-8 rounded-[26px] bg-white border border-border/80 hover:border-magenta/40 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1.5 relative overflow-hidden">
                {/* Large Background Quote Watermark */}
                <Quote className="absolute -top-2 -right-2 text-magenta/5 h-28 w-28 pointer-events-none group-hover:text-magenta/10 transition-colors duration-400" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      Verified Client
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed italic relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <footer className="mt-8 pt-5 border-t border-border/60 relative z-10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground text-sm sm:text-base">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-foreground-secondary font-medium mt-0.5">
                      {testimonial.role}, <span className="text-magenta font-semibold">{testimonial.company}</span>
                    </div>
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-[#f8f8f6] border border-border/60 flex items-center justify-center text-foreground-secondary shrink-0">
                    <Building2 size={18} />
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
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

