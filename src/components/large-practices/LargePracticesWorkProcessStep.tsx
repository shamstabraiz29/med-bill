"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { largePracticeCardClassName } from "./largePracticeSectionLayout";

export interface LargePracticesWorkProcessStepProps {
  step: string;
  title: string;
  description: string;
  className?: string;
}

export default function LargePracticesWorkProcessStep({
  step,
  title,
  description,
  className,
}: LargePracticesWorkProcessStepProps) {
  return (
    <article
      className={cn(
        largePracticeCardClassName,
        "relative overflow-hidden p-6 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8",
        className
      )}
    >
      <span
        className="pointer-events-none absolute -right-1 top-1 select-none text-[5.5rem] font-extrabold leading-none text-[#0F172A]/[0.04] sm:text-[6.5rem]"
        aria-hidden="true"
      >
        {step}
      </span>

      <div className="relative z-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8]">
          Step {step}
        </p>
        <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-[1.7] text-[#475569] sm:text-base">{description}</p>
      </div>
    </article>
  );
}
