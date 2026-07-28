"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden bg-dark"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85"
          alt="Industrial label manufacturing facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 hero-gradient" />
      <Particles />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32 pt-40"
      >
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-accent-line" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Premium Label Manufacturing
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.02] text-white max-w-5xl text-balance">
            Precision Labels Engineered for Global Brands
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Delivering premium labeling and industrial printing solutions with
            unmatched precision, innovation, and reliability.
          </p>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#labels">
                Explore Labels
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-20 flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-white/10">
            {[
              { value: "70%", label: "Label Manufacturing" },
              { value: "30%", label: "Printer Solutions" },
              { value: "99%", label: "Quality Accuracy" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
