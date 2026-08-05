import React from "react";
import { LucideIcon } from "lucide-react";

export interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "indigo" | "dark" | "emerald" | "sky" | "amber" | "blue";
  className?: string;
  pulse?: boolean;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export default function SectionBadge({
  children,
  variant = "indigo",
  className = "",
  pulse = true,
  icon: Icon,
}: SectionBadgeProps) {
  const variantConfig = {
    indigo: {
      wrapper: "bg-accent border-border text-accent-foreground",
      dot: "bg-primary",
    },
    blue: {
      wrapper: "bg-accent border-border text-accent-foreground",
      dot: "bg-primary",
    },
    dark: {
      wrapper: "bg-white/10 border-white/20 text-white/90",
      dot: "bg-primary-foreground/70",
    },
    emerald: {
      wrapper: "bg-emerald-50 border-emerald-200/80 text-emerald-800",
      dot: "bg-emerald-600",
    },
    sky: {
      wrapper: "bg-sky-50 border-sky-200/80 text-sky-800",
      dot: "bg-sky-600",
    },
    amber: {
      wrapper: "bg-amber-50 border-amber-200/80 text-amber-800",
      dot: "bg-amber-600",
    },
  };

  const config = variantConfig[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] select-none transition-colors duration-200 ${config.wrapper} ${className}`}
    >
      {pulse && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.dot}`} />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
