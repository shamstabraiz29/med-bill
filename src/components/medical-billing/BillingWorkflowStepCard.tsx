"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingWorkflowStepCardProps {
  step: number;
  icon: LucideIcon;
  title?: string;
  description: string;
  className?: string;
}

export default function BillingWorkflowStepCard({
  step,
  icon,
  title,
  description,
  className,
}: BillingWorkflowStepCardProps) {
  return (
    <Card
      glass={false}
      hoverEffect="none"
      className={cn(
        "relative overflow-hidden rounded-[12px]  border border-border bg-card shadow-none transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      <span
        className="pointer-events-none absolute top-3 right-4 text-[5.5rem] sm:text-[6.5rem] font-extrabold leading-none text-foreground/[0.05] select-none"
        aria-hidden="true"
      >
        {step}
      </span>

      <CardContent className="relative z-[1] p-6 sm:p-8">
        <IconWrapper
          icon={icon}
          size="lg"
          variant="surface"
          className="mb-5 transition-transform duration-300 group-hover:scale-105"
        />

        {title ? (
          <h3 className="mb-2 text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
            {title}
          </h3>
        ) : null}

        <p
          className={cn(
            "text-muted-foreground leading-[1.6]",
            title ? "text-xs sm:text-[13px]" : "text-sm sm:text-[15px]"
          )}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
