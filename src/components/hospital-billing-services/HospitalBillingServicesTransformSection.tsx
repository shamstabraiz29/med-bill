"use client";

import React from "react";
import {
  BarChart3,
  Cpu,
  LucideIcon,
  ShieldCheck,
  Video,
  Zap,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingTransformSectionData } from "@/payload/types/hospitalBillingServices";

const FEATURE_ICON_MAP: Record<string, LucideIcon> = {
  Cpu,
  ShieldCheck,
  Zap,
  Video,
  BarChart3,
};

interface HospitalBillingServicesTransformSectionProps {
  data?: HospitalBillingTransformSectionData;
}

export default function HospitalBillingServicesTransformSection({
  data,
}: HospitalBillingServicesTransformSectionProps) {
  const content = data || defaultHospitalBillingServicesData.transform;
  const features =
    content.features && content.features.length > 0
      ? content.features
      : defaultHospitalBillingServicesData.transform.features;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-transform-heading"
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
          <h2 id="hospital-billing-services-transform-heading" className={hospitalSectionTitleClassName}>
            {content.titlePlain}
            <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
          </h2>

          <p className={hospitalSectionBodyClassName}>{content.description}</p>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, idx) => {
              const iconKey = feature.iconName || "Cpu";
              const Icon = FEATURE_ICON_MAP[iconKey] || Cpu;

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
      </div>
    </section>
  );
}
