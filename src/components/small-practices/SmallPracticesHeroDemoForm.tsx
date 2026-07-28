"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import { smallPracticeCardClassName } from "./smallPracticeSectionLayout";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11";

export default function SmallPracticesHeroDemoForm() {
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
          Book a Demo <span className="text-[#1D4ED8]">Now</span>
        </h2>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-4 text-center sm:py-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Demo Request Received!</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#475569]">
            Thank you. A BellMedEx billing specialist will contact you shortly.
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-5">
          <div className="lg:col-span-3">
            <Input
              id="small-practices-demo-name"
              type="text"
              required
              placeholder="Name"
              aria-label="Name"
              icon={User}
              value={formData.name}
              onChange={(event) =>
                setFormData((current) => ({ ...current, name: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="lg:col-span-3">
            <Input
              id="small-practices-demo-email"
              type="email"
              required
              placeholder="Email"
              aria-label="Email"
              icon={Mail}
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="lg:col-span-3">
            <Input
              id="small-practices-demo-phone"
              type="tel"
              required
              placeholder="Phone Number"
              aria-label="Phone Number"
              icon={Phone}
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClassName}
            />
          </div>

          <div className="lg:col-span-3">
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full uppercase tracking-wider"
            >
              {isSubmitting ? "Processing..." : "Submit"}
            </AppButton>
          </div>
        </form>
      )}
    </div>
  );
}
