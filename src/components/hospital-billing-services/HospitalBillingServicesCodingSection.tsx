"use client";

import React from "react";
import { Building2, Code2, Stethoscope } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionLeadClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingCodingSectionData } from "@/payload/types/hospitalBillingServices";

const SLIDE_ICON_MAP = {
  Stethoscope,
  Building2,
  Code2,
} as const;

interface HospitalBillingServicesCodingSectionProps {
  data?: HospitalBillingCodingSectionData;
}

export default function HospitalBillingServicesCodingSection({
  data,
}: HospitalBillingServicesCodingSectionProps) {
  const content = data || defaultHospitalBillingServicesData.coding;
  const slides =
    content.slides && content.slides.length > 0
      ? content.slides
      : defaultHospitalBillingServicesData.coding.slides;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-coding-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <MotionWrapper
          variant="slideLeft"
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center space-y-6 text-center sm:mb-12 lg:mb-14"
        >
          <h2 id="hospital-billing-services-coding-heading" className={hospitalSectionTitleClassName}>
            {content.titlePlain}
            <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
          </h2>

          <p className={hospitalSectionBodyClassName}>{content.paragraph1}</p>

          <AppButton
            href={content.ctaHref || "/contact-us"}
            variant="primary"
            size="lg"
            showArrow
            className="shadow-lg shadow-blue-600/15"
          >
            {content.ctaText}
          </AppButton>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp">
          <p className={cn("mx-auto mb-8 max-w-3xl text-center sm:mb-10", hospitalSectionLeadClassName)}>
            {content.carouselIntro}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {slides.map((slide, idx) => {
              const iconKey = (slide.iconName || "Stethoscope") as keyof typeof SLIDE_ICON_MAP;
              const Icon = SLIDE_ICON_MAP[iconKey] || Stethoscope;

              return (
                <MotionWrapper key={slide.title || idx} variant="staggerItem" className="h-full">
                  <div
                    className={cn(
                      hospitalCardClassName,
                      "flex h-full flex-col items-start p-6 text-left sm:p-7"
                    )}
                  >
                    <IconWrapper icon={Icon} size="lg" variant="surface" className="mb-5" />
                    <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] transition-colors group-hover:text-[#1D4ED8] sm:text-lg">
                      {slide.title}
                    </h3>
                    <p className={`mt-3 ${hospitalSectionBodyClassName}`}>{slide.description}</p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
