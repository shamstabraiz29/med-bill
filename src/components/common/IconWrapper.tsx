"use client";

import React from "react";
import { HelpCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "surface" | "primary";
  className?: string;
}

const sizeStyles = {
  sm: {
    wrapper: "w-10 h-10 rounded-lg",
    icon: "w-5 h-5 stroke-[1.25]",
  },
  md: {
    wrapper: "w-11 h-11 rounded-xl",
    icon: "w-5 h-5 stroke-[1.25]",
  },
  lg: {
    wrapper: "w-14 h-14 rounded-2xl",
    icon: "w-7 h-7 stroke-[1.75]",
  },
};

export default function IconWrapper({
  icon,
  size = "md",
  variant = "surface",
  className,
}: IconWrapperProps) {
  const styles = sizeStyles[size];
  const Icon = icon ?? HelpCircle;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center transition-transform duration-300",
        styles.wrapper,
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-blue-50 text-[#1D4ED8]",
        className
      )}
    >
      <Icon className={cn(styles.icon)} aria-hidden="true" />
    </div>
  );
}
