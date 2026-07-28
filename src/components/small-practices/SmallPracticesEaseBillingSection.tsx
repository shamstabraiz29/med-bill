"use client";

import React from "react";
import IconWrapper from "@/components/common/IconWrapper";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_FEATURES = [
  {
    iconName: "Handshake",
    description: "We take up all your non-clinical burdens",
  },
  {
    iconName: "RefreshCw",
    description: "Proactively handle constantly changing billing & coding rules",
  },
  {
    iconName: "CircleDollarSign",
    description: "Affordable for your specialty",
  },
  {
    iconName: "Zap",
    description: "Faster reimbursements",
  },
  {
    iconName: "Eye",
    description: "Transparent in our reporting",
  },
  {
    iconName: "FileCheck",
    description: "Cater end-to-end denial management",
  },
];

interface SmallPracticesEaseBillingSectionProps {
  data?: SmallPracticesPageData["easeBilling"];
}

export default function SmallPracticesEaseBillingSection({ data }: SmallPracticesEaseBillingSectionProps) {
  const badge = data?.badge ?? "Small Practice Support.";
  const titlePlain = data?.titlePlain ?? "Here's How We Ease Billing for ";
  const titleHighlight = data?.titleHighlight ?? "Small Practices!";
  const featuresList = data?.features && data.features.length > 0 ? data.features : DEFAULT_FEATURES;

  return (
    <section
      className={cn(smallPracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="small-practices-ease-billing-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <SectionHeader
          badge={badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="small-practices-ease-billing-heading">
              {titlePlain}
              <span className="text-blue-600">{titleHighlight}</span>
            </span>
          }
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {featuresList.map((feature) => {
            const Icon = getIcon(feature.iconName);

            return (
              <MotionWrapper key={feature.description} variant="staggerItem" className="h-full">
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
                      {feature.description}
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
