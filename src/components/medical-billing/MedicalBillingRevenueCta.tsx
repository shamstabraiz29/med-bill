"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingRevenueCtaProps {
  data?: typeof defaultMedicalBillingData.revenueCta;
}

export default function MedicalBillingRevenueCta({ data }: MedicalBillingRevenueCtaProps) {
  const ctaData = data || defaultMedicalBillingData.revenueCta;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
      aria-labelledby="revenue-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-8 text-center text-white shadow-lg sm:px-10 sm:py-10">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#1D4ED8]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center space-y-4">
              <SectionBadge variant="dark">{ctaData.badge}</SectionBadge>

              <h2
                id="revenue-cta-heading"
                className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:leading-snug"
              >
                {ctaData.titlePrefix}{" "}
                <span className="font-bold text-amber-300">{ctaData.titleHighlight}</span>
              </h2>

              <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                {ctaData.description}
              </p>

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
        </MotionWrapper>
      </div>
    </section>
  );
}
