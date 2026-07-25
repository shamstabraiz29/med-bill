"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  DollarSign,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11";

const labelClassName = "text-xs font-semibold text-[#0F172A]";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  monthlyCollections: string;
  message: string;
}

const INITIAL_FORM_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  monthlyCollections: "",
  message: "",
};

export default function MedicalBillingAuditHeroForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div
      id="claim-free-medical-audit"
      className="relative flex w-full flex-col gap-6 overflow-hidden rounded-3xl border border-[#E2E6EC] bg-white p-6 shadow-[0_8px_30px_rgba(29,78,216,0.06)] sm:p-8 md:p-9"
    >
      <div className="space-y-1.5 border-b border-[#E2E6EC] pb-2 text-center sm:text-left">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
          Claim Free Medical Audit
        </h2>
      </div>

      {isSubmitted ? (
        <div className="space-y-4 py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">Request Received!</h3>
          <p className="mx-auto max-w-xs text-xs leading-relaxed text-[#475569] sm:text-sm">
            Thank you. A BellMedEx billing audit specialist will contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData(INITIAL_FORM_DATA);
            }}
            className="cursor-pointer pt-2 text-xs font-semibold text-[#1D4ED8] hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-left">
              <label htmlFor="audit-first-name" className={labelClassName}>
                First Name
              </label>
              <Input
                id="audit-first-name"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                icon={User}
                value={formData.firstName}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="audit-last-name" className={labelClassName}>
                Last Name
              </label>
              <Input
                id="audit-last-name"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                icon={User}
                value={formData.lastName}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="audit-email" className={labelClassName}>
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="audit-email"
              name="email"
              type="email"
              required
              placeholder="Email"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="audit-phone" className={labelClassName}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="audit-phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              icon={Phone}
              value={formData.phone}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="audit-collections" className={labelClassName}>
              Your Practice&apos;s Monthly Collections <span className="text-red-500">*</span>
            </label>
            <Input
              id="audit-collections"
              name="monthlyCollections"
              type="text"
              required
              placeholder="Your Practice's Monthly Collections"
              icon={DollarSign}
              value={formData.monthlyCollections}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="audit-message" className={labelClassName}>
              Type Your Message Here
            </label>
            <div className="relative w-full">
              <MessageSquare
                className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
              <textarea
                id="audit-message"
                name="message"
                rows={4}
                placeholder="Type Your Message Here"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[112px] w-full resize-y rounded-xl border border-[#E2E6EC] bg-[#F8FAFC] py-3.5 pl-10 pr-3.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#1D4ED8] focus:bg-white focus:ring-4 focus:ring-blue-100/40"
              />
            </div>
          </div>

          <div className="pt-2">
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full py-3.5 font-bold tracking-wider uppercase shadow-md shadow-blue-900/10"
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
