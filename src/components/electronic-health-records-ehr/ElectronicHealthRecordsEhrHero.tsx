"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import EhrPlatformRatings from "./EhrPlatformRatings";
import { ehrContainerClassName } from "./ehrSectionLayout";

export default function ElectronicHealthRecordsEhrHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20"
      aria-labelledby="electronic-health-records-ehr-hero-heading"
    >
      <div className={ehrContainerClassName}>
        <MotionWrapper variant="fadeUp" className="w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <SectionBadge variant="indigo" pulse className="mb-4 sm:mb-5">
              Electronic Health Records Software.
            </SectionBadge>

            <h1
              id="electronic-health-records-ehr-hero-heading"
              className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              The 21st Century Antidote to{" "}
              <span className="text-[#1D4ED8]">Medical Records-Keeping Challenges!</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-[1.6] text-[#475569] sm:mt-6 sm:text-base">
              Store, organize, and access your patients&apos; charts, billing, appointments
              and more in a secure and convenient way. Sounds like a win-win for your practice
              and patients. Indeed, it is possible with free EHR software by BellMedEx.
            </p>

            <div className="mt-8 sm:mt-10">
              <AppButton
                href="/schedule-a-demo"
                variant="primary"
                size="lg"
                showArrow
              >
                Start My Free Trial
              </AppButton>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-7xl sm:mt-12">
            <EhrPlatformRatings />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
