"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import PlatformRatingCards from "@/components/common/PlatformRatingCards";
import { getIcon } from "@/lib/icons";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementStatsSectionData } from "@/payload/types/denialManagementServices";

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return value;
    const rawNumStr = match[1].replace(/,/g, "");
    const target = parseFloat(rawNumStr);
    return Number.isNaN(target) ? value : "0";
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return;

    const rawNumStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const target = parseFloat(rawNumStr);
    if (Number.isNaN(target)) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    function animateCount() {
      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
        const current = Math.floor(easeProgress * target);
        setDisplayValue(`${current.toLocaleString()}${suffix}`);

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

  return <span ref={ref}>{displayValue}</span>;
}

interface DenialManagementServicesStatsSectionProps {
  data?: DenialManagementStatsSectionData;
}

export default function DenialManagementServicesStatsSection({
  data,
}: DenialManagementServicesStatsSectionProps) {
  const content = data || defaultDenialManagementServicesData.stats;

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-stats-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <SectionHeader
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="denial-management-services-stats-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mb-16 lg:gap-8"
        >
          {content.mainStats.map((stat, idx) => {
            const Icon = getIcon(stat.iconName || "Target");

            return (
              <MotionWrapper key={stat.label || idx} variant="staggerItem" className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#E2E6EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8">
                  <div>
                    <div className="mb-6 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 stroke-[1.25]" aria-hidden="true" />
                    </div>
                    <span className="block text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#0F172A] sm:text-5xl">
                      <AnimatedCounter value={stat.value} />
                    </span>
                    <span className="mt-4 block text-sm font-bold uppercase tracking-wide text-[#0F172A]">
                      {stat.label}
                    </span>
                  </div>
                  {stat.subLabel && (
                    <span className="mt-2 block text-[13px] leading-[1.6] text-[#475569]">
                      {stat.subLabel}
                    </span>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <PlatformRatingCards
          ratings={content.ratingBadges}
          className="mb-16 lg:mb-20"
          ariaLabel="BellMedEx denial management platform ratings"
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <MotionWrapper variant="slideLeft" className="lg:col-span-6">
            <h2 className="mb-5 text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
              {content.bottomTitlePlain}
              <span className="text-[#1D4ED8]">{content.bottomTitleHighlight}</span>
            </h2>
            <p className="mb-8 text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.bottomDescription}
            </p>

            <div className="mb-8 grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
              {content.checklist.map((item, idx) => (
                <div
                  key={item.label || idx}
                  className="flex items-center gap-3 rounded-xl border border-[#E2E6EC] bg-white px-4 py-3.5 transition-all duration-200 hover:border-[#1D4ED8]/20 hover:shadow-sm"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium tracking-tight text-[#475569] sm:text-[13px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <AppButton href={content.ctaHref} variant="primary" size="lg" showArrow>
              {content.ctaText}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="relative grid w-full grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:col-span-6 lg:pt-0"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#1D4ED8]/10 blur-3xl"
            />

            <div className="group relative flex h-full min-h-80 flex-col justify-between rounded-2xl border border-[#E2E6EC] bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8">
              <div>
                <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-blue-700">
                  {content.happinessScore.badge}
                </span>
                <div className="my-6">
                  <span className="block text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#1D4ED8] sm:text-5xl">
                    <AnimatedCounter value={content.happinessScore.value} />
                  </span>
                  <p className="mt-4 text-xs leading-[1.6] text-[#475569] sm:text-[13px]">
                    {content.happinessScore.description}
                  </p>
                </div>
              </div>
              <Link
                href={content.happinessScore.linkHref}
                className="group/link mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                {content.happinessScore.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>

            <div className="group relative flex h-full min-h-80 flex-col justify-between rounded-2xl border border-[#E2E6EC] bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8">
              <div>
                <span className="inline-flex items-center rounded-full border border-[#0F172A]/10 bg-[#0F172A] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                  {content.payorSpeed.badge}
                </span>
                <div className="my-6">
                  <span className="block text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#0F172A] sm:text-5xl">
                    <AnimatedCounter value={content.payorSpeed.value} />
                  </span>
                  <p className="mt-4 text-xs leading-[1.6] text-[#475569] sm:text-[13px]">
                    {content.payorSpeed.description}
                  </p>
                </div>
              </div>
              <Link
                href={content.payorSpeed.linkHref}
                className="group/link mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E3A8A]"
              >
                {content.payorSpeed.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
