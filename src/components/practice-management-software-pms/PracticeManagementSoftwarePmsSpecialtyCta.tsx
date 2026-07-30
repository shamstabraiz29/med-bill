"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsSpecialtyCtaData } from "@/payload/types/practiceManagementSoftwarePms";

interface PracticeManagementSoftwarePmsSpecialtyCtaProps {
  data?: PmsSpecialtyCtaData;
}

export default function PracticeManagementSoftwarePmsSpecialtyCta({ data }: PracticeManagementSoftwarePmsSpecialtyCtaProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.specialtyCta;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="practice-management-software-pms-specialty-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 text-left">
              <div className="space-y-3.5 lg:col-span-6 lg:order-1">
                {(content.badgeTag || content.badgeText) && (
                  <SectionBadge variant="dark">
                    {content.badgeText || content.badgeTag || "PMS SPECIALTY SOLUTION"}
                  </SectionBadge>
                )}

                <h2
                  id="practice-management-software-pms-specialty-cta-heading"
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
                    {content.buttonText || "Schedule a Demo"}
                  </AppButton>
                </div>
              </div>

              <div className="flex justify-center lg:col-span-6 lg:order-2 lg:justify-end">
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
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

