"use client";

import React, { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Input } from "@/components/ui/input";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingComplianceChecklistSectionData } from "@/payload/types/hospitalBillingServices";

const inputClassName =
  "h-11 rounded-xl border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 text-xs sm:h-12 sm:text-sm sm:rounded-full sm:border-slate-200 transition-all";

interface HospitalBillingServicesComplianceChecklistSectionProps {
  data?: HospitalBillingComplianceChecklistSectionData;
}

export default function HospitalBillingServicesComplianceChecklistSection({
  data,
}: HospitalBillingServicesComplianceChecklistSectionProps) {
  const content = data || defaultHospitalBillingServicesData.complianceChecklist;
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Hospital Audit Compliance Checklist Download",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/hospital-billing-services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });
    } catch (error) {
      console.error("[HospitalBillingServicesComplianceChecklistSection]", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="max-w-3xl space-y-3.5 text-left">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl">
                Get Your Free Hospital Audit{" "}
                <span className="font-bold text-amber-300">Compliance Checklist</span>
              </h2>

              <p className="text-sm leading-relaxed text-blue-200 sm:text-base">{content.description}</p>
            </div>

            <div className="my-8 w-full border-t border-white/10 sm:my-10" />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 rounded-2xl p-3 shadow-lg shadow-blue-900/10 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:p-2"
            >
              <Input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`${inputClassName} sm:flex-1`}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${inputClassName} sm:flex-1`}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`${inputClassName} sm:flex-1`}
              />
              <AppButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="h-11 w-full shrink-0 justify-center rounded-xl px-6 text-xs font-extrabold uppercase tracking-wide shadow-md shadow-blue-900/15 sm:h-12 sm:w-auto sm:min-w-[170px] sm:rounded-full"
              >
                {content.buttonText}
              </AppButton>
            </form>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
