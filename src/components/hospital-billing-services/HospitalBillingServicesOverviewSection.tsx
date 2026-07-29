"use client";

import React from "react";
import {
  BarChart3,
  ClipboardCheck,
  Clock,
  FileX,
  LucideIcon,
  UserMinus,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import {
  hospitalContainerClassName,
  hospitalSectionBodyClassName,
  hospitalSectionClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionLeadClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingOverviewSectionData } from "@/payload/types/hospitalBillingServices";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  BarChart3,
  UserMinus,
  ClipboardCheck,
  FileX,
};

interface HospitalBillingServicesOverviewSectionProps {
  data?: HospitalBillingOverviewSectionData;
}

export default function HospitalBillingServicesOverviewSection({
  data,
}: HospitalBillingServicesOverviewSectionProps) {
  const content = data || defaultHospitalBillingServicesData.overview;
  const benefits =
    content.benefits && content.benefits.length > 0
      ? content.benefits
      : defaultHospitalBillingServicesData.overview.benefits;

  return (
    <section
      className={cn(hospitalSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="hospital-billing-services-overview-heading"
    >
      <div className={hospitalContainerClassName}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2 id="hospital-billing-services-overview-heading" className={hospitalSectionTitleClassName}>
              {content.titlePlain}
              <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
              {content.titleSuffix}
              <span className={hospitalSectionHighlightClassName}>{content.titleLocationHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className={hospitalSectionBodyClassName}>{content.paragraph1}</p>
              <p className={hospitalSectionBodyClassName}>{content.paragraph2}</p>
              <p className={hospitalSectionBodyClassName}>{content.paragraph3}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <p className={cn("mb-6 max-w-2xl", hospitalSectionLeadClassName)}>{content.benefitsIntro}</p>

            <MotionWrapper
              variant="stagger"
              staggerDelay={0.08}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
            >
              {benefits.map((benefit, idx) => {
                const Icon = (benefit.iconName && ICON_MAP[benefit.iconName]) || Clock;

                return (
                  <MotionWrapper key={benefit.label || idx} variant="staggerItem">
                    <div className="flex h-full flex-col items-center rounded-2xl border border-[#E2E6EC] bg-white p-5 text-center shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg sm:p-6">
                      <IconWrapper
                        icon={Icon}
                        size="lg"
                        variant="surface"
                        className="mb-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      <p className="text-sm font-semibold leading-[1.65] text-[#0F172A] sm:text-[15px]">
                        {benefit.label}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
