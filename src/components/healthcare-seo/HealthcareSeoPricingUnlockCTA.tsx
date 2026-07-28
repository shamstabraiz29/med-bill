"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2, User, Mail, Phone, Building2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppButton from "@/components/ui/AppButton";
import { Input } from "@/components/ui/input";
import type { HealthcareSeoPricingUnlockCTAData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoPricingUnlockCTAProps {
  data?: HealthcareSeoPricingUnlockCTAData;
}

export default function HealthcareSeoPricingUnlockCTA({ data }: HealthcareSeoPricingUnlockCTAProps) {
  const content = data || defaultHealthcareSeoData.pricingUnlockCta;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/forms/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formName: 'Healthcare SEO Customized Pricing Quote Form',
            sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/healthcare-seo',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.practiceType ? `Practice Type: ${formData.practiceType}` : '',
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
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        
        {/* Floating Rounded Dark Container Box */}
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
            
            {/* Ambient Pattern Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* LEFT COLUMN: Headline & Copy */}
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
                <SectionHeader
                  theme="dark"
                  badge={content.badge}
                  badgeVariant="dark"
                  title={
                    <>
                      {content.titlePlain}{" "}
                      <span className="text-sky-300 font-bold">{content.titleHighlight}</span> at Market Lowest Prices!
                    </>
                  }
                  description={content.description}
                  className="max-w-xl"
                />
              </div>

              {/* RIGHT COLUMN: Request Form Card */}
              <div className="lg:col-span-6 w-full">
                <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 md:p-10 shadow-lg flex flex-col gap-6 w-full text-left backdrop-blur-md">
                  
                  {/* Form Title & Subtitle */}
                  <div className="text-left space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {content.formTitle}
                      </h3>
                    </div>
                    <p className="text-indigo-200/60 text-xs sm:text-[13px] leading-relaxed">
                      {content.formDescription}
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="text-lg font-bold text-white">{content.successTitle}</h4>
                      <p className="text-xs sm:text-sm text-emerald-200">
                        {content.successDescription}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      
                      {/* 2x2 Form Inputs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Name Input */}
                        <Input
                          type="text"
                          placeholder="Name *"
                          icon={User}
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                        />

                        {/* Email Input */}
                        <Input
                          type="email"
                          placeholder="Email *"
                          icon={Mail}
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                        />

                        {/* Phone Number Input */}
                        <Input
                          type="tel"
                          placeholder="Phone Number *"
                          icon={Phone}
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                        />

                        {/* Practice Type Input */}
                        <Input
                          type="text"
                          placeholder="Practice Type"
                          icon={Building2}
                          value={formData.practiceType}
                          onChange={(e) => setFormData({ ...formData, practiceType: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-blue-400/50 focus:ring-blue-400/20"
                        />

                      </div>

                      {/* Submit AppButton */}
                      <AppButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        showArrow
                        className="w-full mt-2 justify-center tracking-wider uppercase font-extrabold"
                      >
                        {content.formCtaLabel}
                      </AppButton>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
