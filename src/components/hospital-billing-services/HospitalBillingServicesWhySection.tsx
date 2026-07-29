"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionLeadClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingWhySectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesWhySectionProps {
  data?: HospitalBillingWhySectionData;
}

export default function HospitalBillingServicesWhySection({
  data,
}: HospitalBillingServicesWhySectionProps) {
  const content = data || defaultHospitalBillingServicesData.why;
  const questions =
    content.questions && content.questions.length > 0
      ? content.questions
      : defaultHospitalBillingServicesData.why.questions;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-why-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <MotionWrapper variant="fadeUp" className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-12">
          <h2 id="hospital-billing-services-why-heading" className={hospitalSectionTitleClassName}>
            Why <span className={hospitalSectionHighlightClassName}>BellMedEx</span>?
          </h2>
          <p className={hospitalSectionLeadClassName}>{content.subtitle}</p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {questions.map((question, index) => (
            <MotionWrapper key={question || index} variant="staggerItem">
              <div className={cn(hospitalCardClassName, "flex items-start gap-3 p-4 sm:p-5")}>
                <ChevronRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#475569] stroke-[2.5]"
                  aria-hidden="true"
                />
                <p className={hospitalSectionBodyClassName}>{question}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper variant="fadeUp" className="mx-auto mt-10 max-w-3xl space-y-4 text-left sm:mt-12">
          <h3 className="text-base font-bold leading-snug text-[#0F172A] sm:text-lg">{content.subheading}</h3>
          <p className={hospitalSectionBodyClassName}>{content.paragraph1}</p>
          <p className={hospitalSectionBodyClassName}>{content.paragraph2}</p>
        </MotionWrapper>

        <MotionWrapper
          variant="fadeUp"
          className={cn(
            hospitalCardClassName,
            "mx-auto mt-10 flex max-w-4xl flex-col items-start gap-5 p-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
          )}
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#1D4ED8] bg-blue-50/50 sm:h-24 sm:w-24">
            <span className="text-2xl font-bold tracking-tight text-[#1D4ED8] sm:text-3xl">
              {content.statValue}
            </span>
          </div>
          <p className={hospitalSectionBodyClassName}>{content.statDescription}</p>
        </MotionWrapper>
      </div>
    </section>
  );
}
