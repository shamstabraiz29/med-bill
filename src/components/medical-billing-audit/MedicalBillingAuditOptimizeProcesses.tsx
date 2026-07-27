"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "@/components/medical-coding/MedicalCodingServiceCard";
import MedicalBillingAuditFreeAuditCard from "./MedicalBillingAuditFreeAuditCard";
import { getIcon } from "@/lib/icons";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";
import { defaultMedicalBillingAuditData } from "@/lib/defaults/medicalBillingAudit";

interface MedicalBillingAuditOptimizeProcessesProps {
  data?: typeof defaultMedicalBillingAuditData.optimizeProcesses;
}

export default function MedicalBillingAuditOptimizeProcesses({ data }: MedicalBillingAuditOptimizeProcessesProps) {
  const optData = data || defaultMedicalBillingAuditData.optimizeProcesses;

  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-optimize-heading"
    >
      <div className={auditContainerClassName}>
        <SectionHeader
          badge={optData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-billing-audit-optimize-heading">
              {optData.titlePlain}{" "}
              <span className="font-bold text-blue-600">
                {optData.titleHighlight}
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
          {optData.processes.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <MotionWrapper key={item.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                />
              </MotionWrapper>
            );
          })}

          <MotionWrapper variant="staggerItem" className="h-full">
            <MedicalBillingAuditFreeAuditCard />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
}
