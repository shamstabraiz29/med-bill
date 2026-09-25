"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionEase, viewport } from "./shared";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
}

const clips = {
  left: {
    hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.04 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      scale: 1,
      transition: { duration: 0.95, ease: motionEase },
    },
  },
  right: {
    hidden: { clipPath: "inset(0 0 0 100%)", scale: 1.04 },
    visible: {
      clipPath: "inset(0 0 0 0%)",
      scale: 1,
      transition: { duration: 0.95, ease: motionEase },
    },
  },
  up: {
    hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.04 },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      transition: { duration: 0.95, ease: motionEase },
    },
  },
};

export default function ImageReveal({
  children,
  className,
  direction = "left",
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <div className={className ?? "overflow-hidden"}>
      <motion.div
        className="h-full w-full"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={
          reduce
            ? {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.2 } },
              }
            : clips[direction]
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
