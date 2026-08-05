import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "accent";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  showArrow?: boolean;
  inverted?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
};

export default function HomeButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  showArrow,
  inverted = false,
  onClick,
}: HomeButtonProps) {
  const variantClasses = {
    primary:
      "bg-sky-600 text-white shadow-md shadow-sky-600/25 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/30 active:scale-[0.98]",
    secondary: inverted
      ? "bg-white/12 text-white hover:bg-white/20"
      : "bg-sky-50 text-sky-700 hover:bg-sky-100",
    outline: inverted
      ? "border-2 border-white/35 bg-transparent text-white hover:bg-white/10"
      : "border-2 border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700",
    white: "bg-white text-sky-700 shadow-md hover:bg-sky-50",
    accent:
      "bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-md shadow-rose-500/25 hover:from-rose-600 hover:to-orange-500 hover:shadow-lg active:scale-[0.98]",
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
