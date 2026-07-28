"use client";

import React, { useState } from "react";
import { CheckCircle2, DollarSign, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11";

export default function PhysicianBillingServicesDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    monthlyCollections: "",
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
          formName: "Physician Billing Services Demo Request",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/physician-billing-services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.monthlyCollections
            ? `Monthly Collections: ${formData.monthlyCollections}`
            : "",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", monthlyCollections: "" });
      }
    } catch (error) {
      console.error("[PhysicianBillingServicesDemoForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-8">
      <div className="mb-6 space-y-4 border-b border-[#E2E6EC] pb-6 text-left">
        <SectionBadge variant="indigo" pulse>
          Outsource Your Billing, Multiply Your Profits!
        </SectionBadge>

        <h2 className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-[2.6rem]">
          Schedule a Free Demo for{" "}
          <span className="text-blue-600">100% Satisfaction</span>
        </h2>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Demo Request Received!</h3>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#475569]">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="physician-billing-demo-name"
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

          <Input
            id="physician-billing-demo-email"
            type="email"
            required
            placeholder="Email Address"
            aria-label="Email Address"
            icon={Mail}
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({ ...current, email: event.target.value }))
            }
            className={inputClassName}
          />

          <Input
            id="physician-billing-demo-phone"
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

          <Input
            id="physician-billing-demo-collections"
            type="text"
            required
            placeholder="Monthly Collections"
            aria-label="Monthly Collections"
            icon={DollarSign}
            value={formData.monthlyCollections}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                monthlyCollections: event.target.value,
              }))
            }
            className={inputClassName}
          />

          <AppButton
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            className="mt-2 w-full"
          >
            {isSubmitting ? "Processing..." : "Get Started"}
          </AppButton>
        </form>
      )}
    </div>
  );
}
