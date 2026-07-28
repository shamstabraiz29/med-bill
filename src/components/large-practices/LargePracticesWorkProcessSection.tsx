"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesWorkProcessStep from "./LargePracticesWorkProcessStep";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesWorkProcessSectionProps {
  data?: LargePracticesPageData["workProcess"];
}

export default function LargePracticesWorkProcessSection({ data }: LargePracticesWorkProcessSectionProps) {
  const content = data || defaultLargePracticesData.workProcess;
  const rawSteps = content.steps && content.steps.length > 0 ? content.steps : defaultLargePracticesData.workProcess.steps;

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-work-process-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-work-process-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {rawSteps.map((step, idx) => (
            <MotionWrapper key={step.stepNumber || idx} variant="staggerItem" className="h-full">
              <LargePracticesWorkProcessStep
                step={step.stepNumber}
                title={step.title}
                description={step.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
