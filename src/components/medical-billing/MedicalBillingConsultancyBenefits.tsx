"use client";

import React from "react";
import {
  BadgeCheck,
  HeartHandshake,
  Trophy,
  Zap,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingConsultancyStatCard from "./BillingConsultancyStatCard";
import BillingConsultancyFeatureBlock from "./BillingConsultancyFeatureBlock";

interface BenefitStat {
  icon: LucideIcon;
  value: number;
  label: string;
}

const BENEFIT_STATS: BenefitStat[] = [
  { icon: BadgeCheck, value: 97.35, label: "Claim Approval" },
  { icon: Zap, value: 98.17, label: "Fast Reimbursements" },
  {
    icon: HeartHandshake,
    value: 98.44,
    label: "Payer-Provider-Patient Satisfaction",
  },
  { icon: Trophy, value: 98.89, label: "Overall Score" },
];

export default function MedicalBillingConsultancyBenefits() {
  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="consultancy-benefits-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge="Consultancy Benefits"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="consultancy-benefits-heading">
              BellMedEx&apos;s Medical Billing{" "}
              <span className="font-bold text-blue-600">Consultancy Benefits</span>
            </span>
          }
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <MotionWrapper variant="fadeUp" className="space-y-8 sm:space-y-10">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {BENEFIT_STATS.map((stat, idx) => (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <BillingConsultancyStatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              </MotionWrapper>
            ))}
          </MotionWrapper>

          <BillingConsultancyFeatureBlock
            imageSrc="/consultants-laptop.png"
            imageAlt="BellMedEx billing consultant reviewing clinic revenue cycle analytics on a tablet"
            description="Medical billing can be prone to errors, delays, and inefficiencies that affect your cash flow and profitability. BellMedEx's billing associates streamline your clinic's billing process by taking care of the entire RCM with real-time reports and analytics."
            ctaLabel="Let's Talk"
            ctaHref="/schedule-a-demo"
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
