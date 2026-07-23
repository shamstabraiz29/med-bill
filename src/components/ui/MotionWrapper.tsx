"use client";

import React, { useState, useEffect } from "react";
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
  viewportAmount?: number | "some" | "all";
  viewportMargin?: string;
  once?: boolean;
}

export default function MotionWrapper({
  children,
  variant = "fadeUp",
  delay = 0,
  staggerDelay = 0.08,
  className = "",
  viewportAmount = 0.35,
  viewportMargin = "-10% 0px -10% 0px",
  once = true,
}: MotionWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getVariants = (): Variants => {
    if (isMounted && shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
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
      viewport={{ once, amount: viewportAmount, margin: viewportMargin }}
      variants={selectedVariants}
      transition={delay > 0 ? { delay } : undefined}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export { motion };
