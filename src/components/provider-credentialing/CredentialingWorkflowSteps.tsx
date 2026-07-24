"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { CredentialingWorkflowStepsData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface CredentialingWorkflowStepsProps {
  data?: CredentialingWorkflowStepsData;
}

export default function CredentialingWorkflowSteps({ data }: CredentialingWorkflowStepsProps) {
  const content = data || defaultProviderCredentialingData.workflowSteps;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* 7 Vertical Step Timeline Cards */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="space-y-4 sm:space-y-5 w-full relative"
        >
          {content.steps.map((step, idx) => (
            <MotionWrapper key={idx} variant="staggerItem">
              <div className="group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-7 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 text-left">
                
                {/* Step Number Pill */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D4ED8] font-extrabold text-lg sm:text-xl flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-colors duration-300 shadow-sm">
                  {step.stepNumber}
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                    {step.description}
                  </p>
                </div>

              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>

      </div>
    </section>
  );
}
