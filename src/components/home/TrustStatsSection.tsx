"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TrustStatsSection() {
  const checklist = [
    "Patient Verification",
    "Revenue Cycle Management",
    "Claim Scrubbing",
    "A/R Recovery",
    "Claim Submission",
    "Fast Reimbursement",
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-transparent">

      {/* Trust & Stats Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Proven Success"
          badgeVariant="indigo"
          title={
            <>
              Trust Your Billing To The Company That Ranks Among{" "}
              <span className="text-blue-600 font-bold">
                &ldquo;The Best Medical Billing Companies&rdquo;
              </span>
            </>
          }
          description="With a 4.8-star Trustpilot rating from more than 200 reviews, a 4.8-star Google rating from 340+ reviews, and an A+ rating from the Better Business Bureau, BellMedEx is widely recognized as one of the best medical billing service providers in the United States."
          className="mb-10 sm:mb-12 max-w-4xl"
        />

        {/* 3 Dark Stats Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16"
        >
          
          {/* Card 1: Clean Claim Ratio */}
          <MotionWrapper variant="staggerItem" className="h-full">
            <div className="relative overflow-hidden rounded-2xl bg-[#1c1a45] text-white p-8 flex flex-col justify-between h-72 shadow-sm border border-white/5 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight block">
                  Almost 99%
                </span>
              </div>
              {/* Target SVG graphic */}
              <div className="flex justify-center my-2 select-none pointer-events-none">
                <svg className="w-20 h-20 text-sky-400" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="opacity-30" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="4" className="opacity-80" />
                  <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" />
                  <path d="M38 52l8 8 16-16" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-slate-300">
                  Clean claim ratio
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Card 2: 1st Submission Pass Rate */}
          <MotionWrapper variant="staggerItem" className="h-full">
            <div className="relative overflow-hidden rounded-2xl bg-[#1c1a45] text-white p-8 flex flex-col justify-between h-72 shadow-sm border border-white/5 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight block">
                  About 97.35%
                </span>
              </div>
              {/* Bar chart graphic */}
              <div className="flex justify-center items-end my-2 h-20 select-none pointer-events-none">
                <svg className="w-24 h-16 text-amber-400" viewBox="0 0 100 60">
                  <rect x="5" y="45" width="12" height="15" rx="2.5" fill="currentColor" className="opacity-30" />
                  <rect x="24" y="32" width="12" height="28" rx="2.5" fill="currentColor" className="opacity-50" />
                  <rect x="43" y="20" width="12" height="40" rx="2.5" fill="currentColor" className="opacity-70" />
                  <rect x="62" y="10" width="12" height="50" rx="2.5" fill="currentColor" className="opacity-90" />
                  <rect x="81" y="2" width="12" height="58" rx="2.5" fill="currentColor" className="text-emerald-400" />
                </svg>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-slate-300">
                  1st submission pass rate
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Card 3: Revenue Increase */}
          <MotionWrapper variant="staggerItem" className="h-full">
            <div className="relative overflow-hidden rounded-2xl bg-[#1c1a45] text-white p-8 flex flex-col justify-between h-72 shadow-sm border border-white/5 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight block">
                  Up to 30%
                </span>
              </div>
              {/* Line chart graphic */}
              <div className="flex justify-center items-end my-2 h-20 select-none pointer-events-none">
                <svg className="w-28 h-16 text-emerald-400" viewBox="0 0 120 60">
                  <path d="M 0 55 Q 30 45 60 25 T 120 8 L 120 55 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M 0 55 Q 30 45 60 25 T 120 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="120" cy="8" r="4" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-slate-300">
                  Revenue increase
                </span>
              </div>
            </div>
          </MotionWrapper>

        </MotionWrapper>

        {/* Partners & Rating Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-24 md:mb-32 w-full">
          
          {/* Google Ratings */}
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-700">Google Rating</span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-[10px]">&#9733;</span>
                ))}
              </div>
            </div>
            <span className="text-lg font-bold text-amber-500">4.8</span>
          </div>

          {/* Trustpilot Ratings */}
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-700">Trustpilot</span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-500 text-[10px]">&#9733;</span>
                ))}
              </div>
            </div>
            <span className="text-lg font-bold text-emerald-600">4.8</span>
          </div>

          {/* BBB Accredited A+ */}
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">BBB ACCREDITED</span>
              <span className="text-xs font-semibold text-[#1c1a45] mt-0.5">A+ Rated Business</span>
            </div>
            <span className="text-base font-bold text-[#1c1a45] border-l border-slate-200 pl-3">A+</span>
          </div>

          {/* ONC Body Badge */}
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">ONC CERTIFIED</span>
              <span className="text-xs font-semibold text-slate-700 mt-0.5">Authorized Body</span>
            </div>
            <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded border border-slate-200">ONC</span>
          </div>

        </div>

        {/* Bottom Part: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
          
          {/* LEFT COLUMN: Features Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1a45] tracking-tight leading-tight mb-6">
              Medical Billing Service in the USA that{" "}
              <span className="text-blue-600">
                Unites Tech &amp; Expertise
              </span>{" "}
              to Meet Every Doctor&apos;s Vision
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              Our USA-based healthcare revenue cycle management company helps individual and institutional providers navigate
              the tight spots of patient billing and coding via modern medical billing services.
            </p>

            {/* Checklist Capsules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm hover:border-indigo-300 transition-colors duration-200"
                >
                  <div className="w-5 h-5 rounded-full bg-[#2A2374] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-sm font-medium tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Stats Panels */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative pt-4 lg:pt-0">

            {/* Happiness Score Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between items-start text-left h-80">
              <span className="inline-flex items-center bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full text-[10px] font-semibold text-blue-700 uppercase tracking-widest">
                Happiness Score
              </span>
              <div className="my-6">
                <span className="text-5xl sm:text-6xl font-bold text-[#2A2374] tracking-tight leading-none">
                  96%
                </span>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-3">
                  Based on a 4.8-star rating from 350+ providers across the states.
                </p>
              </div>
              <Link
                href="/testimonials"
                className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto"
              >
                See testimonials
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>

            {/* Billing Experts Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm lg:translate-y-8 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between items-start text-left h-80">
              <span className="inline-flex items-center bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full text-[10px] font-semibold text-indigo-700 uppercase tracking-widest">
                Billing Experts
              </span>
              <div className="my-6">
                <span className="text-5xl sm:text-6xl font-bold text-[#2A2374] tracking-tight leading-none">
                  1.2k+
                </span>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-3">
                  CMRS, RHIA, CPB certified medical billers and coders for every specialty.
                </p>
              </div>
              <Link
                href="/about-us"
                className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mt-auto"
              >
                About us
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
