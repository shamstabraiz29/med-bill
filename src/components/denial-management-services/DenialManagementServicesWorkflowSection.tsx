"use client";

import React from "react";
import BillingWorkflowStepCard from "@/components/medical-billing/BillingWorkflowStepCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementWorkflowStep,
  DenialManagementWorkflowSectionData,
} from "@/payload/types/denialManagementServices";

function WorkflowTimelineStep({
  step,
  index,
  align,
}: {
  step: DenialManagementWorkflowStep;
  index: number;
  align: "left" | "right";
}) {
  const Icon = getIcon(step.iconName || "CheckCircle2");
  const isLeft = align === "left";

  return (
    <div className="relative grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8">
      <div
        className={cn(
          "min-w-0",
          isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"
        )}
      >
        <BillingWorkflowStepCard
          step={index + 1}
          icon={Icon}
          title={step.title}
          description={step.description}
          className="h-full border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5"
        />
      </div>

      <div className="relative z-10 flex justify-center md:col-start-2 md:row-start-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50/80 bg-[#1D4ED8] text-sm font-bold text-white shadow-sm">
          {index + 1}
        </div>
      </div>

      <div
        aria-hidden="true"
        className={cn("hidden min-w-0 md:block", isLeft ? "md:col-start-3" : "md:col-start-1 md:row-start-1")}
      />
    </div>
  );
}

interface DenialManagementServicesWorkflowSectionProps {
  data?: DenialManagementWorkflowSectionData;
}

export default function DenialManagementServicesWorkflowSection({
  data,
}: DenialManagementServicesWorkflowSectionProps) {
  const content = data || defaultDenialManagementServicesData.workflow;
  const steps =
    content.steps && content.steps.length > 0
      ? content.steps
      : defaultDenialManagementServicesData.workflow.steps;

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-workflow-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-30"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <SectionHeader
          align="center"
          className="mx-auto mb-8 max-w-4xl sm:mb-10"
          title={
            <span id="denial-management-services-workflow-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
        />

        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-12">
          <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">{content.paragraph1}</p>
          <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">{content.paragraph2}</p>
          <p className="text-sm font-semibold text-[#0F172A] sm:text-base">{content.stepsSubheading}</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#1D4ED8]/20 via-[#1D4ED8]/40 to-[#1D4ED8]/20 md:block"
          />

          <MotionWrapper variant="stagger" staggerDelay={0.06} className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <MotionWrapper key={step.title || index} variant="staggerItem">
                <WorkflowTimelineStep
                  step={step}
                  index={index}
                  align={index % 2 === 0 ? "left" : "right"}
                />
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
