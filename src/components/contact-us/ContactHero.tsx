"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactHeroData } from "@/payload/types/contactUs";

interface ContactHeroProps {
  data?: ContactHeroData;
}

export default function ContactHero({ data }: ContactHeroProps) {
  const content = data || defaultContactUsData.hero;
  const highlightsList =
    content.highlights && content.highlights.length > 0
      ? content.highlights
      : defaultContactUsData.hero.highlights;

  return (
    <section className="relative w-full bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <MotionWrapper variant="fadeIn">
          <div className="flex justify-center">
            <SectionBadge variant="blue" pulse icon={MessageSquare}>
              {content.badge}
            </SectionBadge>
          </div>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.18]">
            {content.titlePlain}{" "}
            <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
          </h1>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.2}>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </MotionWrapper>

        {/* Quick Trust Highlights Strip matching PricingHero */}
        <MotionWrapper variant="fadeIn" delay={0.3}>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {highlightsList.map((item, idx) => {
              const label = typeof item === "string" ? item : item.title || "";
              return (
                <div
                  key={label || idx}
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white/90 border border-[#E2E6EC] px-4 py-2 rounded-full shadow-xs hover:border-[#1D4ED8]/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
