"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementCodeInsightCtaData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesCodeInsightCtaSectionProps {
  data?: DenialManagementCodeInsightCtaData;
}

export default function DenialManagementServicesCodeInsightCtaSection({
  data,
}: DenialManagementServicesCodeInsightCtaSectionProps) {
  const content = data || defaultDenialManagementServicesData.codeInsightCta;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-code-insight-cta-heading"
    >
      <div className={denialManagementContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D4ED8]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
              <h2
                id="denial-management-services-code-insight-cta-heading"
                className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
              >
                {content.titlePlain}
                <span className="text-amber-300">{content.titleHighlight}</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.65] text-blue-200 sm:mt-6 sm:text-base">
                {content.description}
              </p>

              <div className="mt-8 w-full sm:mt-10 sm:w-auto">
                <AppButton
                  href={content.buttonHref || "/schedule-a-demo"}
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
