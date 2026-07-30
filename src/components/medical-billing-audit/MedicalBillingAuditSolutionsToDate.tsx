"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { ShieldCheck } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditSolutionsToDateProps {
  data?: typeof defaultMedicalBillingAuditData.solutionsToDate;
}

export default function MedicalBillingAuditSolutionsToDate({ data }: MedicalBillingAuditSolutionsToDateProps) {
  const stdData = data || defaultMedicalBillingAuditData.solutionsToDate;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-solutions-to-date-heading"
    >
      <div className={`${auditContainerClassName} space-y-12 sm:space-y-16 lg:space-y-20`}>
        <div>
          <SectionHeader
            badge={stdData.badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="medical-billing-audit-solutions-to-date-heading">
                {stdData.titlePlain}{" "}
                <span className="font-bold text-blue-600">{stdData.titleHighlight}</span>
              </span>
            }
            className="mx-auto mb-8 max-w-4xl sm:mb-12"
          />

          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid w-full grid-cols-2 gap-8 divide-y divide-[#E2E6EC] md:grid-cols-4 md:gap-0 md:divide-x md:divide-y-0"
          >
            {stdData.stats.map((stat) => {
              const Icon = getIcon(stat.iconName);

              return (
                <MotionWrapper
                  key={stat.label}
                  variant="staggerItem"
                  className="group flex flex-col items-center py-6 text-center first:pt-0 last:pb-0 md:py-2 md:px-4 lg:px-6"
                >
                  <div className="mb-4 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 stroke-[1.25]" aria-hidden="true" />
                  </div>

                  <div className="text-2xl font-extrabold leading-none tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>

                  <span className="mt-3 max-w-[180px] text-xs font-bold uppercase tracking-wide text-[#0F172A] sm:text-sm">
                    {stat.label}
                  </span>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp">
          <Card
            glass={false}
            hoverEffect="none"
            className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl"
          >
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch p-0">
              <div className="flex flex-col justify-center gap-5 bg-[#F5F7FA] p-6 sm:gap-6 sm:p-8 lg:p-10">
                <IconWrapper icon={ShieldCheck} size="lg" variant="surface" />

                <h2 className="max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
                  {stdData.bannerTitlePrefix}{" "}
                  <span className="font-bold text-blue-600">{stdData.bannerTitleHighlight}</span>{" "}
                  {stdData.bannerTitleSuffix}
                </h2>

                <div className="pt-1">
                  <AppButton
                    href={stdData.bannerCtaHref || "#claim-free-medical-audit"}
                    variant="primary"
                    size="lg"
                    showArrow
                  >
                    {stdData.bannerCtaLabel}
                  </AppButton>
                </div>
              </div>

              <div className="relative min-h-[260px] sm:min-h-[320px]">
                <AppImage
                  src={stdData.imageSrc || "/doctor-hero.png"}
                  alt={stdData.imageAlt || "BellMedEx medical coding audit specialist supporting billing compliance"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0F172A]/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        <div>
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            {stdData.complianceAreas.map((area) => {
              const Icon = getIcon(area.iconName);
              return (
                <MotionWrapper key={area.title} variant="staggerItem" className="h-full">
                  <MedicalCodingServiceCard
                    icon={Icon}
                    title={area.title}
                    description={area.description}
                  />
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
