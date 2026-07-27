"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

const fieldClassName =
  "h-11 border border-[#E2E6EC] bg-[#F8FAFC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40";

interface MedicalBillingSpecialtySolutionsProps {
  data?: typeof defaultMedicalBillingData.specialtySolutions;
}

export default function MedicalBillingSpecialtySolutions({ data }: MedicalBillingSpecialtySolutionsProps) {
  const specialtyData = data || defaultMedicalBillingData.specialtySolutions;
  const options = specialtyData.options.map((opt) => opt.label);

  const [formData, setFormData] = useState({
    specialty: null as string | null,
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.specialty || !formData.name.trim() || !formData.email.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Medical Billing Specialty Solutions Form',
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/medical-billing',
          name: formData.name,
          email: formData.email,
          phone: '',
          message: `Requested Specialty: ${formData.specialty}`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    Boolean(formData.specialty) &&
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0;

  return (
    <section
      className="w-full border-t border-[#E2E6EC] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="specialty-solutions-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <MotionWrapper variant="fadeUp">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              badge={specialtyData.badge}
              badgeVariant="indigo"
              badgePulse
              align="center"
              title={
                <span id="specialty-solutions-heading">
                  {specialtyData.titlePrefix}
                  <span className="font-bold text-blue-600">{specialtyData.titleHighlight}</span>
                </span>
              }
              description={specialtyData.description}
              className="mb-8 sm:mb-10"
            />
          </div>

          {isSubmitted ? (
            <div className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <p className="text-sm text-[#475569]">
                Thanks, {formData.name}. We&apos;ll reach out at {formData.email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ specialty: null, name: "", email: "" });
                }}
                className="cursor-pointer text-xs font-medium text-[#1D4ED8] hover:underline"
              >
                Submit again
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
            >
              <div className="sm:col-span-2 lg:col-span-4">
                <FormSelect
                  id="specialty-select"
                  name="specialty"
                  required
                  value={formData.specialty}
                  onValueChange={(value) =>
                    setFormData({ ...formData, specialty: value })
                  }
                  options={options}
                  placeholder="Choose Specialty"
                  className={fieldClassName}
                />
              </div>

              <div className="lg:col-span-3">
                <label htmlFor="specialty-name" className="sr-only">
                  Name
                </label>
                <Input
                  id="specialty-name"
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={fieldClassName}
                />
              </div>

              <div className="lg:col-span-3">
                <label htmlFor="specialty-email" className="sr-only">
                  Email
                </label>
                <Input
                  id="specialty-email"
                  type="email"
                  required
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={fieldClassName}
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-2">
                <AppButton
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  variant="primary"
                  size="lg"
                  className="h-11 w-full rounded-xl py-0 font-bold uppercase tracking-wider shadow-md shadow-blue-900/10"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      SUBMIT
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  )}
                </AppButton>
              </div>
            </form>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}
