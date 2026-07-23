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
        className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.02em] leading-[1.18] ${
          isDark ? "text-white" : "text-[#0F172A]"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <div
          className={`text-sm sm:text-base leading-[1.6] ${
            isCenter ? "max-w-2xl" : "max-w-3xl"
          } ${
            isDark
              ? "text-blue-200"
              : "text-[#475569]"
          } ${descriptionClassName}`}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
}
