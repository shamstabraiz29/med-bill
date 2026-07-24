"use client";

import React from "react";
import { ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingOfferCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  className?: string;
}

export default function BillingOfferCard({
  icon,
  title,
  items,
  className,
}: BillingOfferCardProps) {
  return (
    <Card
      glass={false}
      hoverEffect="none"
      className={cn(
        "group h-full rounded-[12px] border border-border bg-card shadow-none transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      <CardContent className="p-6 sm:p-8">
        <div className="mb-5 flex items-start gap-3 sm:gap-4">
          <IconWrapper
            icon={icon}
            size="lg"
            variant="surface"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="pt-1.5 text-base sm:text-lg font-bold text-foreground tracking-[-0.02em] leading-snug">
            {title}
          </h3>
        </div>

        <ul className="flex flex-col gap-2.5" role="list">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-left">
              <ChevronRight
                className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-muted-foreground/70"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-medium text-muted-foreground leading-[1.6]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
