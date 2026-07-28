"use client";

import React from "react";
import { Award, Calculator, ClipboardCheck, LucideIcon } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

const ICON_MAP: Record<string, LucideIcon> = {
  Award,
  Calculator,
  ClipboardCheck,
};

interface LargePracticesAddOnServicesProps {
  data?: LargePracticesPageData["addOnServices"];
}

export default function LargePracticesAddOnServices({ data }: LargePracticesAddOnServicesProps) {
  const content = data || defaultLargePracticesData.addOnServices;
  const rawServices = content.services && content.services.length > 0 ? content.services : defaultLargePracticesData.addOnServices.services;

  return (
    <section
      className={largePracticeSectionClassName}
      aria-labelledby="large-practices-add-on-services-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-add-on-services-heading">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {rawServices.map((service, idx) => {
            const Icon = (service.iconName && ICON_MAP[service.iconName]) || Award;
            return (
              <MotionWrapper key={service.title || idx} variant="staggerItem" className="h-full">
                <div
                  className={`${largePracticeCardClassName} flex h-full flex-col p-6 text-left transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5`}
                >
                  <IconWrapper icon={Icon} size="md" variant="surface" className="mb-4" />
                  <h3 className="mb-2 text-base font-bold text-[#0F172A]">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#475569]">
                    {service.description}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
