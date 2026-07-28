"use client";

import React from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  FileCheck,
  LucideIcon,
  Scale,
  ShieldAlert,
  TrendingUp,
  Wallet,
} from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import LargePracticesKpiCard from "./LargePracticesKpiCard";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";

interface KpiItem {
  icon: LucideIcon;
  label: string;
  value: number;
}

const LARGE_PRACTICE_KPIS: KpiItem[] = [
  { icon: Wallet, label: "Reimbursement Accuracy", value: 7.1 },
  { icon: Scale, label: "Compliance with Regulations", value: 5.1 },
  { icon: Clock, label: "Charge Lag", value: 10.1 },
  { icon: FileCheck, label: "First-Pass Claim Rate", value: 15.2 },
  { icon: TrendingUp, label: "Net Collection Ratio", value: 20.2 },
  { icon: ShieldAlert, label: "Denial Rate", value: 12.1 },
  { icon: CheckCircle2, label: "Clean Claims Ratio", value: 20.2 },
  { icon: CalendarDays, label: "Days in Accounts Receivables", value: 10.1 },
];

export default function LargePracticesKpisSection() {
  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-kpis-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Revenue Cycle Metrics."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-kpis-heading">
              8 Important KPIs to Ensure Faster and More{" "}
              <span className="text-blue-600">ROI</span>
            </span>
          }
          description="These metrics make up most of the revenue cycle management flowchart for the billing process and revenue cycle management of your large practice."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {LARGE_PRACTICE_KPIS.map((kpi, index) => (
            <MotionWrapper key={kpi.label} variant="staggerItem" className="h-full">
              <LargePracticesKpiCard
                icon={kpi.icon}
                label={kpi.label}
                value={kpi.value}
                index={index}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
