"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {label && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-6 h-[1.5px] bg-[#a20160]" />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]",
              dark ? "text-white/60" : "text-[#a20160]"
            )}
          >
            {label}
          </span>
          <span className="w-6 h-[1.5px] bg-[#a20160]" />
        </div>
      )}
      <h2
        className={cn(
          "font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance",
          dark ? "text-white" : "text-[#1c1c1e]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-balance",
            dark ? "text-white/70" : "text-[#5f6368]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
