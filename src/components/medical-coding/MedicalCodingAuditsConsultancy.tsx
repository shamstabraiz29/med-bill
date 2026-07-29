"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingAuditsConsultancyProps {
  data?: typeof defaultMedicalCodingData.auditsConsultancy;
}

export default function MedicalCodingAuditsConsultancy({ data }: MedicalCodingAuditsConsultancyProps) {
  const auditData = data || defaultMedicalCodingData.auditsConsultancy;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-audits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={auditData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-audits-heading">
              {auditData.titlePlain}{" "}
              <span className="font-bold text-blue-600">
                {auditData.titleHighlight}
              </span>
            </span>
          }
          description={
            <>
              <p>{auditData.description1}</p>
              <p className="mt-4 font-bold text-[#0F172A]">
                {auditData.description2}
              </p>
            </>
          }
          className="mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {auditData.services.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <MotionWrapper key={service.title} variant="staggerItem" className="h-full">
                <Card className="group relative flex h-full flex-col rounded-2xl border border-[#E2E6EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5">
                  <CardContent className="flex flex-1 flex-col items-start p-0 text-left">
                    <div className="mb-6 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 stroke-[1.25]" aria-hidden="true" />
                    </div>

                    <h3 className="mb-3 text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A]">
                      {service.title}
                    </h3>

                    <p className="text-xs leading-[1.6] text-[#475569] sm:text-[13px]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
