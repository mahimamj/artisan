"use client";

import { MANUFACTURING_STEPS } from "@/lib/constants";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

export function ManufacturingProcess() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Process"
          title="Manufacturing Excellence"
          description="Every label passes through our rigorous seven-stage production pipeline."
          align="center"
        />

        <div className="mt-16 lg:mt-20 relative">
          <div className="hidden lg:block absolute top-[52px] left-[7%] right-[7%] h-[1px] bg-border" />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-4">
            {MANUFACTURING_STEPS.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="flex lg:flex-col items-start lg:items-center relative group">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-[104px] w-[104px] items-center justify-center rounded-[16px] border border-border bg-background-secondary card-shadow group-hover:border-magenta/30 group-hover:card-shadow-hover transition-all duration-400">
                      <span className="text-2xl font-bold text-foreground group-hover:text-magenta transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {index < MANUFACTURING_STEPS.length - 1 && (
                    <div className="lg:hidden flex items-center ml-[52px] py-3">
                      <div className="text-foreground-secondary/30">↓</div>
                    </div>
                  )}

                  <div className="lg:mt-6 lg:text-center ml-6 lg:ml-0 flex-1 lg:flex-none pb-6 lg:pb-0">
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-secondary leading-relaxed lg:max-w-[160px] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
