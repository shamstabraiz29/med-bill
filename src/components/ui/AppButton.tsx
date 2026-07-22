import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface AppButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function AppButton({
  children,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: AppButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-xl",
  };

  const variantStyles = {
    primary:
      "bg-[#2A2374] hover:bg-[#3b3a80] text-white font-semibold shadow-sm border border-[#2A2374] hover:border-[#3b3a80] transition-colors duration-200",
    secondary:
      "bg-white hover:bg-slate-50 text-[#1c1a45] font-semibold border border-slate-200 hover:border-slate-300 shadow-sm transition-colors duration-200",
    "secondary-dark":
      "bg-white hover:bg-slate-50 text-[#1c1a45] font-semibold border border-white/30 shadow-sm transition-colors duration-200",
  };

  const baseClasses = `group/btn inline-flex items-center justify-center gap-2 select-none overflow-hidden active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer outline-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
