"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditProblemSolutionCard from "./MedicalBillingAuditProblemSolutionCard";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditProblemsSolutionsProps {
  data?: typeof defaultMedicalBillingAuditData.problemsSolutions;
}

export default function MedicalBillingAuditProblemsSolutions({ data }: MedicalBillingAuditProblemsSolutionsProps) {
  const psData = data || defaultMedicalBillingAuditData.problemsSolutions;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-problems-solutions-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge={psData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-problems-solutions-heading">
              {psData.titlePlain}{" "}
              <span className="font-bold text-blue-600">{psData.titleHighlight}</span>
            </span>
          }
          description={psData.description}
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {psData.pairs.map((pair, index) => {
            const ProblemIcon = getIcon(pair.problemIconName);
            const SolutionIcon = getIcon(pair.solutionIconName);
            return (
              <MotionWrapper key={pair.problemTitle} variant="staggerItem" className="h-full">
                <MedicalBillingAuditProblemSolutionCard
                  index={index}
                  problemIcon={ProblemIcon}
                  problemTitle={pair.problemTitle}
                  problemDescription={pair.problemDescription}
                  solutionIcon={SolutionIcon}
                  solutionTitle={pair.solutionTitle}
                  solutionDescription={pair.solutionDescription}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.2} className="mt-10 flex justify-center sm:mt-12">
          <AppButton
            href={psData.ctaHref || "#claim-free-medical-audit"}
            variant="primary"
            size="lg"
            showArrow
          >
            {psData.ctaLabel}
          </AppButton>
        </MotionWrapper>
      </div>
    </section>
  );
}
