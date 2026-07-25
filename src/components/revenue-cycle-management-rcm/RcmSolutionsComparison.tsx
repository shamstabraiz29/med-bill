"use client";

import React from "react";
import { ArrowLeftRight, Lightbulb, HelpCircle } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmSolutionsComparisonProps {
  data?: typeof defaultRevenueCycleManagementData.solutionsComparison;
}

export default function RcmSolutionsComparison({ data }: RcmSolutionsComparisonProps) {
  const comparisonData = data || defaultRevenueCycleManagementData.solutionsComparison;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionWrapper variant="fadeUp" className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] leading-[1.25]">
            {comparisonData.titlePrefix} <br className="hidden sm:inline" />
            <span className="text-[#1D4ED8]">
              {comparisonData.titleHighlight}
            </span>
          </h2>
        </MotionWrapper>

        {/* Comparison List */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-14 max-w-6xl mx-auto">
          {comparisonData.comparisons.map((item, index) => (
            <MotionWrapper
              key={item.id || index}
              variant="fadeUp"
              delay={index * 0.05}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-slate-200">
                
                {/* Left Side: Problem */}
                <div className="md:col-span-5 text-left space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                    {item.problemTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Center: Icons & Exchange Arrows */}
                <div className="md:col-span-2 flex items-center justify-center gap-3 sm:gap-4 py-2 md:py-0">
                  {/* Grey Problem Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-slate-200/90 text-slate-500 flex items-center justify-center shrink-0 shadow-inner">
                    <HelpCircle className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Transfer Arrows */}
                  <ArrowLeftRight className="w-5 h-5 text-slate-400 shrink-0" />

                  {/* Blue Solution Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Lightbulb className="w-6 h-6 stroke-[1.8]" />
                  </div>
                </div>

                {/* Right Side: Solution */}
                <div className="md:col-span-5 text-left space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                    {item.solutionTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.solutionDesc}
                  </p>
                </div>

              </div>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
