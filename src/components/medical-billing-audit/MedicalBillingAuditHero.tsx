"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditHeroForm from "./MedicalBillingAuditHeroForm";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditHeroProps {
  data?: typeof defaultMedicalBillingAuditData.hero;
}

export default function MedicalBillingAuditHero({ data }: MedicalBillingAuditHeroProps) {
  const heroData = data || defaultMedicalBillingAuditData.hero;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className={auditContainerClassName}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <SectionBadge variant="blue" pulse>
              {heroData.badge}
            </SectionBadge>

            <h1
              id="medical-billing-audit-hero-heading"
              className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              {heroData.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{heroData.titleHighlight}</span>
            </h1>

            <div className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base">
              <p>{heroData.description1}</p>
              <p>{heroData.description2}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5">
            <MedicalBillingAuditHeroForm
              formTitle={heroData.formTitle}
              formDescription={heroData.formDescription}
              formButtonLabel={heroData.formButtonLabel}
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
