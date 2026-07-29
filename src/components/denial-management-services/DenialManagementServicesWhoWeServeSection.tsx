"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  denialManagementCardClassName,
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementWhoWeServeItem,
  DenialManagementWhoWeServeSectionData,
} from "@/payload/types/denialManagementServices";

function ServeCard({ item }: { item: DenialManagementWhoWeServeItem }) {
  const Icon: LucideIcon = getIcon(item.iconName || "Building2");

  return (
    <div
      className={cn(
        denialManagementCardClassName,
        "group flex h-full flex-col items-center justify-center gap-4 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6"
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1D4ED8] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        <Icon className="h-7 w-7 stroke-[1.75] sm:h-8 sm:w-8" aria-hidden="true" />
      </div>
      <h3 className="text-xs font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-sm">
        {item.label}
      </h3>
    </div>
  );
}

interface DenialManagementServicesWhoWeServeSectionProps {
  data?: DenialManagementWhoWeServeSectionData;
}

export default function DenialManagementServicesWhoWeServeSection({
  data,
}: DenialManagementServicesWhoWeServeSectionProps) {
  const content = data || defaultDenialManagementServicesData.whoWeServe;
  const items =
    content.items && content.items.length > 0
      ? content.items
      : defaultDenialManagementServicesData.whoWeServe.items;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-who-we-serve-heading"
    >
      <div className={denialManagementContainerClassName}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-3xl sm:mb-12"
          title={
            <span id="denial-management-services-who-we-serve-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((item, index) => (
            <MotionWrapper key={item.label || index} variant="staggerItem">
              <ServeCard item={item} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
