"use client";

import { INDUSTRIES } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

export function IndustriesServed() {
  return (
    <section id="industries" className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Serving Global Enterprise"
          description="Trusted by leading brands across diverse sectors requiring precision labeling solutions."
          align="center"
        />

        <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry}>
              <div className="group relative flex items-center justify-center h-28 md:h-32 rounded-[16px] border border-border bg-background hover:bg-background-secondary hover:border-magenta/20 hover:card-shadow transition-all duration-400 cursor-pointer">
                <span className="text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                  {industry}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-magenta group-hover:w-12 transition-all duration-400" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
