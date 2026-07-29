"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "./MedicalCodingServiceCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingIcd10ServicesProps {
  data?: typeof defaultMedicalCodingData.icd10Services;
}

export default function MedicalCodingIcd10Services({ data }: MedicalCodingIcd10ServicesProps) {
  const icd10Data = data || defaultMedicalCodingData.icd10Services;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-icd10-services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          title={
            <span id="medical-coding-icd10-services-heading">
              {icd10Data.titlePrefix}{" "}
              <span className="font-bold text-blue-600">
                {icd10Data.titleHighlight}
              </span>
            </span>
          }
          description={icd10Data.description}
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {icd10Data.services.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <MotionWrapper key={service.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
