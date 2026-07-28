"use client";

import { TESTIMONIALS, CLIENT_LOGOS } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Enterprise clients who rely on Artisan Ventures for precision and reliability."
          align="center"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <blockquote className="h-full flex flex-col p-8 lg:p-9 rounded-[16px] bg-background-secondary border border-border card-shadow hover:card-shadow-hover transition-all duration-400">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-golden text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[15px] text-foreground-secondary leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 pt-6 border-t border-border">
                  <cite className="not-italic">
                    <div className="font-semibold text-foreground text-[15px]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-foreground-secondary mt-0.5">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground-secondary mb-10">
              Trusted by Global Brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {CLIENT_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-lg md:text-xl font-bold tracking-tight text-foreground/20 hover:text-foreground/40 transition-colors duration-300 cursor-default select-none"
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
