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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-white shadow-lg sm:rounded-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D4ED8]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
              <SectionBadge variant="dark">{badge}</SectionBadge>

              <h2
                id="small-practices-partner-cta-heading"
                className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-3xl sm:leading-snug lg:text-4xl"
              >
                {titlePlain}
                <span className="font-bold text-amber-300">{titleHighlight}</span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blue-200 sm:mt-6 sm:text-base">
                {description}
              </p>

              <div className="mt-8 w-full sm:mt-10 sm:w-auto">
                <AppButton
                  href={ctaHref}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto sm:min-w-[240px]"
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
