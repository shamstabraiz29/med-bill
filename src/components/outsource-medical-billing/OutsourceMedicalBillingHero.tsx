"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import OutsourceMedicalBillingHeroForm from "./OutsourceMedicalBillingHeroForm";
import {
  outsourceContainerClassName,
  outsourceHeroSectionClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceHeroData } from "@/payload/types/outsourceMedicalBilling";

interface OutsourceMedicalBillingHeroProps {
  data?: OutsourceHeroData;
}

export default function OutsourceMedicalBillingHero({ data }: OutsourceMedicalBillingHeroProps) {
  const content = data || defaultOutsourceMedicalBillingData.hero;

  return (
    <section
      className={outsourceHeroSectionClassName}
      aria-labelledby="outsource-medical-billing-hero-heading"
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

      <div className={`${outsourceContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h1
              id="outsource-medical-billing-hero-heading"
              className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </h1>

            <p className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.subtitle}
            </p>

            <AppButton
              href={content.buttonLink || "/schedule-a-demo"}
              variant="primary"
              size="lg"
              showArrow
            >
              {content.buttonText}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5">
            <OutsourceMedicalBillingHeroForm />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
