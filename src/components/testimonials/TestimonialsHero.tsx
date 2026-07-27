"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Star, ShieldCheck, TrendingUp, Users } from "lucide-react";

import { TestimonialsHeroData } from "@/payload/types/testimonials";
import { defaultTestimonialsData } from "@/lib/defaults/testimonials";

const iconMap: Record<string, any> = {
  Star,
  ShieldCheck,
  TrendingUp,
  Users,
};

interface TestimonialsHeroProps {
  data?: TestimonialsHeroData;
}

export default function TestimonialsHero({ data }: TestimonialsHeroProps) {
  const content = data || defaultTestimonialsData.hero;
  const statsList = content.stats && content.stats.length > 0 ? content.stats : defaultTestimonialsData.hero.stats;

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

        {/* Title */}
        <MotionWrapper variant="blurReveal">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
            {content.title}{" "}
            {content.highlightedTitle && (
              <span className="text-[#1D4ED8]">{content.highlightedTitle}</span>
            )}
          </h1>
        </MotionWrapper>

        {/* Subtitle Description */}
        <MotionWrapper variant="blurReveal" delay={0.1}>
          <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-2xl mx-auto font-normal">
            {content.subtitle}
          </p>
        </MotionWrapper>

        {/* Stats Pill Banner */}
        <MotionWrapper variant="scaleUp" delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
            {statsList.map((stat, idx) => {
              const Icon = (stat.iconName && iconMap[stat.iconName]) || Star;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E6EC] p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center space-y-1 text-center"
                >
                  <div className="flex items-center gap-1 text-[#1D4ED8]">
                    <Icon className="w-4 h-4" />
                    <span className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
