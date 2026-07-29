"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesBillingInfrastructureProps {
  data?: LargePracticesPageData["infrastructure"];
}

export default function LargePracticesBillingInfrastructure({
  data,
}: LargePracticesBillingInfrastructureProps) {
  const content = data || defaultLargePracticesData.infrastructure;

  return (
    <section
      className={cn(largePracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="large-practices-infrastructure-heading"
    >
      <div className={largePracticeContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D4ED8]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
              <SectionBadge variant="dark" pulse>
                Enterprise Infrastructure.
              </SectionBadge>

              <h2
                id="large-practices-infrastructure-heading"
                className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-3xl sm:leading-snug lg:text-4xl"
              >
                {content.titlePlain}
                {content.titleHighlight ? (
                  <span className="text-amber-300">{content.titleHighlight}</span>
                ) : null}
              </h2>

              <div className="mt-5 space-y-4 sm:mt-6">
                <p className="text-sm leading-[1.65] text-blue-200 sm:text-base">
                  {content.descriptionParagraph1}
                </p>
                <p className="text-sm leading-[1.65] text-blue-200 sm:text-base">
                  {content.descriptionParagraph2}
                </p>
              </div>

              <div className="mt-8 w-full sm:mt-10 sm:w-auto">
                <AppButton
                  href={content.ctaHref}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto sm:min-w-[200px]"
                >
                  {content.ctaText}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
