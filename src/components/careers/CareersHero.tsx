"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { getIcon } from "@/lib/icons";
import type { CareersHeroData } from "@/payload/types/careers";
import { defaultCareersData } from "@/lib/defaults/careers";

interface CareersHeroProps {
  data?: CareersHeroData;
}

export default function CareersHero({ data }: CareersHeroProps) {
  const content = data || defaultCareersData.hero;

  return (
    <section className="relative w-full pt-12 pb-8 sm:pt-16 sm:pb-12 bg-transparent text-center overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Eyebrow Badge */}
        <MotionWrapper variant="springPop" className="flex justify-center">
          <SectionBadge variant="indigo" pulse>
            {content.badge}
          </SectionBadge>
        </MotionWrapper>

        {/* Headline */}
        <MotionWrapper variant="blurReveal">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
            {content.titlePlain}{" "}
            <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
          </h1>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper variant="blurReveal" delay={0.1}>
          <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-2xl mx-auto font-normal">
            {content.description}
          </p>
        </MotionWrapper>

        {/* Perks Grid */}
        <MotionWrapper variant="scaleUp" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {content.perks.map((perk, idx) => {
              const Icon = getIcon(perk.iconName);
              return (
                <div
                  key={perk.id || idx}
                  className="flex items-center gap-2 bg-white border border-[#E2E6EC] px-4 py-2 rounded-full shadow-sm text-xs sm:text-sm font-semibold text-[#0F172A]"
                >
                  <Icon className="w-4 h-4 text-[#1D4ED8]" />
                  <span>{perk.label}</span>
                </div>
              );
            })}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
