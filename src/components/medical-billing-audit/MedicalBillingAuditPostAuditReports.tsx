"use client";

import React from "react";
import {
  BarChart3,
  CodeXml,
  Inbox,
  LucideIcon,
  Receipt,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface AuditReportItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const POST_AUDIT_REPORTS: AuditReportItem[] = [
  {
    icon: Inbox,
    title: "Get Post-Audit Reports Delivered Straight Into Your Inbox",
    description:
      "We provide in-depth reporting to give you a complete picture of your coding and billing operations. Here are some of the most important reports that you can request post-auditing:",
  },
  {
    icon: Receipt,
    title: "Charge Capture Analysis Report",
    description:
      "This report analyzes your charge capture process to identify areas of revenue leakage. We examine front-end charge capture issues that lead to missed charges and lost revenue. The report provides specific recommendations to improve charge capture.",
  },
  {
    icon: CodeXml,
    title: "Coding Audit Report",
    description:
      "Our coding audit examines a sample of charts to identify coding errors and improvement opportunities. The audit report details coding accuracy rates, the financial impact of errors, and targeted education needs for coders. We also provide a risk analysis to help prioritize auditing efforts.",
  },
  {
    icon: XCircle,
    title: "Denials Analysis Report",
    description:
      "By analyzing your denials data, we identify the leading denial reasons, whether appeals are warranted, and opportunities to prevent future denials. Our denial report provides the information you need to reduce denials and improve cycle performance.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance Risk Assessment Report",
    description:
      "This assessment gauges your compliance risk levels in areas such as coding and billing documentation, Medicare regulations, and HIPAA. We provide a scorecard measuring your risk exposure and a roadmap for strengthening your compliance program.",
  },
  {
    icon: BarChart3,
    title: "Revenue Cycle Performance Benchmarking Report",
    description:
      "How do your KPIs stack up? Our benchmarking report compares your metrics to industry averages so you can pinpoint areas for improvement. We examine leading indicators such as first-pass resolution, net collection rate, A/R days, and more.",
  },
];

export default function MedicalBillingAuditPostAuditReports() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-post-reports-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge="Post-Audit Reporting"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-post-reports-heading">
              Our{" "}
              <span className="font-bold text-blue-600">Coding Audit Services</span> Promise
              Billing Compliance: Here&apos;s How?
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {POST_AUDIT_REPORTS.map((report) => (
            <MotionWrapper key={report.title} variant="staggerItem" className="h-full">
              <MedicalCodingServiceCard
                icon={report.icon}
                title={report.title}
                description={report.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
