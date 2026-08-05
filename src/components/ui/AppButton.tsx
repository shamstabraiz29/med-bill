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
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-xl",
  };

  const variantStyles = {
    primary:
      "bg-primary hover:bg-secondary text-primary-foreground font-semibold shadow-sm hover:shadow-md border border-primary hover:border-secondary transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    secondary:
      "bg-accent hover:bg-accent/80 text-accent-foreground font-semibold border border-border hover:border-primary/30 shadow-sm transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "secondary-dark":
      "bg-white/12 hover:bg-white/20 text-white font-semibold border border-white/25 hover:border-white/40 shadow-sm transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  };

  const baseClasses = `group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap select-none overflow-hidden active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer outline-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

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
