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
  align?: "left" | "center";
  className?: string;
}

export default function HeroHeader({
  eyebrow,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description1,
  description2,
  headingId,
  align = "left",
  className = "",
}: HeroHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.08, 0.04)}
      className={`flex flex-col space-y-4 sm:space-y-5 ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } ${className}`}
    >
      <motion.div variants={blurRevealVariants}>
        <SectionBadge variant="blue" pulse={false}>
          {eyebrow}
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="font-display text-[2rem] sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-semibold text-foreground tracking-[-0.025em] leading-[1.15]"
      >
        {titlePrefix}{" "}
        <span className="text-primary">{titleHighlight}</span>
        {titleSuffix && ` ${titleSuffix}`}
      </motion.h1>

      <motion.div
        variants={blurRevealVariants}
        className={`space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground ${
          isCenter ? "max-w-2xl" : "max-w-xl"
        }`}
      >
        <p>{description1}</p>
        <p>{description2}</p>
      </motion.div>
    </motion.div>
  );
}
