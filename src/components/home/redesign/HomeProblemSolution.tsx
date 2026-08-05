"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { shell } from "./shell";
import type { HomepageProviderChallenges, HomepageTrustStats } from "@/payload/types/homepage";

interface Props {
  data: HomepageProviderChallenges;
  checklist?: HomepageTrustStats["checklist"];
}

export default function HomeProblemSolution({ data, checklist = [] }: Props) {
  const [selected, setSelected] = useState<boolean[]>(
    new Array(data.challenges.length).fill(false)
  );
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${shell.dark} ${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#60A5FA]">
              {data.badge}
            </p>
            <h2 className="mt-5 max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
              {data.titlePlain}{" "}
              <span className="text-[#60A5FA]">{data.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.7] text-blue-100/80">
              {data.description}
            </p>
            <div className="mt-10 space-y-3 border-l border-white/15 pl-5">
              <p className="text-sm font-semibold text-white">The BellMedEx approach</p>
              <ul className="space-y-2">
                {(checklist.length
                  ? checklist
                  : [
                      { label: "Map friction" },
                      { label: "Recover aged A/R" },
                      { label: "Stabilize clean claims" },
                    ]
                ).slice(0, 6).map((item) => (
                  <li key={item.id || item.label} className="text-sm leading-relaxed text-blue-100/70">
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid items-start gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-2">
              {data.challenges.map((challenge, idx) => {
                const active = selected[idx];
                return (
                  <button
                    key={challenge.id || idx}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleToggle(idx)}
                    className={`flex w-full items-start gap-3 rounded-[14px] border px-4 py-4 text-left transition-colors ${
                      active
                        ? "border-[#1D4ED8] bg-[#1D4ED8]/20 text-white"
                        : "border-white/10 bg-white/[0.03] text-blue-100 hover:border-white/25"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        active ? "border-[#1D4ED8] bg-[#1D4ED8]" : "border-white/25"
                      }`}
                      aria-hidden="true"
                    >
                      {active ? <Check className="h-3 w-3" /> : null}
                    </span>
                    <span className="text-sm leading-relaxed">{challenge.label}</span>
                  </button>
                );
              })}
            </div>

            <div
              className={`self-start border border-white/10 bg-white p-5 text-[#0F172A] shadow-[0_16px_40px_rgba(0,0,0,0.2)] ${shell.radius} sm:p-6`}
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{data.formTitle}</h3>
              <p className="mt-1 text-sm text-[#475569]">{data.formDescription}</p>

              {isSubmitted ? (
                <div className="mt-6 rounded-[12px] border border-[#E2E6EC] bg-[#F5F7FA] p-4">
                  <p className="font-semibold">Assessment submitted</p>
                  <p className="mt-1 text-sm text-[#475569]">
                    Thank you {formData.name}. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  {(
                    [
                      ["name", "Name", "text"],
                      ["email", "Email", "email"],
                      ["phone", "Phone", "tel"],
                    ] as const
                  ).map(([key, label, type]) => (
                    <input
                      key={key}
                      type={type}
                      required
                      placeholder={label}
                      value={formData[key]}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="h-11 w-full rounded-[12px] border border-[#E2E6EC] bg-[#F5F7FA] px-3 text-sm outline-none focus:border-[#1D4ED8] focus:bg-white"
                    />
                  ))}
                  <AppButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="md"
                    showArrow={!isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      data.formCtaLabel
                    )}
                  </AppButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
