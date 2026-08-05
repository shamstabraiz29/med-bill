"use client";

import { useState } from "react";
import { Check, Mail, Phone, User } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { cn } from "@/lib/utils";
import type { HomepageProviderChallenges } from "@/payload/types/homepage";

interface ProviderChallengesSectionProps {
  data: HomepageProviderChallenges;
}

export default function ProviderChallengesSection({ data }: ProviderChallengesSectionProps) {
  const [selected, setSelected] = useState<boolean[]>(new Array(data.challenges.length).fill(false));
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleToggle = (index: number) => {
    setSelected((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      const selectedChallenges = data.challenges
        .filter((_, idx) => selected[idx])
        .map((c) => c.label)
        .join(", ");

      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Home Provider Challenges Assessment Form",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: selectedChallenges ? `Selected Challenges: ${selectedChallenges}` : "",
        }),
      });

      if (res.ok) setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCount = selected.filter(Boolean).length;

  return (
    <HomeSection tone="white">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3">
          <HomeSectionHeader
            label={data.badge}
            title={
              <>
                {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
              </>
            }
            description={data.description}
            className="mb-8"
          />

          {selectedCount > 0 && (
            <p className="mb-4 text-sm font-medium text-sky-700">
              {selectedCount} challenge{selectedCount !== 1 ? "s" : ""} selected
            </p>
          )}

          <div className="space-y-2.5">
            {data.challenges.map((challenge, idx) => {
              const isSelected = selected[idx];
              return (
                <button
                  key={challenge.id || idx}
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className={cn(
                    "flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200",
                    isSelected
                      ? "hp-selected"
                      : "border-slate-200/80 bg-white text-slate-700 hover:border-sky-200 hover:shadow-sm"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      isSelected ? "border-sky-600 bg-sky-600 text-white" : "border-slate-300 bg-white"
                    )}
                  >
                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                  </span>
                  {challenge.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="hp-card sticky top-24 lg:col-span-2 p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-slate-900">{data.formTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{data.formDescription}</p>

          {isSubmitted ? (
            <div className="hp-success-bg mt-8 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <Check className="h-6 w-6 text-sky-600 stroke-[3]" />
              </div>
              <p className="mt-4 font-semibold text-slate-900">Assessment Request Submitted!</p>
              <p className="mt-1 text-sm text-slate-600">
                Thank you {formData.name}. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="hp-input" />
              </div>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="hp-input" />
              </div>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="hp-input" />
              </div>
              <HomeButton type="submit" disabled={isSubmitting} size="lg" showArrow className="w-full">
                {isSubmitting ? "Submitting..." : data.formCtaLabel}
              </HomeButton>
            </form>
          )}
        </div>
      </div>
    </HomeSection>
  );
}
