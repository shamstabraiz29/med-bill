"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { TestimonialsCTAData } from "@/payload/types/testimonials";
import { defaultTestimonialsData } from "@/lib/defaults/testimonials";

interface TestimonialsCTAProps {
  data?: TestimonialsCTAData;
}

export default function TestimonialsCTA({ data }: TestimonialsCTAProps) {
  const content = data || defaultTestimonialsData.cta;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultTestimonialsData.cta.features;

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
                {content.eyebrow}
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {content.title}
              </h2>
              
              <p className="text-indigo-200/80 text-xs sm:text-sm leading-relaxed">
                {content.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                {featuresList.map((feat: any, idx: number) => {
                  const textLabel = typeof feat === 'string' ? feat : feat?.label || '';
                  return (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-sky-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                      <span>{textLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <AppButton
                href={content.buttonLink || "/schedule-a-demo"}
                variant="primary"
                size="lg"
                showArrow
              >
                {content.buttonText || "Schedule Free Audit"}
              </AppButton>
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
