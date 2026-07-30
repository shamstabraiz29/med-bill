"use client";

import React from "react";
import Image from "next/image";
import { Banknote, ClipboardPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface HospitalBillingServicesAffordableVisualProps {
  imageSrc: string;
  imageAlt: string;
  labels: string[];
}

const LABEL_POSITIONS = [
  "left-[2%] top-[18%]",
  "left-[0%] top-[42%]",
  "left-[4%] top-[66%]",
  "right-[2%] top-[28%]",
  "right-[0%] top-[58%]",
] as const;

export default function HospitalBillingServicesAffordableVisual({
  imageSrc,
  imageAlt,
  labels,
}: HospitalBillingServicesAffordableVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-dashed border-[#1D4ED8]/25 sm:-left-5 sm:-top-5"
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] sm:aspect-[3/4]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 40vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent" />
      </div>

      <div className="absolute left-1/2 top-4 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#E2E6EC] bg-white shadow-md">
        <Banknote className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
      </div>

      <div className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2E6EC] bg-white shadow-md sm:right-6">
        <ClipboardPlus className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
      </div>

      {labels.map((label, idx) => (
        <span
          key={label || idx}
          className={cn(
            "absolute z-10 rounded-full border border-[#1D4ED8]/20 bg-[#1D4ED8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm sm:text-[11px]",
            LABEL_POSITIONS[idx] || "left-1/2 top-1/2"
          )}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
