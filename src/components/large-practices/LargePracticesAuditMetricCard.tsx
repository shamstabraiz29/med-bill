"use client";

import React from "react";
import { CalendarDays, FileCheck, LucideIcon, ShieldCheck, TrendingUp } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";
import { largePracticeCardClassName } from "./largePracticeSectionLayout";

export interface LargePracticesAuditMetricCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function LargePracticesAuditMetricCard({
  icon,
  title,
  description,
  className,
}: LargePracticesAuditMetricCardProps) {
  return (
    <article
      className={cn(
        largePracticeCardClassName,
        "group flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:flex-row sm:items-start sm:gap-6 sm:p-7 lg:gap-8",
        className
      )}
    >
      <div className="shrink-0">
        <IconWrapper
          icon={icon}
          size="lg"
          variant="surface"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-lg">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-[1.7] text-[#475569] sm:text-base">{description}</p>
      </div>
    </article>
  );
}
