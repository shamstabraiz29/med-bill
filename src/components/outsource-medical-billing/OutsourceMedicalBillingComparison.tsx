"use client";

import React from "react";
import { ArrowLeftRight, Ban, CheckCircle2 } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  outsourceContainerClassName,
  outsourceSectionAltClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceComparisonData } from "@/payload/types/outsourceMedicalBilling";

interface OutsourceMedicalBillingComparisonProps {
  data?: OutsourceComparisonData;
}

export default function OutsourceMedicalBillingComparison({ data }: OutsourceMedicalBillingComparisonProps) {
  const content = data || defaultOutsourceMedicalBillingData.comparison;
  const itemsList = content.items && content.items.length > 0 ? content.items : defaultOutsourceMedicalBillingData.comparison.items;

  return (
    <section
      className={outsourceSectionAltClassName}
      aria-labelledby="outsource-medical-billing-comparison-heading"
    >
      <div className={outsourceContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
          title={
            <span id="outsource-medical-billing-comparison-heading">
              <span className="text-blue-600">{content.titlePlain}</span>
              {content.titleHighlight}
            </span>
          }
          description={content.description}
        />

        <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {itemsList.map((item, index) => {
            const rawBullets = item.inhouseBullets || [];
            const bullets = rawBullets.map((b: any) => (typeof b === "string" ? b : b.text || ""));

            return (
              <MotionWrapper key={index} variant="fadeUp" delay={index * 0.05}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-stretch gap-4 rounded-2xl border border-[#E2E6EC] bg-white p-5 shadow-[0_4px_24px_rgba(29,78,216,0.04)]",
                    "md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6 md:p-6 lg:gap-8"
                  )}
                >
                  <div className="flex items-start gap-4 rounded-xl border border-red-100 bg-red-50/40 p-4 sm:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-500 shadow-sm ring-1 ring-red-100">
                      <Ban className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-red-500">
                        In-house billing
                      </p>
                      <div className="space-y-3">
                        <p className="text-xs leading-[1.65] text-[#475569] sm:text-sm">{item.inhouseText}</p>
                        {bullets.length > 0 && (
                          <ul className="space-y-2">
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bullet || bIdx}
                                className="flex items-start gap-2 text-xs leading-[1.65] text-[#475569] sm:text-sm"
                              >
                                <span
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#94A3B8]"
                                  aria-hidden="true"
                                />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="hidden items-center justify-center md:flex"
                    aria-hidden="true"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E6EC] bg-slate-50 text-[#1D4ED8]">
                      <ArrowLeftRight className="h-4 w-4 stroke-[2]" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-[#1D4ED8]/15 bg-blue-50/50 p-4 sm:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D4ED8] text-white shadow-md">
                      <CheckCircle2 className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">
                        BellMedEx outsourcing
                      </p>
                      <p className="text-xs leading-[1.65] text-[#475569] sm:text-sm">
                        {item.outsourcingText}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
