"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingErrorsRevenueCtaProps {
  data?: typeof defaultMedicalCodingData.errorsRevenueCta;
}

export default function MedicalCodingErrorsRevenueCta({ data }: MedicalCodingErrorsRevenueCtaProps) {
  const ctaData = data || defaultMedicalCodingData.errorsRevenueCta;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
      aria-labelledby="medical-coding-errors-revenue-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <SectionBadge variant="dark">{ctaData.badge}</SectionBadge>

                <h2
                  id="medical-coding-errors-revenue-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {ctaData.titlePrefix}{" "}
                  <span className="font-bold text-amber-300">{ctaData.titleHighlight}</span>
                </h2>

                <p className="text-sm font-bold leading-relaxed text-white sm:text-base">
                  {ctaData.subtext}
                </p>

                <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                  {ctaData.description}
                </p>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
                <AppButton
                  href={ctaData.ctaHref || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {ctaData.ctaLabel}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
