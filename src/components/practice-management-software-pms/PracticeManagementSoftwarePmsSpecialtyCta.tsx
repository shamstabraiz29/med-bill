"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsSpecialtyCtaData } from "@/payload/types/practiceManagementSoftwarePms";

interface PracticeManagementSoftwarePmsSpecialtyCtaProps {
  data?: PmsSpecialtyCtaData;
}

export default function PracticeManagementSoftwarePmsSpecialtyCta({ data }: PracticeManagementSoftwarePmsSpecialtyCtaProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.specialtyCta;

  return (
    <section
      className={`${pmsSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="practice-management-software-pms-specialty-cta-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_40%)]"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="flex justify-center lg:col-span-6 lg:justify-start lg:order-1">
                <div className="relative w-full max-w-xl">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl">
                    <Image
                      src={content.imageSrc || "/pms-specialty-dashboard.png"}
                      alt={content.imageAlt || "BellMedEx specialty-specific practice management software dashboard"}
                      fill
                      className="object-contain p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-2">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {content.badgeTag && (
                    <span className="inline-flex items-center rounded-md border border-white/20 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">
                      {content.badgeTag}
                    </span>
                  )}
                  {content.badgeText && (
                    <span className="text-[11px] font-bold uppercase tracking-widest text-blue-100">
                      {content.badgeText}
                    </span>
                  )}
                </div>

                <h2
                  id="practice-management-software-pms-specialty-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
                >
                  {content.titlePlain}{" "}
                  <span className="font-bold text-amber-300">{content.titleHighlight}</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.6] text-blue-200 sm:mt-5 sm:text-base">
                  {content.subtitle}
                </p>

                <div className="mt-8">
                  <AppButton
                    href={content.buttonLink || "/schedule-a-demo"}
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                  >
                    {content.buttonText}
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
