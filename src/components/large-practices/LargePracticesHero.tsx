"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import LargePracticesHeroHeader from "./LargePracticesHeroHeader";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesHeroProps {
  data?: LargePracticesPageData["hero"];
}

export default function LargePracticesHero({ data }: LargePracticesHeroProps) {
  const content = data || defaultLargePracticesData.hero;
  const statsList = content.stats && content.stats.length > 0 ? content.stats : defaultLargePracticesData.hero.stats;

  return (
    <section
      className={largePracticeSectionClassName}
      aria-labelledby="large-practices-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl"
      />

      <div className={`${largePracticeContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col space-y-8 lg:col-span-7">
            <LargePracticesHeroHeader headingId="large-practices-hero-heading" data={content} />

            <MotionWrapper variant="fadeUp" delay={0.25}>
              <AppButton
                href={content.ctaHref || "/contact-bellmedex"}
                variant="primary"
                size="lg"
                showArrow
                className="w-full shadow-md shadow-blue-900/10 sm:w-auto"
              >
                {content.ctaText || "Contact BellMedEx Now"}
              </AppButton>
            </MotionWrapper>
          </div>

          <MotionWrapper variant="scaleUp" delay={0.15} className="lg:col-span-5">
            <div className={`${largePracticeCardClassName} p-8 sm:p-9`}>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[#475569]">
                Large Practice Outcomes
              </p>

              <div className="divide-y divide-[#E2E6EC]">
                {statsList.map((stat, idx) => (
                  <div key={stat.label || idx} className="py-5 first:pt-0 last:pb-0">
                    <p className="text-3xl font-extrabold tracking-[-0.03em] text-[#1D4ED8] sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
