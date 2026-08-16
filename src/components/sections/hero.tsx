"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-12 bg-gradient-to-b from-white via-[#f8f8f6] to-[#f8f8f6] border-b border-[#e6e6e6] overflow-hidden"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#a20160]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#0284c7]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 z-10">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a20160]/10 border border-[#a20160]/20 text-[#a20160] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                Artisan Label Manufacturing
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#1c1c1e] leading-[1.08] text-balance">
                Precision Labels Engineered for Global Brands
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg md:text-xl text-[#5f6368] leading-relaxed max-w-2xl text-balance">
                Delivering high-volume self-adhesive labeling, pharmaceutical compliance packaging, and luxury brand finishes with micron-level accuracy.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Button asChild size="lg" className="bg-[#a20160] text-white hover:bg-[#a20160]/90 h-13 px-7 rounded-[14px] text-sm font-semibold tracking-wide uppercase">
                  <Link href="#labels">
                    Explore Label Catalog
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#e6e6e6] text-[#1c1c1e] hover:bg-black/5 h-13 px-7 rounded-[14px] text-sm font-semibold tracking-wide uppercase">
                  <Link href="#contact">Request Quote</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-14 pt-8 border-t border-[#e6e6e6] grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#1c1c1e] font-serif-heading">50M+</div>
                  <div className="text-xs text-[#5f6368] uppercase tracking-wider mt-1 font-medium">Labels Produced</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#1c1c1e] font-serif-heading">99%</div>
                  <div className="text-xs text-[#5f6368] uppercase tracking-wider mt-1 font-medium">Quality Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#a20160] font-serif-heading">ISO 9001</div>
                  <div className="text-xs text-[#5f6368] uppercase tracking-wider mt-1 font-medium">Certified Quality</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative z-10">
            <FadeIn delay={0.3} direction="left">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[28px] overflow-hidden p-3 bg-white border border-[#e6e6e6] card-shadow-hover">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_22_PM.png"
                    alt="Precision Label Manufacturing Showcase"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1c1c1e] text-xs font-semibold shadow-md">
                    <CheckCircle2 size={15} className="text-[#a20160]" />
                    <span>Luxury & Enterprise Compliant</span>
                  </div>

                  {/* Bottom Glass Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-5 rounded-[18px] bg-white/90 backdrop-blur-md border border-white/40 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#a20160]/10 flex items-center justify-center text-[#a20160] shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1c1c1e]">Micron-Level Flexo & Digital Print</h4>
                        <p className="text-xs text-[#5f6368]">High-speed continuous web printing with 100% inspection.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
