"use client";

import React from "react";
import { ShieldCheck, Star, Users } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

interface PlatformRating {
  platform: string;
  value: string;
  color: string;
}

const PLATFORM_RATINGS: PlatformRating[] = [
  { platform: "Google", value: "4.8", color: "#EAB308" },
  { platform: "Trustpilot", value: "4.4", color: "#22C55E" },
  { platform: "Serchen", value: "4.8", color: "#EAB308" },
];

function RatingStars({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3 w-3 fill-current" style={{ color }} />
      ))}
    </div>
  );
}

export default function MedicalBillingSoftwareTrustBar() {
  return (
    <MotionWrapper
      variant="stagger"
      staggerDelay={0.06}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
      aria-label="BellMedEx medical billing software trust indicators"
    >
      <MotionWrapper variant="staggerItem">
        <div className="flex h-full items-center gap-3 rounded-2xl border border-[#E2E6EC] bg-white p-4 transition-all duration-300 hover:border-[#1D4ED8]/20 hover:shadow-md hover:shadow-[#1D4ED8]/6 sm:p-5">
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
          <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-[#E2E6EC] bg-white p-4 transition-all duration-300 hover:border-[#1D4ED8]/20 hover:shadow-md hover:shadow-[#1D4ED8]/6 sm:p-5">
            <div className="flex min-w-0 flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
                {rating.platform}
              </span>
              <RatingStars color={rating.color} />
            </div>
            <span
              className="text-xl font-black"
              style={{ color: rating.color === "#22C55E" ? "#0F172A" : rating.color }}
            >
              {rating.value}
            </span>
          </div>
        </MotionWrapper>
      ))}

      <MotionWrapper variant="staggerItem">
        <div className="flex h-full items-center gap-3 rounded-2xl border border-[#E2E6EC] bg-white p-4 transition-all duration-300 hover:border-[#1D4ED8]/20 hover:shadow-md hover:shadow-[#1D4ED8]/6 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
            <ShieldCheck className="h-5 w-5 stroke-[1.25]" aria-hidden="true" />
          </div>
          <div className="min-w-0 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
              ONC Authorized Certification Body
            </span>
            <span className="mt-1 block text-xs font-semibold text-[#0F172A]">
              Authorized Body
            </span>
          </div>
        </div>
      </MotionWrapper>
    </MotionWrapper>
  );
}
