"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Lock, Cpu } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { ClearinghouseEDISecurityData } from "@/payload/types/clearinghouse";
import { defaultClearinghouseData } from "@/lib/defaults/clearinghouse";

interface ClearinghouseEDISecurityProps {
  data?: ClearinghouseEDISecurityData;
}

export default function ClearinghouseEDISecurity({ data }: ClearinghouseEDISecurityProps) {
  const content = data || defaultClearinghouseData.ediSecurity;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancement */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 lg:space-y-28">

        {/* BLOCK 1: How Does EDI Fit In? (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: EDI Content */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            <SectionBadge variant="indigo">
              {content.ediBadge}
            </SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
              {content.ediTitlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.ediTitleHighlight}</span>
            </h2>

            <div className="w-full space-y-4 pt-2">
              {content.ediPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {typeof point === 'string' ? point : (point as any).label}
                  </p>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: EDI Visual Card */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto aspect-[4/3] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 sm:p-3.5 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]">
                <Image
                  src="/consultants-laptop.png"
                  alt="Standardized Electronic Data Interchange EDI Clearinghouse"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/95 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Cpu className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight">
                      {content.ediBadgeValue}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.ediBadgeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* BLOCK 2: Protecting Patient Privacy (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: HIPAA Visual Card */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:mr-auto aspect-[4/3] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 sm:p-3.5 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]">
                <Image
                  src="/consultants-laptop.png"
                  alt="Protecting Patient Privacy and HIPAA Data Compliance"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/95 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Lock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight">
                      {content.hipaaBadgeValue}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.hipaaBadgeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: HIPAA Content */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col items-start text-left space-y-5 order-1 lg:order-2">
            <SectionBadge variant="indigo">
              {content.hipaaBadge}
            </SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
              {content.hipaaTitlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.hipaaTitleHighlight}</span>
            </h2>

            <p className="text-[#475569] text-sm sm:text-base leading-[1.65]">
              {content.hipaaDescription}
            </p>

            <div className="w-full space-y-3.5 pt-1">
              {content.hipaaPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {typeof point === 'string' ? point : (point as any).label}
                  </p>
                </div>
              ))}
            </div>
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
