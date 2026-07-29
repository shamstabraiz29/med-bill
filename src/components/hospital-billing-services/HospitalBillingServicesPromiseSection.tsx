"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionBodyClassName,
  hospitalSectionClassName,
  hospitalSectionHighlightClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingPromiseSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesPromiseSectionProps {
  data?: HospitalBillingPromiseSectionData;
}

export default function HospitalBillingServicesPromiseSection({
  data,
}: HospitalBillingServicesPromiseSectionProps) {
  const content = data || defaultHospitalBillingServicesData.promise;
  const cards =
    content.cards && content.cards.length > 0
      ? content.cards
      : defaultHospitalBillingServicesData.promise.cards;

  return (
    <section
      className={cn(hospitalSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="hospital-billing-services-promise-heading"
    >
      <div className={hospitalContainerClassName}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="hospital-billing-services-promise-heading">
              {content.titlePlain}
              <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {cards.map((card, idx) => (
            <MotionWrapper key={card.title || idx} variant="fadeUp" delay={idx * 0.05}>
              <article className={cn(hospitalCardClassName, "h-full p-5 sm:p-6")}>
                <h3 className="text-base font-bold leading-snug text-[#0F172A] sm:text-lg">
                  {card.title}
                </h3>
                <p className={cn("mt-3", hospitalSectionBodyClassName)}>{card.description}</p>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
