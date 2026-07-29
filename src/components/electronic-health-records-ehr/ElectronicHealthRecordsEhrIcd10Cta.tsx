"use client";

import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { EhrIcd10CtaData } from "@/payload/types/electronicHealthRecordsEhr";
import { defaultElectronicHealthRecordsEhrData } from "@/lib/defaults/electronicHealthRecordsEhr";

interface ElectronicHealthRecordsEhrIcd10CtaProps {
  data?: EhrIcd10CtaData;
}

export default function ElectronicHealthRecordsEhrIcd10Cta({ data }: ElectronicHealthRecordsEhrIcd10CtaProps) {
  const content = data || defaultElectronicHealthRecordsEhrData.icd10Cta;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="electronic-health-records-ehr-icd10-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 text-left">
              <div className="lg:col-span-7 space-y-3.5">
                <SectionBadge variant="dark">
                  {content.badgeText || "EHR FOR ICD-10 CODING"}
                </SectionBadge>

                <h2
                  id="electronic-health-records-ehr-icd10-cta-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug"
                >
                  {content.titlePlain}{" "}
                  <span className="font-bold text-amber-300">{content.titleHighlight}</span>
                </h2>

                <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                  {content.subtitle}
                </p>

                <div className="pt-2">
                  <AppButton
                    href={content.buttonLink || "/schedule-a-demo"}
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                  >
                    {content.buttonText || "Start My Free Trial"}
                  </AppButton>
                </div>
              </div>

              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <div
                  className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full bg-white/[0.06]" />
                  <ShieldCheck className="relative h-28 w-28 text-white/90 sm:h-32 sm:w-32" strokeWidth={1.25} />

                  <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm sm:inset-x-6">
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                    <span className="text-sm font-extrabold tracking-[0.12em] text-white sm:text-base">
                      ICD-10
                    </span>
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

