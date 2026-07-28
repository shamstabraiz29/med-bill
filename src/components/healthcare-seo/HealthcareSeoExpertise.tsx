"use client";

import React, { useState } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { HealthcareSeoExpertiseData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoExpertiseProps {
  data?: HealthcareSeoExpertiseData;
}

export default function HealthcareSeoExpertise({ data }: HealthcareSeoExpertiseProps) {
  const content = data || defaultHealthcareSeoData.expertise;

  const [activeTab, setActiveTab] = useState<string>(
    content.valueProps[0]?.id || "affordable"
  );

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Eyebrow & Double Headline */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-6 flex flex-col items-start text-left space-y-3">
            <SectionBadge variant="indigo">
              {content.badge}
            </SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
              {content.titlePrefix} <br />
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </h2>
          </MotionWrapper>

          {/* Right Column: Description Copy */}
          <MotionWrapper variant="slideRight" className="lg:col-span-6 flex flex-col justify-center text-left pt-2 lg:pt-8">
            <p className="text-[#475569] text-sm sm:text-base leading-[1.75]">
              {content.description}
            </p>
          </MotionWrapper>

        </div>

        {/* Lower Showcase Card Container */}
        <MotionWrapper variant="scaleUp">
          <Card className="group relative flex flex-col lg:flex-row items-center justify-between w-full bg-slate-50/70 border border-[#E2E6EC] rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300 gap-8 lg:gap-12 text-left">
            <CardContent className="p-0 flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
              
              {/* LEFT: 4 Value-Proposition Feature Boxes (Horizontal Row) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto shrink-0">
                {content.valueProps.map((item) => {
                  const Icon = getIcon(item.iconName);
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full sm:w-28 aspect-square rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-white border-2 border-[#1D4ED8] shadow-md shadow-blue-900/10 scale-105"
                          : "bg-white border border-[#E2E6EC] hover:border-[#1D4ED8]/40 hover:shadow-sm"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? "bg-blue-50 text-[#1D4ED8]" : "bg-slate-100 text-[#0F172A]"
                      }`}>
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className={`text-xs sm:text-sm font-bold mt-2.5 transition-colors ${
                        isActive ? "text-[#1D4ED8]" : "text-[#0F172A]"
                      }`}>
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT: Main Description Copy & Active Details */}
              <div className="space-y-4 max-w-xl text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                  {content.cardTitle}
                </h3>

                <p className="text-[#475569] text-sm sm:text-base leading-[1.7]">
                  {content.cardDescription}
                </p>

                {/* Active Pillar Highlight Detail */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                    {content.valueProps.find((v) => v.id === activeTab)?.detail}
                  </span>
                </div>

                <div className="pt-2">
                  <AppButton
                    href={content.ctaHref}
                    variant="primary"
                    size="md"
                    showArrow
                  >
                    {content.ctaLabel}
                  </AppButton>
                </div>
              </div>

            </CardContent>
          </Card>
        </MotionWrapper>

      </div>
    </section>
  );
}
