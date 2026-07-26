"use client";

import React from "react";
import { Star } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

interface PlatformRating {
  platform: string;
  value: string;
  starColor: string;
}

const PLATFORM_RATINGS: PlatformRating[] = [
  { platform: "Google", value: "4.8", starColor: "#EAB308" },
  { platform: "Trustpilot", value: "4.4", starColor: "#22C55E" },
  { platform: "Serchen", value: "4.8", starColor: "#EAB308" },
];

function RatingStars({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center gap-0.5 sm:justify-start" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3 w-3 fill-current" style={{ color }} />
      ))}
    </div>
  );
}

export default function EhrPlatformRatings() {
  return (
    <MotionWrapper
      variant="stagger"
      staggerDelay={0.08}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6"
      aria-label="Platform ratings"
    >
      {PLATFORM_RATINGS.map((rating) => (
        <MotionWrapper key={rating.platform} variant="staggerItem">
          <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#E2E6EC] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">
              {rating.platform}
            </span>
            <RatingStars color={rating.starColor} />
            <span
              className="text-xl font-black tracking-[-0.02em]"
              style={{
                color: rating.starColor === "#22C55E" ? "#0F172A" : rating.starColor,
              }}
            >
              {rating.value}
            </span>
          </div>
        </MotionWrapper>
      ))}
    </MotionWrapper>
  );
}
