"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  FileCheck,
  Layers,
  LucideIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  outsourceCardClassName,
  outsourceContainerClassName,
  outsourceSectionClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceSpecialistsData } from "@/payload/types/outsourceMedicalBilling";

const ICON_MAP: Record<string, LucideIcon> = {
  FileCheck,
  Layers,
  ShieldCheck,
  Users,
};

function AnimatedMetricBar({
  label,
  value,
  icon: Icon,
  index,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  index: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
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
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    function animateCount() {
      const duration = 1400 + index * 120;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(Math.round(easeProgress * value));

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
    <div ref={ref} className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <IconWrapper
            icon={Icon}
            size="sm"
            variant="surface"
            className="shrink-0"
          />
          <p className="pt-1 text-xs font-semibold leading-snug text-[#0F172A] sm:text-sm">
            {label}
          </p>
        </div>
        <span className="shrink-0 text-lg font-extrabold tabular-nums tracking-[-0.03em] text-[#1D4ED8] sm:text-xl">
          {displayValue}
          <span className="text-[0.65em] align-top">%</span>
        </span>
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={displayValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-[#1D4ED8] transition-[width] duration-300 ease-out"
          style={{ width: `${displayValue}%` }}
        />
      </div>
    </div>
  );
}

interface OutsourceMedicalBillingSpecialistsProps {
  data?: OutsourceSpecialistsData;
}

export default function OutsourceMedicalBillingSpecialists({ data }: OutsourceMedicalBillingSpecialistsProps) {
  const content = data || defaultOutsourceMedicalBillingData.specialists;
  const rawPoints = content.points && content.points.length > 0 ? content.points : defaultOutsourceMedicalBillingData.specialists.points;
  const pointsList = rawPoints.map((p: any) => (typeof p === "string" ? p : p.text || ""));
  const metricsList = content.metrics && content.metrics.length > 0 ? content.metrics : defaultOutsourceMedicalBillingData.specialists.metrics;

  return (
    <section
      className={cn(outsourceSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="outsource-medical-billing-specialists-heading"
    >
      <div className={outsourceContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="outsource-medical-billing-specialists-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <MotionWrapper variant="slideLeft" className="h-full">
            <div className={cn(outsourceCardClassName, "h-full")}>
              <h3 className="text-xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
                We have the expertise to manage each phase with absolute accuracy.
              </h3>

              <p className="mt-4 text-sm leading-[1.65] text-[#475569] sm:text-base">
                As billing specialists, we lend you a helping hand to
              </p>

              <ul className="mt-6 space-y-4">
                {pointsList.map((item, index) => (
                  <li key={item || index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8] ring-1 ring-[#1D4ED8]/15">
                      <CheckCircle2 className="h-3.5 w-3.5 stroke-[2]" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="h-full">
            <div
              className={cn(
                outsourceCardClassName,
                "relative h-full overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/40"
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1D4ED8]/5 blur-2xl"
              />

              <MotionWrapper
                variant="stagger"
                staggerDelay={0.1}
                className="relative z-10 space-y-6 sm:space-y-7"
              >
                {metricsList.map((metric, index) => {
                  const Icon = (metric.iconName && ICON_MAP[metric.iconName]) || FileCheck;

                  return (
                    <MotionWrapper key={metric.label || index} variant="staggerItem">
                      <AnimatedMetricBar
                        label={metric.label}
                        value={metric.value}
                        icon={Icon}
                        index={index}
                      />
                    </MotionWrapper>
                  );
                })}
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
