"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

interface SmallPracticesPartnerCtaSectionProps {
  data?: SmallPracticesPageData["partnerCta"];
}

export default function SmallPracticesPartnerCtaSection({ data }: SmallPracticesPartnerCtaSectionProps) {
  const badge = data?.badge ?? "Partner With BellMedEx.";
  const titlePlain = data?.titlePlain ?? "Partner with BellMedEx and ";
  const titleHighlight = data?.titleHighlight ?? "Experience the Difference";
  const description =
    data?.description ??
    "We prioritize high-touch, personalized service, clear communication and transparency, keeping you informed every step of the way. Our team possesses in-depth knowledge of the latest billing regulations and coding guidelines, ensuring compliance and maximizing your practice's financial performance. We provide complete reports and analytics to empower you to make informed decisions about your healthcare.";
  const ctaText = data?.ctaText ?? "Schedule a Quick Call";
  const ctaHref = data?.ctaHref ?? "/schedule-a-demo";

  return (
    <section
      className={cn(smallPracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="small-practices-partner-cta-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <SectionBadge variant="dark">{badge}</SectionBadge>

                <h2
                  id="small-practices-partner-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {titlePlain}{" "}
                  <span className="font-bold text-amber-300">{titleHighlight}</span>
                </h2>

                <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                  {description}
                </p>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
                <AppButton
                  href={ctaHref}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {ctaText}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
