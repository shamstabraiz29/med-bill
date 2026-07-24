"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, User, Mail, Phone, Calendar, Clock, CheckCircle2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Input } from "@/components/ui/input";
import type { ProviderCredentialingHeroData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface ProviderCredentialingHeroProps {
  data?: ProviderCredentialingHeroData;
}

export default function ProviderCredentialingHero({ data }: ProviderCredentialingHeroProps) {
  const content = data || defaultProviderCredentialingData.hero;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 bg-transparent overflow-hidden">
      {/* Ambient Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Hero Copy & Appointment Form */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow Badge */}
            <MotionWrapper variant="springPop">
              <SectionBadge variant="blue" pulse>
                {content.badge}
              </SectionBadge>
            </MotionWrapper>

            {/* Headline */}
            <MotionWrapper variant="blurReveal">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18] lg:max-w-2xl">
                {content.titlePrefix}{" "}
                <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              </h1>
            </MotionWrapper>

            {/* Paragraph Copies */}
            <MotionWrapper variant="blurReveal">
              <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-[1.6] max-w-2xl">
                <p>{content.description1}</p>
                <p>{content.description2}</p>
                <p>{content.description3}</p>
              </div>
            </MotionWrapper>

            {/* Redesigned Online Appointment Booking Form */}
            <MotionWrapper variant="fadeUp" delay={0.2} className="w-full max-w-2xl pt-2">
              <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-7 shadow-xl shadow-blue-900/5 text-left">
                
                {/* Form Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-[#E2E6EC]">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                      <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
                        {content.formTitle}
                      </h3>
                    </div>
                    <p className="text-xs text-[#475569] mt-0.5">
                      {content.formDescription}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shrink-0">
                    <Clock className="w-3 h-3" />
                    {content.formBadge}
                  </span>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    {content.successMessage}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="Dr. John Doe"
                          icon={User}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-50/60 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8]/20 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="doctor@practice.com"
                          icon={Mail}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-50/60 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8]/20 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          icon={Phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-slate-50/60 border-[#E2E6EC] focus:border-[#1D4ED8] focus:ring-[#1D4ED8]/20 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-start">
                      <AppButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        showArrow
                        className="w-full sm:w-auto px-8 shadow-md shadow-blue-900/10"
                      >
                        {content.formCtaLabel}
                      </AppButton>
                    </div>
                  </form>
                )}

              </div>
            </MotionWrapper>

          </div>

          {/* RIGHT COLUMN: Doctor Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <MotionWrapper variant="scaleUp" delay={0.2} className="w-full">
              <div className="relative w-full max-w-[460px] aspect-[4/5] mx-auto rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={content.imageSrc || "/clearinghouse-nurse-hero.png"}
                    alt="Medical Doctor presenting Provider Credentialing Services"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                    <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Zap className="w-4.5 h-4.5 fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-tight leading-snug">{content.cardTitle}</p>
                      <p className="text-[10px] text-blue-200 font-medium">{content.cardSubtitle}</p>
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
