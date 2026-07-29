"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesAuditMetricCard from "./LargePracticesAuditMetricCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";
import { CalendarDays, FileCheck, LucideIcon, ShieldAlert, TrendingUp } from "lucide-react";

const ICONS: LucideIcon[] = [CalendarDays, FileCheck, TrendingUp, ShieldAlert];

interface LargePracticesAuditMetricsSectionProps {
  data?: LargePracticesPageData["auditMetrics"];
}

export default function LargePracticesAuditMetricsSection({
  data,
}: LargePracticesAuditMetricsSectionProps) {
  const content = data || defaultLargePracticesData.auditMetrics;
  const rawMetrics =
    content.metrics && content.metrics.length > 0
      ? content.metrics
      : defaultLargePracticesData.auditMetrics.metrics;

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-audit-metrics-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-10 max-w-3xl sm:mb-12"
          title={
            <span id="large-practices-audit-metrics-heading">
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mx-auto flex max-w-4xl flex-col gap-4 sm:gap-5"
        >
          {rawMetrics.map((metric, idx) => (
            <MotionWrapper key={metric.title || idx} variant="staggerItem">
              <LargePracticesAuditMetricCard
                icon={ICONS[idx % ICONS.length]}
                step={idx + 1}
                title={metric.title}
                description={metric.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
