"use client";

import React, { useState } from "react";
import { CheckCircle2, DollarSign, Mail, Phone, User, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";

const darkInputClassName =
  "bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 rounded-lg text-xs sm:text-sm transition-all";

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
    <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 shadow-xl backdrop-blur-md text-left">
      <div className="mb-6 space-y-1">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-amber-400 shrink-0" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            Schedule Your Free Demo
          </h3>
        </div>
        <p className="text-xs text-blue-200">
          Fill out your details to multiply your practice profits.
        </p>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-white">Demo Request Received!</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-emerald-200">
            Thank you, {formData.name}. A BellMedEx billing specialist will contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="cursor-pointer text-xs font-semibold text-amber-300 hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2 text-left">
            <label htmlFor="physician-billing-demo-name" className="block text-xs sm:text-sm font-medium text-slate-200">
              Full Name <span className="text-red-400">*</span>
            </label>
            <Input
              id="physician-billing-demo-name"
              type="text"
              required
              placeholder="Dr. John Doe"
              aria-label="Name"
              icon={User}
              value={formData.name}
              onChange={(event) =>
                setFormData((current) => ({ ...current, name: event.target.value }))
              }
              className={darkInputClassName}
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="physician-billing-demo-email" className="block text-xs sm:text-sm font-medium text-slate-200">
              Email Address <span className="text-red-400">*</span>
            </label>
            <Input
              id="physician-billing-demo-email"
              type="email"
              required
              placeholder="doctor@practice.com"
              aria-label="Email Address"
              icon={Mail}
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
              className={darkInputClassName}
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="physician-billing-demo-phone" className="block text-xs sm:text-sm font-medium text-slate-200">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <Input
              id="physician-billing-demo-phone"
              type="tel"
              required
              placeholder="(555) 000-0000"
              aria-label="Phone Number"
              icon={Phone}
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({ ...current, phone: event.target.value }))
              }
              className={darkInputClassName}
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="physician-billing-demo-collections" className="block text-xs sm:text-sm font-medium text-slate-200">
              Monthly Collections
            </label>
            <Input
              id="physician-billing-demo-collections"
              type="text"
              placeholder="$50,000+"
              aria-label="Monthly Collections"
              icon={DollarSign}
              value={formData.monthlyCollections}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  monthlyCollections: event.target.value,
                }))
              }
              className={darkInputClassName}
            />
          </div>

          <div className="sm:col-span-2 pt-2">
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="secondary-dark"
              size="lg"
              showArrow
              className="w-full justify-center tracking-wider uppercase font-extrabold"
            >
              {isSubmitting ? "Processing..." : "Get Started Now"}
            </AppButton>
          </div>
        </form>
      )}
    </div>
  );
}
