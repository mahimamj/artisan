"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
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
}: FadeInProps) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
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
}: StaggerContainerProps) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
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
    <div className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {label && (
        <div
          className={cn(
            "flex items-center gap-3 mb-3 sm:mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-6 h-[1.5px] bg-[#a20160]" />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]",
              dark ? "text-[#0284c7]" : "text-[#a20160]"
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
          dark ? "text-[#1c1c1e]" : "text-[#1c1c1e]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-balance text-[#5f6368]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
