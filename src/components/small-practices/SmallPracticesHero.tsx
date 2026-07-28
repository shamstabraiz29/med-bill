"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SmallPracticesHeroBenefits, {
  SmallPracticesHeroTrustBadges,
} from "./SmallPracticesHeroBenefits";
import SmallPracticesHeroDemoForm from "./SmallPracticesHeroDemoForm";
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl"
      />

      <div className={`${smallPracticeContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <SmallPracticesHeroHeader headingId="small-practices-hero-heading" data={data} />

            <MotionWrapper variant="fadeUp" delay={0.2}>
              <SmallPracticesHeroTrustBadges stats={data?.trustStats} />
            </MotionWrapper>
          </div>

          <MotionWrapper variant="slideRight" delay={0.15} className="lg:col-span-5">
            <SmallPracticesHeroBenefits benefits={data?.benefits} />
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp" delay={0.25} className="mt-12 sm:mt-14 lg:mt-16">
          <SmallPracticesHeroDemoForm formTitle={data?.formTitle} formSubtitle={data?.formSubtitle} />
        </MotionWrapper>
      </div>
    </section>
  );
}
