"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import EhrPlatformRatings from "@/components/electronic-health-records-ehr/EhrPlatformRatings";
import { softwareContainerClassName } from "./softwareSectionLayout";

import { MedicalBillingSoftwareHeroData } from "@/payload/types/medicalBillingSoftware";
import { defaultMedicalBillingSoftwareData } from "@/lib/defaults/medicalBillingSoftware";

interface MedicalBillingSoftwareHeroProps {
  data?: MedicalBillingSoftwareHeroData;
}

export default function MedicalBillingSoftwareHero({ data }: MedicalBillingSoftwareHeroProps) {
  const content = data || defaultMedicalBillingSoftwareData.hero;

  const badge = content.badge || content.eyebrow || "Medical Billing Software";
  const titlePlain = content.titlePlain || content.titlePrefix || "Medical Billing";
  const titleHighlight = content.titleHighlight || "Software";
  const subtitle =
    content.subtitle ||
    [content.description1, content.description2].filter(Boolean).join(" ") ||
    "Automate billing workflow. Eliminate errors. Maximize reimbursement. 100% free to try. No credit card required.";
  const buttonText = content.buttonText || "Get Started For Free";
  const buttonLink = content.buttonLink || "/schedule-a-demo";

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20"
      aria-labelledby="medical-billing-software-hero-heading"
    >


      <div className={`${softwareContainerClassName} relative z-10`}>
        <MotionWrapper variant="fadeUp" className="w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <SectionBadge variant="indigo" pulse className="mb-4 sm:mb-5">
              {badge}
            </SectionBadge>

            <h1
              id="medical-billing-software-hero-heading"
              className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              {titlePlain}{" "}
              <span className="text-[#1D4ED8]">{titleHighlight}</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-[1.6] text-[#475569] sm:mt-6 sm:text-base">
              {subtitle}
            </p>

            <div className="mt-8 sm:mt-10">
              <AppButton
                href={buttonLink}
                variant="primary"
                size="lg"
                showArrow
              >
                {buttonText}
              </AppButton>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full sm:mt-12 lg:mt-14">
            <EhrPlatformRatings />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
