"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
  dark = false,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight tabular-nums",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {count}
        <span className="text-magenta">{suffix}</span>
      </div>
      <p
        className={cn(
          "mt-3 text-sm md:text-base font-medium tracking-wide",
          dark ? "text-white/50" : "text-foreground-secondary"
        )}
      >
        {label}
      </p>
    </div>
  );
}
