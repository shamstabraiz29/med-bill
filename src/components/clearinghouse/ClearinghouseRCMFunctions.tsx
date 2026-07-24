"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { ClearinghouseRCMFunctionsData } from "@/payload/types/clearinghouse";
import { defaultClearinghouseData } from "@/lib/defaults/clearinghouse";

interface ClearinghouseRCMFunctionsProps {
  data?: ClearinghouseRCMFunctionsData;
}

export default function ClearinghouseRCMFunctions({ data }: ClearinghouseRCMFunctionsProps) {
  const content = data || defaultClearinghouseData.rcmFunctions;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-slate-50/50 border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancement */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header matching Home page typography */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>{" "}
              {content.titleSuffix}
            </>
          }
          description={content.description}
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 3x3 Responsive RCM Functions Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {content.functions.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <Card className="group relative flex flex-col h-full bg-white border border-[#E2E6EC] border-l-4 border-l-[#1D4ED8] rounded-2xl p-6 sm:p-7 hover:-translate-y-1.5 hover:border-r-[#1D4ED8]/30 hover:border-t-[#1D4ED8]/30 hover:border-b-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col flex-1 items-start text-left">
                    
                    {/* Minimalist Icon */}
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6]">
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
