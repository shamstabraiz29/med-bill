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
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

const ICON_MAP: Record<string, LucideIcon> = {
  CircleDollarSign,
  Target,
  Heart,
  ShieldCheck,
  Scale,
  PiggyBank,
};

interface LargePracticesCommonGoalsProps {
  data?: LargePracticesPageData["commonGoals"];
}

export default function LargePracticesCommonGoals({ data }: LargePracticesCommonGoalsProps) {
  const content = data || defaultLargePracticesData.commonGoals;
  const rawGoals = content.goals && content.goals.length > 0 ? content.goals : defaultLargePracticesData.commonGoals.goals;

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-common-goals-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-3xl sm:mb-14"
          title={
            <span id="large-practices-common-goals-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {rawGoals.map((goal, idx) => {
            const Icon = (goal.iconName && ICON_MAP[goal.iconName]) || CircleDollarSign;
            return (
              <MotionWrapper key={goal.label || idx} variant="staggerItem" className="h-full">
                <div
                  className={`${largePracticeCardClassName} flex h-full flex-col items-center px-5 py-7 text-center transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:px-6 sm:py-8`}
                >
                  <IconWrapper icon={Icon} size="md" variant="surface" className="mb-4" />
                  <p className="text-sm font-bold leading-snug tracking-[-0.02em] text-[#0F172A]">
                    {goal.label}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
