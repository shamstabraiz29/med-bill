"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditPostAuditReportsProps {
  data?: typeof defaultMedicalBillingAuditData.postAuditReports;
}

export default function MedicalBillingAuditPostAuditReports({ data }: MedicalBillingAuditPostAuditReportsProps) {
  const reportsData = data || defaultMedicalBillingAuditData.postAuditReports;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-post-reports-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge={reportsData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-post-reports-heading">
              {reportsData.titlePlain}{" "}
              <span className="font-bold text-blue-600">{reportsData.titleHighlight}</span>{" "}
              {reportsData.titleSuffix}
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {reportsData.reports.map((report) => {
            const Icon = getIcon(report.iconName);
            return (
              <MotionWrapper key={report.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={report.title}
                  description={report.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
