"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesAuditMetricCard from "./LargePracticesAuditMetricCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";
import { CalendarDays, FileCheck, LucideIcon, ShieldCheck, TrendingUp } from "lucide-react";

const ICONS: LucideIcon[] = [TrendingUp, FileCheck, ShieldCheck, CalendarDays];

interface LargePracticesAuditMetricsSectionProps {
  data?: LargePracticesPageData["auditMetrics"];
}

export default function LargePracticesAuditMetricsSection({ data }: LargePracticesAuditMetricsSectionProps) {
  const content = data || defaultLargePracticesData.auditMetrics;
  const rawMetrics = content.metrics && content.metrics.length > 0 ? content.metrics : defaultLargePracticesData.auditMetrics.metrics;

  return (
    <section
      className={largePracticeSectionClassName}
      aria-labelledby="large-practices-audit-metrics-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-audit-metrics-heading">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {rawMetrics.map((metric, idx) => (
            <MotionWrapper key={metric.label || idx} variant="staggerItem" className="h-full">
              <LargePracticesAuditMetricCard
                icon={ICONS[idx % ICONS.length]}
                title={`${metric.value} ${metric.label}`}
                description={metric.subtitle || metric.label}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
