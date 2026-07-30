"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { BarChart3 } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmReportingFeaturesProps {
  data?: typeof defaultRevenueCycleManagementData.reportingFeatures;
}

export default function RcmReportingFeatures({ data }: RcmReportingFeaturesProps) {
  const reportingData = data || defaultRevenueCycleManagementData.reportingFeatures;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionWrapper variant="fadeUp" className="text-center max-w-4xl mx-auto space-y-3 mb-14 sm:mb-20">
          <SectionBadge variant="blue" pulse icon={BarChart3}>
            {reportingData.badge}
          </SectionBadge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] leading-[1.25]">
            {reportingData.titlePrefix}
            <span className="text-[#1D4ED8]">{reportingData.titleHighlight}</span>
          </h2>
        </MotionWrapper>

        {/* Feature Blocks */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          
          {/* Block 1: Content Left, Laptop Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: 3 Features */}
            <MotionWrapper variant="slideLeft" className="lg:col-span-6 flex flex-col space-y-8 text-left">
              
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block1Title1}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block1Desc1}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block1Title2}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block1Desc2}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block1Title3}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block1Desc3}
                </p>
              </div>

            </MotionWrapper>

            {/* Right Column: Laptop Mockup 1 */}
            <MotionWrapper variant="slideRight" className="lg:col-span-6 w-full flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none aspect-[16/11] drop-shadow-xl group transition-transform duration-500 hover:scale-[1.02]">
                <AppImage
                  src={reportingData.block1ImageSrc || "/rcm-dashboard-laptop1.png"}
                  alt="BellMedEx RCM Analytics Dashboard Mockup"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </MotionWrapper>

          </div>

          {/* Block 2: Laptop Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Laptop Mockup 2 */}
            <MotionWrapper variant="slideLeft" className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg lg:max-w-none aspect-[16/11] drop-shadow-xl group transition-transform duration-500 hover:scale-[1.02]">
                <AppImage
                  src={reportingData.block2ImageSrc || "/rcm-dashboard-laptop2.png"}
                  alt="BellMedEx Practice Reporting Dashboard Mockup"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </MotionWrapper>

            {/* Right Column: 3 Features */}
            <MotionWrapper variant="slideRight" className="lg:col-span-6 flex flex-col space-y-8 text-left order-1 lg:order-2">
              
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block2Title1}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block2Desc1}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block2Title2}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block2Desc2}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {reportingData.block2Title3}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {reportingData.block2Desc3}
                </p>
              </div>

            </MotionWrapper>

          </div>

        </div>

      </div>
    </section>
  );
}
