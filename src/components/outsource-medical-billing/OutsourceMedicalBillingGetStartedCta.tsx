"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  outsourceContainerClassName,
  outsourceSectionClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceGetStartedCtaData } from "@/payload/types/outsourceMedicalBilling";

interface OutsourceMedicalBillingGetStartedCtaProps {
  data?: OutsourceGetStartedCtaData;
}

export default function OutsourceMedicalBillingGetStartedCta({ data }: OutsourceMedicalBillingGetStartedCtaProps) {
  const content = data || defaultOutsourceMedicalBillingData.getStartedCta;

  return (
    <section
      className={`${outsourceSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="outsource-medical-billing-get-started-cta-heading"
    >
      <div className={outsourceContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <SectionBadge variant="dark" pulse>
                  {content.badge}
                </SectionBadge>

                <h2
                  id="outsource-medical-billing-get-started-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {content.titleLine1}{" "}
                  <span className="text-amber-300">{content.titleHighlight}</span>
                </h2>

                <p className="text-sm leading-[1.65] text-blue-200 sm:text-base">
                  {content.subtitle}
                </p>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
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
