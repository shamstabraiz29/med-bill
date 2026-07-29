"use client";

import React from "react";
import BillingWorkflowStepCard from "@/components/medical-billing/BillingWorkflowStepCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesWorkProcessSectionProps {
  data?: LargePracticesPageData["workProcess"];
}

export default function LargePracticesWorkProcessSection({
  data,
}: LargePracticesWorkProcessSectionProps) {
  const content = data || defaultLargePracticesData.workProcess;
  const rawSteps =
    content.steps && content.steps.length > 0
      ? content.steps
      : defaultLargePracticesData.workProcess.steps;

  return (
    <section
      className={cn(largePracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="large-practices-work-process-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="large-practices-work-process-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
        >
          {rawSteps.map((step, index) => {
            const Icon = getIcon(step.iconName || "CheckCircle2");

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
