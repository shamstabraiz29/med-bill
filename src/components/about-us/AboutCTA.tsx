"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { CheckCircle2 } from "lucide-react";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutCtaData } from "@/payload/types/aboutUs";

interface AboutCTAProps {
  data?: AboutCtaData;
}

export default function AboutCTA({ data }: AboutCTAProps) {
  const content = data || defaultAboutUsData.cta;
  const rawHighlights = content.highlights && content.highlights.length > 0 ? content.highlights : defaultAboutUsData.cta.highlights;
  const highlightsList = rawHighlights.map((h: any) => (typeof h === "string" ? h : h.label || ""));

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
                {content.badge}
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {content.title}
              </h2>
              
              <p className="text-indigo-200/80 text-xs sm:text-sm leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                {highlightsList.map((label, idx) => (
                  <div key={label || idx} className="flex items-center gap-2 text-xs font-semibold text-sky-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <AppButton
                href={content.buttonLink || "/schedule-a-demo"}
                variant="primary"
                size="lg"
                showArrow
              >
                {content.buttonText}
              </AppButton>
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
