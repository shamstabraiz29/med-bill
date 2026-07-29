"use client";

import React from "react";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementServiceOfferingsSectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesOfferingsSectionProps {
  data?: DenialManagementServiceOfferingsSectionData;
}

export default function DenialManagementServicesOfferingsSection({
  data,
}: DenialManagementServicesOfferingsSectionProps) {
  const content = data || defaultDenialManagementServicesData.serviceOfferings;
  const items =
    content.items && content.items.length > 0
      ? content.items
      : defaultDenialManagementServicesData.serviceOfferings.items;

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-offerings-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-30"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="denial-management-services-offerings-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((item, index) => {
            const Icon = getIcon(item.iconName || "ShieldCheck");

            return (
              <MotionWrapper key={item.title || index} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
