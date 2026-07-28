"use client";

import { STATISTICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";

export function Statistics() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="divider-gradient mb-16" />
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STATISTICS.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="divider-gradient mt-16" />
        </FadeIn>
      </div>
    </section>
  );
}
