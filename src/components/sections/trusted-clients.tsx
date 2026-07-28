"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

const CLIENTS = [
  {
    name: "Alembic",
    logo: "/clients/alembic.png",
    category: "Pharmaceuticals",
  },
  {
    name: "Apollo Hospitals",
    logo: "/clients/apollo.png",
    category: "Healthcare",
  },
  {
    name: "Eris Lifesciences",
    logo: "/clients/eris.png",
    category: "Pharma",
  },
  {
    name: "INTAS Pharmaceuticals",
    logo: "/clients/intas.png",
    category: "Pharma & Biotech",
  },
  {
    name: "Jain Dairy",
    logo: "/clients/jain-dairy.png",
    category: "FMCG & Dairy",
  },
  {
    name: "Larsen & Toubro",
    logo: "/clients/lt.png",
    category: "Engineering",
  },
  {
    name: "Swiss Pharma",
    logo: "/clients/swiss-pharma.png",
    category: "Pharmaceuticals",
  },
  {
    name: "Yanfeng Automotive",
    logo: "/clients/yanfeng.png",
    category: "Automotive",
  },
  {
    name: "Zydus Hospitals",
    logo: "/clients/zydus.png",
    category: "Healthcare",
  }
];

// Duplicate the array to ensure smooth continuous infinite marquee scrolling
const MARQUEE_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export function TrustedClients() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border/40 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-magenta/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">
              Trusted By Industry Leaders
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Esteemed Brands We Manufacture For
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground-secondary leading-relaxed">
              Engineering high-performance self-adhesive label solutions for India's leading enterprises.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CONTINUOUS LEFT-TO-RIGHT MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <motion.div
          className="flex items-center gap-6 md:gap-8 w-max"
          animate={{
            x: ["-50%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {MARQUEE_CLIENTS.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group flex-shrink-0 relative flex flex-col items-center justify-between p-5 md:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-magenta/50 hover:bg-card hover:shadow-xl hover:shadow-magenta/5 transition-all duration-300 transform hover:-translate-y-1.5 w-48 md:w-56 h-36 md:h-40 cursor-pointer"
            >
              <div className="flex-1 w-full flex items-center justify-center p-2">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-16 md:max-h-20 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full text-center pt-2 border-t border-border/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-medium tracking-wide text-foreground-secondary uppercase block truncate">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
