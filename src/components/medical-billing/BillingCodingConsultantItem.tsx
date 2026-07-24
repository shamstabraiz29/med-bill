"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingCodingConsultantItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function BillingCodingConsultantItem({
  icon,
  title,
  description,
  className,
}: BillingCodingConsultantItemProps) {
  return (
    <div className={cn("flex items-start gap-4 text-left", className)}>
      <IconWrapper
        icon={icon}
        size="sm"
        variant="surface"
        className="mt-0.5 shrink-0"
      />
      <div className="min-w-0 space-y-2">
        <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] sm:text-lg">
          {title}
        </h3>
        <p className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}
