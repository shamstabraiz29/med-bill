"use client";

import React from "react";
import {
  CircleDollarSign,
  Heart,
  LucideIcon,
  PiggyBank,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";

interface CommonGoal {
  icon: LucideIcon;
  label: string;
}

const COMMON_GOALS: CommonGoal[] = [
  { icon: CircleDollarSign, label: "Faster and More Cash Inflow" },
  { icon: Target, label: "Billing and Coding Accuracy" },
  { icon: Heart, label: "Improve Patient Experience" },
  { icon: ShieldCheck, label: "End-to-End Denial Management" },
  { icon: Scale, label: "Compliance Regulation" },
  { icon: PiggyBank, label: "Cost Savings" },
];

function CommonGoalCard({ goal }: { goal: CommonGoal }) {
  return (
    <div
      className={`${largePracticeCardClassName} flex h-full flex-col items-center px-5 py-7 text-center transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:px-6 sm:py-8`}
    >
      <IconWrapper icon={goal.icon} size="md" variant="surface" className="mb-4" />
      <p className="text-sm font-bold leading-snug tracking-[-0.02em] text-[#0F172A]">
        {goal.label}
      </p>
    </div>
  );
}

export default function LargePracticesCommonGoals() {
  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-common-goals-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Shared Objectives."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-common-goals-heading">
              BellMedEx and Large Practices Share{" "}
              <span className="text-blue-600">Common Goals</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {COMMON_GOALS.map((goal) => (
            <MotionWrapper key={goal.label} variant="staggerItem" className="h-full">
              <CommonGoalCard goal={goal} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
