"use client";

import {
  Crosshair,
  Layers,
  Shield,
  Leaf,
  Zap,
  Truck,
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

export function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Why Artisan"
          title="Engineering Excellence You Can Trust"
          description="Six pillars that define our commitment to precision, quality, and partnership."
          align="center"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {WHY_CHOOSE.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <div className="group h-full p-8 lg:p-9 rounded-[16px] bg-background-secondary border border-border hover:border-magenta/20 card-shadow hover:card-shadow-hover transition-all duration-400">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-background border border-border group-hover:border-magenta/20 group-hover:bg-magenta/5 transition-all duration-400">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-foreground-secondary group-hover:text-magenta transition-colors duration-400"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-foreground-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
