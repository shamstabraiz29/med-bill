"use client";

import React from "react";
import { Star, Quote, ShieldCheck, CheckCircle2 } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

import { FeaturedTestimonialData } from "@/payload/types/testimonials";
import { defaultTestimonialsData } from "@/lib/defaults/testimonials";

interface FeaturedTestimonialProps {
  data?: FeaturedTestimonialData;
}

export default function FeaturedTestimonial({ data }: FeaturedTestimonialProps) {
  const content = data || defaultTestimonialsData.featuredTestimonial;
  const metricsList = content.metrics && content.metrics.length > 0 ? content.metrics : defaultTestimonialsData.featuredTestimonial.metrics;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            
            {/* Ambient Radial Gradient Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Background Quote Watermark */}
            <Quote className="absolute top-6 left-8 w-24 h-24 sm:w-32 sm:h-32 text-white/5 pointer-events-none stroke-[1]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* LEFT COLUMN: Quote & Author Details */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Header Rating & Verified Pill */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-sky-300 bg-sky-950/60 border border-sky-400/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    {content.verifiedBadgeText}
                  </span>
                </div>

                {/* Main Review Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight">
                  &ldquo;{content.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <p className="text-lg font-bold text-white tracking-tight">
                    {content.authorName}
                  </p>
                  <p className="text-xs sm:text-sm text-indigo-200/80 font-medium">
                    {content.authorRole}
                  </p>
                </div>

                {/* Impact Metrics Badges */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {metricsList.map((metric: any, idx: number) => {
                    const textLabel = typeof metric === 'string' ? metric : metric?.label || '';
                    return (
                      <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs text-sky-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>{textLabel}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* RIGHT COLUMN: Doctor Photo Portrait */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0">
                  
                  {/* Outer Ring Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/30 to-blue-600/20 blur-xl animate-pulse" />
                  
                  {/* Photo Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900">
                    <img
                      src={content.authorImageSrc || "https://images.unsplash.com/photo-1594824813566-88855ce7890b?q=80&w=800&auto=format&fit=crop"}
                      alt={content.authorName}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl text-left">
                      <p className="text-xs font-bold text-white">{content.authorName}</p>
                      <p className="text-[11px] text-sky-300">{content.authorRole}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
