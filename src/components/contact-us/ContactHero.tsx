"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Clock, ShieldCheck, Headphones, MessageSquare, LucideIcon } from "lucide-react";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactHeroData } from "@/payload/types/contactUs";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  Headphones,
  ShieldCheck,
};

interface ContactHeroProps {
  data?: ContactHeroData;
}

export default function ContactHero({ data }: ContactHeroProps) {
  const content = data || defaultContactUsData.hero;
  const highlightsList = content.highlights && content.highlights.length > 0 ? content.highlights : defaultContactUsData.hero.highlights;

  return (
    <section className="relative w-full pt-12 pb-10 sm:pt-16 sm:pb-14 bg-transparent overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-transparent pointer-events-none -z-10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <MotionWrapper variant="fadeIn">
          <div className="flex justify-center">
            <SectionBadge variant="blue" pulse icon={MessageSquare}>
              {content.badge}
            </SectionBadge>
          </div>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.18]">
            {content.titlePlain}{" "}
            <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
          </h1>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.2}>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </MotionWrapper>

        {/* Quick Highlights Bar - Clean Non-Card Layout */}
        <MotionWrapper variant="fadeIn" delay={0.3}>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-4xl mx-auto">
            {highlightsList.map((item, idx) => {
              const Icon = (item.iconName && ICON_MAP[item.iconName]) || Clock;
              return (
                <div
                  key={item.title || idx}
                  className="group flex items-start gap-3.5 text-left"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1D4ED8] shrink-0 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
