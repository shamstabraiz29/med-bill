"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHeroData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesHeroHeaderProps {
  headingId?: string;
  data?: DenialManagementHeroData;
}

export default function DenialManagementServicesHeroHeader({
  headingId,
  data,
}: DenialManagementServicesHeroHeaderProps) {
  const content = data || defaultDenialManagementServicesData.hero;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="blue" pulse>
          {content.badge}
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:max-w-2xl lg:text-5xl"
      >
        {content.titlePlain}{" "}
        <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
      </motion.h1>

      <motion.p
        variants={blurRevealVariants}
        className="max-w-2xl text-base font-bold leading-[1.4] tracking-[-0.01em] text-[#1D4ED8] sm:text-lg"
      >
        {content.subtitle}
      </motion.p>

      <motion.div
        variants={blurRevealVariants}
        className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        <p>{content.description1}</p>
        <p>{content.description2}</p>
      </motion.div>
    </motion.div>
  );
}
