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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_40%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]"
            />

            <div className="relative z-10">
              <div className="mb-6 flex justify-center sm:mb-8">
                <SectionBadge variant="dark" pulse>
                  {content.badge}
                </SectionBadge>
              </div>

              <h2
                id="outsource-medical-billing-get-started-cta-heading"
                className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
              >
                {content.titleLine1}{" "}
                <span className="text-amber-300">{content.titleHighlight}</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.65] text-blue-200 sm:mt-5 sm:text-base">
                {content.subtitle}
              </p>

              <div className="mt-8 flex justify-center sm:mt-10">
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
