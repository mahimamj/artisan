"use client";

import { motion } from "framer-motion";
import { Layers, Zap, CheckCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { useQuoteModal } from "@/context/quote-modal-context";

export function FlexoDigitalIntro() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background border-t border-border/80 relative overflow-hidden">
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#81014d]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#026aa0]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Printing Technology & Capabilities"
          title="Flexo & Digital Printing Solutions"
          description="Tailored manufacturing technologies matching your exact order volume, turnaround time, and customization requirements."
          align="center"
        />

        <div className="mt-12 sm:mt-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* FLEXO PRINTING CARD */}
            <StaggerItem>
              <div className="h-full p-8 sm:p-10 rounded-[28px] bg-white border border-border/90 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#81014d] to-[#ae5f05]" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#81014d]/10 text-[#81014d]">
                      <Layers size={24} />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#81014d]/10 text-[#81014d] border border-[#81014d]/20">
                      LONG-RUN JOBS
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1c1c1e] tracking-tight">
                    Flexographic Printing
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[#4a4d52] leading-relaxed">
                    Engineered for high-volume commercial production runs delivering maximum cost efficiency for brand owners.
                  </p>

                  <div className="mt-8 space-y-3.5 border-t border-border/60 pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#81014d] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Best for Mass Production:</strong> Ideal for 10,000 to millions of units
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#81014d] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Lowest Unit Cost:</strong> Economical per-label cost for large-scale enterprise jobs
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#81014d] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Inline Embellishments:</strong> Cold foil, rotary embossing, tactile textures & varnish
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <button
                    onClick={() => openQuoteModal("Flexo Long-Run Quote")}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#81014d] hover:bg-[#6b0140] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request High-Volume Flexo Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* DIGITAL PRINTING CARD */}
            <StaggerItem>
              <div className="h-full p-8 sm:p-10 rounded-[28px] bg-white border border-border/90 card-shadow hover:card-shadow-hover transition-all duration-400 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#026aa0] to-[#81014d]" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#026aa0]/10 text-[#026aa0]">
                      <Zap size={24} />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#026aa0]/10 text-[#026aa0] border border-[#026aa0]/20">
                      SHORT-RUN JOBS (MIN MOQ 500)
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1c1c1e] tracking-tight">
                    Digital Printing (Kalpa Digi World)
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[#4a4d52] leading-relaxed">
                    High-definition digital printing tailored for short-runs, multi-SKU launches, and custom quick-turnaround orders.
                  </p>

                  <div className="mt-8 space-y-3.5 border-t border-border/60 pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#026aa0] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Short-Run Flexibility:</strong> Minimum Order Quantity starting at just <strong>500 Qty</strong>
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#026aa0] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Zero Plate Charges:</strong> Rapid setup with no upfront die or cylinder tooling fees
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#026aa0] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c1c1e]">
                        <strong>Variable Data Printing:</strong> Unique QR codes, barcodes, batch numbers & multi-variant packaging
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <button
                    onClick={() => openQuoteModal("Digital Short-Run Quote")}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#026aa0] hover:bg-[#025682] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Digital Short-Run Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
