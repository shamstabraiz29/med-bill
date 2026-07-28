"use client";

import React, { Fragment } from "react";
import BillingWorkflowConnector from "@/components/medical-billing/BillingWorkflowConnector";
import BillingWorkflowStepCard from "@/components/medical-billing/BillingWorkflowStepCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_STATS = [
  {
    id: 1,
    iconName: "TrendingDown",
    description: "Poor billing causes practices to lose around $125 billion each year",
  },
  {
    id: 2,
    iconName: "FileWarning",
    description: "Lost revenue in Denied Claims is approx. $5 million per provider",
  },
  {
    id: 3,
    iconName: "AlertTriangle",
    description: "Around 80% of bills contain errors",
  },
];

interface SmallPracticesRevenueLossSectionProps {
  data?: SmallPracticesPageData["revenueLoss"];
}

export default function SmallPracticesRevenueLossSection({ data }: SmallPracticesRevenueLossSectionProps) {
  const badge = data?.badge ?? "According to Recent Reports.";
  const titlePlain =
    data?.titlePlain ??
    "Medical Billing Complexities Such as Denied Claims and Poor Billing Practices Result in ";
  const titleHighlight = data?.titleHighlight ?? "Massive Revenue Loss";

  const statsList = data?.stats && data.stats.length > 0
    ? data.stats.map((st, idx) => ({ id: idx + 1, iconName: st.iconName, description: st.description }))
    : DEFAULT_STATS;

  return (
    <section
      className={cn(smallPracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="small-practices-revenue-loss-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"
      />

      <div className={`${smallPracticeContainerClassName} relative z-10 space-y-10 sm:space-y-12 lg:space-y-14`}>
        <MotionWrapper variant="fadeUp" className="mx-auto max-w-4xl text-center">
          <SectionHeader
            badge={badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="small-practices-revenue-loss-heading">
                {titlePlain}
                <span className="text-blue-600">{titleHighlight}</span>
              </span>
            }
            className="mb-0 sm:mb-2"
          />
        </MotionWrapper>

        <div className="w-full" role="list" aria-label="Medical billing revenue loss statistics">
          <div className="flex flex-col gap-6 sm:hidden">
            {statsList.map((stat, index) => {
              const Icon = getIcon(stat.iconName);

              return (
                <Fragment key={stat.id}>
                  <MotionWrapper variant="fadeUp" delay={index * 0.06}>
                    <div role="listitem" className="h-full">
                      <BillingWorkflowStepCard
                        step={stat.id}
                        icon={Icon}
                        description={stat.description}
                        className="h-full"
                      />
                    </div>
                  </MotionWrapper>
                  {index < statsList.length - 1 ? (
                    <BillingWorkflowConnector direction="vertical" />
                  ) : null}
                </Fragment>
              );
            })}
          </div>

          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 lg:gap-8">
            {statsList.map((stat, index) => {
              const Icon = getIcon(stat.iconName);

              return (
                <Fragment key={stat.id}>
                  <MotionWrapper variant="fadeUp" delay={index * 0.06} className="min-w-0">
                    <div role="listitem" className="h-full">
                      <BillingWorkflowStepCard
                        step={stat.id}
                        icon={Icon}
                        description={stat.description}
                        className="h-full"
                      />
                    </div>
                  </MotionWrapper>
                  {index < statsList.length - 1 ? (
                    <BillingWorkflowConnector direction="horizontal" />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>

        <MotionWrapper variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
            All these stats can be reversed with thorough diligence, prior communication, and
            implementing a smooth billing process.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
