"use client";

import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";

interface HeroHeaderProps {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description1: string;
  description2: string;
}

export default function HeroHeader({
  eyebrow,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description1,
  description2,
}: HeroHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      {/* Eyebrow Badge */}
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="blue" pulse>
          {eyebrow}
        </SectionBadge>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={blurRevealVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18] lg:max-w-2xl"
      >
        {titlePrefix}{" "}
        <span className="text-[#1D4ED8]">
          {titleHighlight}
        </span>
        {titleSuffix && ` ${titleSuffix}`}
      </motion.h1>

      {/* Copy paragraphs */}
      <motion.div
        variants={blurRevealVariants}
        className="space-y-4 text-[#475569] text-sm sm:text-base leading-[1.6] max-w-2xl"
      >
        <p>{description1}</p>
        <p>{description2}</p>
      </motion.div>
    </motion.div>
  );
}
