"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementDeniedServicesBannerData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesDeniedServicesBannerSectionProps {
  data?: DenialManagementDeniedServicesBannerData;
}

export default function DenialManagementServicesDeniedServicesBannerSection({
  data,
}: DenialManagementServicesDeniedServicesBannerSectionProps) {
  const content = data || defaultDenialManagementServicesData.deniedServicesBanner;
  const pills =
    content.pills && content.pills.length > 0
      ? content.pills
      : defaultDenialManagementServicesData.deniedServicesBanner.pills;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-denied-banner-heading"
    >
      <div className={denialManagementContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] px-6 py-10 text-center shadow-lg sm:rounded-3xl sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] bg-size-[28px_28px] opacity-20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#1D4ED8]/15 blur-3xl"
            />

            <div className="relative">
              <h2
                id="denial-management-services-denied-banner-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {content.title}
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                {pills.map((pill, index) => (
                  <span
                    key={pill.label || index}
                    className={`rounded-full px-5 py-2.5 text-xs font-semibold text-white sm:px-6 sm:text-sm ${pill.colorClass}`}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
