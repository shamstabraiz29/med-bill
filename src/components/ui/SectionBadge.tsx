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
      wrapper:
        "bg-blue-50 border-blue-200 text-blue-700",
      dot: "bg-[#1D4ED8]",
    },
    blue: {
      wrapper:
        "bg-blue-50 border-blue-200 text-blue-700",
      dot: "bg-[#1D4ED8]",
    },
    dark: {
      wrapper:
        "bg-white/10 border-white/20 text-blue-100",
      dot: "bg-[#60A5FA]",
    },
    emerald: {
      wrapper:
        "bg-emerald-50 border-emerald-200 text-emerald-700",
      dot: "bg-emerald-500",
    },
    sky: {
      wrapper:
        "bg-sky-50 border-sky-200 text-sky-700",
      dot: "bg-sky-500",
    },
    amber: {
      wrapper:
        "bg-amber-50 border-amber-200 text-amber-700",
      dot: "bg-amber-500",
    },
  };

  const config = variantConfig[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] sm:text-xs font-semibold uppercase tracking-widest select-none transition-colors duration-200 ${config.wrapper} ${className}`}
    >
      {/* Static Dot */}
      {pulse && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.dot}`} />
      )}

      {/* Optional Custom Icon */}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}

      {/* Text Label */}
      <span>{children}</span>
    </div>
  );
}
