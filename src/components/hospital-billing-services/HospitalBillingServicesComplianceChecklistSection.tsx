"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2, User, Mail, Phone, Building2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppButton from "@/components/ui/AppButton";
import { Input } from "@/components/ui/input";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingComplianceChecklistSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesComplianceChecklistSectionProps {
  data?: HospitalBillingComplianceChecklistSectionData;
}

export default function HospitalBillingServicesComplianceChecklistSection({
  data,
}: HospitalBillingServicesComplianceChecklistSectionProps) {
  const content = data || defaultHospitalBillingServicesData.complianceChecklist;

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
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Hospital Audit Compliance Checklist Download",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/hospital-billing-services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.practiceType ? `Practice Type: ${formData.practiceType}` : "",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("[HospitalBillingServicesComplianceChecklistSection]", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
            {/* Ambient Pattern Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* LEFT COLUMN: Headline & Copy */}
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
                <SectionBadge variant="dark">
                  UNBEATABLE AUDIT COMPLIANCE
                </SectionBadge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug">
                  Get Your Free Hospital Audit{" "}
                  <span className="text-amber-300 font-bold">Compliance Checklist!</span>
                </h2>

                <p className="text-blue-200 text-sm sm:text-base leading-relaxed max-w-xl">
                  {content.description}
                </p>
              </div>

              {/* RIGHT COLUMN: Request Form Card */}
              <div className="lg:col-span-6 w-full">
                <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 md:p-10 shadow-lg flex flex-col gap-6 w-full text-left backdrop-blur-md">
                  {/* Form Title & Subtitle */}
                  <div className="text-left space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        Unlock Pricing For Your Project!
                      </h3>
                    </div>
                    <p className="text-blue-200 text-xs sm:text-[13px] leading-relaxed">
                      Fill in the form below to instantly unlock the lowest audit rates for your practice.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="text-lg font-bold text-white">Thank You!</h4>
                      <p className="text-xs sm:text-sm text-emerald-200">
                        Your free compliance checklist request has been received. Our team will reach out shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* 2x2 Form Inputs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {/* Name Input */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-slate-200">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="Full Name"
                            icon={User}
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-slate-200">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            icon={Mail}
                            required
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
                            placeholder="Phone Number"
                            icon={Phone}
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                          />
                        </div>

                        {/* Practice Type Input */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-slate-200">
                            Practice Type
                          </label>
                          <Input
                            type="text"
                            placeholder="e.g. Dental, Cardiology"
                            icon={Building2}
                            value={formData.practiceType}
                            onChange={(e) => setFormData({ ...formData, practiceType: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Submit AppButton */}
                      <AppButton
                        type="submit"
                        variant="secondary-dark"
                        size="lg"
                        showArrow
                        disabled={isSubmitting}
                        className="w-full mt-2 justify-center tracking-wider uppercase font-extrabold"
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : content.buttonText || "DOWNLOAD CHECKLIST"}
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
