"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HospitalBillingServicesGauge from "./HospitalBillingServicesGauge";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingResultsSectionData } from "@/payload/types/hospitalBillingServices";

function AnimatedMetricValue({
  value,
  valuePrefix,
}: {
  value: string;
  valuePrefix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return value;
    return `0${match[2] || ""}`;
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return;

    const rawNumStr = match[1].replace(/,/g, "");
    const suffix = match[2] || "";
    const target = parseFloat(rawNumStr);
    if (Number.isNaN(target)) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1500;
          const startTime = performance.now();
          const decimals = rawNumStr.includes(".") ? rawNumStr.split(".")[1]?.length || 0 : 0;

          function update(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
            const current = easeProgress * target;
            setDisplayValue(`${current.toFixed(decimals)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  if (valuePrefix) {
    return (
      <span ref={ref} className="inline-flex items-baseline gap-1.5">
        <span className="text-lg font-bold text-[#1D4ED8] sm:text-xl">{valuePrefix}</span>
        <span className="text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#1D4ED8] sm:text-5xl">
          {displayValue}
        </span>
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className="block text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#1D4ED8] sm:text-5xl"
    >
      {displayValue}
    </span>
  );
}

interface HospitalBillingServicesResultsSectionProps {
  data?: HospitalBillingResultsSectionData;
}

export default function HospitalBillingServicesResultsSection({
  data,
}: HospitalBillingServicesResultsSectionProps) {
  const content = data || defaultHospitalBillingServicesData.results;
  const hospitalTypes =
    content.hospitalTypes && content.hospitalTypes.length > 0
      ? content.hospitalTypes
      : defaultHospitalBillingServicesData.results.hospitalTypes;
  const metrics =
    content.metrics && content.metrics.length > 0
      ? content.metrics
      : defaultHospitalBillingServicesData.results.metrics;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-results-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="hospital-billing-services-results-heading">
              {content.titlePlain}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper variant="fadeUp" delay={0.05}>
          <div className={`${hospitalCardClassName} mb-8 p-6 sm:p-8 lg:mb-10`}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-4">
              {hospitalTypes.map((type, idx) => (
                <div key={type || idx} className="flex items-center gap-2.5 text-left">
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-[#1D4ED8] stroke-[2.5]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-snug text-[#0F172A] sm:text-base">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {metrics.map((metric, idx) => (
            <MotionWrapper key={metric.label || idx} variant="staggerItem" className="h-full">
              <div className="group flex h-full flex-col items-center rounded-2xl border border-[#E2E6EC] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8">
                <AnimatedMetricValue value={metric.value} valuePrefix={metric.valuePrefix} />
                <p className="mt-3 text-sm font-bold text-[#0F172A] sm:text-base">{metric.label}</p>
                <HospitalBillingServicesGauge
                  percent={metric.gaugePercent}
                  className="mt-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
