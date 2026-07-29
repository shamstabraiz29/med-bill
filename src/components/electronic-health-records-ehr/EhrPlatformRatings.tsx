"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";

interface PlatformRating {
  platform: string;
  subtitle: string;
  value: string;
  maxScore: string;
  starColor: string;
  badge: string;
  icon: React.ReactNode;
}

const PLATFORM_RATINGS: PlatformRating[] = [
  {
    platform: "Google",
    subtitle: "Verified Practice Reviews",
    value: "4.8",
    maxScore: "/ 5.0",
    starColor: "#EAB308",
    badge: "500+ Reviews",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
    ),
  },
  {
    platform: "Trustpilot",
    subtitle: "Customer Satisfaction",
    value: "4.4",
    maxScore: "/ 5.0",
    starColor: "#00B67A",
    badge: "Excellent",
    icon: (
      <svg className="h-4 w-4 shrink-0 fill-[#00B67A]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0l3.692 7.478 8.308 1.207-6.008 5.856 1.419 8.273-7.411-3.897-7.412 3.897 1.419-8.273-6.008-5.856 8.308-1.207z" />
      </svg>
    ),
  },
  {
    platform: "Serchen",
    subtitle: "Top Rated RCM Software",
    value: "4.8",
    maxScore: "/ 5.0",
    starColor: "#EAB308",
    badge: "Leader",
    icon: (
      <svg className="h-4 w-4 shrink-0 text-[#1D4ED8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />
      </svg>
    ),
  },
];

function RatingStars({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current drop-shadow-xs" style={{ color }} />
      ))}
    </div>
  );
}

export default function EhrPlatformRatings() {
  return (
    <MotionWrapper
      variant="stagger"
      staggerDelay={0.08}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5"
      aria-label="Platform ratings"
    >
      {PLATFORM_RATINGS.map((rating) => (
        <MotionWrapper key={rating.platform} variant="staggerItem">
          <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-500/10">
            {/* Top Row: Platform Icon & Name + Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60 shadow-2xs group-hover:scale-105 transition-transform">
                  {rating.icon}
                </div>
                <span className="text-xs font-bold tracking-tight text-[#0F172A]">
                  {rating.platform}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100/80 px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                <CheckCircle2 className="h-2.5 w-2.5 text-[#1D4ED8]" />
                {rating.badge}
              </span>
            </div>

            {/* Middle Row: Score & Rating Stars */}
            <div className="my-3 flex items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A]">
                  {rating.value}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {rating.maxScore}
                </span>
              </div>
              <RatingStars color={rating.starColor} />
            </div>

            {/* Bottom Row: Subtitle / Social Proof */}
            <div className="text-[11px] font-medium text-[#64748B]">
              {rating.subtitle}
            </div>
          </div>
        </MotionWrapper>
      ))}
    </MotionWrapper>
  );
}
