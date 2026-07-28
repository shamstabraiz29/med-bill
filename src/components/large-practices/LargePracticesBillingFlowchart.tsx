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

interface LargePracticesBillingFlowchartProps {
  data?: LargePracticesPageData["billingFlowchart"];
}

export default function LargePracticesBillingFlowchart({ data }: LargePracticesBillingFlowchartProps) {
  const content = data || defaultLargePracticesData.billingFlowchart;
  const rawSteps = content.steps && content.steps.length > 0 ? content.steps : defaultLargePracticesData.billingFlowchart.steps;

  return (
    <section
      className={largePracticeSectionClassName}
      aria-labelledby="large-practices-flowchart-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-flowchart-heading">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {rawSteps.map((step, idx) => (
            <MotionWrapper key={step.stepNumber || idx} variant="staggerItem" className="h-full">
              <div
                className={`${largePracticeCardClassName} flex h-full flex-col p-6 sm:p-7 text-left transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#1D4ED8]">
                    {step.stepNumber}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#475569]">
                  {step.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
