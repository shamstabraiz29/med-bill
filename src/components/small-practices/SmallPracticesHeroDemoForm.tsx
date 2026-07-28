"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import { smallPracticeCardClassName } from "./smallPracticeSectionLayout";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11";

interface SmallPracticesHeroDemoFormProps {
  formTitle?: string;
  formSubtitle?: string;
}

export default function SmallPracticesHeroDemoForm({
  formTitle = "Book a Demo Now",
  formSubtitle,
}: SmallPracticesHeroDemoFormProps) {
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
          formName: "Small Practices Demo Request",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/small-practices",
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
      console.error("[SmallPracticesHeroDemoForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${smallPracticeCardClassName} p-6 sm:p-8`}>
      <div className="mb-6 border-b border-[#E2E6EC] pb-5 text-left">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
          {formTitle}
        </h2>
        {formSubtitle && (
          <p className="mt-1 text-xs text-[#475569] sm:text-sm">{formSubtitle}</p>
        )}
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-4 text-center sm:py-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Demo Requested!</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#475569]">
            Thank you. A BellMedEx billing specialist will contact you shortly to schedule your demo.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="cursor-pointer text-xs font-semibold text-[#1D4ED8] hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-end sm:gap-5"
        >
          <div className="sm:col-span-3">
            <label
              htmlFor="sp-form-name"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <Input
                id="sp-form-name"
                type="text"
                required
                placeholder="Dr. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`${inputClassName} pl-10`}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="sp-form-email"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <Input
                id="sp-form-email"
                type="email"
                required
                placeholder="john@clinic.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${inputClassName} pl-10`}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="sp-form-phone"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <Input
                id="sp-form-phone"
                type="tel"
                required
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`${inputClassName} pl-10`}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <AppButton
              type="submit"
              variant="primary"
              size="lg"
              className="h-11 w-full text-xs font-bold tracking-wider uppercase sm:text-xs"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Schedule Demo"}
            </AppButton>
          </div>
        </form>
      )}
    </div>
  );
}
