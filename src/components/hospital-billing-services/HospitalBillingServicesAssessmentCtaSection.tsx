"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingAssessmentCtaSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesAssessmentCtaSectionProps {
  data?: HospitalBillingAssessmentCtaSectionData;
}

export default function HospitalBillingServicesAssessmentCtaSection({
  data,
}: HospitalBillingServicesAssessmentCtaSectionProps) {
  const content = data || defaultHospitalBillingServicesData.assessmentCta;

  return (
    <section
      className={hospitalSectionClassName}
      aria-labelledby="hospital-billing-services-assessment-cta-heading"
    >
      <div className={hospitalContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <h2
                  id="hospital-billing-services-assessment-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {content.titlePlain}
                  <span className="font-bold text-amber-300">{content.titleHighlight}</span>
                  {content.titleSuffix}
                </h2>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
                <AppButton
                  href={content.buttonHref || "/contact-us"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  {content.buttonText}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
