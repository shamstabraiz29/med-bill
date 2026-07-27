"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingAffordableCtaProps {
  data?: typeof defaultMedicalCodingData.affordableCta;
}

export default function MedicalCodingAffordableCta({ data }: MedicalCodingAffordableCtaProps) {
  const ctaData = data || defaultMedicalCodingData.affordableCta;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-affordable-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#1D4ED8]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <h2
                  id="medical-coding-affordable-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {ctaData.titlePrefix}{" "}
                  <span className="font-bold text-amber-300">{ctaData.titleHighlight}</span>
                </h2>

                <p className="text-sm text-blue-200 sm:text-base">
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

            <div className="my-8 w-full border-t border-white/10 sm:my-10" />

            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {ctaData.features.map((feature) => {
                const Icon = getIcon(feature.iconName);
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-5 transition-colors duration-200 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                    </div>

                    <h3 className="mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-200">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
