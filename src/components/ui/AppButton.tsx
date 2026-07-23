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
    sm: "px-4 py-2 text-xs rounded-2xl",
    md: "px-6 py-3 text-sm rounded-2xl",
    lg: "px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-2xl",
  };

  const variantStyles = {
    primary:
      "bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold shadow-sm hover:shadow-md hover:shadow-blue-900/10 border border-[#1D4ED8] hover:border-[#1E3A8A] tracking-wide transition-all duration-300 ease-out",
    secondary:
      "bg-blue-50 hover:bg-blue-100 text-[#1D4ED8] font-semibold border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-sm tracking-wide transition-all duration-300 ease-out",
    "secondary-dark":
      "bg-white/15 hover:bg-white/25 text-white font-semibold border border-white/30 hover:border-white/50 shadow-sm tracking-wide transition-all duration-300 ease-out",
  };

  const baseClasses = `group/btn inline-flex items-center justify-center gap-2 select-none overflow-hidden active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer outline-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-105" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
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
