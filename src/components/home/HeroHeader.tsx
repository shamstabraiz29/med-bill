"use client";

import { motion } from "motion/react";
import { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import { blurRevealVariants, staggerContainerVariants } from "@/lib/motion";

interface HeroHeaderProps {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description1: string;
  description2: string;
  headingId?: string;
}

export default function HeroHeader({
  eyebrow,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description1,
  description2,
  headingId,
}: HeroHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.08, 0.04)}
      className="flex flex-col gap-5"
    >
      <motion.span variants={blurRevealVariants} className="hp-badge">
        {eyebrow}
      </motion.span>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="text-[2rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem]"
      >
        {titlePrefix} <HomeAccent accent>{titleHighlight}</HomeAccent>
        {titleSuffix && ` ${titleSuffix}`}
      </motion.h1>

      <motion.div variants={blurRevealVariants} className="max-w-lg space-y-3 text-base leading-relaxed text-slate-600">
        <p>{description1}</p>
        <p className="text-slate-500">{description2}</p>
      </motion.div>
    </motion.div>
  );
}
