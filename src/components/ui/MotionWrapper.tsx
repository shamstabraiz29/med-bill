"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "motion/react";
import {
  fadeUpVariants,
  fadeInVariants,
  scaleUpVariants,
  slideLeftVariants,
  slideRightVariants,
  blurRevealVariants,
  springPopVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/motion";

export interface MotionWrapperProps {
  children: React.ReactNode;
  variant?:
    | "fadeUp"
    | "fadeIn"
    | "scaleUp"
    | "slideLeft"
    | "slideRight"
    | "blurReveal"
    | "springPop"
    | "stagger"
    | "staggerItem";
  delay?: number;
  staggerDelay?: number;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
}

export default function MotionWrapper({
  children,
  variant = "fadeUp",
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  viewportAmount = 0.15,
  once = true,
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = (): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      };
    }

    switch (variant) {
      case "fadeIn":
        return fadeInVariants;
      case "scaleUp":
        return scaleUpVariants;
      case "slideLeft":
        return slideLeftVariants;
      case "slideRight":
        return slideRightVariants;
      case "blurReveal":
        return blurRevealVariants;
      case "springPop":
        return springPopVariants;
      case "stagger":
        return staggerContainerVariants(staggerDelay, delay);
      case "staggerItem":
        return staggerItemVariants;
      case "fadeUp":
      default:
        return fadeUpVariants;
    }
  };

  const selectedVariants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={selectedVariants}
      transition={delay > 0 ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion };
