"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";
import {
  smallPracticeCardClassName,
  smallPracticeContainerClassName,
  smallPracticeSectionAltClassName,
} from "./smallPracticeSectionLayout";

const inputClassName =
  "h-11 border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 text-xs sm:text-sm rounded-lg transition-all";

const SPECIALTY_OPTIONS = defaultMedicalBillingData.specialtySolutions.options.map(
  (option) => option.label
);

interface SmallPracticesSpecialtyFormSectionProps {
  data?: SmallPracticesPageData["specialtyForm"];
}

export default function SmallPracticesSpecialtyFormSection({ data }: SmallPracticesSpecialtyFormSectionProps = {}) {
  const [formData, setFormData] = useState({
    specialty: null as string | null,
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
          formName: "Small Practices Specialty Billing Form",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/small-practices",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Requested Specialty: ${formData.specialty}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ specialty: null, name: "", email: "", phone: "" });
      }
    } catch (error) {
      console.error("[SmallPracticesSpecialtyFormSection error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={smallPracticeSectionAltClassName}
      aria-labelledby="small-practices-specialty-form-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <MotionWrapper variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <SectionHeader
            badge={data?.badge ?? "Specialty Billing."}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="small-practices-specialty-form-heading">
                {data?.titlePlain ?? "Billing Services Customized for "}
                <span className="text-blue-600">{data?.titleHighlight ?? "Your Specialty"}</span>
              </span>
            }
            description={data?.description ?? "We Cover 75+ Specialties."}
            className="mb-10 sm:mb-12"
          />
        </MotionWrapper>

        <MotionWrapper variant="scaleUp" className="w-full">
          <div className={`${smallPracticeCardClassName} w-full p-6 sm:p-8`}>
            {isSubmitted ? (
              <div className="space-y-4 py-4 text-center sm:py-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Request Received!</h3>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-[#475569]">
                  Thank you. A BellMedEx billing specialist will contact you shortly about your
                  specialty billing needs.
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
                className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-5"
              >
                <div className="lg:col-span-3 space-y-2 text-left">
                  <label htmlFor="small-practices-specialty" className="block text-xs sm:text-sm font-medium text-slate-700">
                    Specialty <span className="text-red-500">*</span>
                  </label>
                  <FormSelect
                    id="small-practices-specialty"
                    name="specialty"
                    required
                    value={formData.specialty}
                    onValueChange={(value) =>
                      setFormData((current) => ({ ...current, specialty: value }))
                    }
                    options={SPECIALTY_OPTIONS}
                    placeholder="Choose Specialty"
                    className={inputClassName}
                  />
                </div>

                <div className="lg:col-span-3 space-y-2 text-left">
                  <label htmlFor="small-practices-specialty-name" className="block text-xs sm:text-sm font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="small-practices-specialty-name"
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

                <div className="lg:col-span-3 space-y-2 text-left">
                  <label htmlFor="small-practices-specialty-email" className="block text-xs sm:text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="small-practices-specialty-email"
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
                </div>

                <div className="lg:col-span-3 space-y-2 text-left">
                  <label htmlFor="small-practices-specialty-phone" className="block text-xs sm:text-sm font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="small-practices-specialty-phone"
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

                <div className="lg:col-span-12 pt-2">
                  <AppButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full uppercase tracking-wider py-3.5"
                  >
                    {isSubmitting ? "Processing..." : "Submit"}
                  </AppButton>
                </div>
              </form>
            )}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
