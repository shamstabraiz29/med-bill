"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { HealthcareSeoPillarsData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoPillarsProps {
  data?: HealthcareSeoPillarsData;
}

export default function HealthcareSeoPillars({ data }: HealthcareSeoPillarsProps) {
  const content = data || defaultHealthcareSeoData.pillars;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* 3 Pillars Card Showcase Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full max-w-6xl mx-auto"
        >
          {content.pillars.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full flex">
                <Card className="group relative flex flex-col justify-between w-full bg-white border border-[#E2E6EC] rounded-2xl p-7 sm:p-8 text-center items-center hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col flex-1 items-center justify-start text-center">
                    
                    {/* Minimalist Organic Soft Blue Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mb-6 border border-blue-100/80 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-8 h-8 stroke-[1.75]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3.5 group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description Copy */}
                    <p className="text-[#475569] text-sm sm:text-base leading-[1.65]">
                      {item.description}
                    </p>

                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

      </div>
    </section>
  );
}
