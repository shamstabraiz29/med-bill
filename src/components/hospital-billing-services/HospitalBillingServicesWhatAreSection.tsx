"use client";

import React from "react";
import {
  BarChart3,
  CalendarCheck,
  Code2,
  Cpu,
  FileText,
  FileWarning,
  LucideIcon,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HospitalBillingServicesServiceCard from "./HospitalBillingServicesServiceCard";
import HospitalBillingServicesTrustBar from "./HospitalBillingServicesTrustBar";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingWhatAreSectionData } from "@/payload/types/hospitalBillingServices";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  ShieldCheck,
  FileText,
  CalendarCheck,
  FileWarning,
  BarChart3,
  Users,
  Cpu,
};

interface HospitalBillingServicesWhatAreSectionProps {
  data?: HospitalBillingWhatAreSectionData;
}

export default function HospitalBillingServicesWhatAreSection({
  data,
}: HospitalBillingServicesWhatAreSectionProps) {
  const content = data || defaultHospitalBillingServicesData.whatAre;
  const services =
    content.services && content.services.length > 0
      ? content.services
      : defaultHospitalBillingServicesData.whatAre.services;
  const goalPills =
    content.goalPills && content.goalPills.length > 0
      ? content.goalPills
      : defaultHospitalBillingServicesData.whatAre.goalPills;

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-what-are-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="mb-10 sm:mb-12">
          <HospitalBillingServicesTrustBar />
        </div>

        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="hospital-billing-services-what-are-heading">
              {content.titlePlain}
              <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="mb-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mb-16"
        >
          {services.map((service, idx) => {
            const Icon = (service.iconName && ICON_MAP[service.iconName]) || Code2;

            return (
              <MotionWrapper key={service.title || idx} variant="staggerItem" className="h-full">
                <HospitalBillingServicesServiceCard
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp">
          <div className={`${hospitalCardClassName} overflow-hidden`}>
            <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              <div className="lg:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                  <Target className="h-3.5 w-3.5 text-[#1D4ED8]" aria-hidden="true" />
                  {content.goalTitlePlain}
                  {content.goalTitleHighlight}
                </div>

                <p className={hospitalSectionBodyClassName}>{content.goalDescription}</p>
              </div>

              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="flex flex-wrap gap-2.5">
                  {goalPills.map((pill, idx) => (
                    <span
                      key={pill || idx}
                      className="rounded-xl border border-[#E2E6EC] bg-[#F5F7FA] px-3.5 py-2 text-xs font-semibold text-[#0F172A] sm:text-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <AppButton
                  href={content.goalCtaHref || "/contact-us"}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  {content.goalCtaText}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
