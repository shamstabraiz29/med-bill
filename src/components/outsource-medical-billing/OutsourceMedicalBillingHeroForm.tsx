"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, User, Loader2, Shield, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";

const inputClassName =
  "h-11 border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 text-xs sm:text-sm rounded-xl transition-all";

export default function OutsourceMedicalBillingHeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Outsource Medical Billing Demo Request",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/outsource-medical-billing",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
      }
    } catch (error) {
      console.error("[OutsourceMedicalBillingHeroForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-[#1D4ED8]/30 transition-all duration-300">
      <div className="mb-6 border-b border-[#E2E6EC] pb-5 text-left">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
          Tell Us Where to Send You the <span className="text-[#1D4ED8]">Demo</span>
        </h2>
        <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
          Fill out the form below to request a free custom billing analysis.
        </p>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
            <CheckCircle2 className="h-8 w-8 stroke-[2.5]" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Demo Request Received!</h3>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-[#475569]">
            Thank you. A BellMedEx billing specialist will send your demo details shortly.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="cursor-pointer text-xs font-bold text-[#1D4ED8] hover:underline transition-all"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-1.5 text-left">
            <label htmlFor="outsource-billing-name" className="text-xs font-semibold text-[#0F172A]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="outsource-billing-name"
              type="text"
              required
              placeholder="Dr. John Doe"
              aria-label="Name"
              icon={User}
              value={formData.name}
              onChange={(event) =>
                setFormData((current) => ({ ...current, name: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="outsource-billing-email" className="text-xs font-semibold text-[#0F172A]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="outsource-billing-email"
              type="email"
              required
              placeholder="doctor@practice.com"
              aria-label="Email"
              icon={Mail}
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="outsource-billing-phone" className="text-xs font-semibold text-[#0F172A]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="outsource-billing-phone"
              type="tel"
              required
              placeholder="(555) 000-0000"
              aria-label="Phone Number"
              icon={Phone}
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <AppButton
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            showArrow={!isSubmitting}
            className="w-full mt-2 uppercase tracking-wider font-bold text-xs"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : (
              "Submit Request"
            )}
          </AppButton>

          <div className="flex items-center justify-between pt-3 border-t border-[#E2E6EC] text-[11px] text-[#475569]">
            <span className="flex items-center gap-1 font-semibold">
              <Shield className="w-3.5 h-3.5 text-emerald-600" /> HIPAA & SOC2 Secure
            </span>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-[#0F172A]">4.8</span>
              <div className="flex text-[#EAB308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}


