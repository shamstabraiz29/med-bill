"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingNeedSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesNeedSectionProps {
  data?: HospitalBillingNeedSectionData;
}

export default function HospitalBillingServicesNeedSection({
  data,
}: HospitalBillingServicesNeedSectionProps) {
  const content = data || defaultHospitalBillingServicesData.need;
  const benefits =
    content.benefits && content.benefits.length > 0
      ? content.benefits
      : defaultHospitalBillingServicesData.need.benefits;
  const [decision, setDecision] = useState<"yes" | "no" | null>(null);

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-need-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="space-y-6 text-left lg:col-span-7">
            <h2 id="hospital-billing-services-need-heading" className={hospitalSectionTitleClassName}>
              {content.title.includes("Your Hospital?") ? (
                <>
                  {content.title.replace("Your Hospital?", "")}
                  <span className={hospitalSectionHighlightClassName}>Your Hospital?</span>
                </>
              ) : (
                content.title
              )}
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className={hospitalSectionBodyClassName}>{content.paragraph1}</p>
              <p className={hospitalSectionBodyClassName}>{content.paragraph2}</p>
            </div>

            <div className="space-y-3 pt-1 sm:space-y-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit || idx}
                  className={cn(
                    hospitalCardClassName,
                    "flex items-start gap-3 p-4 sm:p-5"
                  )}
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#475569] stroke-[2.5]"
                    aria-hidden="true"
                  />
                  <p className={hospitalSectionBodyClassName}>{benefit}</p>
                </div>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5 lg:sticky lg:top-28">
            <div className={cn(hospitalCardClassName, "overflow-hidden p-6 sm:p-8")}>
              <div className="relative">
                <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-xl">
                  {content.decisionTitle}
                </h3>

                <div className="mt-6 flex flex-wrap gap-6 sm:gap-10">
                  {(["yes", "no"] as const).map((option) => {
                    const isSelected = decision === option;
                    const label =
                      option === "yes" ? content.yesLabel || "YES" : content.noLabel || "NO";

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setDecision(option)}
                        className="group flex items-center gap-2.5 text-left transition-colors"
                        aria-pressed={isSelected}
                      >
                        <span
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-colors",
                            isSelected
                              ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                              : "border-[#E2E6EC] bg-[#F5F7FA] text-transparent group-hover:border-[#1D4ED8]/40"
                          )}
                          aria-hidden="true"
                        >
                          {isSelected ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : null}
                        </span>
                        <span
                          className={cn(
                            "text-sm font-bold tracking-wide sm:text-base",
                            isSelected ? "text-[#1D4ED8]" : "text-[#0F172A]"
                          )}
                        >
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="my-6 h-px bg-[#E2E6EC]" aria-hidden="true" />

                <p className={hospitalSectionBodyClassName}>{content.decisionFooter}</p>

                {decision === "yes" ? (
                  <div className="mt-6">
                    <AppButton
                      href={content.ctaHref || "/contact-us"}
                      variant="primary"
                      size="lg"
                      showArrow
                      className="w-full sm:w-auto"
                    >
                      {content.ctaText || "Contact Us"}
                    </AppButton>
                  </div>
                ) : null}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
