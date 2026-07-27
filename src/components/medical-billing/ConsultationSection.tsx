"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import IconWrapper from "@/components/common/IconWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface ConsultationSectionProps {
  data?: typeof defaultMedicalBillingData.consultation;
}

export default function ConsultationSection({ data }: ConsultationSectionProps) {
  const consultationData = data || defaultMedicalBillingData.consultation;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Medical Billing Consultation Request Form',
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/medical-billing',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Paragraphs & Highlights */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Standard Homepage Section Header */}
            <SectionHeader
              badge={consultationData.badge}
              badgeVariant="indigo"
              badgePulse
              title={
                <>
                  {consultationData.titlePlain}{" "}
                  <span className="font-bold text-blue-600">
                    {consultationData.titleHighlight}
                  </span>
                </>
              }
              description={
                <div className="space-y-4 text-[#475569] text-base leading-[1.6]">
                  <p>{consultationData.description1}</p>
                  <p>{consultationData.description2}</p>
                </div>
              }
              className="max-w-2xl"
            />

            {/* Homepage-style Feature Tiles */}
            <div className="w-full pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {consultationData.highlights.map((item, idx) => {
                const IconComponent = getIcon(item.iconName);
                return (
                  <div
                    key={idx}
                    className="group p-4 rounded-2xl bg-white border border-[#E2E6EC] shadow-[0_4px_20px_rgba(29,78,216,0.04)] hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-md transition-all duration-300"
                  >
                    <IconWrapper
                      icon={IconComponent}
                      size="sm"
                      variant="surface"
                      className="mb-3 group-hover:scale-105"
                    />
                    <h4 className="text-xs font-bold text-[#0F172A] tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#475569] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </MotionWrapper>

          {/* Right Column: Schedule Form Card */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E2E6EC] p-6 sm:p-8 md:p-9 shadow-[0_8px_30px_rgba(29,78,216,0.06)] flex flex-col gap-6 w-full">
              
              {/* Header inside Form Card */}
              <div className="text-left space-y-1.5 pb-2 border-b border-[#E2E6EC]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-[-0.02em]">
                  {consultationData.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {consultationData.formDescription}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    {consultationData.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-xs mx-auto">
                    Thank you <span className="font-semibold text-[#0F172A]">{formData.name}</span>. {consultationData.successDescription}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "" });
                    }}
                    className="text-xs font-semibold text-[#1D4ED8] hover:underline pt-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  id="consultation-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-[#0F172A]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Name"
                      icon={User}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-[#0F172A]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="Email"
                      icon={Mail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-[#0F172A]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      icon={Phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11"
                    />
                  </div>

                  {/* BOOK NOW Button */}
                  <div className="pt-2">
                    <AppButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full font-bold tracking-wider uppercase py-3.5 shadow-md shadow-blue-900/10"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 justify-center">
                          {consultationData.formButtonLabel}
                          <Send className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </AppButton>
                  </div>

                  <p className="text-[11px] text-center text-[#475569] pt-1">
                    🔒 HIPAA Compliant &amp; 100% Confidential
                  </p>

                </form>
              )}

            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
