"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { shell } from "./shell";
import type { HomepageHero } from "@/payload/types/homepage";

interface Props {
  data: HomepageHero;
}

export default function HomeHeroSplit({ data }: Props) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Valid email required";
    }
    if (!formData.phone.trim()) next.phone = "Required";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: `Capsule Form: ${data.formButtonLabel || "Free Audit"}`,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${shell.pad} overflow-x-clip pt-6 pb-16 sm:pt-10 sm:pb-24 lg:overflow-visible lg:pb-28`}>
      <div className={`${shell.maxWide} grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}>
        {/* Editorial copy column */}
        <div className="pt-2 lg:pt-8">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1D4ED8]">
            {data.eyebrow}
          </p>
          <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#0F172A] sm:text-6xl lg:text-[4.5rem]">
            {data.titlePrefix}{" "}
            <span className="text-[#1D4ED8]">{data.titleHighlight}</span>
            {data.titleSuffix ? ` ${data.titleSuffix}` : null}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.7] text-[#475569] sm:text-lg">
            {data.description1}
          </p>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-[#475569] sm:text-lg">
            {data.description2}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AppButton href="#home-lead" variant="primary" size="md" showArrow>
              {data.formButtonLabel || "Free Audit"}
            </AppButton>
            <AppButton href="/schedule-a-demo" variant="secondary" size="md">
              Book a demo
            </AppButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {(data.trustBadges || []).map((badge) => (
              <li
                key={badge.id || badge.label}
                className="flex items-center gap-2 text-xs font-medium text-[#475569]"
              >
                <Check className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Lead panel with corner metrics that hang outside the card */}
        <div id="home-lead" className="relative w-full lg:mt-6">
          <div
            className={`relative z-10 border ${shell.border} ${shell.surface} ${shell.radiusLg} ${shell.shadowFloat} p-6 sm:p-8`}
          >
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#E2E6EC] pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
                  Start here
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#0F172A]">
                  Get a free practice audit
                </h2>
              </div>
              <span className="shrink-0 rounded-full border border-[#E2E6EC] px-3 py-1 text-[11px] font-semibold text-[#475569]">
                ~2 min
              </span>
            </div>

            {isSuccess ? (
              <div className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-6">
                <p className="text-lg font-semibold text-[#0F172A]">
                  {data.successTitle || "Consultation Request Booked!"}
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  {data.successDescription || "We will reach out to you within the next 15 minutes."}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-sm font-semibold text-[#1D4ED8] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {(
                  [
                    ["name", "Full name", "text"],
                    ["email", "Work email", "email"],
                    ["phone", "Phone", "tel"],
                  ] as const
                ).map(([key, label, type]) => (
                  <label key={key} className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                      {label}
                    </span>
                    <input
                      type={type}
                      name={key}
                      value={formData[key]}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, [key]: e.target.value }));
                        if (errors[key]) {
                          setErrors((prev) => {
                            const copy = { ...prev };
                            delete copy[key];
                            return copy;
                          });
                        }
                      }}
                      className={`h-12 w-full rounded-[12px] border bg-[#F5F7FA] px-3.5 text-sm text-[#0F172A] outline-none transition-colors placeholder:text-[#475569]/60 focus:border-[#1D4ED8] focus:bg-white ${
                        errors[key] ? "border-[#EF4444]" : "border-[#E2E6EC]"
                      }`}
                      placeholder={label}
                      aria-invalid={Boolean(errors[key])}
                    />
                    {errors[key] ? (
                      <span className="mt-1 block text-[11px] font-medium text-[#EF4444]">
                        {errors[key]}
                      </span>
                    ) : null}
                  </label>
                ))}

                <AppButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  showArrow={!isSubmitting}
                  className="mt-2 w-full"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing
                    </span>
                  ) : (
                    data.formButtonLabel || "Free Audit"
                  )}
                </AppButton>
              </form>
            )}

            {/* Inline metric strip — always clear of fields/CTA */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#E2E6EC] pt-5">
              <div className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#475569]">
                  Clean claims
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#0F172A]">
                  99%
                </p>
              </div>
              <div className="rounded-[14px] border border-[#0F172A] bg-[#0F172A] p-3.5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200">
                  First-pass rate
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">97.35%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
