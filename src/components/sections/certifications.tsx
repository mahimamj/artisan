"use client";

import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

export function Certifications() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Certifications"
          title="International Quality Standards"
          description="Certified processes ensuring compliance with global manufacturing and safety requirements."
          align="center"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="group h-full p-8 rounded-[16px] bg-background-secondary border border-border text-center hover:border-golden/30 card-shadow hover:card-shadow-hover transition-all duration-400">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background border border-border group-hover:border-golden/30 transition-colors duration-400">
                  <Award
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground-secondary group-hover:text-golden transition-colors duration-400"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  {cert.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
