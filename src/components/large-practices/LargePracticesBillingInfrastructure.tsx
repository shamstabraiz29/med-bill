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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <SectionBadge variant="dark">
                  Enterprise Infrastructure.
                </SectionBadge>

                <h2
                  id="large-practices-infrastructure-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {content.titlePlain}{" "}
                  {content.titleHighlight ? (
                    <span className="font-bold text-amber-300">{content.titleHighlight}</span>
                  ) : null}
                </h2>

                <div className="space-y-3 pt-1">
                  {content.descriptionParagraph1 ? (
                    <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                      {content.descriptionParagraph1}
                    </p>
                  ) : null}
                  {content.descriptionParagraph2 ? (
                    <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                      {content.descriptionParagraph2}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
                <AppButton
                  href={content.ctaHref}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto"
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
