"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronRight,
  Award,
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import type { WhyChooseClearinghouseData } from "@/payload/types/clearinghouse";
import { defaultClearinghouseData } from "@/lib/defaults/clearinghouse";

interface WhyChooseClearinghouseProps {
  data?: WhyChooseClearinghouseData;
}

export default function WhyChooseClearinghouse({ data }: WhyChooseClearinghouseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const content = data || defaultClearinghouseData.whyChoose;

  const features = content.features;
  const currentFeature = features[activeTab] || features[0];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
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

        {/* 2-Column Split: Equal Height Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT COLUMN: Compact Interactive Feature Selector Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2.5 h-full w-full">
            {features.map((feature, idx) => {
              const Icon = getIcon(feature.iconName);
              const isActive = activeTab === idx;

              return (
                <div
                  key={feature.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative p-3.5 sm:p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 flex-1 flex flex-col justify-center ${isActive
                    ? "bg-blue-50/60 border-[#1D4ED8] shadow-sm ring-1 ring-[#1D4ED8]/20"
                    : "bg-white border-[#E2E6EC] hover:border-[#1D4ED8]/30 hover:bg-slate-50/50"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Compact Icon Container */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${isActive
                        ? "bg-[#1D4ED8] text-white shadow-xs"
                        : "bg-blue-50 text-[#1D4ED8] group-hover:bg-blue-100"
                        }`}
                    >
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? "text-[#1D4ED8]" : "text-[#475569]"
                            }`}
                        >
                          {feature.badge}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive
                            ? "text-[#1D4ED8] translate-x-0.5"
                            : "text-slate-300 group-hover:text-slate-500"
                            }`}
                        />
                      </div>

                      <h3
                        className={`text-xs sm:text-sm font-bold tracking-tight leading-snug mb-1 transition-colors ${isActive ? "text-[#1D4ED8]" : "text-[#0F172A] group-hover:text-[#1D4ED8]"
                          }`}
                      >
                        {feature.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-[#475569] leading-snug line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Equal Height Dynamic Feature Showcase Preview */}
          <div className="lg:col-span-6 h-full w-full flex flex-col">
            <MotionWrapper key={currentFeature.id || activeTab} variant="scaleUp" className="h-full w-full flex flex-col">
              <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E2E6EC] p-4 sm:p-5 text-[#0F172A] shadow-lg text-left h-full flex flex-col justify-between">

                {/* Top Section */}
                <div>
                  {/* Top Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 pb-3 border-b border-[#E2E6EC]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                      <span className="text-[10px] font-bold text-[#1D4ED8] uppercase tracking-wider">
                        {currentFeature.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-amber-200">
                      <Award className="w-3 h-3 text-amber-600" />
                      <span>BellMedEx Standard</span>
                    </div>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight mb-2.5">
                    {currentFeature.title}
                  </h3>

                  {/* Compact Image & Metric Frame */}
                  <div className="relative aspect-[16/9] min-h-[150px] w-full rounded-xl overflow-hidden bg-slate-100 border border-[#E2E6EC] mb-3 group">
                    <Image
                      src={currentFeature.imageSrc || "/consultants-laptop.png"}
                      alt={currentFeature.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent" />

                    {/* Compact Stat Overlay on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0F172A]/95 backdrop-blur-md border border-white/20 p-2 rounded-lg flex items-center justify-between text-white">
                      <div>
                        <span className="block text-base font-extrabold text-white tracking-tight leading-none mb-0.5">
                          {currentFeature.statValue}
                        </span>
                        <span className="text-[9px] text-blue-200 font-medium leading-none">
                          {currentFeature.statLabel}
                        </span>
                      </div>

                      <div className="w-6 h-6 rounded-md bg-[#1D4ED8] flex items-center justify-center text-white shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {currentFeature.description}
                  </p>
                </div>

                {/* Bottom Action CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 pt-3 mt-auto">
                  <AppButton
                    href="/schedule-a-demo"
                    variant="primary"
                    size="sm"
                    showArrow
                    className="w-full sm:w-auto shadow-sm text-xs"
                  >
                    Claim Free Clearinghouse
                  </AppButton>
                  <AppButton
                    href="/contact-us"
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto text-xs"
                  >
                    Speak with Specialist
                  </AppButton>
                </div>

              </div>
            </MotionWrapper>
          </div>

        </div>

      </div>
    </section>
  );
}
