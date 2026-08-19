"use client";

import { useEffect, useState } from "react";
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
}: AnimatedCounterProps) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={cn("text-center p-4 sm:p-5 rounded-[16px] bg-white border border-[#e6e6e6] card-shadow", className)}>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1c1c1e] tabular-nums">
        {count}
        <span className="text-[#a20160] font-extrabold">{suffix}</span>
      </div>
      <p className="mt-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5f6368]">
        {label}
      </p>
    </div>
  );
}
