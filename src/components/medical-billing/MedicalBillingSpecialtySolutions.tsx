"use client";

import React, { useState } from "react";
import { Check, Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

const fieldClassName =
  "h-11 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 text-xs sm:text-sm shadow-none hover:border-white/30 hover:bg-white/15 [&_[data-placeholder]]:text-slate-400";

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
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Medical Billing Specialty Solutions Form",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/medical-billing",
          name: formData.name,
          email: formData.email,
          phone: "",
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
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="specialty-solutions-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="space-y-6 text-left lg:col-span-7">
                <div className="max-w-2xl space-y-3.5">
                  <SectionBadge variant="dark">{specialtyData.badge}</SectionBadge>

                  <h2
                    id="specialty-solutions-heading"
                    className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                  >
                    {specialtyData.titlePrefix}
                    <span className="font-bold text-amber-300">{specialtyData.titleHighlight}</span>
                  </h2>

                  <p className="text-sm leading-relaxed text-blue-200 sm:text-base">
                    {specialtyData.description}
                  </p>
                </div>
              </div>

              <div className="w-full lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md sm:p-8">
                  <div className="mb-6 space-y-1.5 text-left">
                    <h3 className="text-lg font-bold tracking-tight text-white">Get specialty billing help</h3>
                    <p className="text-xs leading-relaxed text-blue-200 sm:text-sm">
                      Select your specialty, then share your details. Our consultants will reach out with a tailored plan.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="space-y-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
                      <Check className="mx-auto h-8 w-8 text-emerald-400 stroke-[3]" />
                      <h4 className="text-base font-bold text-white">Request submitted</h4>
                      <p className="text-xs text-emerald-200 sm:text-sm">
                        Thanks, {formData.name}. We&apos;ll reach out at {formData.email} about{" "}
                        {formData.specialty}.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ specialty: null, name: "", email: "" });
                        }}
                        className="cursor-pointer text-xs font-semibold text-white/80 transition-colors hover:text-white"
                      >
                        Submit again
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="specialty-select"
                          className="block text-[10px] font-bold uppercase tracking-widest text-blue-200/80"
                        >
                          Choose your specialty
                        </label>
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

                      <Input
                        id="specialty-name"
                        type="text"
                        placeholder="Your name"
                        icon={User}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={fieldClassName}
                      />
                      <Input
                        id="specialty-email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={fieldClassName}
                      />

                      <AppButton
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        variant="primary"
                        size="lg"
                        showArrow
                        className="w-full justify-center"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </AppButton>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
