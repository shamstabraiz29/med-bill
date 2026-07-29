"use client";

import React from "react";
import BillingWorkflowStepCard from "@/components/medical-billing/BillingWorkflowStepCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesBillingFlowchartProps {
  data?: LargePracticesPageData["billingFlowchart"];
}

export default function LargePracticesBillingFlowchart({
  data,
}: LargePracticesBillingFlowchartProps) {
  const content = data || defaultLargePracticesData.billingFlowchart;
  const rawSteps =
    content.steps && content.steps.length > 0
      ? content.steps
      : defaultLargePracticesData.billingFlowchart.steps;

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-flowchart-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
      />

      <div className={`${largePracticeContainerClassName} relative z-10`}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="large-practices-flowchart-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
        >
          {rawSteps.map((step, index) => {
            const Icon = getIcon(step.iconName || "FileCheck");

            return (
              <MotionWrapper key={step.title || index} variant="staggerItem" className="h-full">
                <BillingWorkflowStepCard
                  step={index + 1}
                  icon={Icon}
                  title={step.title}
                  description={step.description}
                  className={cn(
                    "h-full border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5"
                  )}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
