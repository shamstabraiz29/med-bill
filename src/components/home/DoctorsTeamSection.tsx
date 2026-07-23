"use client";

import Image from "next/image";
import { X, Check, Star, Activity } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import type { HomepageDoctorsTeam } from "@/payload/types/homepage";

interface DoctorsTeamSectionProps {
  data: HomepageDoctorsTeam;
}

export default function DoctorsTeamSection({ data }: DoctorsTeamSectionProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-slate-50/30 dark:bg-slate-900/15 border-y border-slate-200/40 dark:border-slate-800/30 overflow-hidden">
      {/* Custom spinning animation style */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Doctors Team Portrait (Circular Layout Restored) */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer dotted border */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-slate-300 p-2 flex items-center justify-center">
              
              {/* Spinning text orbit */}
              <div className="absolute inset-[-12px] sm:inset-[-15px] animate-spin-slow pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="textPathDoctors"
                    d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                    stroke="none"
                  />
                  <text className="fill-slate-400/40 text-[4px] font-bold tracking-[0.3em] uppercase">
                    <textPath href="#textPathDoctors" startOffset="0%">
                      Certified Accounts Managers • Expert Billers &amp; Coders • Certified Accounts Managers • Expert Billers &amp; Coders •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Inner ring container with split background */}
              <div className="relative w-full h-full rounded-full border border-slate-200 shadow-lg overflow-hidden">
                {/* Split Background */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-white" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4ED8]" />
                
                {/* Doctors Team Image */}
                <Image
                  src="/doctors-team.png"
                  alt="Dedicated accounts managers and medical billing team"
                  fill
                  className="object-cover object-top z-10"
                  priority
                />
              </div>

            </div>

            {/* Floating Widget 1: Certification */}
            <div className="absolute top-[8%] right-[-6%] bg-white border border-slate-200/60 px-4 py-2 rounded-xl shadow-sm flex items-center gap-2.5 select-none hover:shadow-md hover:border-slate-300 transition-all duration-200 z-20 cursor-default">
              <div className="w-5.5 h-5.5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="text-[#0F172A] text-xs font-semibold tracking-tight">
                {data.floatingWidget1}
              </span>
            </div>

            {/* Floating Widget 2: Clean claims rate */}
            <div className="absolute bottom-[12%] left-[-6%] bg-white border border-slate-200/60 px-4 py-2 rounded-xl shadow-sm flex items-center gap-2.5 select-none hover:shadow-md hover:border-slate-300 transition-all duration-200 z-20 cursor-default">
              <div className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <span className="text-[#0F172A] text-xs font-semibold tracking-tight">
                {data.floatingWidget2}
              </span>
            </div>

          </MotionWrapper>

          {/* Right Column: Copy & Comparison Cards */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:pl-4">
            <SectionHeader
              badge={data.badge}
              badgeVariant="indigo"
              title={
                <>
                  {data.titlePlain}{" "}
                  <span className="text-blue-600 block sm:inline">
                    {data.titleHighlight}
                  </span>
                </>
              }
              description={data.description}
            />

            {/* Comparative Cards - Refined */}
            <div className="w-full flex flex-col gap-4">
              
              {/* Red Card: Traditional Agency */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-red-50/40 border border-red-100/80 hover:border-red-200 transition-all duration-200 text-left shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed" dangerouslySetInnerHTML={{ __html: data.traditionalAgencyText || '' }} />
              </div>

              {/* Green Card: BellMedEx */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50/30 border border-emerald-100/50 hover:border-emerald-200 transition-all duration-200 text-left shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-slate-800 text-xs sm:text-[13px] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: data.bellmedexText || '' }} />
              </div>
              
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <AppButton
                href={data.ctaHref}
                variant="primary"
                size="lg"
                showArrow
              >
                {data.ctaLabel}
              </AppButton>
            </div>

          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
