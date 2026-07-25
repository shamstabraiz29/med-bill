"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmFeaturesGridProps {
  data?: typeof defaultRevenueCycleManagementData.featuresGrid;
}

export default function RcmFeaturesGrid({ data }: RcmFeaturesGridProps) {
  const gridData = data || defaultRevenueCycleManagementData.featuresGrid;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      
      {/* Top Section Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12 sm:mb-16">
        <MotionWrapper variant="fadeUp">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] leading-[1.25]">
            {gridData.headerTitle}
          </h2>
        </MotionWrapper>

        <MotionWrapper variant="fadeUp" delay={0.1}>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.7] max-w-3xl mx-auto">
            {gridData.headerDescription}
          </p>
        </MotionWrapper>
      </div>

      {/* Project Dark Theme Background Container with Doctor Background Overlay */}
      <div className="relative w-full bg-[#0F172A] py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Ambient Doctor Team Background Image with Low Opacity Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-luminosity">
          <Image
            src="/doctors-team.png"
            alt="Medical Team Background"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        {/* Grid of Cards */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridData.cards.map((card, idx) => (
              <MotionWrapper
                key={card.title}
                variant="fadeUp"
                delay={idx * 0.05}
                className="h-full"
              >
                <div className="bg-[#F8FAFC] text-[#0F172A] rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-200/80 h-full flex flex-col justify-start space-y-4 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight border-b border-slate-200/80 pb-3">
                    {card.title}
                  </h3>

                  <ul className="space-y-2.5 text-left flex-1">
                    {card.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug font-medium"
                      >
                        <ChevronRight className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
