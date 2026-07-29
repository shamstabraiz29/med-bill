"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditRecordsCtaProps {
  data?: typeof defaultMedicalBillingAuditData.recordsCta;
}

export default function MedicalBillingAuditRecordsCta({ data }: MedicalBillingAuditRecordsCtaProps) {
  const ctaData = data || defaultMedicalBillingAuditData.recordsCta;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-records-cta-heading"
    >
      <div className={auditContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3.5 text-left">
                <h2
                  id="medical-billing-audit-records-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl sm:leading-snug"
                >
                  {ctaData.titlePrefix}{" "}
                  <span className="font-bold text-amber-300">{ctaData.titleHighlight}</span>
                </h2>

                <p className="text-sm text-blue-200 sm:text-base">
                  {ctaData.subtext}
                </p>
              </div>

              <div className="flex shrink-0 items-start justify-start lg:items-center lg:justify-end">
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
