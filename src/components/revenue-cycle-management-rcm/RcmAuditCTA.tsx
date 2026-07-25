"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import MotionWrapper from "@/components/ui/MotionWrapper";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E2E6EC]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Heading & Subtitle */}
        <MotionWrapper variant="fadeUp" className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-[#1E1B4B] leading-[1.25]">
            {auditData.titlePlain} <br className="hidden sm:inline" />
            {auditData.titleSuffix}
          </h2>

          <div className="space-y-1.5 pt-1 text-center font-bold text-sm sm:text-base lg:text-[1.05rem]">
            <p className="text-[#1D4ED8] tracking-wide">
              {auditData.subtitleHighlight}
            </p>
            <p className="text-[#1D4ED8] font-semibold">
              {auditData.subtitleSub}
            </p>
          </div>
        </MotionWrapper>

        {/* Form Container */}
        <MotionWrapper variant="fadeUp" delay={0.2} className="max-w-4xl mx-auto mt-8 sm:mt-10">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 sm:p-8 rounded-2xl text-center space-y-2 max-w-lg mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold">{auditData.successTitle}</h4>
              <p className="text-xs sm:text-sm text-emerald-800">
                Thank you, {formData.name}. {auditData.successDescription}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Inputs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <Input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 sm:h-13 bg-white border-[#CBD5E1] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-lg text-sm text-[#0F172A] placeholder:text-slate-400 font-medium px-4 shadow-sm"
                />

                <Input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 sm:h-13 bg-white border-[#CBD5E1] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-lg text-sm text-[#0F172A] placeholder:text-slate-400 font-medium px-4 shadow-sm"
                />

                <Input
                  type="tel"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 sm:h-13 bg-white border-[#CBD5E1] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-lg text-sm text-[#0F172A] placeholder:text-slate-400 font-medium px-4 shadow-sm"
                />
              </div>

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase py-4 rounded-lg transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{auditData.buttonLabel}</span>
                </button>
              </div>

            </form>
          )}
        </MotionWrapper>

      </div>
    </section>
  );
}
