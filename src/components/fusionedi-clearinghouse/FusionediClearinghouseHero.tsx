"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import EhrPlatformRatings from "@/components/electronic-health-records-ehr/EhrPlatformRatings";
import { fusionediContainerClassName } from "./fusionediSectionLayout";

export default function FusionediClearinghouseHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20"
      aria-labelledby="fusionedi-clearinghouse-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30"
      />

      <div className={`${fusionediContainerClassName} relative z-10`}>
        <MotionWrapper variant="fadeUp" className="w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <SectionBadge variant="indigo" pulse className="mb-4 sm:mb-5">
              Healthcare Fusion EDI Software.
            </SectionBadge>

            <h1
              id="fusionedi-clearinghouse-hero-heading"
              className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              A fusion of EDI and Healthcare Billing for practices that want{" "}
              <span className="text-[#1D4ED8]">Speedy Rewards!</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-[1.6] text-[#475569] sm:mt-6 sm:text-base">
              FusionEDI&reg; is a healthcare clearinghouse EDI software for an
              &ldquo;instant&rdquo; transmission of claims with absolute accuracy. Our scalable
              medical billing EDI solution scrubs claims, resolves denials, and verifies
              patient eligibility for a better medical revenue cash flow.
            </p>

            <div className="mt-8 sm:mt-10">
              <AppButton
                href="/schedule-a-demo"
                variant="primary"
                size="lg"
                showArrow
              >
                Get Started For Free
              </AppButton>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-3xl sm:mt-12">
            <EhrPlatformRatings />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
