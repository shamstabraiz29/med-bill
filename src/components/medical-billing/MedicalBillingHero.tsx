"use client";

import React from "react";
import { ShieldCheck, ArrowRight, TrendingUp, CheckCircle, Award } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function MedicalBillingHero() {
  const highlights = [
    "98%+ First-Pass Clean Claim Rate",
    "Under 30 Days Average Days in A/R",
    "HIPAA Compliant & Fully Secured",
    "Dedicated Billing Consultants",
  ];

  return (
    <section className="relative pt-6 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <MotionWrapper variant="fadeUp">
            <SectionBadge variant="indigo" icon={Award} pulse>
              End-to-End Medical Billing Solutions
            </SectionBadge>
          </MotionWrapper>

          {/* Title */}
          <MotionWrapper variant="fadeUp" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] dark:text-white tracking-[-0.02em] leading-[1.12]">
              Transform Practice Revenue with Expert{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Medical Billing
              </span>
            </h1>
          </MotionWrapper>

          {/* Subtitle */}
          <MotionWrapper variant="fadeUp" delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              BellMedEx helps medical practices, clinics, and hospitals eliminate billing errors, minimize claim denials, and accelerate cash flow with certified billing specialists.
            </p>
          </MotionWrapper>

          {/* Action Buttons */}
          <MotionWrapper variant="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
              <AppButton
                href="/schedule-a-demo"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto shadow-lg shadow-blue-600/20"
              >
                Schedule Free Audit
              </AppButton>
              <AppButton
                href="#consultation-form"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Request Consultation
              </AppButton>
            </div>
          </MotionWrapper>

          {/* Highlights checklist */}
          <MotionWrapper variant="fadeUp" delay={0.4}>
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 shadow-xs"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
