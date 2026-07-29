"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
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

  let titlePlain = content.title;
  let titleHighlight = "";

  if (content.title.includes("Growth")) {
    const parts = content.title.split("Growth");
    titlePlain = parts[0];
    titleHighlight = "Growth";
  }

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            {/* Top Row: Copy & CTA Button */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
              <div className="max-w-3xl text-left space-y-3.5">
                {content.badge && (
                  <SectionBadge variant="dark">
                    {content.badge}
                  </SectionBadge>
                )}

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug">
                  {titleHighlight ? (
                    <>
                      {titlePlain}{" "}
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

              <div className="flex-shrink-0 flex items-start lg:items-center justify-start lg:justify-end">
                <AppButton
                  href={content.buttonLink || "/schedule-a-demo"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  {content.buttonText || "Schedule Free Audit"}
                </AppButton>
              </div>
            </div>

            {/* Highlights Bar */}
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

