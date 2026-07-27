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
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceSolutionsData } from "@/payload/types/outsourceMedicalBilling";

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  UserRound,
  Code2,
  ClipboardList,
  CreditCard,
  ShieldAlert,
  RefreshCw,
  FileText,
};

interface OutsourceMedicalBillingSolutionsProps {
  data?: OutsourceSolutionsData;
}

export default function OutsourceMedicalBillingSolutions({ data }: OutsourceMedicalBillingSolutionsProps) {
  const content = data || defaultOutsourceMedicalBillingData.solutions;
  const solutionsList = content.solutions && content.solutions.length > 0 ? content.solutions : defaultOutsourceMedicalBillingData.solutions.solutions;

  return (
    <section
      className={cn(outsourceSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="outsource-medical-billing-solutions-heading"
    >
      <div className={outsourceContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="outsource-medical-billing-solutions-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.07}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {solutionsList.map((solution, idx) => {
            const Icon = (solution.iconName && ICON_MAP[solution.iconName]) || ShieldCheck;

            return (
              <MotionWrapper key={solution.title || idx} variant="staggerItem" className="h-full">
                <div className={cn(outsourceCardClassName, "h-full")}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <IconWrapper
                      icon={Icon}
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
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
