"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesKpiCard from "./LargePracticesKpiCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";
import {
  CheckCircle2,
  Clock,
  FileCheck,
  LucideIcon,
  Scale,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [
  CheckCircle2,
  Scale,
  Clock,
  TrendingUp,
  FileCheck,
  ShieldAlert,
  ShieldCheck,
  Wallet,
];

interface LargePracticesKpisSectionProps {
  data?: LargePracticesPageData["kpis"];
}

export default function LargePracticesKpisSection({ data }: LargePracticesKpisSectionProps) {
  const content = data || defaultLargePracticesData.kpis;
  const chartItems =
    content.chartItems && content.chartItems.length > 0
      ? content.chartItems
      : defaultLargePracticesData.kpis.chartItems;

  return (
    <section
      className={cn(largePracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="large-practices-kpis-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Performance Metrics."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-kpis-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {chartItems.map((item, idx) => (
            <MotionWrapper key={item.label || idx} variant="staggerItem" className="h-full">
              <LargePracticesKpiCard
                icon={ICONS[idx % ICONS.length]}
                label={item.label}
                value={item.value}
                index={idx}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
