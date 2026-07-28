"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesHeroHeaderProps {
  headingId?: string;
  data?: LargePracticesPageData["hero"];
}

export default function LargePracticesHeroHeader({
  headingId,
  data,
}: LargePracticesHeroHeaderProps) {
  const content = data || defaultLargePracticesData.hero;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="indigo" pulse>
          {content.badge}
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
      >
        {content.titlePlain}{" "}
        <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
      </motion.h1>

      <motion.div
        variants={blurRevealVariants}
        className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        <p>{content.descriptionParagraph1}</p>
        <p>{content.descriptionParagraph2}</p>
      </motion.div>
    </motion.div>
  );
}
