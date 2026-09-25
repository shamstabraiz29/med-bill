"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  id?: string;
  factor?: number;
}

export default function Parallax({
  children,
  className,
  id,
  factor = 0.08,
}: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [factor * 100, factor * -100]);

  if (reduce) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} id={id} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
