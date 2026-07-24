"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingConsultancyFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export default function BillingConsultancyFeatureCard({
  icon,
  title,
  description,
  index,
  className,
}: BillingConsultancyFeatureCardProps) {
  const step = String(index + 1).padStart(2, "0");

  return (
    <Card
      glass={false}
      hoverEffect="none"
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border border-border bg-card shadow-none transition-all duration-300 hover:border-primary/30 sm:rounded-2xl",
        className
      )}
    >
      <span
        className="pointer-events-none absolute right-4 top-3 select-none text-4xl font-extrabold leading-none text-foreground/[0.04]"
        aria-hidden="true"
      >
        {step}
      </span>

      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start gap-3">
          <IconWrapper
            icon={icon}
            size="sm"
            variant="surface"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="pt-1 text-sm font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-base">
            {title}
          </h3>
        </div>

        <p className="flex-1 text-xs leading-[1.65] text-muted-foreground sm:text-[13px]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
