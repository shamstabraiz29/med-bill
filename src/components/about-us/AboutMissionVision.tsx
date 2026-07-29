"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutMissionVisionData } from "@/payload/types/aboutUs";

interface AboutMissionVisionProps {
  data?: AboutMissionVisionData;
}

export default function AboutMissionVision({ data }: AboutMissionVisionProps) {
  const content = data || defaultAboutUsData.missionVision;
  const valuesList =
    content.values && content.values.length > 0
      ? content.values
      : defaultAboutUsData.missionVision.values;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/40 border-y border-slate-200/50 py-16 sm:py-20 lg:py-24">
      {/* Subtle Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        {/* Main Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          title={
            <>
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          align="center"
        />

        {/* Mission & Vision Dual Text Cards (No Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <MotionWrapper variant="slideLeft" className="h-full">
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-lg hover:shadow-blue-900/5">
              <div className="space-y-4">
                <div>
                  <span className="inline-block text-xs font-semibold tracking-wide text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100/80">
                    {content.missionBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors">
                  {content.missionTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {content.missionDescription}
                </p>
              </div>
            </div>
          </MotionWrapper>

          {/* Vision Card */}
          <MotionWrapper variant="slideRight" className="h-full">
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-lg hover:shadow-blue-900/5">
              <div className="space-y-4">
                <div>
                  <span className="inline-block text-xs font-semibold tracking-wide text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100/80">
                    {content.visionBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-[#1D4ED8] transition-colors">
                  {content.visionTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {content.visionDescription}
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* Core Values Section (No Icons) */}
        <div className="space-y-12 pt-12 border-t border-[#E2E6EC]">
          <SectionHeader
            badge={content.valuesBadge}
            badgeVariant="indigo"
            title={
              <>
                {content.valuesTitlePlain}{" "}
                <span className="text-[#1D4ED8]">
                  {content.valuesTitleHighlight}
                </span>
              </>
            }
            description={content.valuesDescription}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {valuesList.map((val, idx) => {
              const formattedIndex = (idx + 1).toString().padStart(2, "0");

              return (
                <MotionWrapper key={val.title || idx} variant="scaleUp" delay={idx * 0.05}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-md">
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                          {formattedIndex}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                        {val.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
