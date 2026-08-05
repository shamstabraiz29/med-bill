import React from "react";
import { cn } from "@/lib/utils";

export type HomeCardVariant = "feature" | "stat" | "step" | "flat";

export interface HomeFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: HomeCardVariant;
  icon?: React.ReactNode;
  stepLabel?: string;
  children: React.ReactNode;
}

export default function HomeFeatureCard({
  variant = "feature",
  icon,
  stepLabel,
  children,
  className,
  ...props
}: HomeFeatureCardProps) {
  return (
    <div
      className={cn(
        "hp-card group h-full text-left",
        variant === "feature" && "p-6 sm:p-7",
        variant === "stat" && "p-7 sm:p-8 text-center",
        variant === "step" && "p-6 sm:p-7",
        variant === "flat" && "p-4 rounded-xl",
        className
      )}
      {...props}
    >
      {stepLabel && (
        <span className="mb-3 block text-[11px] font-semibold uppercase tracking-wider text-primary">
          {stepLabel}
        </span>
      )}

      {icon && (
        <div
          className={cn(
            "hp-icon mb-4",
            variant === "stat" && "mx-auto"
          )}
        >
          {icon}
        </div>
      )}

      {children}
    </div>
  );
}
