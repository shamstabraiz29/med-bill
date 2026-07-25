"use client";

import React from "react";
import {
  Building2,
  Clock3,
  CodeXml,
  FolderOpen,
  LucideIcon,
  ScanSearch,
  Stethoscope,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface AuditSolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIT_SOLUTIONS: AuditSolutionItem[] = [
  {
    icon: CodeXml,
    title: "Medical Coding Audit",
    description:
      "We do medical coding audits for all types of medical records, including inpatient, outpatient, profee, and home health.",
  },
  {
    icon: ScanSearch,
    title: "Medical Billing Audit",
    description:
      "We do medical billing audits for all types of claims, including Medicare, Medicaid, commercial, and self-pay.",
  },
  {
    icon: Building2,
    title: "Government & Payor Mandated Audit",
    description:
      "We prepare providers for and respond to government and payor mandated audits, such as TPE, RAC, OIG, DMEPOS, and Medical Necessity.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Audits",
    description:
      "We conduct internal and external clinical audits to assess the quality and safety of your patient care and clinical outcomes.",
  },
  {
    icon: Clock3,
    title: "Collection Aging Audit",
    description:
      "We improve your cash flow by auditing your aged claims for errors and refilling denied claims with our collection aging audit.",
  },
  {
    icon: FolderOpen,
    title: "Auditing Medicare Patient Charts",
    description:
      "We audit Medicare patient charts, ensuring every dollar billed is justified and compliant, so your practice gets fully and fairly paid.",
  },
];

export default function MedicalBillingAuditSolutions() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-solutions-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge="Audit Solutions"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-solutions-heading">
              Check our{" "}
              <span className="font-bold text-blue-600">
                Medical Billing Audit Solutions
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
          {AUDIT_SOLUTIONS.map((solution) => (
            <MotionWrapper key={solution.title} variant="staggerItem" className="h-full">
              <MedicalCodingServiceCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
