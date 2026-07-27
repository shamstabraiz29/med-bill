"use client";

import React from "react";
import {
  ClipboardList,
  Code2,
  CreditCard,
  FileText,
  LucideIcon,
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
  outsourceCardClassName,
  outsourceContainerClassName,
  outsourceSectionClassName,
} from "./outsourceSectionLayout";

interface BillingSolution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BILLING_SOLUTIONS: BillingSolution[] = [
  {
    icon: ShieldCheck,
    title: "Insurance Verification",
    description:
      "Verify patient insurance and eligibility to avoid any last minute surprise bills and ensure accurate billing and coding.",
  },
  {
    icon: UserRound,
    title: "Patient Demographics",
    description:
      "Collect patient data such as their name, location, age, sex, address, phone number, etc & patient history for record keeping.",
  },
  {
    icon: Code2,
    title: "Medical coding",
    description:
      "Accurately code medical procedures, diagnoses, and treatments to make sure claims are successfully submitted.",
  },
  {
    icon: ClipboardList,
    title: "Charge Entry",
    description:
      "Charges for medical services as well as other important accounting information is entered into the patient accounts.",
  },
  {
    icon: CreditCard,
    title: "Payment posting",
    description:
      "Payment details are posted into the system and financial status of the patient payments and insurance checks are examined.",
  },
  {
    icon: ShieldAlert,
    title: "Denial Management",
    description:
      "We audit, identify and correct the denial issues immediately and address any denied or delayed claims efficiently.",
  },
  {
    icon: RefreshCw,
    title: "Accounts Receivable Follow-up",
    description:
      "Minimize the A/R days by appealing the claims and pursuing end-to-end denial management.",
  },
  {
    icon: FileText,
    title: "Patient Statement",
    description:
      "Patient statement is created that holds pending patient payment to ensure timely and remaining collections.",
  },
];

function BillingSolutionCard({ solution }: { solution: BillingSolution }) {
  return (
    <div className={cn(outsourceCardClassName, "h-full")}>
      <div className="flex items-start gap-4 sm:gap-5">
        <IconWrapper
          icon={solution.icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />

        <div className="min-w-0 text-left">
          <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
            {solution.title}
          </h3>
          <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
            {solution.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OutsourceMedicalBillingSolutions() {
  return (
    <section
      className={cn(outsourceSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="outsource-medical-billing-solutions-heading"
    >
      <div className={outsourceContainerClassName}>
        <SectionHeader
          badge="Comprehensive Billing Solutions."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="outsource-medical-billing-solutions-heading">
              We Deliver Comprehensive{" "}
              <span className="text-blue-600">Medical Billing Solutions</span> to Individual
              and Large practices
            </span>
          }
          description="Choose one or all of our billing services and manage billing smoothly."
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.07}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {BILLING_SOLUTIONS.map((solution) => (
            <MotionWrapper key={solution.title} variant="staggerItem" className="h-full">
              <BillingSolutionCard solution={solution} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
