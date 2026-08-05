"use client";

import React, { useState } from "react";
import { Building2, User, Mail, Phone, ChevronLeft, Check } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { HomepagePricingQuote } from "@/payload/types/homepage";

interface PricingQuoteSectionProps {
  data: HomepagePricingQuote;
}

const stepLabels = ["Practice Profile", "Volume & Services", "Contact Details"];

function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-3 py-2.5 text-center text-xs font-medium transition-all sm:text-sm",
        selected
          ? "border-sky-600 bg-sky-600 text-white shadow-sm shadow-sky-600/20"
          : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50/50"
      )}
    >
      {label}
    </button>
  );
}

export default function PricingQuoteSection({ data }: PricingQuoteSectionProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    practiceName: "",
    contactPerson: "",
    email: "",
    phone: "",
    specialty: "",
    claimVolume: "",
    providersCount: "",
    serviceRequired: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specialties = data.specialties.map((s) => s.label);
  const providerCounts = data.providerCounts.map((p) => p.label);
  const claimVolumes = data.claimVolumes.map((c) => c.label);
  const services = data.services.map((s) => s.label);

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Home Pricing Quote Form",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          name: formData.contactPerson || formData.practiceName || "Pricing Quote Request",
          email: formData.email,
          phone: formData.phone,
          monthlyCollections: formData.claimVolume,
          message: `Specialty: ${formData.specialty} | Providers: ${formData.providersCount} | Service: ${formData.serviceRequired} | Practice: ${formData.practiceName}`,
        }),
      });
      if (res.ok) setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HomeSection tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <HomeSectionHeader
            label={data.badge}
            title={
              <>
                {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
              </>
            }
            description={data.description}
          />
          <div className="mt-10 space-y-5">
            {data.highlights.slice(0, 3).map((item, idx) => {
              const Icon = getIcon(item.iconName);
              return (
                <div key={item.id || idx} className="flex gap-4">
                  <div className="hp-icon-box h-10 w-10 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.trustBadges.map((badge, idx) => (
              <span key={badge.id || idx} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                <Check className="h-3 w-3 text-sky-600" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hp-card p-6 sm:p-8 shadow-xl shadow-sky-900/8">
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                <Check className="h-7 w-7 text-sky-600 stroke-[3]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Quote Request Received!</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our specialists will prepare your proposal within 24 business hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="mb-3 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-colors",
                        s <= step ? "bg-sky-600" : "bg-slate-200"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600">
                  Step {step} of 3 — <span className="text-slate-900">{stepLabels[step - 1]}</span>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {step === 1 && (
                  <>
                    <div>
                      <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Medical Specialty *</label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {specialties.map((spec) => (
                          <OptionButton key={spec} label={spec} selected={formData.specialty === spec} onClick={() => handleSelect("specialty", spec)} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Number of Providers *</label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {providerCounts.map((count) => (
                          <OptionButton key={count} label={count} selected={formData.providersCount === count} onClick={() => handleSelect("providersCount", count)} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div>
                      <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly Claim Volume *</label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {claimVolumes.map((vol) => (
                          <OptionButton key={vol} label={vol} selected={formData.claimVolume === vol} onClick={() => handleSelect("claimVolume", vol)} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Services Required *</label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {services.map((srv) => (
                          <OptionButton key={srv} label={srv} selected={formData.serviceRequired === srv} onClick={() => handleSelect("serviceRequired", srv)} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { id: "practiceName", label: "Practice Name", icon: Building2, type: "text" },
                      { id: "contactPerson", label: "Contact Person", icon: User, type: "text" },
                      { id: "email", label: "Email Address", icon: Mail, type: "email" },
                      { id: "phone", label: "Phone Number", icon: Phone, type: "tel" },
                    ].map((field) => {
                      const Icon = field.icon;
                      return (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-slate-700">{field.label} *</label>
                          <div className="relative">
                            <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                              id={field.id}
                              name={field.id}
                              type={field.type}
                              required
                              value={formData[field.id as keyof typeof formData]}
                              onChange={handleInputChange}
                              className="hp-input"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900">
                      <ChevronLeft className="mr-0.5 h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < 3 ? (
                    <HomeButton
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && (!formData.specialty || !formData.providersCount)) ||
                        (step === 2 && (!formData.claimVolume || !formData.serviceRequired))
                      }
                      className="ml-auto"
                      showArrow
                    >
                      Continue
                    </HomeButton>
                  ) : (
                    <HomeButton
                      type="submit"
                      disabled={isSubmitting || !formData.practiceName || !formData.contactPerson || !formData.email || !formData.phone}
                      className="ml-auto"
                      showArrow
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </HomeButton>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </HomeSection>
  );
}
