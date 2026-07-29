"use client";

import React from "react";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  denialManagementCardClassName,
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementBenefitItem,
  DenialManagementBenefitsSectionData,
} from "@/payload/types/denialManagementServices";

function BenefitIconBox({ icon }: { icon: LucideIcon }) {
  const Icon = icon;
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8] text-white shadow-sm sm:h-14 sm:w-14">
      <Icon className="h-5 w-5 stroke-[1.75] sm:h-6 sm:w-6" aria-hidden="true" />
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className={cn(denialManagementCardClassName, "min-w-0 flex-1 p-4 sm:p-5")}>
      <h3 className="text-sm font-bold tracking-[-0.02em] text-[#0F172A] sm:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">{description}</p>
    </div>
  );
}

function BenefitRow({
  benefit,
  align,
}: {
  benefit: DenialManagementBenefitItem;
  align: "left" | "right";
}) {
  const Icon = getIcon(benefit.iconName || "ShieldCheck");

  return (
    <div
      className={cn(
        "flex items-center gap-3 sm:gap-4",
        align === "right" && "flex-row-reverse"
      )}
    >
      <BenefitIconBox icon={Icon} />
      {align === "left" ? (
        <ChevronRight className="h-5 w-5 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
      ) : (
        <ChevronLeft className="h-5 w-5 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
      )}
      <BenefitCard title={benefit.title} description={benefit.description} />
    </div>
  );
}

interface DenialManagementServicesBenefitsSectionProps {
  data?: DenialManagementBenefitsSectionData;
}

export default function DenialManagementServicesBenefitsSection({
  data,
}: DenialManagementServicesBenefitsSectionProps) {
  const content = data || defaultDenialManagementServicesData.benefits;
  const benefits =
    content.benefits && content.benefits.length > 0
      ? content.benefits
      : defaultDenialManagementServicesData.benefits.benefits;

  const pairedRows = Array.from({ length: 4 }, (_, index) => ({
    left: benefits[index * 2],
    right: benefits[index * 2 + 1],
  }));
  const bottomBenefit = benefits[8];

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-benefits-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <SectionHeader
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="denial-management-services-benefits-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper variant="stagger" staggerDelay={0.07} className="space-y-5 sm:space-y-6">
          {pairedRows.map((row, idx) => (
            <MotionWrapper
              key={row.left?.title || idx}
              variant="staggerItem"
              className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8"
            >
              {row.left && <BenefitRow benefit={row.left} align="left" />}
              {row.right && <BenefitRow benefit={row.right} align="right" />}
            </MotionWrapper>
          ))}

          {bottomBenefit && (
            <MotionWrapper variant="staggerItem" className="mx-auto max-w-2xl pt-2">
              <BenefitRow benefit={bottomBenefit} align="left" />
            </MotionWrapper>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}
