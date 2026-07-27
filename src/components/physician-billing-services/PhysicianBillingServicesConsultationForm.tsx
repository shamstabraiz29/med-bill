"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";

const inputClassName =
  "bg-white/95 border-white/20 text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-white focus:ring-4 focus:ring-white/20 h-11";

export default function PhysicianBillingServicesConsultationForm() {
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
          formName: "Physician Billing Services Consultation Request",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/physician-billing-services",
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
      console.error("[PhysicianBillingServicesConsultationForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="physician-billing-consultation-form"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-5 py-6 sm:rounded-3xl sm:px-8 sm:py-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(29,78,216,0.2),transparent_45%),radial-gradient(circle_at_85%_50%,rgba(96,165,250,0.12),transparent_40%)]"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="text-left lg:col-span-4">
          <h2 className="text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
            Book No Obligation Consultation
          </h2>
          <p className="mt-2 text-sm italic leading-[1.6] text-blue-200">
            Enter your details for a free billing consultancy.
          </p>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-start gap-3 text-left lg:col-span-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-white">
                Thank you — a billing consultant will reach out shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="cursor-pointer text-xs font-semibold text-blue-200 hover:text-white hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:items-end"
          >
            <Input
              id="physician-billing-name"
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
              id="physician-billing-email"
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

            <Input
              id="physician-billing-phone"
              type="tel"
              required
              placeholder="Phone"
              aria-label="Phone"
              icon={Phone}
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClassName}
            />

            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="secondary-dark"
              size="lg"
              className="w-full py-3.5 font-bold uppercase tracking-wider"
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
          </form>
        )}
      </div>
    </div>
  );
}
