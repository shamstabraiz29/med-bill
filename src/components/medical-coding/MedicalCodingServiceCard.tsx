"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface MedicalCodingServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function MedicalCodingServiceCard({
  icon,
  title,
  description,
  className,
}: MedicalCodingServiceCardProps) {
  return (
    <Card
      glass={false}
      hoverEffect="both"
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/30 sm:rounded-2xl",
        className
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1D4ED8]/80 via-[#1D4ED8] to-[#1D4ED8]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start gap-3">
          <IconWrapper
            icon={icon}
            size="sm"
            variant="surface"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="pt-1 text-sm font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-base">
            {title}
          </h3>
        </div>

        <p className="flex-1 text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
