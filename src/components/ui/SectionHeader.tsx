import React from "react";
import SectionBadge, { SectionBadgeProps } from "./SectionBadge";

export interface SectionHeaderProps {
  badge?: React.ReactNode;
  badgeVariant?: SectionBadgeProps["variant"];
  badgePulse?: boolean;
  badgeIcon?: SectionBadgeProps["icon"];
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  badge,
  badgeVariant = "indigo",
  badgePulse = false,
  badgeIcon,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col space-y-3.5 sm:space-y-4 ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <SectionBadge
          variant={isDark && badgeVariant === "indigo" ? "dark" : badgeVariant}
          pulse={badgePulse}
          icon={badgeIcon}
        >
          {badge}
        </SectionBadge>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug ${
          isDark ? "text-white" : "text-[#1c1a45]"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <div
          className={`text-sm sm:text-base leading-relaxed ${
            isCenter ? "max-w-2xl" : "max-w-3xl"
          } ${
            isDark
              ? "text-indigo-200"
              : "text-slate-500"
          } ${descriptionClassName}`}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
}
