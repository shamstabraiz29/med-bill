"use client";

import React from "react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { LucideIcon } from "lucide-react";
import {
  softwareCardClassName,
  softwareCardDescriptionClassName,
  softwareCardTitleClassName,
} from "./softwareSectionLayout";

export interface MedicalBillingSoftwareFeatureRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  visual: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function MedicalBillingSoftwareFeatureRow({
  icon,
  title,
  description,
  visual,
  reverse = false,
  className,
}: MedicalBillingSoftwareFeatureRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8",
        className
      )}
    >
      <MotionWrapper
        variant={reverse ? "slideLeft" : "slideRight"}
        className={cn("flex", reverse ? "lg:order-2" : "lg:order-1")}
      >
        <div className={softwareCardClassName}>
          <IconWrapper
            icon={icon}
            size="sm"
            variant="surface"
            className="mb-5 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className={softwareCardTitleClassName}>{title}</h3>
          <p className={softwareCardDescriptionClassName}>{description}</p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        variant={reverse ? "slideRight" : "slideLeft"}
        className={cn("flex", reverse ? "lg:order-1" : "lg:order-2")}
      >
        {visual}
      </MotionWrapper>
    </div>
  );
}
