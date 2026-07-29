"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SmallPracticesHeroBenefits, {
  SmallPracticesHeroTrustBadges,
} from "./SmallPracticesHeroBenefits";
import SmallPracticesHeroHeader from "./SmallPracticesHeroHeader";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

interface SmallPracticesHeroProps {
  data?: SmallPracticesPageData["hero"];
}

export default function SmallPracticesHero({ data }: SmallPracticesHeroProps) {
  return (
    <section
      className={smallPracticeSectionClassName}
      aria-labelledby="small-practices-hero-heading"
    >
      <div className={`${smallPracticeContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col space-y-6 lg:col-span-7 text-left">
            <SmallPracticesHeroHeader headingId="small-practices-hero-heading" data={data} />

            <MotionWrapper variant="fadeUp" delay={0.15}>
              <AppButton
                href="/schedule-a-demo"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto shadow-lg shadow-blue-600/15"
              >
                Schedule Free Consultation
              </AppButton>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={0.2} className="pt-2">
              <SmallPracticesHeroTrustBadges stats={data?.trustStats} />
            </MotionWrapper>
          </div>

          <MotionWrapper variant="slideRight" delay={0.15} className="lg:col-span-5 w-full">
            <SmallPracticesHeroBenefits benefits={data?.benefits} />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

