"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function BlogHero() {
  return (
    <section className="relative w-full pt-12 pb-8 sm:pt-16 sm:pb-12 bg-transparent text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Eyebrow Badge */}
        <MotionWrapper variant="springPop" className="flex justify-center">
          <SectionBadge variant="indigo" pulse>
            Healthcare Insights & Medical Billing Blog
          </SectionBadge>
        </MotionWrapper>

        {/* Title */}
        <MotionWrapper variant="blurReveal">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
            Knowledge Hub For{" "}
            <span className="text-[#1D4ED8]">Medical Practice Growth</span>
          </h1>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper variant="blurReveal" delay={0.1}>
          <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-2xl mx-auto font-normal">
            Explore expert articles, CPT coding guides, reimbursement strategies, and HIPAA compliance tips to optimize your revenue cycle and practice operations.
          </p>
        </MotionWrapper>

      </div>
    </section>
  );
}
