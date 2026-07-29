"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { EhrGetStartedCtaData } from "@/payload/types/electronicHealthRecordsEhr";
import { defaultElectronicHealthRecordsEhrData } from "@/lib/defaults/electronicHealthRecordsEhr";

interface ElectronicHealthRecordsEhrGetStartedCtaProps {
  data?: EhrGetStartedCtaData;
}

export default function ElectronicHealthRecordsEhrGetStartedCta({ data }: ElectronicHealthRecordsEhrGetStartedCtaProps) {
  const content = data || defaultElectronicHealthRecordsEhrData.getStartedCta;
  const highlightsList = content.highlights && content.highlights.length > 0 ? content.highlights : defaultElectronicHealthRecordsEhrData.getStartedCta.highlights;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="electronic-health-records-ehr-get-started-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            {/* Top Row: Copy & CTA Button */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
              <div className="max-w-3xl text-left space-y-3.5">
                <SectionBadge variant="dark">
                  FREE TRIAL AVAILABLE
                </SectionBadge>

                <h2
                  id="electronic-health-records-ehr-get-started-cta-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug"
                >
                  {content.titlePlain}{" "}
                  <span className="text-amber-300 font-bold">{content.titleHighlight}</span>
                </h2>

                <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-start lg:items-center justify-start lg:justify-end">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {content.buttonText || "Get Started For Free"}
                </AppButton>
              </div>
            </div>

            {/* Highlights Grid */}
            {highlightsList.length > 0 && (
              <>
                <div className="w-full border-t border-white/10 my-8 sm:my-10" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-left">
                  {highlightsList.map((item: any, idx: number) => {
                    const label = typeof item === 'string' ? item : item?.label || '';
                    return (
                      <div
                        key={label || idx}
                        className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 flex items-center gap-3 transition-colors duration-200 hover:bg-white/[0.08]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 stroke-[2]" />
                        </div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-200">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

