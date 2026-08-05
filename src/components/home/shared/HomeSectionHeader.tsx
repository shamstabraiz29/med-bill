import React from "react";
import { cn } from "@/lib/utils";

interface HomeSectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export default function HomeSectionHeader({
  label,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: HomeSectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "mx-auto max-w-3xl items-center text-center",
        className
      )}
    >
      {label && (
        <span className={inverted ? "hp-badge-inverted bg-white/10 text-sky-100" : "hp-badge"}>
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.5rem]",
          inverted ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <div
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-[1.05rem]",
            inverted ? "text-slate-300" : "text-slate-600",
            centered && "mx-auto"
          )}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
}

export function HomeAccent({
  children,
  inverted = false,
  accent = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        inverted
          ? "font-bold text-cyan-300"
          : accent
            ? "hp-gradient-text-accent"
            : "hp-gradient-text"
      )}
    >
      {children}
    </span>
  );
}
