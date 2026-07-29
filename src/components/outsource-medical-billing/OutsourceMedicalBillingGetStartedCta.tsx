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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D4ED8]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
              <SectionBadge variant="dark" pulse>
                {content.badge}
              </SectionBadge>

              <h2
                id="outsource-medical-billing-get-started-cta-heading"
                className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-3xl sm:leading-snug lg:text-4xl"
              >
                {content.titleLine1}{" "}
                <span className="text-amber-300">{content.titleHighlight}</span>
              </h2>

              <p className="mt-5 text-sm leading-[1.65] text-blue-200 sm:mt-6 sm:text-base">
                {content.subtitle}
              </p>

              <div className="mt-8 w-full sm:mt-10 sm:w-auto">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto sm:min-w-[200px]"
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
