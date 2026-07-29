"use client";

import React, { useState } from "react";
import { CheckCircle2, User, Mail, Phone } from "lucide-react";
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

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-4">
              <SectionBadge variant="dark">FREE RCM AUDIT</SectionBadge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug text-white">
                {auditData.titlePlain}{" "}
                <span className="text-amber-300 font-bold">{auditData.titleSuffix}</span>
              </h2>

              <p className="text-blue-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                {auditData.subtitleHighlight} — {auditData.subtitleSub}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 sm:p-8 rounded-2xl text-center space-y-2 max-w-lg mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">{auditData.successTitle}</h4>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    Thank you, {formData.name}. {auditData.successDescription}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-slate-200">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="Name"
                        icon={User}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-slate-200">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="Email Address"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-slate-200">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        icon={Phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <AppButton
                      type="submit"
                      variant="secondary-dark"
                      size="lg"
                      showArrow
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[240px]"
                    >
                      {auditData.buttonLabel}
                    </AppButton>
                  </div>
                </form>
              )}
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

