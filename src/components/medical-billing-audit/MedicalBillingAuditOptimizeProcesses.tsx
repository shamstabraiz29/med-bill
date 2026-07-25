"use client";

import React from "react";
import {
  Building2,
  History,
  Layers,
  LucideIcon,
  Scale,
  ScanSearch,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import MedicalBillingAuditFreeAuditCard from "./MedicalBillingAuditFreeAuditCard";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface AuditProcessItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIT_PROCESSES: AuditProcessItem[] = [
  {
    icon: Building2,
    title: "Internal Audit",
    description:
      "We conduct an in-depth review of your internal processes and documentation to ensure that they meet the industry standards. We also provide recommendations to help providers improve their performance.",
  },
  {
    icon: Scale,
    title: "External Audit",
    description:
      "We perform an independent assessment of your claims and payments from third-party payers like Medicare and Medicaid. We resolve billing disputes, recover underpayments, and work with aged receivables.",
  },
  {
    icon: ScanSearch,
    title: "Prospective Audit",
    description:
      "We evaluate your claims before they are submitted to the payers, to ensure that they are accurate, complete, and compliant. We help you prevent any denials, rejections, or delays in reimbursement.",
  },
  {
    icon: History,
    title: "Retrospective Audit",
    description:
      "We analyze your claims after they have been processed by the payers, to identify any errors. We help you correct any mistakes, appeal any denials, and optimize your revenue cycle.",
  },
  {
    icon: Layers,
    title: "Comprehensive Audit",
    description:
      "We provide a holistic approach to auditing your entire medical practice. We examine all aspects of your operations, from coding and billing to documentation and compliance.",
  },
];

export default function MedicalBillingAuditOptimizeProcesses() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-optimize-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge="Process Optimization"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-optimize-heading">
              We Optimize Your{" "}
              <span className="font-bold text-blue-600">
                Medical Billing and Coding Processes
              </span>
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {AUDIT_PROCESSES.map((item) => (
            <MotionWrapper key={item.title} variant="staggerItem" className="h-full">
              <MedicalCodingServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </MotionWrapper>
          ))}

          <MotionWrapper variant="staggerItem" className="h-full">
            <MedicalBillingAuditFreeAuditCard />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
}
