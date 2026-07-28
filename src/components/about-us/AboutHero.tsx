"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppButton from "@/components/ui/AppButton";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutHeroData } from "@/payload/types/aboutUs";

interface AboutHeroProps {
  data?: AboutHeroData;
}

export default function AboutHero({ data }: AboutHeroProps) {
  const content = data || defaultAboutUsData.hero;
  const checklistItems = content.checklist && content.checklist.length > 0 ? content.checklist : defaultAboutUsData.hero.checklist;

  return (
    <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-20 bg-transparent overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Headline & Introduction */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <SectionBadge variant="blue" pulse>
              {content.badge}
            </SectionBadge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">
                {content.titleHighlight}
              </span>
            </h1>

            <p className="text-[#475569] text-base sm:text-lg leading-[1.7] font-normal max-w-2xl">
              {content.description}
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full">
              {checklistItems.map((item, idx) => (
                <div key={item.label || idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E6EC] px-4 py-2.5 rounded-2xl shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <AppButton href={content.primaryBtnLink || "/schedule-a-demo"} variant="primary" size="lg" showArrow>
                {content.primaryBtnText}
              </AppButton>
              <AppButton href={content.secondaryBtnLink || "/contact-us"} variant="secondary" size="lg">
                {content.secondaryBtnText}
              </AppButton>
            </div>

          </MotionWrapper>

          {/* RIGHT COLUMN: Layered Visual Composite with Floating Glass Badges */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E2E6EC] bg-slate-900 group">
              
              {/* Doctor / Team Image */}
              <img
                src={content.imageSrc || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"}
                alt={content.imageAlt || "BellMedEx Healthcare RCM Team"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Top Floating Glass Badge */}
              <div className="absolute top-6 left-6 right-6 bg-slate-900/80 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-xl text-left flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-sky-400">
                    {content.topBadgeLabel}
                  </p>
                  <p className="text-sm font-bold text-white">{content.topBadgeTitle}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-2xl text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{content.bottomStatLabel}</span>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {content.bottomBadgeText}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {content.bottomStatValue}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{content.bottomStatSubtext}</span>
                </div>
              </div>

            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
