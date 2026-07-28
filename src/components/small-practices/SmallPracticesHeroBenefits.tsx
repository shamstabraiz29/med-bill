"use client";

import React from "react";
import { Check } from "lucide-react";
import { smallPracticeCardClassName } from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_HERO_BENEFITS = [
  "98% of claims are clean. This means fewer denials and less rework for small physician offices.",
  "24-hour claim submission after encounter lock in your EHR.",
  "A/R days reduced by up to 30% in just one quarter for neighborhood clinics and rural healthcare providers.",
  "HIPAA-secure team with certified professional coders (CPCs) dedicated to small practice compliance.",
  "Dedicated account manager who knows your specialty and small practice workflow.",
  "Enjoy flat-percentage pricing. There are no startup fees and no long contracts. You can scale as your independent practice grows.",
];

const DEFAULT_TRUST_BADGES = [
  "HIPAA Compliant",
  "AICPA SOC",
  "MARCUM (ISO 27001)",
  "Certified ISO 9001:2015 Company",
  "Google Reviews",
];

interface SmallPracticesHeroTrustBadgesProps {
  stats?: SmallPracticesPageData["hero"]["trustStats"];
}

export function SmallPracticesHeroTrustBadges({ stats }: SmallPracticesHeroTrustBadgesProps) {
  const badges = stats && stats.length > 0
    ? stats.map((s) => `${s.value} ${s.label}`)
    : DEFAULT_TRUST_BADGES;

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list">
      {badges.map((badge) => (
        <li
          key={badge}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#475569] sm:text-sm"
        >
          <Check className="h-3.5 w-3.5 shrink-0 stroke-[3] text-[#22C55E]" aria-hidden="true" />
          {badge}
        </li>
      ))}
    </ul>
  );
}

interface SmallPracticesHeroBenefitsProps {
  benefits?: SmallPracticesPageData["hero"]["benefits"];
}

export default function SmallPracticesHeroBenefits({ benefits }: SmallPracticesHeroBenefitsProps) {
  const items = benefits && benefits.length > 0
    ? benefits.map((b) => `${b.title}: ${b.description}`)
    : DEFAULT_HERO_BENEFITS;

  return (
    <div className={`${smallPracticeCardClassName} h-full p-6 sm:p-7 lg:p-8`}>
      <ul className="flex flex-col gap-4" role="list">
        {items.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8] ring-1 ring-[#1D4ED8]/15">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
            <span className="text-sm leading-[1.65] text-[#475569] sm:text-[15px]">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
