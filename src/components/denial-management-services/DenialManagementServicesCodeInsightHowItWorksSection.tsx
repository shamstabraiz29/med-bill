"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementCodeInsightHowItWorksData,
  DenialManagementCodeInsightHowStep,
} from "@/payload/types/denialManagementServices";

function StepDescription({ step }: { step: DenialManagementCodeInsightHowStep }) {
  const { description, highlightPhrase } = step;

  if (!highlightPhrase || !description.includes(highlightPhrase)) {
    return (
      <p className="mt-2 text-sm leading-[1.6] text-[#475569] sm:text-base">{description}</p>
    );
  }

  const parts = description.split(highlightPhrase);

  return (
    <p className="mt-2 text-sm leading-[1.6] text-[#475569] sm:text-base">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-semibold text-blue-600">{highlightPhrase}</span>
          )}
        </React.Fragment>
      ))}
    </p>
  );
}

interface DenialManagementServicesCodeInsightHowItWorksSectionProps {
  data?: DenialManagementCodeInsightHowItWorksData;
}

export default function DenialManagementServicesCodeInsightHowItWorksSection({
  data,
}: DenialManagementServicesCodeInsightHowItWorksSectionProps) {
  const content = data || defaultDenialManagementServicesData.codeInsightHowItWorks;
  const steps =
    content.steps && content.steps.length > 0
      ? content.steps
      : defaultDenialManagementServicesData.codeInsightHowItWorks.steps;
  const imageAlt =
    content.imageAlt || "Healthcare professional reviewing denial management coding workflows";

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-code-insight-how-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-dashed border-[#1D4ED8]/25 sm:h-32 sm:w-32"
              />

              <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
                <AppImage
                  src={content.imageSrc}
                  fallbackSrc="/rcm-doctor-importance.png"
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent" />
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2
              id="denial-management-services-code-insight-how-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </h2>

            <p className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.intro}
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.07}
          className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:gap-x-16 lg:gap-y-12"
        >
          {steps.map((step, index) => (
            <MotionWrapper key={step.title || index} variant="staggerItem">
              <h3 className="text-sm font-bold tracking-[-0.02em] text-[#0F172A] sm:text-base">
                {step.title}:
              </h3>
              <StepDescription step={step} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
