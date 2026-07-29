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
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            {/* Top Row: Copy & CTA Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
              <div className="max-w-3xl text-left space-y-3.5">
                <SectionBadge variant="dark">
                  {content.badge}
                </SectionBadge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug">
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
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 items-start lg:items-center justify-start lg:justify-end">
                <AppButton
                  href={content.primaryBtnLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {content.primaryBtnText}
                </AppButton>
                <AppButton
                  href={content.phoneLink || "tel:8885002455"}
                  variant="secondary-dark"
                  size="lg"
                  icon={PhoneCall}
                >
                  {content.phoneText}
                </AppButton>
              </div>
            </div>

            {/* Highlights Grid */}
            {highlightsList.length > 0 && (
              <>
                <div className="w-full border-t border-white/10 my-8 sm:my-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
                  {highlightsList.map((label: string, idx: number) => (
                    <div
                      key={label || idx}
                      className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 flex items-center gap-3 transition-colors duration-200 hover:bg-white/[0.08]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 stroke-[2]" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-indigo-200">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

