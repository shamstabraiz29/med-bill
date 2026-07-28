"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactCtaData } from "@/payload/types/contactUs";

interface ContactCTAProps {
  data?: ContactCtaData;
}

export default function ContactCTA({ data }: ContactCTAProps) {
  const content = data || defaultContactUsData.cta;
  const rawHighlights = content.highlights && content.highlights.length > 0 ? content.highlights : defaultContactUsData.cta.highlights;
  const highlightsList = rawHighlights.map((h: any) => (typeof h === "string" ? h : h.label || ""));

  let titlePlain = content.title;
  let titleHighlight = "";

  if (content.title.includes("Up to 35%?")) {
    const parts = content.title.split("Up to 35%?");
    titlePlain = parts[0];
    titleHighlight = "Up to 35%?";
  }

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-white/10 p-8 sm:p-12 lg:p-14 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 text-left text-white">
            
            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="flex justify-start">
                <SectionBadge variant="dark">
                  {content.badge}
                </SectionBadge>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight sm:leading-snug">
                {titleHighlight ? (
                  <>
                    {titlePlain}
                    <span className="text-amber-300 font-bold">{titleHighlight}</span>
                  </>
                ) : (
                  content.title
                )}
              </h2>
              
              <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                {highlightsList.map((label, idx) => (
                  <div key={label || idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
              <AppButton
                href={content.primaryBtnLink || "/schedule-a-demo"}
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto text-center"
              >
                {content.primaryBtnText}
              </AppButton>
              <AppButton
                href={content.phoneLink || "tel:8885002455"}
                variant="secondary-dark"
                size="lg"
                icon={PhoneCall}
                className="w-full sm:w-auto text-center"
              >
                {content.phoneText}
              </AppButton>
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
