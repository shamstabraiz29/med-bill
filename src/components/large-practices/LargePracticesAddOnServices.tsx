"use client";

import React from "react";
import { Award, ClipboardCheck, FileBarChart, LucideIcon, ShieldCheck } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

const ICON_MAP: Record<string, LucideIcon> = {
  ClipboardCheck,
  ShieldCheck,
  FileBarChart,
  Award,
};

function AddOnServiceCard({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        largePracticeCardClassName,
        "group h-full p-5 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6"
      )}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <IconWrapper
          icon={icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="min-w-0 text-left">
          <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface LargePracticesAddOnServicesProps {
  data?: LargePracticesPageData["addOnServices"];
}

export default function LargePracticesAddOnServices({ data }: LargePracticesAddOnServicesProps) {
  const content = data || defaultLargePracticesData.addOnServices;
  const rawServices =
    content.services && content.services.length > 0
      ? content.services
      : defaultLargePracticesData.addOnServices.services;

  return (
    <section
      className={cn(largePracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="large-practices-add-on-services-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
      />

      <div className={`${largePracticeContainerClassName} relative z-10`}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="large-practices-add-on-services-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
        >
          {rawServices.map((service, idx) => {
            const Icon =
              (service.iconName && ICON_MAP[service.iconName]) ||
              getIcon(service.iconName || "FileCheck");

            return (
              <MotionWrapper key={service.title || idx} variant="staggerItem" className="h-full">
                <AddOnServiceCard icon={Icon} title={service.title} description={service.description} />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
