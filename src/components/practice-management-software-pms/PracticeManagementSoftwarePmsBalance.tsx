"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsBalanceData } from "@/payload/types/practiceManagementSoftwarePms";

interface PracticeManagementSoftwarePmsBalanceProps {
  data?: PmsBalanceData;
}

export default function PracticeManagementSoftwarePmsBalance({ data }: PracticeManagementSoftwarePmsBalanceProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.balance;

  return (
    <section
      className={pmsSectionClassName}
      aria-labelledby="practice-management-software-pms-balance-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="fadeUp">
          <SectionHeader
            align="center"
            className="mx-auto max-w-4xl space-y-4"
            title={
              <span id="practice-management-software-pms-balance-heading">
                {content.titlePlain}
                <span className="font-bold text-blue-600">{content.titleHighlight}</span>
                {content.titleSuffix}
              </span>
            }
            description={content.description}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
