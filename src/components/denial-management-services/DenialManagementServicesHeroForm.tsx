"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { denialManagementCardClassName } from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHeroData } from "@/payload/types/denialManagementServices";

const inputClassName =
  "h-11 border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 text-xs sm:text-sm rounded-lg transition-all";

interface DenialManagementServicesHeroFormProps {
  data?: Pick<DenialManagementHeroData, "formTitle" | "phoneText" | "phoneLink">;
}

export default function DenialManagementServicesHeroForm({
  data,
}: DenialManagementServicesHeroFormProps) {
  const content = data || defaultDenialManagementServicesData.hero;
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
          formName: "Denial Management Services Demo Request",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/denial-management-services",
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
      console.error("[DenialManagementServicesHeroForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionWrapper variant="scaleUp" delay={0.15}>
      <div className={`${denialManagementCardClassName} p-6 sm:p-8`}>
        <div className="mb-6 flex flex-col gap-3 border-b border-[#E2E6EC] pb-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">
            {content.formTitle}
          </h2>
          <p className="flex flex-wrap items-center gap-2 text-xs text-[#475569] sm:text-sm">
            Or Call at{" "}
            <a
              href={content.phoneLink}
              className="inline-flex items-center gap-1.5 font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E3A8A]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {content.phoneText}
            </a>
          </p>
        </div>

        {isSubmitted ? (
          <div className="space-y-4 py-4 text-center sm:py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">Demo Request Received!</h3>
            <p className="mx-auto max-w-md text-sm leading-[1.6] text-[#475569]">
              Thank you. A BellMedEx denial management specialist will contact you shortly.
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
            <div className="space-y-2 text-left sm:col-span-3">
              <label
                htmlFor="denial-mgmt-name"
                className="block text-xs font-medium text-slate-700 sm:text-sm"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="denial-mgmt-name"
                type="text"
                required
                placeholder="Dr. John Doe"
                aria-label="Full Name"
                icon={User}
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, name: event.target.value }))
                }
                className={inputClassName}
              />
            </div>

            <div className="space-y-2 text-left sm:col-span-3">
              <label
                htmlFor="denial-mgmt-email"
                className="block text-xs font-medium text-slate-700 sm:text-sm"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="denial-mgmt-email"
                type="email"
                required
                placeholder="doctor@practice.com"
                aria-label="Email Address"
                icon={Mail}
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, email: event.target.value }))
                }
                className={inputClassName}
              />
            </div>

            <div className="space-y-2 text-left sm:col-span-3">
              <label
                htmlFor="denial-mgmt-phone"
                className="block text-xs font-medium text-slate-700 sm:text-sm"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                id="denial-mgmt-phone"
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

            <div className="sm:col-span-3">
              <AppButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="h-11 w-full text-xs font-bold uppercase tracking-wider sm:text-xs"
              >
                {isSubmitting ? "Processing..." : "Submit"}
              </AppButton>
            </div>
          </form>
        )}
      </div>
    </MotionWrapper>
  );
}
