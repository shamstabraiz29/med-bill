"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";
import { largePracticeCardClassName } from "./largePracticeSectionLayout";

export interface LargePracticesAuditMetricCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  className?: string;
}

export default function LargePracticesAuditMetricCard({
  icon,
  step,
  title,
  description,
  className,
}: LargePracticesAuditMetricCardProps) {
  return (
    <article
      className={cn(
        largePracticeCardClassName,
        "group relative overflow-hidden transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 select-none text-[4.5rem] font-extrabold leading-none text-[#0F172A]/[0.04] sm:text-[5rem]"
      >
        {step}
      </span>

      <div className="relative flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6 lg:gap-6 lg:p-7">
        <IconWrapper
          icon={icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-base">
            {title}
          </h3>
          <p className="mt-2.5 text-xs leading-[1.65] text-[#475569] sm:text-sm">{description}</p>
        </div>
      </div>
    </article>
  );
}
