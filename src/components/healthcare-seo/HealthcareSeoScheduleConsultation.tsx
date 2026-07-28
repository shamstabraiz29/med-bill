"use client";

import React, { useState } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { HealthcareSeoScheduleConsultationData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoScheduleConsultationProps {
  data?: HealthcareSeoScheduleConsultationData;
}

export default function HealthcareSeoScheduleConsultation({ data }: HealthcareSeoScheduleConsultationProps) {
  const content = data || defaultHealthcareSeoData.scheduleConsultation;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.phone) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/forms/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formName: 'Healthcare SEO Schedule Consultation Form',
            sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/healthcare-seo',
            name: `${formData.firstName} ${formData.lastName}`.trim() || 'Website Visitor',
            email: formData.email,
            phone: formData.phone,
            message: formData.comment || '',
          }),
        });

        if (res.ok) {
          setSubmitted(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Consultation Form */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-6 w-full text-left space-y-6">
            
            {/* Header Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                {content.title}
              </h2>
              <p className="text-[#475569] text-sm sm:text-base">
                {content.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-3 shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold">{content.successTitle}</h3>
                <p className="text-sm text-emerald-800">
                  {content.successDescription}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Label & Inputs (First & Last) */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-500 block">
                    Name
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#2E2874] focus:ring-2 focus:ring-[#2E2874]/20 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white font-medium"
                    />
                    <Input
                      type="text"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#2E2874] focus:ring-2 focus:ring-[#2E2874]/20 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white font-medium"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-500 block">
                    Email <span className="text-red-500 font-bold">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#2E2874] focus:ring-2 focus:ring-[#2E2874]/20 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white font-medium"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-500 block">
                    Phone <span className="text-red-500 font-bold">*</span>
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#2E2874] focus:ring-2 focus:ring-[#2E2874]/20 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white font-medium"
                  />
                </div>

                {/* Comment Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-500 block">
                    Comment
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter your question..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full p-3.5 border border-[#D1D5DB] focus:border-[#2E2874] focus:ring-2 focus:ring-[#2E2874]/20 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white font-medium outline-none resize-none"
                  />
                </div>

                {/* LET'S TALK Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 bg-[#2E2874] hover:bg-[#221C5C] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{content.formCtaLabel}</span>
                  </button>
                </div>

              </form>
            )}

          </MotionWrapper>

          {/* RIGHT COLUMN: Professional Healthcare Consultation Image Card */}
          <MotionWrapper variant="slideRight" className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E6EC] shadow-xl group aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              
              {/* Background Medical Consultation Image */}
              <img
                src={content.imageSrc || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"}
                alt="Healthcare Consultation & Marketing Strategy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Depth & Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Bottom Floating Stats & Assurance Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-white/40 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center justify-between text-left">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <TrendingUp className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0F172A] tracking-tight">
                      {content.cardTitle}
                    </h4>
                    <p className="text-xs text-[#475569] font-medium">
                      {content.cardSubtitle}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-xs font-bold shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{content.cardBadge}</span>
                </div>
              </div>

            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
