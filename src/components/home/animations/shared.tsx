"use client";

import { motion, type Variants } from "motion/react";
import { easeOutExpo } from "@/lib/motion";
import type { ReactNode } from "react";

export const motionEase = easeOutExpo;

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -8% 0px",
} as const;

const reduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const revealVariants = {
  rise: {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: easeOutExpo },
    },
  },
  mask: {
    hidden: { opacity: 0, y: 28, clipPath: "inset(18% 0 0 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 0.9, ease: easeOutExpo },
    },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: easeOutExpo },
    },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: easeOutExpo },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96, y: 28 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  },
  lift: {
    hidden: { opacity: 0, y: 22, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.58, ease: easeOutExpo },
    },
  },
} as const;

export type RevealVariant = keyof typeof revealVariants;

export function pickVariant(variant: RevealVariant, reduce: boolean | null): Variants {
  return reduce ? reduced : revealVariants[variant];
}

export function withDelay(base: Variants, delay: number, reduce: boolean | null): Variants {
  if (!delay || reduce) return base;
  const visible = base.visible;
  if (typeof visible !== "object" || visible === null) return base;
  return {
    ...base,
    visible: {
      ...visible,
      transition: {
        ...(typeof visible.transition === "object" ? visible.transition : {}),
        delay,
      },
    },
  };
}

type TriggerProps = {
  className?: string;
  variants: Variants;
  children: ReactNode;
  mode?: "scroll" | "mount";
};

export function MotionTrigger({
  className,
  variants,
  children,
  mode = "scroll",
}: TriggerProps) {
  if (mode === "mount") {
    return (
      <motion.div className={className} initial="hidden" animate="visible" variants={variants}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
