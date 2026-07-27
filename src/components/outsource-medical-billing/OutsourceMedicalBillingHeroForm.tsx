"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11";

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
    <div className="relative z-10 flex w-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#E2E6EC] bg-white p-6 shadow-[0_8px_30px_rgba(29,78,216,0.08)] sm:p-8 md:p-9">
      <div className="space-y-1.5 border-b border-[#E2E6EC] pb-2 text-left">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
          Tell Us Where to Send You the{" "}
          <span className="text-[#1D4ED8]">Demo</span>
        </h2>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Demo Request Received!</h3>
          <p className="mx-auto max-w-xs text-xs leading-relaxed text-[#475569] sm:text-sm">
            Thank you. A BellMedEx billing specialist will send your demo details shortly.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="cursor-pointer pt-2 text-xs font-semibold text-[#1D4ED8] hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-1.5 text-left">
            <label htmlFor="outsource-billing-name" className="text-xs font-semibold text-[#0F172A]">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="outsource-billing-name"
              type="text"
              required
              placeholder="Name"
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
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="outsource-billing-email"
              type="email"
              required
              placeholder="Email"
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
              placeholder="+12 345 67895"
              icon={Phone}
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="pt-2">
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full py-3.5 font-bold uppercase tracking-wider shadow-md shadow-blue-900/10"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Submit
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}
            </AppButton>
          </div>
        </form>
      )}
    </div>
  );
}
