"use client";

import { useState } from "react";
import { ChevronLeft, Check, Loader2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { shell } from "./shell";
import type { HomepagePricingQuote } from "@/payload/types/homepage";

interface Props {
  data: HomepagePricingQuote;
}

export default function HomeProposalWizard({ data }: Props) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const specialties = data.specialties.map((s) => s.label);
  const providerCounts = data.providerCounts.map((p) => p.label);
  const claimVolumes = data.claimVolumes.map((c) => c.label);
  const services = data.services.map((s) => s.label);

  const select = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

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
    } finally {
      setIsSubmitting(false);
    }
  };

  const chip = (active: boolean) =>
    `rounded-[12px] border px-3 py-2.5 text-xs font-semibold transition-colors ${
      active
        ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
        : "border-[#E2E6EC] bg-[#F5F7FA] text-[#475569] hover:border-[#1D4ED8]/40"
    }`;

  return (
    <section className={`${shell.pad} ${shell.sectionYTight}`}>
      <div className={shell.maxWide}>
        <div
          className={`grid overflow-hidden border ${shell.border} bg-white ${shell.radiusLg} ${shell.shadow} lg:grid-cols-[0.9fr_1.1fr]`}
        >
          <div className="border-b border-[#E2E6EC] bg-[#F5F7FA] p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              {data.badge}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-4xl">
              {data.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{data.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-[#475569]">{data.description}</p>
            <ul className="mt-8 space-y-3">
              {data.highlights.map((item) => (
                <li key={item.id || item.title} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
                    <p className="text-xs leading-relaxed text-[#475569]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#475569]">
              <span>
                Step {step} / 3
              </span>
              <span>
                {step === 1 ? "Profile" : step === 2 ? "Volume" : "Contact"}
              </span>
            </div>

            {isSubmitted ? (
              <div className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-6">
                <p className="text-lg font-semibold text-[#0F172A]">Proposal request received</p>
                <p className="mt-2 text-sm text-[#475569]">
                  A specialist will follow up with customized pricing shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <p className="mb-2 text-xs font-semibold text-[#0F172A]">Specialty *</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {specialties.map((spec) => (
                          <button
                            key={spec}
                            type="button"
                            onClick={() => select("specialty", spec)}
                            className={chip(formData.specialty === spec)}
                          >
                            {spec}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold text-[#0F172A]">Providers *</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {providerCounts.map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => select("providersCount", count)}
                            className={chip(formData.providersCount === count)}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <p className="mb-2 text-xs font-semibold text-[#0F172A]">Monthly volume *</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {claimVolumes.map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => select("claimVolume", vol)}
                            className={chip(formData.claimVolume === vol)}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold text-[#0F172A]">Services *</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {services.map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => select("serviceRequired", srv)}
                            className={chip(formData.serviceRequired === srv)}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(
                      [
                        ["practiceName", "Practice name"],
                        ["contactPerson", "Contact person"],
                        ["email", "Email"],
                        ["phone", "Phone"],
                      ] as const
                    ).map(([key, label]) => (
                      <label key={key} className="block">
                        <span className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                          {label} *
                        </span>
                        <input
                          required
                          type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                          value={formData[key]}
                          onChange={(e) => select(key, e.target.value)}
                          className="h-11 w-full rounded-[12px] border border-[#E2E6EC] bg-[#F5F7FA] px-3 text-sm outline-none focus:border-[#1D4ED8] focus:bg-white"
                        />
                      </label>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-[#E2E6EC] pt-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#475569]"
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <AppButton
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      disabled={
                        (step === 1 && (!formData.specialty || !formData.providersCount)) ||
                        (step === 2 && (!formData.claimVolume || !formData.serviceRequired))
                      }
                      variant="primary"
                      size="md"
                      showArrow
                    >
                      Continue
                    </AppButton>
                  ) : (
                    <AppButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="md"
                      showArrow={!isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Get My Free Quote"
                      )}
                    </AppButton>
                  )}
                </div>
              </form>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {data.trustBadges.map((badge) => (
                <span
                  key={badge.id || badge.label}
                  className="rounded-full border border-[#E2E6EC] px-3 py-1 text-[11px] font-semibold text-[#475569]"
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
