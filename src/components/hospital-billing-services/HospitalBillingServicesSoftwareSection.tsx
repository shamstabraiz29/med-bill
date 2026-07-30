"use client";

import React from "react";
import {
  BarChart3,
  Bell,
  Code2,
  FileText,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  LucideIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
import type { HospitalBillingSoftwareSectionData } from "@/payload/types/hospitalBillingServices";

const FEATURE_ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  LineChart,
  FileText,
  Bell,
  Code2,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  BarChart3,
};

interface HospitalBillingServicesSoftwareSectionProps {
  data?: HospitalBillingSoftwareSectionData;
}

export default function HospitalBillingServicesSoftwareSection({
  data,
}: HospitalBillingServicesSoftwareSectionProps) {
  const content = data || defaultHospitalBillingServicesData.software;
  const features =
    content.features && content.features.length > 0
      ? content.features
      : defaultHospitalBillingServicesData.software.features;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-software-heading"
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
          <h2 id="hospital-billing-services-software-heading" className={hospitalSectionTitleClassName}>
            {content.titlePlain}
            <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
          </h2>

          <p className={hospitalSectionLeadClassName}>{content.subtitle}</p>

          <p className={hospitalSectionBodyClassName}>{content.introParagraph}</p>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, idx) => {
              const iconKey = feature.iconName || "LayoutDashboard";
              const Icon = FEATURE_ICON_MAP[iconKey] || LayoutDashboard;

              return (
                <MotionWrapper key={feature.title || idx} variant="staggerItem" className="h-full">
                  <div
                    className={cn(
                      hospitalCardClassName,
                      "flex h-full flex-col items-start p-6 text-left sm:p-7"
                    )}
                  >
                    <IconWrapper icon={Icon} size="lg" variant="surface" className="mb-5" />
                    <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] transition-colors group-hover:text-[#1D4ED8] sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className={`mt-3 ${hospitalSectionBodyClassName}`}>{feature.description}</p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.08} className="mt-10 flex justify-center sm:mt-12">
          <AppButton
            href={content.ctaHref || "/schedule-a-demo"}
            variant="primary"
            size="lg"
            showArrow
            className="shadow-lg shadow-blue-600/15"
          >
            {content.ctaText}
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
