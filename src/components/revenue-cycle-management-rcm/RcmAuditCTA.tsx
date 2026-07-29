"use client";

import React, { useState } from "react";
import { CheckCircle2, User, Mail, Phone, Lock, ShieldCheck, TrendingUp, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmAuditCTAProps {
  data?: typeof defaultRevenueCycleManagementData.auditCta;
}

export default function RcmAuditCTA({ data }: RcmAuditCTAProps) {
  const auditData = data || defaultRevenueCycleManagementData.auditCta;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
            formName: 'RCM Practice Audit Form',
            sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/revenue-cycle-management-rcm',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
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

  const cleanSubtitle = auditData.subtitleHighlight.replace(/<<</g, "").replace(/>>>/g, "").trim();

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
            
            {/* 2-Column Grid: Left Content, Right Inputs */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Copy & Feature Points */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <SectionBadge variant="dark">FREE RCM AUDIT</SectionBadge>

                <div className="space-y-3.5">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug text-white">
                    {auditData.titlePlain}{" "}
                    <span className="text-amber-300 font-bold">{auditData.titleSuffix}</span>
                  </h2>

                  <p className="text-blue-200 text-sm sm:text-base leading-relaxed max-w-xl">
                    {cleanSubtitle} — {auditData.subtitleSub}
                  </p>
                </div>

                {/* Value Highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <span>Achieve up to <strong>30% revenue growth</strong> with optimized billing</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/20 shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <span><strong>98%+ first-pass clean claim</strong> acceptance rate</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/20 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>100% Confidential & <strong>HIPAA Compliant</strong> audit</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form Inputs Box */}
              <div className="lg:col-span-6 w-full">
                <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 shadow-xl backdrop-blur-md text-left">
                  
                  {/* Form Box Header */}
                  <div className="mb-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-amber-400 shrink-0" />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        Request Free RCM Audit
                      </h3>
                    </div>
                    <p className="text-xs text-blue-200">
                      Fill out your contact details below to claim your audit report.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="text-lg font-bold text-white">{auditData.successTitle}</h4>
                      <p className="text-xs sm:text-sm text-emerald-200">
                        Thank you, {formData.name}. {auditData.successDescription}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Full Name Input */}
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-slate-200">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="Dr. John Doe"
                          icon={User}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                        />
                      </div>

                      {/* Email Address Input */}
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-slate-200">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="doctor@practice.com"
                          icon={Mail}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                        />
                      </div>

                      {/* Phone Number Input */}
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-slate-200">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          icon={Phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <AppButton
                          type="submit"
                          variant="secondary-dark"
                          size="lg"
                          showArrow
                          disabled={isSubmitting}
                          className="w-full justify-center tracking-wider uppercase font-extrabold"
                        >
                          {isSubmitting ? "Submitting..." : auditData.buttonLabel}
                        </AppButton>
                      </div>

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

