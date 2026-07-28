"use client";

import React from "react";
import { CalendarDays, FileCheck, LucideIcon, ShieldCheck, TrendingUp } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesAuditMetricCard from "./LargePracticesAuditMetricCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";

interface AuditMetric {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIT_METRICS: AuditMetric[] = [
  {
    icon: CalendarDays,
    title: "Days in Accounts Receivable – 30-40 days",
    description:
      "Accounts receivable is the process of tracking claims buy considering the average number of days practice takes to collect due payment. We have lower accounts receivables days ratio and ensure faster reimbursement.",
  },
  {
    icon: FileCheck,
    title: "First Pass Acceptance Rate – 97%",
    description:
      "Also known as the first pass clean claim rate, it measures the acceptance rate of the first submission of the claims. We provide quality revenue cycle management services for a high first-pass clean claim rate.",
  },
  {
    icon: TrendingUp,
    title: "Net Collection Rate – 98%",
    description:
      "The overall collection from the patient and the insurer makes the net collection rate. We make sure payment is timely received and the net collection rate is high.",
  },
  {
    icon: ShieldCheck,
    title: "Denial Rate – 1%",
    description:
      "The ratio of claims denied by the insurer represents how effective is your revenue cycle management process. We follow up on denied claims, scan, and rectify the errors and maximize revenue generations.",
  },
];

export default function LargePracticesAuditMetricsSection() {
  return (
    <section
      className={`${largePracticeSectionClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="large-practices-audit-metrics-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Billing Audit Metrics."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-audit-metrics-heading">
              It Takes us <span className="text-blue-600">4 Metrics</span> to Audit Billing and
              Fix ROI for Your Large Practice
            </span>
          }
          description="These metrics make up 60% of your billing process's efficiency, productivity, and financial performance. The figures are taken from the first-hand experience of our clients."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="mx-auto flex max-w-4xl flex-col gap-5 sm:gap-6"
        >
          {AUDIT_METRICS.map((metric) => (
            <MotionWrapper key={metric.title} variant="staggerItem">
              <LargePracticesAuditMetricCard
                icon={metric.icon}
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
