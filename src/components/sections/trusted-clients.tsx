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

const MARQUEE_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export function TrustedClients() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background border-y border-border/60 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-magenta/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-magenta">
              Trusted By Industry Leaders
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Esteemed Brands We Manufacture For
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground-secondary leading-relaxed">
              Engineering high-performance self-adhesive label solutions for India's leading enterprises.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CONTINUOUS LEFT-TO-RIGHT MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <motion.div
          className="flex items-center gap-4 sm:gap-6 md:gap-8 w-max"
          animate={{
            x: ["-50%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {MARQUEE_CLIENTS.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group flex-shrink-0 relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-border/80 hover:border-magenta/50 card-shadow hover:card-shadow-hover transition-all duration-300 transform hover:-translate-y-1 w-40 sm:w-48 md:w-56 h-28 sm:h-32 md:h-36 cursor-pointer"
            >
              <div className="flex-1 w-full flex items-center justify-center p-1.5">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-12 sm:max-h-14 md:max-h-16 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full text-center pt-1.5 border-t border-border/40">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-foreground-secondary uppercase block truncate">
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
