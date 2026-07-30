"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import HospitalBillingServicesAffordableAccordion from "./HospitalBillingServicesAffordableAccordion";
import HospitalBillingServicesAffordableVisual from "./HospitalBillingServicesAffordableVisual";
import {
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingAffordableSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesAffordableSectionProps {
  data?: HospitalBillingAffordableSectionData;
}

export default function HospitalBillingServicesAffordableSection({
  data,
}: HospitalBillingServicesAffordableSectionProps) {
  const content = data || defaultHospitalBillingServicesData.affordable;
  const items =
    content.accordionItems && content.accordionItems.length > 0
      ? content.accordionItems
      : defaultHospitalBillingServicesData.affordable.accordionItems;
  const labels =
    content.workflowLabels && content.workflowLabels.length > 0
      ? content.workflowLabels
      : defaultHospitalBillingServicesData.affordable.workflowLabels;
  const imageAlt =
    content.imageAlt || "Healthcare professional reviewing hospital billing and reimbursement";

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-affordable-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2 id="hospital-billing-services-affordable-heading" className={hospitalSectionTitleClassName}>
              {content.title.includes("Your Hospital?") ? (
                <>
                  {content.title.replace("Your Hospital?", "")}
                  <span className={hospitalSectionHighlightClassName}>Your Hospital?</span>
                </>
              ) : (
                content.title
              )}
            </h2>

            <p className={`max-w-2xl ${hospitalSectionBodyClassName}`}>{content.paragraph1}</p>

            <HospitalBillingServicesAffordableAccordion intro={content.accordionIntro} items={items} />
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <HospitalBillingServicesAffordableVisual
              imageSrc={content.imageSrc}
              imageAlt={imageAlt}
              labels={labels}
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
