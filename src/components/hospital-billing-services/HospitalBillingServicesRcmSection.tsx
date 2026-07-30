"use client";

import React from "react";
import { AlertTriangle, BarChart3, Receipt, ShieldAlert } from "lucide-react";
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
import type { HospitalBillingRcmSectionData } from "@/payload/types/hospitalBillingServices";

const SERVICE_ICON_MAP = {
  ShieldAlert,
  Receipt,
  BarChart3,
} as const;

interface HospitalBillingServicesRcmSectionProps {
  data?: HospitalBillingRcmSectionData;
}

export default function HospitalBillingServicesRcmSection({
  data,
}: HospitalBillingServicesRcmSectionProps) {
  const content = data || defaultHospitalBillingServicesData.rcm;
  const services =
    content.services && content.services.length > 0
      ? content.services
      : defaultHospitalBillingServicesData.rcm.services;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-rcm-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <h2 id="hospital-billing-services-rcm-heading" className={hospitalSectionTitleClassName}>
              {content.title.includes("Management Solutions") ? (
                <>
                  Hospital Revenue Cycle{" "}
                  <span className={hospitalSectionHighlightClassName}>Management Solutions</span>
                </>
              ) : (
                content.title
              )}
            </h2>

            <p className={`max-w-3xl ${hospitalSectionBodyClassName}`}>{content.paragraph1}</p>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5 lg:sticky lg:top-28">
            <div className={`${hospitalCardClassName} border-[#1D4ED8]/15 bg-blue-50/50 p-6 sm:p-7`}>
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-snug text-[#0F172A] sm:text-base">
                    {content.ctaTitle}
                  </p>
                  <p className="mt-1.5 text-xs leading-[1.6] text-[#475569] sm:text-sm">
                    {content.ctaSubtext}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <AppButton
                  href={content.ctaButtonHref || "/contact-us"}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  {content.ctaButtonText}
                </AppButton>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp" className="mt-12 sm:mt-14 lg:mt-16">
          <p className={cn("mb-8 max-w-3xl sm:mb-10", hospitalSectionLeadClassName)}>
            {content.servicesIntro}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, idx) => {
              const iconKey = (service.iconName || "ShieldAlert") as keyof typeof SERVICE_ICON_MAP;
              const Icon = SERVICE_ICON_MAP[iconKey] || ShieldAlert;

              return (
                <MotionWrapper key={service.title || idx} variant="staggerItem" className="h-full">
                  <div
                    className={cn(
                      hospitalCardClassName,
                      "flex h-full flex-col items-start p-6 text-left sm:p-7"
                    )}
                  >
                    <IconWrapper icon={Icon} size="lg" variant="surface" className="mb-5" />
                    <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] transition-colors group-hover:text-[#1D4ED8] sm:text-lg">
                      {service.title}
                    </h3>
                    <p className={`mt-3 ${hospitalSectionBodyClassName}`}>{service.description}</p>
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
