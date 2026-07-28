"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, Globe, TrendingUp, Search, CheckCircle2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Input } from "@/components/ui/input";
import type { HealthcareSeoHeroData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoHeroProps {
  data?: HealthcareSeoHeroData;
}

export default function HealthcareSeoHero({ data }: HealthcareSeoHeroProps) {
  const content = data || defaultHealthcareSeoData.hero;

  const [formData, setFormData] = useState({
    name: "",
    websiteUrl: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/forms/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formName: 'Healthcare SEO Hero Form',
            sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/healthcare-seo',
            name: formData.name,
            email: formData.email,
            phone: formData.phone || '',
            message: formData.websiteUrl ? `Website: ${formData.websiteUrl}` : '',
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
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 bg-transparent overflow-hidden">
      {/* Background Ambient Gradient & Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Visual, Center Copy & Form, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT FLANK: Digital Marketing Specialist Illustration Frame */}
          <MotionWrapper variant="slideLeft" className="hidden lg:block lg:col-span-3">
            <div className="relative w-full max-w-[280px] aspect-[3/4] mx-auto rounded-2xl bg-white border border-[#E2E6EC] shadow-xl p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900 to-slate-900">
                <Image
                  src={content.leftImageSrc || "/consultants-laptop.png"}
                  alt="Healthcare SEO Digital Marketing Specialist"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />

                {/* Floating Social & Search Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1D4ED8] shadow-sm flex items-center gap-1">
                    <Search className="w-3 h-3" /> {content.leftBadgeTag}
                  </span>
                  <span className="bg-emerald-500/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm">
                    {content.leftBadgeStatus}
                  </span>
                </div>

                {/* Bottom Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-2.5 text-white shadow-lg">
                  <div className="w-7 h-7 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{content.leftMetricValue}</p>
                    <p className="text-[10px] text-blue-200 font-medium">{content.leftMetricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* CENTER COLUMN: Hero Copy & 2x2 Input Form */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6">
            
            {/* Eyebrow Badge */}
            <MotionWrapper variant="springPop">
              <SectionBadge variant="indigo" pulse>
                {content.badge}
              </SectionBadge>
            </MotionWrapper>

            {/* Headline */}
            <MotionWrapper variant="blurReveal">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18]">
                {content.titlePrefix}{" "}
                <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              </h1>
            </MotionWrapper>

            {/* Subtitle Copy */}
            <MotionWrapper variant="blurReveal">
              <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-xl">
                {content.subtitle}
              </p>
            </MotionWrapper>

            {/* Interactive Free Proposal Audit Form */}
            <MotionWrapper variant="scaleUp" delay={0.1} className="w-full max-w-xl">
              <div className="bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 rounded-2xl p-6 sm:p-8 text-left">
                
                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900">{content.successTitle}</h3>
                    <p className="text-xs sm:text-sm text-emerald-700">
                      {content.successDescription}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* 2x2 Grid of shadcn/ui Input components */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Your Name Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#0F172A]">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="pl-10 h-11 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8] rounded-xl text-sm"
                          />
                        </div>
                      </div>

                      {/* Your Website URL Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#0F172A]">
                          Your Website URL
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            type="url"
                            placeholder="https://yourpractice.com"
                            value={formData.websiteUrl}
                            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                            className="pl-10 h-11 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8] rounded-xl text-sm"
                          />
                        </div>
                      </div>

                      {/* Phone Number Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#0F172A]">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            type="tel"
                            required
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="pl-10 h-11 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8] rounded-xl text-sm"
                          />
                        </div>
                      </div>

                      {/* Email Address Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#0F172A]">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            type="email"
                            required
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-10 h-11 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8] rounded-xl text-sm"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <AppButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        showArrow
                        className="w-full justify-center tracking-wide uppercase text-xs font-bold py-3.5 shadow-lg shadow-blue-900/10"
                      >
                        {content.formButtonLabel}
                      </AppButton>
                    </div>

                  </form>
                )}

              </div>
            </MotionWrapper>

          </div>

          {/* RIGHT FLANK: Female Doctor Visual Illustration Frame */}
          <MotionWrapper variant="slideRight" className="hidden lg:block lg:col-span-3">
            <div className="relative w-full max-w-[280px] aspect-[3/4] mx-auto rounded-2xl bg-white border border-[#E2E6EC] shadow-xl p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-950 to-slate-900">
                <Image
                  src={content.rightImageSrc || "/clearinghouse-nurse-hero.png"}
                  alt="Medical Practitioner Partnering for Healthcare SEO"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0F172A] shadow-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {content.rightBadgeTag}
                  </span>
                </div>

                {/* Bottom Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-2.5 text-white shadow-lg">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{content.rightMetricValue}</p>
                    <p className="text-[10px] text-blue-200 font-medium">{content.rightMetricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
