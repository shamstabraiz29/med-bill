"use client";

import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BillingWorkflowConnectorProps {
  direction?: "horizontal" | "vertical";
  className?: string;
}

export default function BillingWorkflowConnector({
  direction = "horizontal",
  className,
}: BillingWorkflowConnectorProps) {
  const Icon = direction === "horizontal" ? ChevronRight : ChevronDown;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-primary/30",
        direction === "horizontal" ? "w-6 lg:w-8" : "h-6 py-1",
        className
      )}
      aria-hidden="true"
    >
      <Icon className="w-5 h-5 stroke-[2]" />
    </div>
  );
}
