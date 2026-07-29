"use client";

import React from "react";
import { Check, ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionBodyClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingPatientManagementSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesPatientManagementSectionProps {
  data?: HospitalBillingPatientManagementSectionData;
}

export default function HospitalBillingServicesPatientManagementSection({
  data,
}: HospitalBillingServicesPatientManagementSectionProps) {
  const content = data || defaultHospitalBillingServicesData.patientManagement;
  const withoutPoints =
    content.withoutPoints?.length > 0
      ? content.withoutPoints
      : defaultHospitalBillingServicesData.patientManagement.withoutPoints;
  const withPoints =
    content.withPoints?.length > 0
      ? content.withPoints
      : defaultHospitalBillingServicesData.patientManagement.withPoints;

  return (
    <section
      className={cn(hospitalSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="hospital-billing-services-patient-management-heading"
    >
      <div className={hospitalContainerClassName}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="hospital-billing-services-patient-management-heading">
              {content.titlePlain}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
          description={content.description}
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="space-y-4">
            <h3 className="text-base font-bold text-[#1D4ED8] sm:text-lg">{content.withoutTitle}</h3>
            <div className="space-y-3 sm:space-y-4">
              {withoutPoints.map((point, index) => (
                <div
                  key={point || index}
                  className={cn(hospitalCardClassName, "flex items-start gap-3 p-4 sm:p-5")}
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#475569] stroke-[2.5]"
                    aria-hidden="true"
                  />
                  <p className={hospitalSectionBodyClassName}>{point}</p>
                </div>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="space-y-4">
            <h3 className="text-base font-bold text-[#1D4ED8] sm:text-lg">{content.withTitle}</h3>
            <div className="space-y-3 sm:space-y-4">
              {withPoints.map((point, index) => (
                <div
                  key={point || index}
                  className={cn(hospitalCardClassName, "flex items-start gap-3 p-4 sm:p-5")}
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1D4ED8] text-white"
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <p className={hospitalSectionBodyClassName}>{point}</p>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
