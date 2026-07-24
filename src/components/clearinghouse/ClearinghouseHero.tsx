"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function ClearinghouseHero() {
  const trustHighlights = [
    "99%+ Clean Claim Rate",
    "Real-Time Eligibility",
    "Payer Enrollment",
    "HIPAA Compliant",
  ];

  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Ambient Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Content & CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">

            <MotionWrapper variant="stagger" staggerDelay={0.12} delay={0.05} className="flex flex-col space-y-6 text-left">
              {/* Eyebrow Badge */}
              <MotionWrapper variant="springPop">
                <SectionBadge variant="blue" pulse>
                  Medical Billing Clearinghouse Solution
                </SectionBadge>
              </MotionWrapper>

              {/* Main Headline - Exact Home Hero typography (text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18] lg:max-w-2xl) */}
              <MotionWrapper variant="blurReveal">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18] lg:max-w-2xl">
                  Clearinghouse Service that{" "}
                  <span className="text-[#1D4ED8]">
                    Clears Healthcare Billing Hurdles
                  </span>
                </h1>
              </MotionWrapper>

              {/* Descriptive Body Text - Exact Home Hero typography (text-[#475569] text-sm sm:text-base leading-[1.6] max-w-2xl) */}
              <MotionWrapper variant="blurReveal">
                <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-[1.6] max-w-2xl">
                  <p>
                    Our clearinghouse service is a whole shebang for every provider’s
                    healthcare billing needs. We connect providers with hundreds of
                    payers, verify eligibility, check claims status, and submit claims
                    electronically. We also handle credentialing, enrollment, and
                    compliance, so quality patient care takes center stage at every
                    clinic.
                  </p>
                </div>
              </MotionWrapper>
            </MotionWrapper>

            {/* Action Buttons & Features */}
            <MotionWrapper variant="fadeUp" delay={0.3}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <AppButton
                  href="/schedule-a-demo"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto shadow-md shadow-blue-900/10"
                >
                  Claim Free Clearinghouse
                </AppButton>

                <AppButton
                  href="/contact-us"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Speak with an Expert
                </AppButton>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT COLUMN: Static Clean Doctor Visual Image (No keyframe animations) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <MotionWrapper variant="scaleUp" delay={0.2} className="w-full">
              <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center">

                {/* Main Static Outer Frame */}
                <div className="relative w-[90%] h-[90%] rounded-3xl bg-gradient-to-tr from-blue-50/80 via-slate-50 to-indigo-50/80 border border-[#E2E6EC] shadow-xl shadow-blue-900/5 overflow-hidden flex items-end justify-center">
                  {/* Subtle Static Background Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />

                  {/* Doctor / Nurse Static Image */}
                  <Image
                    src="/clearinghouse-nurse-hero.png"
                    alt="Healthcare Professional using Medical Billing Clearinghouse Solution"
                    width={480}
                    height={520}
                    priority
                    className="object-cover object-top scale-[1.04] translate-y-2 drop-shadow-[0_15px_25px_rgba(15,23,42,0.08)]"
                  />
                </div>

                {/* Static Badges / Icons (No Keyframe Animation) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Static Badge 1: 99%+ Clean Claims */}
                  <div className="absolute top-[6%] right-[2%] pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2E6EC] p-3 rounded-2xl shadow-md flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 fill-white" />
                    </div>
                    <div className="text-left pr-1">
                      <p className="text-[11px] font-bold text-[#0F172A] leading-none">99.2% Clean Claims</p>
                      <p className="text-[10px] text-[#475569] mt-0.5">First-Pass Approval</p>
                    </div>
                  </div>

                  {/* Static Badge 2: Real-time Eligibility */}
                  <div className="absolute bottom-[8%] left-[0%] pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2E6EC] p-3 rounded-2xl shadow-md flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-left pr-1">
                      <p className="text-[11px] font-bold text-[#0F172A] leading-none">HIPAA Compliant</p>
                      <p className="text-[10px] text-[#475569] mt-0.5">100% Secured EDI</p>
                    </div>
                  </div>
                </div>

              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
