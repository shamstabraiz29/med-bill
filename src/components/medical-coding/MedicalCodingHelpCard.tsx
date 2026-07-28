"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface MedicalCodingHelpCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function MedicalCodingHelpCard({
  step,
  icon,
  title,
  description,
  className,
}: MedicalCodingHelpCardProps) {
  const stepLabel = String(step).padStart(2, "0");

  return (
    <Card
      glass={false}
      hoverEffect="both"
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg sm:rounded-2xl",
        className
      )}
    >
      <span
        className="pointer-events-none absolute -right-1 top-2 select-none text-6xl font-extrabold leading-none text-[#1D4ED8]/[0.06]"
        aria-hidden="true"
      >
        {stepLabel}
      </span>

      <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <IconWrapper
            icon={icon}
            size="md"
            variant="surface"
            className="group-hover:scale-105"
          />
          <span className="rounded-full border border-[#E2E6EC] bg-blue-50/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1D4ED8]">
            Step {stepLabel}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold tracking-[-0.02em] text-[#0F172A] sm:text-xl">
          {title}
        </h3>

        <p className="flex-1 text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
