"use client";

import { useState } from "react";
import { Check, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import type { HomepageProviderChallenges } from "@/payload/types/homepage";

const inputClassName =
  "h-11 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10 text-xs sm:text-sm transition-all shadow-none";

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
    if (formData.name && formData.email && formData.phone) {
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

        if (res.ok) {
          setIsSubmitted(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="space-y-6 text-left lg:col-span-7">
                <div className="max-w-xl space-y-3.5">
                  <SectionBadge variant="dark">{data.badge}</SectionBadge>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl">
                    {data.titlePlain}{" "}
                    <span className="font-bold text-amber-300">{data.titleHighlight}</span>
                  </h2>

                  <p className="text-sm leading-relaxed text-blue-200 sm:text-base">{data.description}</p>
                </div>

                <div className="space-y-3 pt-2">
                  {data.challenges.map((challenge, idx) => {
                    const isSelected = selected[idx];

                    return (
                      <button
                        key={challenge.id || idx}
                        type="button"
                        onClick={() => handleToggle(idx)}
                        className={cn(
                          "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200",
                          isSelected
                            ? "border-[#1D4ED8]/40 bg-[#1D4ED8]/10 text-white"
                            : "border-white/[0.08] bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all duration-200",
                            isSelected
                              ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                              : "border-white/20 bg-white/5"
                          )}
                          aria-hidden="true"
                        >
                          {isSelected ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : null}
                        </span>
                        <span className="text-xs font-medium leading-relaxed sm:text-sm">
                          {challenge.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="w-full lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md sm:p-8 text-left">
                  <div className="mb-6 space-y-1.5 text-left">
                    <h3 className="text-lg font-bold tracking-tight text-white">{data.formTitle}</h3>
                    <p className="text-xs leading-relaxed text-blue-200 sm:text-sm">
                      {data.formDescription}
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="space-y-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
                      <Check className="mx-auto h-8 w-8 text-emerald-400 stroke-[3]" />
                      <h4 className="text-base font-bold text-white">Assessment Request Submitted!</h4>
                      <p className="text-xs text-emerald-200 sm:text-sm">
                        Thank you {formData.name}. Our billing specialists will review your selections and
                        contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Name"
                        icon={User}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={inputClassName}
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={inputClassName}
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        icon={Phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className={inputClassName}
                      />

                      <AppButton
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="lg"
                        showArrow
                        className="w-full justify-center"
                      >
                        {isSubmitting ? "Submitting..." : data.formCtaLabel}
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
