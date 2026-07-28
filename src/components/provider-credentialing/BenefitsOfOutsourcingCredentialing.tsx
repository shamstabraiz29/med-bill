"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Globe, ArrowRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { BenefitsOfOutsourcingCredentialingData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface BenefitsOfOutsourcingCredentialingProps {
  data?: BenefitsOfOutsourcingCredentialingData;
}

export default function BenefitsOfOutsourcingCredentialing({ data }: BenefitsOfOutsourcingCredentialingProps) {
  const content = data || defaultProviderCredentialingData.benefitsOfOutsourcing;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Ambient Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Visual Showcase Frame */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-2xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={content.imageSrc || "/doctors-team.png"}
                  alt="Team of Credentialing Specialists Outsourcing Support"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />

                {/* Floating Trust Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                      {content.cardTitle}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.cardSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: Content, Checklist & Action Link */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow Badge */}
            <SectionBadge variant="indigo">
              {content.badge}
            </SectionBadge>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Intro Paragraph Copies */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-[1.65]">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </div>

            {/* 11-Item Clean Cardless Checklist */}
            <div className="w-full space-y-2.5 pt-2">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {typeof benefit === 'string' ? benefit : (benefit as any).label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <Link
                href={content.ctaHref}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors underline decoration-2 underline-offset-4 group"
              >
                <span>{content.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
