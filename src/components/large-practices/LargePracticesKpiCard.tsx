"use client";

import React, { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";
import { largePracticeCardClassName } from "./largePracticeSectionLayout";

export interface LargePracticesKpiCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  index: number;
  className?: string;
}

export default function LargePracticesKpiCard({
  icon,
  label,
  value,
  index,
  className,
}: LargePracticesKpiCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          animateCount();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    function animateCount() {
      const duration = 1400 + index * 80;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = easeProgress * value;
        setDisplayValue(current);
        setBarWidth(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    return () => {
      observer.disconnect();
    };
  }, [index, value]);

  return (
    <div
      ref={ref}
      className={cn(
        largePracticeCardClassName,
        "group flex h-full flex-col p-5 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6",
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <IconWrapper
          icon={icon}
          size="sm"
          variant="surface"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-2xl font-extrabold leading-none tracking-[-0.03em] text-[#1D4ED8] sm:text-3xl">
          {displayValue.toFixed(1)}
          <span className="text-[0.55em] align-top">%</span>
        </span>
      </div>

      <p className="mb-4 flex-1 text-xs font-semibold leading-snug text-[#0F172A] sm:text-sm">
        {label}
      </p>

      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={Math.round(barWidth * 10) / 10}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-[#1D4ED8] transition-[width] duration-300 ease-out"
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}
