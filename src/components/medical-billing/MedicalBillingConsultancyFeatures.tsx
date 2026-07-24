"use client";

import React from "react";
import {
  BarChart3,
  CircleDollarSign,
  LayoutDashboard,
  LucideIcon,
  MonitorSmartphone,
  Receipt,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultancyFeatureCard from "./BillingConsultancyFeatureCard";

interface ConsultancyFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CONSULTANCY_FEATURES: ConsultancyFeatureItem[] = [
  {
    icon: LayoutDashboard,
    title: "KPI Dashboard",
    description:
      "Get visibility into key performance indicators such as copays collected and accounts receivable per payer.",
  },
  {
    icon: CircleDollarSign,
    title: "Revenue Monitoring",
    description:
      "Track your practice\u2019s revenue by monitoring patient and insurance payments, as well as identify trends and track financial progress.",
  },
  {
    icon: Scale,
    title: "Patient Balancing",
    description:
      "Send reminder notices to patients with overdue payments and collect outstanding balances to reduce owed money.",
  },
  {
    icon: RefreshCw,
    title: "Automated Validation",
    description:
      "The system checks a patient\u2019s insurance benefits at check-in to avoid billing surprises. Patients are prompted to pay co-pays at this time.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description:
      "Get a quick overview of your practice\u2019s financial performance and create performance initiatives to improve your practice at scale.",
  },
  {
    icon: Receipt,
    title: "Bills Collection",
    description:
      "Get a summary of your medical bills, including status (paid, denied, in process, rejected). Our experts will follow up on these bills for you and provide one-click support for any billing problems.",
  },
  {
    icon: Sparkles,
    title: "AI Workflow",
    description:
      "An AI-powered billing rules engine automatically detects & corrects errors in medical claims, ensuring faster payments and higher reimbursement rates.",
  },
  {
    icon: MonitorSmartphone,
    title: "Intelligent Billing",
    description:
      "Smart billing with a well-defined charge coding means accurate and compliant superbills with zero chances of up/down coding.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Driven",
    description:
      "AI-charged algorithms recommend the appropriate E&M level, and identify and prevent medical fraud abuse to eliminate the need for a separate coder.",
  },
];

export default function MedicalBillingConsultancyFeatures() {
  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="consultancy-features-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge="BellMedEx Consultancy Features"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="consultancy-features-heading">
              Benefits Of Choosing{" "}
              <span className="font-bold text-blue-600">
                BellMedEx&apos;s Medical Billing Consultation Service
              </span>
            </span>
          }
          className="mb-10 mx-auto max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {CONSULTANCY_FEATURES.map((feature, idx) => (
            <MotionWrapper key={feature.title} variant="staggerItem" className="h-full">
              <BillingConsultancyFeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={idx}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
