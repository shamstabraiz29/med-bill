"use client";

import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
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
      className="space-y-5 text-left"
    >
      <motion.div variants={blurRevealVariants}>
        <SectionBadge variant="blue" pulse={false}>
          {eyebrow}
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-semibold text-foreground tracking-tight leading-[1.1] max-w-2xl"
      >
        {titlePrefix}{" "}
        <span className="text-primary">{titleHighlight}</span>
        {titleSuffix && ` ${titleSuffix}`}
      </motion.h1>

      <motion.div variants={blurRevealVariants} className="space-y-3 max-w-xl">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{description1}</p>
        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{description2}</p>
      </motion.div>
    </motion.div>
  );
}
