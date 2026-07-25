"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Calculator } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmRoiCaseStudyProps {
  data?: typeof defaultRevenueCycleManagementData.roiCaseStudy;
}

export default function RcmRoiCaseStudy({ data }: RcmRoiCaseStudyProps) {
  const roiData = data || defaultRevenueCycleManagementData.roiCaseStudy;
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Header */}
        <MotionWrapper variant="fadeUp" className="text-center max-w-4xl mx-auto space-y-3 mb-10 sm:mb-14">
          <SectionBadge variant="blue" pulse icon={Calculator}>
            {roiData.badge}
          </SectionBadge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] leading-[1.25]">
            {roiData.titlePrefix}
            <span className="text-[#1D4ED8]">
              {roiData.titleHighlight}
            </span>
            {roiData.titleSuffix}
          </h2>
        </MotionWrapper>

        {/* ROI Comparison Table Container */}
        <MotionWrapper variant="scaleUp" className="w-full">
          <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Horizontal Scroll wrapper for small devices */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-slate-100/90 text-[#0F172A] text-sm sm:text-base font-bold border-b border-slate-200">
                    <th className="py-4 px-6 w-1/4"></th>
                    <th className="py-4 px-6 w-1/4">In-House Billing</th>
                    <th className="py-4 px-6 w-1/4">BellMedEx RCM</th>
                    <th className="py-4 px-6 w-1/4">Results</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                  {roiData.tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#0F172A]">
                        {row.metricLabel}
                      </td>
                      <td className="py-4 px-6 font-medium">{row.inHouseValue}</td>
                      <td className="py-4 px-6 font-medium">{row.rcmValue}</td>
                      <td className="py-4 px-6 font-semibold text-emerald-700">
                        {row.resultValue && <div>{row.resultValue}</div>}
                        {row.resultSub && (
                          <div className="text-xs sm:text-sm font-normal text-slate-600">
                            {row.resultSub}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Banner (Theme Dark Stats Bar) */}
            <div className="bg-[#0F172A] text-white p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center border-t border-slate-800">
              
              {/* Stat 1 */}
              <div className="space-y-1 sm:border-r sm:border-white/10 sm:pr-6">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {roiData.stat1Value}
                </div>
                <div className="text-xs sm:text-sm text-sky-200 font-medium">
                  {roiData.stat1Label} <br />
                  {roiData.stat1Sub && (
                    <span className="text-sky-300/80 text-[11px] sm:text-xs">
                      {roiData.stat1Sub}
                    </span>
                  )}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1 sm:pl-6 flex flex-col justify-center items-center">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {roiData.stat2Value}
                </div>
                <div className="text-xs sm:text-sm text-sky-200 font-medium">
                  {roiData.stat2Label}
                </div>
              </div>

            </div>

          </div>
        </MotionWrapper>

        {/* CTA Button Below Table */}
        <MotionWrapper variant="fadeUp" delay={0.2} className="mt-8 text-center">
          <Link
            href={roiData.ctaHref || "#contact"}
            className="inline-flex items-center justify-center bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>{roiData.ctaLabel}</span>
          </Link>
        </MotionWrapper>

        {/* Expandable Disclaimer Section */}
        <MotionWrapper variant="fadeUp" delay={0.3} className="mt-12 pt-6 border-t border-slate-200/80">
          <button
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold italic text-[#1D4ED8] hover:text-[#1e40af] transition-colors cursor-pointer"
          >
            {showDisclaimer ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <span>*Disclaimer</span>
          </button>

          {showDisclaimer && (
            <p className="mt-3 text-xs sm:text-sm text-slate-500 italic leading-relaxed max-w-4xl">
              {roiData.disclaimerText}
            </p>
          )}
        </MotionWrapper>

      </div>
    </section>
  );
}
