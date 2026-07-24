"use client";

import React from "react";
import {
  AlertTriangle,
  BadgeCheck,
  CodeXml,
  FileCheck,
  LucideIcon,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditProblemSolutionCard from "./MedicalBillingAuditProblemSolutionCard";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

interface ProblemSolutionPair {
  problemIcon: LucideIcon;
  problemTitle: string;
  problemDescription: string;
  solutionIcon: LucideIcon;
  solutionTitle: string;
  solutionDescription: string;
}

const PROBLEM_SOLUTION_PAIRS: ProblemSolutionPair[] = [
  {
    problemIcon: AlertTriangle,
    problemTitle: "Billing Errors",
    problemDescription:
      "Affect the financial stability, cash flow, profitability, and sustainability of the healthcare organization.",
    solutionIcon: FileCheck,
    solutionTitle: "Clean Billing Claims",
    solutionDescription:
      "With our comprehensive billing audit, we thoroughly examine each claim to verify correctness, securing maximum appropriate reimbursement to maintain financial health and endurance of your healthcare institution.",
  },
  {
    problemIcon: CodeXml,
    problemTitle: "Coding Errors",
    problemDescription:
      "Lead to claim denials, loss of revenue, overcharges, underpayments, patient dissatisfaction, and legal actions.",
    solutionIcon: BadgeCheck,
    solutionTitle: "99% Claim Acceptance",
    solutionDescription:
      "We deploy advanced NLP and machine learning techniques to analyze medical records and catch coding mistakes, optimizing reimbursement and circumventing claim denials down the line.",
  },
  {
    problemIcon: ShieldAlert,
    problemTitle: "Compliance Issues",
    problemDescription:
      "Result in penalties, fines, audits, investigations, lawsuits, sanctions, and exclusion from federal health programs.",
    solutionIcon: ShieldCheck,
    solutionTitle: "Meet Billing Compliance",
    solutionDescription:
      "Our robust billing analytics engine identifies trends, outliers and red flags in real-time, allowing for targeted audits to eliminate compliance risks and avoid government scrutiny.",
  },
  {
    problemIcon: TrendingDown,
    problemTitle: "Reimbursement Cuts",
    problemDescription:
      "Could force healthcare providers to reduce staff, limit services, close practices, or accept fewer Medicare patients.",
    solutionIcon: TrendingUp,
    solutionTitle: "Maximum Reimbursements",
    solutionDescription:
      "Our proprietary AI-powered billing audit system analyzes your claims data to identify missed revenue opportunities and compliance risks, ensuring every penny is captured before reimbursement cuts hit your bottom line.",
  },
];

export default function MedicalBillingAuditProblemsSolutions() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-problems-solutions-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge="Problems & Solutions"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-problems-solutions-heading">
              Your Billing Problems and Our{" "}
              <span className="font-bold text-blue-600">Auditing Solutions</span>
            </span>
          }
          description="Inaccurate billing and coding practices cost medical practices big. Denied claims lead to lost revenue. Backlogs lead to cash crunches. Errors lead to audits and penalties. Our medical billing and coding audit service sheds light on what's broken in your workflows. After a comprehensive analysis of your people, processes and technology, we deliver specific recommendations to maintain compliance for a better-functioning revenue cycle."
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {PROBLEM_SOLUTION_PAIRS.map((pair, index) => (
            <MotionWrapper key={pair.problemTitle} variant="staggerItem" className="h-full">
              <MedicalBillingAuditProblemSolutionCard
                index={index}
                problemIcon={pair.problemIcon}
                problemTitle={pair.problemTitle}
                problemDescription={pair.problemDescription}
                solutionIcon={pair.solutionIcon}
                solutionTitle={pair.solutionTitle}
                solutionDescription={pair.solutionDescription}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.2} className="mt-10 flex justify-center sm:mt-12">
          <AppButton
            href="#claim-free-medical-audit"
            variant="primary"
            size="lg"
            showArrow
          >
            Get Your Free Audit Report
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
