"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";
import { hospitalCardClassName, hospitalSectionBodyClassName } from "./hospitalSectionLayout";

interface HospitalBillingServicesServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function HospitalBillingServicesServiceCard({
  title,
  description,
  icon,
}: HospitalBillingServicesServiceCardProps) {
  return (
    <div className={cn(hospitalCardClassName, "group flex h-full min-h-[12.5rem] flex-col p-4 sm:min-h-[15.5rem] sm:p-5")}>
      <div className="mb-3 flex flex-col items-center gap-3 text-center sm:mb-4">
        <IconWrapper icon={icon} size="sm" variant="surface" className="group-hover:scale-105" />
        <h3 className="text-xs font-bold leading-snug text-[#0F172A] sm:text-sm">{title}</h3>
      </div>

      <p className={cn(hospitalSectionBodyClassName, "flex-1 text-center text-xs sm:text-sm")}>
        {description}
      </p>
    </div>
  );
}
