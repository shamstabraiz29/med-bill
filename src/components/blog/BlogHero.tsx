"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { BookOpen, TrendingUp, ShieldCheck, FileText } from "lucide-react";

export default function BlogHero() {
  const highlights = [
    { icon: FileText, label: "CPT & ICD-10 Coding" },
    { icon: TrendingUp, label: "Revenue Optimization" },
    { icon: ShieldCheck, label: "HIPAA & Compliance" },
    { icon: BookOpen, label: "Practice Growth Guides" },
  ];

  return (
    <section className="relative w-full bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        
        {/* Eyebrow Badge */}
        <MotionWrapper variant="springPop" className="flex justify-center">
          <SectionBadge variant="indigo" pulse>
            Healthcare Insights & Medical Billing Blog
          </SectionBadge>
        </MotionWrapper>

        {/* Title */}
        <MotionWrapper variant="blurReveal">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.15]">
            Knowledge Hub For{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              Medical Practice Growth
            </span>
          </h1>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper variant="blurReveal" delay={0.1}>
          <p className="text-[#475569] text-base sm:text-lg leading-[1.6] max-w-2xl mx-auto font-normal">
            Explore expert articles, CPT coding guides, reimbursement strategies, and HIPAA compliance tips to optimize your revenue cycle and practice operations.
          </p>
        </MotionWrapper>

        {/* Highlight Chips */}
        <MotionWrapper variant="fadeUp" delay={0.2} className="pt-2">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E2E6EC] text-[#475569] text-xs font-semibold shadow-xs transition-colors hover:border-[#1D4ED8]/40 hover:text-[#1D4ED8]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}

