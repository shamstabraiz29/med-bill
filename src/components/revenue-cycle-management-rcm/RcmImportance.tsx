"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmImportanceProps {
  data?: typeof defaultRevenueCycleManagementData.importance;
}

export default function RcmImportance({ data }: RcmImportanceProps) {
  const importanceData = data || defaultRevenueCycleManagementData.importance;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Image */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <Image
                src={importanceData.imageSrc || "/rcm-doctor-importance.png"}
                alt="BellMedEx Revenue Cycle Management Doctor"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </MotionWrapper>

          {/* Right Column: Heading & Paragraph Content */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-[#0F172A] leading-[1.25]">
              {importanceData.titlePrefix}
              <span className="text-[#1D4ED8]">
                {importanceData.titleHighlight}
              </span>
              {importanceData.titleSuffix}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-[1.03rem] leading-[1.75] font-normal">
              {importanceData.description1}
            </p>

            <p className="text-slate-600 text-sm sm:text-base lg:text-[1.03rem] leading-[1.75] font-normal">
              {importanceData.description2}
            </p>

            <p className="text-slate-600 text-sm sm:text-base lg:text-[1.03rem] leading-[1.75] font-normal">
              {importanceData.description3}
            </p>
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
