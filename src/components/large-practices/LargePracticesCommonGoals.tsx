"use client";

import React from "react";
import {
  BarChart3,
  CircleDollarSign,
  FileCog,
  LucideIcon,
  PiggyBank,
  ShieldCheck,
  Target,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

const ICON_MAP: Record<string, LucideIcon> = {
  CircleDollarSign,
  Target,
  BarChart3,
  FileCog,
  ShieldCheck,
  PiggyBank,
};

interface LargePracticesCommonGoalsProps {
  data?: LargePracticesPageData["commonGoals"];
}

export default function LargePracticesCommonGoals({ data }: LargePracticesCommonGoalsProps) {
  const content = data || defaultLargePracticesData.commonGoals;
  const rawGoals =
    content.goals && content.goals.length > 0
      ? content.goals
      : defaultLargePracticesData.commonGoals.goals;

  return (
    <section
      className={cn(largePracticeSectionClassName, "border-t border-[#E2E6EC]")}
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
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {rawGoals.map((goal, idx) => {
            const Icon = (goal.iconName && ICON_MAP[goal.iconName]) || CircleDollarSign;
            return (
              <MotionWrapper key={goal.label || idx} variant="staggerItem" className="h-full">
                <Card
                  glass={false}
                  hoverEffect="both"
                  className="group flex h-full flex-col items-center justify-start rounded-2xl border border-[#E2E6EC] bg-white p-6 text-center shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg sm:rounded-2xl sm:p-8"
                >
                  <CardContent className="flex flex-col items-center p-0 text-center">
                    <IconWrapper
                      icon={Icon}
                      size="lg"
                      variant="surface"
                      className="mb-5 transition-transform duration-300 group-hover:scale-110"
                    />
                    <p className="text-sm font-semibold leading-[1.65] text-[#0F172A] sm:text-[15px]">
                      {goal.label}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
