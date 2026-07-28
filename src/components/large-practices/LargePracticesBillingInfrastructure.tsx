"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesBillingInfrastructureProps {
  data?: LargePracticesPageData["infrastructure"];
}

export default function LargePracticesBillingInfrastructure({ data }: LargePracticesBillingInfrastructureProps) {
  const content = data || defaultLargePracticesData.infrastructure;
  const rawHighlights = content.highlights && content.highlights.length > 0 ? content.highlights : defaultLargePracticesData.infrastructure.highlights;

  return (
    <section
      className={largePracticeSectionClassName}
      aria-labelledby="large-practices-[#0F172A]-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="left"
          className="mb-10 max-w-3xl sm:mb-12"
          title={
            <span id="large-practices-[#0F172A]-heading">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6"
        >
          {rawHighlights.map((item, idx) => (
            <MotionWrapper key={item.title || idx} variant="staggerItem" className="h-full">
              <div
                className={`${largePracticeCardClassName} flex h-full flex-col p-6 text-left transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5`}
              >
                <div className="mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[11px] font-extrabold text-[#1D4ED8]">
                  0{idx + 1}
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
