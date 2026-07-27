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

interface MedicalBillingAuditSolutionsProps {
  data?: typeof defaultMedicalBillingAuditData.solutions;
}

export default function MedicalBillingAuditSolutions({ data }: MedicalBillingAuditSolutionsProps) {
  const solutionsData = data || defaultMedicalBillingAuditData.solutions;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-solutions-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge={solutionsData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-solutions-heading">
              {solutionsData.titlePlain}{" "}
              <span className="font-bold text-blue-600">
                {solutionsData.titleHighlight}
              </span>
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {solutionsData.solutions.map((solution) => {
            const Icon = getIcon(solution.iconName);
            return (
              <MotionWrapper key={solution.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={solution.title}
                  description={solution.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
