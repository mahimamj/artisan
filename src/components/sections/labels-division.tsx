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
    <section id="labels" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Core Business"
          title="Premium Label Manufacturing"
          description="The foundation of Artisan Ventures — precision-engineered labels for the world's most demanding industries."
        />

        <div className="mt-16 lg:mt-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {LABEL_CATEGORIES.map((category) => (
              <StaggerItem key={category.title}>
                <article className="group relative overflow-hidden rounded-[16px] bg-background-secondary card-shadow hover:card-shadow-hover transition-all duration-500 cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                        <ArrowUpRight size={18} className="text-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-magenta transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-foreground-secondary leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
