"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURED_WORK } from "@/lib/constants";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";
import { ArrowRight, Sparkles, Award } from "lucide-react";

const WORK_METRICS = [
  { metric: "+42% Shelf Standout", highlight: "Waterproof White PP" },
  { metric: "100% FDA Compliant", highlight: "Tamper-Evident Seal" },
  { metric: "+35% Brand Appeal", highlight: "Clear-on-Clear Glass" },
];

export function FeaturedWork() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#f8f8f6] via-white to-[#f8fafc] border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-magenta/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Proven Performance"
          title="Featured Manufacturing Case Studies"
          description="High-performance self-adhesive label engineering delivering measurable shelf impact, compliance assurance, and zero-defect reliability."
          align="center"
        />

        <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
          {FEATURED_WORK.map((project, index) => {
            const meta = WORK_METRICS[index % WORK_METRICS.length];
            return (
              <FadeIn key={project.title} delay={index * 0.1}>
                <article
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[28px] overflow-hidden bg-white border border-border/80 card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 relative"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#f8f8f6] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                    
                    {/* Floating Top Badge */}
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-foreground backdrop-blur-md border border-white/40 shadow-xs flex items-center gap-1">
                        <Sparkles size={11} className="text-magenta" />
                        {meta.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between p-7 sm:p-10 lg:p-12 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-magenta bg-magenta/10 px-3 py-1 rounded-full border border-magenta/20">
                          {project.industry}
                        </span>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1">
                          <Award size={13} />
                          {meta.metric}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug group-hover:text-magenta transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
                      <Link
                        href="/labels#contact"
                        className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-magenta group-hover:text-magenta transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

