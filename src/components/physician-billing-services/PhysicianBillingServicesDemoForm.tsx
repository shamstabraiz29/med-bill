"use client";

import React, { useState } from "react";
import { CheckCircle2, DollarSign, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import { physicianCardClassName } from "./physicianSectionLayout";

const inputClassName =
  "h-11 border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40";

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
    <div className={`${physicianCardClassName} h-full p-6 sm:p-8`}>
      <div className="mb-6 border-b border-[#E2E6EC] pb-5 text-left">
        <SectionBadge variant="indigo" pulse className="mb-4">
          Outsource Your Billing, Multiply Your Profits!
        </SectionBadge>

        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
          Schedule a Free Demo for{" "}
          <span className="text-[#1D4ED8]">100% Satisfaction</span>
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

          <div className="sm:col-span-2">
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full uppercase tracking-wider"
            >
              {isSubmitting ? "Processing..." : "Get Started"}
            </AppButton>
          </div>
        </form>
      )}
    </div>
  );
}
