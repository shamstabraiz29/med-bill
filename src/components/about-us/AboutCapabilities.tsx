"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { FileCode2, ShieldAlert, Cpu, Award, UserCheck, BarChart3, ArrowUpRight, LucideIcon } from "lucide-react";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutCapabilitiesData } from "@/payload/types/aboutUs";

const ICON_MAP: Record<string, LucideIcon> = {
  FileCode2,
  ShieldAlert,
  Cpu,
  Award,
  UserCheck,
  BarChart3,
};

interface AboutCapabilitiesProps {
  data?: AboutCapabilitiesData;
}

export default function AboutCapabilities({ data }: AboutCapabilitiesProps) {
  const content = data || defaultAboutUsData.capabilities;
  const capabilitiesList = content.capabilities && content.capabilities.length > 0 ? content.capabilities : defaultAboutUsData.capabilities.capabilities;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          title={
            <>
              {content.titlePlain} <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          align="center"
        />

        {/* 3x2 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesList.map((cap, idx) => {
            const Icon = (cap.iconName && ICON_MAP[cap.iconName]) || FileCode2;
            return (
              <MotionWrapper key={cap.title || idx} variant="scaleUp" delay={idx * 0.05}>
                <div className="group bg-white border border-[#E2E6EC] rounded-2xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                  
                  <div className="space-y-4">
                    {/* Icon Container */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-[#1D4ED8] bg-blue-50 border-blue-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>

                </div>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
