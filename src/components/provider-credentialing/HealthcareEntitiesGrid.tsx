"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { HealthcareEntitiesGridData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface HealthcareEntitiesGridProps {
  data?: HealthcareEntitiesGridData;
}

export default function HealthcareEntitiesGrid({ data }: HealthcareEntitiesGridProps) {
  const content = data || defaultProviderCredentialingData.healthcareEntities;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
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
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 12 Responsive Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full"
        >
          {content.entities.map((entity, idx) => {
            const Icon = getIcon(entity.iconName);

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <Card className="group relative flex items-center h-full bg-white border border-[#E2E6EC] border-l-4 border-l-[#1D4ED8] rounded-xl p-4 sm:p-5 hover:-translate-y-1 hover:border-r-[#1D4ED8]/30 hover:border-t-[#1D4ED8]/30 hover:border-b-[#1D4ED8]/30 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0 flex items-center w-full text-left">
                    
                    {/* Minimalist Icon */}
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mr-3.5 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Entity Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-[-0.02em] leading-snug group-hover:text-[#1D4ED8] transition-colors">
                      {entity.title}
                    </h3>

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
