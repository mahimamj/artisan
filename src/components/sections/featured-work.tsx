"use client";

import Image from "next/image";
import { FEATURED_WORK } from "@/lib/constants";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";

export function FeaturedWork() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Featured Work"
          description="Precision label solutions delivering measurable impact for enterprise clients."
        />

        <div className="mt-16 lg:mt-20 space-y-8">
          {FEATURED_WORK.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[16px] overflow-hidden bg-background card-shadow hover:card-shadow-hover transition-all duration-500 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center p-8 lg:p-12 xl:p-16 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta">
                    {project.industry}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-[15px] md:text-base text-foreground-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-magenta transition-colors cursor-pointer">
                    View Case Study
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
