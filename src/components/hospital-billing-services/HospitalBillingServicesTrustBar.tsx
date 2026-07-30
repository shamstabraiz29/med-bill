"use client";

import React from "react";
import { ShieldCheck, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { hospitalCardClassName } from "./hospitalSectionLayout";

const PLATFORM_RATINGS = [
  { platform: "Google", value: "4.8" },
  { platform: "Trustpilot", value: "4.4" },
  { platform: "Serchen", value: "4.8" },
];

function RatingStars() {
  return (
    <div className="flex items-center gap-0.5 text-[#1D4ED8]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3 w-3 fill-current" />
      ))}
    </div>
  );
}

export default function HospitalBillingServicesTrustBar() {
  return (
    <MotionWrapper
      variant="stagger"
      staggerDelay={0.06}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
      aria-label="BellMedEx hospital billing trust indicators"
    >
      <MotionWrapper variant="staggerItem">
        <div className={cnTrustBarCard()}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
            <Users className="h-5 w-5 stroke-[1.25]" aria-hidden="true" />
          </div>
          <div className="min-w-0 text-left">
            <span className="block text-sm font-extrabold tracking-[-0.02em] text-[#0F172A]">
              1500+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
              Vetted Providers
            </span>
          </div>
        </div>
      </MotionWrapper>

      {PLATFORM_RATINGS.map((rating) => (
        <MotionWrapper key={rating.platform} variant="staggerItem">
          <div className={cnTrustBarCard("justify-between")}>
            <div className="flex min-w-0 flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
                {rating.platform}
              </span>
              <RatingStars />
            </div>
            <span className="text-xl font-black text-[#1D4ED8]">{rating.value}</span>
          </div>
        </MotionWrapper>
      ))}

      <MotionWrapper variant="staggerItem">
        <div className={cnTrustBarCard()}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
            <ShieldCheck className="h-5 w-5 stroke-[1.25]" aria-hidden="true" />
          </div>
          <div className="min-w-0 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
              ONC Authorized Certification Body
            </span>
            <span className="mt-1 block text-xs font-semibold text-[#0F172A]">Authorized Body</span>
          </div>
        </div>
      </MotionWrapper>
    </MotionWrapper>
  );
}

function cnTrustBarCard(extra?: string) {
  return cn(hospitalCardClassName, "flex h-full items-center gap-3 p-4 sm:p-5", extra);
}
