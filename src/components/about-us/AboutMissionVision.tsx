"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Target, Eye, ShieldCheck, Cpu, HeartHandshake, Award, LucideIcon } from "lucide-react";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutMissionVisionData } from "@/payload/types/aboutUs";

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Cpu,
  Target,
  HeartHandshake,
  Award,
  Eye,
};

interface AboutMissionVisionProps {
  data?: AboutMissionVisionData;
}

export default function AboutMissionVision({ data }: AboutMissionVisionProps) {
  const content = data || defaultAboutUsData.missionVision;
  const valuesList = content.values && content.values.length > 0 ? content.values : defaultAboutUsData.missionVision.values;

  return (
    <section className="relative w-full py-12 sm:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">

        {/* Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          title={
            <>
              {content.titlePlain} <br className="hidden sm:inline" />
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          align="center"
        />

        {/* Mission & Vision 2-Column Simple Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-2">
          
          {/* Mission Block */}
          <MotionWrapper variant="slideLeft">
            <div className="space-y-4 text-left">
              <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-xs shrink-0">
                <Target className="w-6.5 h-6.5" />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-blue-50 text-[#1D4ED8] border border-blue-100/80 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  {content.missionBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                  {content.missionTitle}
                </h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {content.missionDescription}
                </p>
              </div>
            </div>
          </MotionWrapper>

          {/* Vision Block */}
          <MotionWrapper variant="slideRight">
            <div className="space-y-4 text-left">
              <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-xs shrink-0">
                <Eye className="w-6.5 h-6.5" />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-blue-50 text-[#1D4ED8] border border-blue-100/80 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  {content.visionBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                  {content.visionTitle}
                </h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {content.visionDescription}
                </p>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* Core Values Section */}
        <div className="space-y-10 pt-8 border-t border-[#E2E6EC]">
          <SectionHeader
            badge={content.valuesBadge}
            badgeVariant="indigo"
            title={
              <>
                {content.valuesTitlePlain} <span className="text-[#1D4ED8]">{content.valuesTitleHighlight}</span>
              </>
            }
            description={content.valuesDescription}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {valuesList.map((val, idx) => {
              const Icon = (val.iconName && ICON_MAP[val.iconName]) || ShieldCheck;
              return (
                <MotionWrapper key={val.title || idx} variant="scaleUp" delay={idx * 0.05}>
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1D4ED8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-[#0F172A]">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{val.description}</p>
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
