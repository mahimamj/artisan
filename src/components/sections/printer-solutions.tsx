"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Headphones, Package, Settings, Cpu } from "lucide-react";
import { PRINTER_PRODUCTS, PRINTER_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";

const serviceIcons = [Settings, Wrench, Headphones, Package, Cpu];

export function PrinterSolutions() {
  return (
    <section id="printers" className="section-padding bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              label="Complementary Business"
              title="Industrial Printer Solutions"
              description="Complete printing technology ecosystems — from installation to ongoing technical support."
              dark
            />

            <FadeIn delay={0.2}>
              <div className="mt-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
                  Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRINTER_PRODUCTS.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-3 p-4 rounded-[14px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan/30 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan group-hover:scale-125 transition-transform" />
                      <span className="text-[15px] font-medium text-white/80 group-hover:text-white transition-colors">
                        {product}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
                  Services
                </h3>
                <div className="flex flex-wrap gap-3">
                  {PRINTER_SERVICES.map((service, i) => {
                    const Icon = serviceIcons[i];
                    return (
                      <div
                        key={service}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all duration-300"
                      >
                        <Icon size={14} strokeWidth={1.5} />
                        {service}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10">
                <Button asChild variant="primary" size="lg">
                  <Link href="#contact">
                    Explore Solutions
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Industrial printing systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  30% of Business
                </span>
                <p className="mt-2 text-lg font-medium text-white/80 leading-relaxed">
                  Enterprise-grade printing technology complementing our core label manufacturing expertise.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
