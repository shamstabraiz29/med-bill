"use client";

import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { MotionTrigger, pickVariant, withDelay, type RevealVariant } from "./shared";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  mode?: "scroll" | "mount";
}

export default function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
  mode = "scroll",
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = withDelay(pickVariant(variant, reduce), delay, reduce);

  return (
    <MotionTrigger className={className} variants={variants} mode={mode}>
      {children}
    </MotionTrigger>
  );
}
