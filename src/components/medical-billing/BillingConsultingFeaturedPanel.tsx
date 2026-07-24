"use client";

import React from "react";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingConsultingFeaturedPanelProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  total: number;
  id: string;
  tabId: string;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export default function BillingConsultingFeaturedPanel({
  icon,
  title,
  description,
  index,
  total,
  id,
  tabId,
  onPrevious,
  onNext,
  className,
}: BillingConsultingFeaturedPanelProps) {
  const step = String(index + 1).padStart(2, "0");

  return (
    <Card
      glass={false}
      hoverEffect="none"
      className={cn(
        "relative h-full min-h-[22rem] overflow-hidden rounded-2xl border border-border bg-card sm:min-h-[24rem] sm:rounded-3xl lg:min-h-0",
        className
      )}
    >
      <span
        className="pointer-events-none absolute -right-2 top-2 select-none text-[7rem] font-extrabold leading-none text-foreground/[0.04] sm:text-[9rem]"
        aria-hidden="true"
      >
        {step}
      </span>

      <CardContent
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        tabIndex={0}
        className="relative flex h-full flex-col p-6 sm:p-8 lg:p-10"
      >
        <div className="mb-6 flex items-center gap-3">
          <IconWrapper icon={icon} size="lg" variant="surface" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Service {step} of {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mb-4 text-xl font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-2xl lg:text-[1.75rem]">
          {title}
        </h3>

        <p className="flex-1 text-xs leading-[1.7] text-muted-foreground sm:text-sm">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
          <button
            type="button"
            onClick={onPrevious}
            disabled={index === 0}
            aria-label="Previous service"
            className="inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Previous
          </button>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: total }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  dotIndex === index ? "w-6 bg-primary" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            disabled={index === total - 1}
            aria-label="Next service"
            className="inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-40"
          >
            Next
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
