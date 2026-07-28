"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  largePracticeCardClassName,
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";

const INFRASTRUCTURE_COPY = [
  "Large practices face myriad challenges from patient registration to claims submission and follow-up. One of the grand struggles is filing multiple claims above all the other administrative burdens.",
  "A solid billing infrastructure ensures transparency, affordability, and flexibility that fine-tunes the weak areas of billing processes and this is where BellMedEx comes in. Our billing services are handled by efficient systems — that have up-to-date denial management resources and experienced personnel — who provide solutions and 24/7 assistance.",
] as const;

export default function LargePracticesBillingInfrastructure() {
  return (
    <section
      className={`${largePracticeSectionClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="large-practices-billing-infrastructure-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Billing Infrastructure."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-billing-infrastructure-heading">
              <span className="text-blue-600">Robust Billing Infrastructure</span> is a
              Promising Feature of Our Medical Billing Services
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8"
        >
          {INFRASTRUCTURE_COPY.map((paragraph) => (
            <MotionWrapper key={paragraph} variant="staggerItem" className="h-full">
              <div
                className={`${largePracticeCardClassName} h-full p-6 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8`}
              >
                <p className="text-sm leading-[1.7] text-[#475569] sm:text-base">
                  {paragraph}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.2} className="mt-10 flex justify-center sm:mt-12">
          <AppButton
            href="/schedule-a-demo"
            variant="primary"
            size="lg"
            showArrow
            className="w-full shadow-md shadow-blue-900/10 sm:w-auto"
          >
            Let&apos;s Hop on a Quick Call
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
