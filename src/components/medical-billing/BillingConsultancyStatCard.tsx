"use client";

import React, { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingConsultancyStatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  className?: string;
}

export default function BillingConsultancyStatCard({
  icon,
  value,
  label,
  className,
}: BillingConsultancyStatCardProps) {
  const [displayValue, setDisplayValue] = useState("0.00");
  const [barWidth, setBarWidth] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

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
      const duration = 1600;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = easeProgress * value;
        setDisplayValue(current.toFixed(2));
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
  }, [value]);

  return (
    <Card
      glass={false}
      hoverEffect="none"
      className={cn(
        "group h-full rounded-xl border border-border bg-card shadow-none transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <IconWrapper
            icon={icon}
            size="sm"
            variant="surface"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span
            ref={ref}
            className="text-2xl font-extrabold leading-none tracking-[-0.03em] text-primary sm:text-3xl"
          >
            {displayValue}
            <span className="text-[0.55em] align-top">%</span>
          </span>
        </div>

        <p className="mb-4 flex-1 text-xs font-semibold leading-snug text-foreground sm:text-sm">
          {label}
        </p>

        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={barWidth}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
            style={{ width: `${barWidth}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
