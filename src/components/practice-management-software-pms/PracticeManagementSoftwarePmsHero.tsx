"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingSoftwareTrustBar from "@/components/medical-billing-software/MedicalBillingSoftwareTrustBar";
import PmsHeroVisuals from "./PmsHeroVisuals";
import { pmsContainerClassName } from "./pmsSectionLayout";

export default function PracticeManagementSoftwarePmsHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20"
      aria-labelledby="practice-management-software-pms-hero-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="fadeUp" className="w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <SectionBadge variant="indigo" pulse className="mb-4 sm:mb-5">
              Practice Management Software.
            </SectionBadge>

            <h1
              id="practice-management-software-pms-hero-heading"
              className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              Practice Management Software x EHR = a{" "}
              <span className="text-[#1D4ED8]">
                potent force for practice growth!
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-[1.6] text-[#475569] sm:mt-6 sm:text-base">
              Free medical practice management software that simplifies practice and amplifies
              results. A dynamic healthcare solution that merges EHR, billing, and clinic
              management for physicians who seek better patient care, and better RCM.
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

          <PmsHeroVisuals />

          <div className="mx-auto mt-10 w-full max-w-7xl border-t border-[#E2E6EC] pt-8 sm:mt-12 sm:pt-10 lg:mt-14">
            <MedicalBillingSoftwareTrustBar />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
