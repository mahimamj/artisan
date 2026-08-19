"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LABEL_CATEGORIES } from "@/lib/constants";
import {
  FadeIn,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

export function LabelsDivision() {
  return (
    <section id="labels" className="section-padding bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Business"
          title="Premium Label Manufacturing"
          description="The foundation of Artisan Ventures — precision-engineered labels for the world's most demanding industries."
        />

        <div className="mt-8 sm:mt-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {LABEL_CATEGORIES.map((category) => (
              <StaggerItem key={category.title}>
                <div className="group h-full rounded-[20px] bg-background-secondary border border-border p-6 flex flex-col justify-between transition-all duration-300 card-shadow hover:card-shadow-hover hover:border-magenta/30">
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden mb-5 bg-background border border-border">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-foreground-secondary leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-magenta group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowUpRight size={16} />
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
