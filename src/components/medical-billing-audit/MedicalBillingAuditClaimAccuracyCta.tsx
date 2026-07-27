"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditClaimAccuracyCtaProps {
  data?: typeof defaultMedicalBillingAuditData.claimAccuracyCta;
}

export default function MedicalBillingAuditClaimAccuracyCta({ data }: MedicalBillingAuditClaimAccuracyCtaProps) {
  const ctaData = data || defaultMedicalBillingAuditData.claimAccuracyCta;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-claim-accuracy-cta-heading"
    >
      <div className={auditContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="medical-billing-audit-claim-accuracy-cta-heading"
                className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl sm:leading-snug"
              >
                {ctaData.titlePrefix}{" "}
                <span className="font-bold text-amber-300">{ctaData.titleHighlight}</span>
              </h2>

              <p className="mt-3.5 text-sm text-blue-200 sm:text-base">
                {ctaData.subtext}
              </p>

              <div className="mt-8 flex w-full justify-center">
                <AppButton
                  href={ctaData.ctaHref || "#claim-free-medical-audit"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {ctaData.ctaLabel}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
