"use client";

import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const CERT_METADATA: Record<string, { tag: string; detail: string }> = {
  "ISO 9001:2015": { tag: "Quality Management", detail: "Certified high-standard manufacturing & zero-defect QA protocols." },
  "ISO 14001": { tag: "Environmental Standard", detail: "Sustainable substrate sourcing & waste management practices." },
  "FSSC 22000": { tag: "Food & Packaging Safety", detail: "Strict compliance for direct food & beverage container labels." },
  "GMP Compliant": { tag: "Pharma Manufacturing", detail: "Good Manufacturing Practice certified for pharmaceutical packaging." },
};

export function Certifications() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#f8fafc] via-white to-[#f8f8f6] border-t border-border relative overflow-hidden">
      {/* Golden Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Global Compliance"
          title="International Quality & Safety Certifications"
          description="Certified processes ensuring full compliance with stringent global manufacturing, food safety, and pharmaceutical requirements."
          align="center"
        />

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {CERTIFICATIONS.map((cert) => {
            const meta = CERT_METADATA[cert.title] || { tag: "Global Standard", detail: "Verified compliance certificate." };
            return (
              <StaggerItem key={cert.title}>
                <div className="group h-full p-7 rounded-[24px] bg-white border border-border/80 text-center hover:border-amber-500/50 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden">
                  {/* Gold Top Line Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 text-amber-600 group-hover:scale-110 transition-transform duration-400 mb-5">
                      <Award size={30} strokeWidth={1.75} />
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-700 border border-amber-500/20 inline-block mb-2">
                      {meta.tag}
                    </span>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-amber-700 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-center gap-1 text-xs font-bold text-emerald-600">
                    <CheckCircle2 size={14} />
                    <span>Verified Audit Active</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

