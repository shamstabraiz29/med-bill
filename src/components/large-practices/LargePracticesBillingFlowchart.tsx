"use client";

import React from "react";
import {
  ClipboardList,
  Code2,
  CreditCard,
  FileCheck,
  LucideIcon,
  Megaphone,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";

interface FlowchartStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BILLING_FLOWCHART_STEPS: FlowchartStep[] = [
  {
    icon: ShieldCheck,
    title: "Insurance Verification and Eligibility",
    description:
      "Ensure prior authorization and verify insurance eligibility for medical services such as diagnoses, procedures, and treatments.",
  },
  {
    icon: UserRound,
    title: "Patient Registration",
    description:
      "Collect, verify, and enter the data into the system to ensure accuracy and error-free billing documentation.",
  },
  {
    icon: FileCheck,
    title: "Claims Submission",
    description:
      "With a 99% clean claim rate we submit accurate claims to ensure a high first-time pass rate so you get the maximum collection rate.",
  },
  {
    icon: Code2,
    title: "Coding and Documentation",
    description:
      "We deploy expert coders and billers to prevent errors and inaccuracies in diagnostic and procedural coding.",
  },
  {
    icon: ShieldAlert,
    title: "Denial Management",
    description:
      "Rectification of the root cause of the denial leads to accuracy and successful denial management.",
  },
  {
    icon: CreditCard,
    title: "Payment posting",
    description:
      "Payments received from the insurer or the patient are posted into the system for record keeping and informing the patient if there's co-pay.",
  },
  {
    icon: RefreshCw,
    title: "A/R Follow-up",
    description:
      "We follow-up on pending payments and accounts receivables for reimbursements and remaining collections.",
  },
  {
    icon: ClipboardList,
    title: "Patient Billing",
    description:
      "Patients are billed with accurate charges to cover their bills against the services they have availed.",
  },
  {
    icon: Megaphone,
    title: "Education and Outreach",
    description:
      "By proactively engaging with providers, we help to understand patient's financial obligations and encourage timely payments.",
  },
];

function FlowchartStepCard({ step }: { step: FlowchartStep }) {
  return (
    <div
      className={cn(
        largePracticeCardClassName,
        "group h-full p-6 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-7"
      )}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <IconWrapper
          icon={step.icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />

        <div className="min-w-0 text-left">
          <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
            {step.title}
          </h3>
          <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LargePracticesBillingFlowchart() {
  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-billing-flowchart-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Billing Flowchart."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="large-practices-billing-flowchart-heading">
              Medical Billing Services to{" "}
              <span className="text-blue-600">Streamline Revenue Cycle Management</span> for
              Large Practices
            </span>
          }
          description="Simplify the complexities of medical billing and enhance your financial and healthcare productivity by opting the following billing flowchart for your large practice."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
        >
          {BILLING_FLOWCHART_STEPS.map((step) => (
            <MotionWrapper key={step.title} variant="staggerItem" className="h-full">
              <FlowchartStepCard step={step} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
