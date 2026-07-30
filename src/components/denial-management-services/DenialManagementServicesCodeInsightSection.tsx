"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementCodeInsightSectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesCodeInsightSectionProps {
  data?: DenialManagementCodeInsightSectionData;
}

export default function DenialManagementServicesCodeInsightSection({
  data,
}: DenialManagementServicesCodeInsightSectionProps) {
  const content = data || defaultDenialManagementServicesData.codeInsight;
  const features =
    content.features && content.features.length > 0
      ? content.features
      : defaultDenialManagementServicesData.codeInsight.features;
  const imageSrc = content.imageSrc || "/rcm-dashboard-laptop2.png";
  const imageAlt =
    content.imageAlt || "Healthcare professional using BellMedEx denial management software on laptop";

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-code-insight-heading"
    >
      <div className={denialManagementContainerClassName}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            badge={content.badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="denial-management-services-code-insight-heading">
                {content.titlePlain}
                <span className="text-blue-600">{content.titleHighlight}</span>
                {content.titleSuffix}
              </span>
            }
            className="mx-auto"
          />

          <div className="mx-auto mt-6 max-w-3xl space-y-4 sm:mt-8">
            <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.paragraph1}
            </p>
            <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.paragraph2}
            </p>
          </div>
        </div>

        <MotionWrapper
          variant="fadeUp"
          className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:mt-12 sm:grid-cols-2"
        >
          {features.map((feature, index) => (
            <div key={feature.label || index} className="flex items-start gap-2.5 text-left">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]"
                aria-hidden="true"
              />
              <span className="text-xs font-medium leading-snug text-[#475569] sm:text-[13px]">
                {feature.label}
              </span>
            </div>
          ))}
        </MotionWrapper>

        <MotionWrapper
          variant="fadeUp"
          className="mt-16 border-t border-[#E2E6EC] pt-12 sm:mt-20 sm:pt-16"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-dashed border-[#1D4ED8]/25 sm:h-32 sm:w-32"
                />

                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
                  <AppImage
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper
              variant="slideRight"
              className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
            >
              <h2 className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl">
                {content.gettingTitlePlain}
                <span className="text-blue-600">{content.gettingTitleHighlight}</span>
                {content.gettingTitleSuffix}
              </h2>

              <div className="max-w-2xl space-y-4">
                <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                  {content.gettingParagraph1}
                </p>
                <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                  {content.gettingParagraph2}
                </p>
              </div>

              <AppButton
                href={content.buttonHref || "/schedule-a-demo"}
                variant="primary"
                size="lg"
                showArrow
              >
                {content.buttonText}
              </AppButton>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
