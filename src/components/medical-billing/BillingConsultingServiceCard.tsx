"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";

export interface BillingConsultingServiceCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
  id: string;
  panelId: string;
  className?: string;
}

export default function BillingConsultingServiceCard({
  icon,
  title,
  index,
  isActive,
  onClick,
  id,
  panelId,
  className,
}: BillingConsultingServiceCardProps) {
  const step = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
      className={cn(
        "group flex h-full min-h-[4.75rem] w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 sm:min-h-[5.25rem] sm:px-5 sm:py-4",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
        isActive
          ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/10"
          : "border-border bg-card text-foreground hover:border-primary/30 hover:bg-accent/50",
        className
      )}
    >
          <IconWrapper
            icon={icon}
            size="sm"
            variant="surface"
            className={cn(
              "shrink-0 transition-transform duration-300",
              isActive
                ? "bg-primary-foreground/15 text-primary-foreground"
                : "group-hover:scale-105"
            )}
          />

      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "mb-1 block text-[10px] font-bold tabular-nums tracking-widest",
            isActive ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {step}
        </span>
        <span
          className={cn(
            "block text-xs font-semibold leading-snug tracking-[-0.01em] sm:text-sm",
            isActive ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {title}
        </span>
      </div>
    </button>
  );
}
