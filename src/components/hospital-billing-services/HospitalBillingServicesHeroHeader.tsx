"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingServicesHeroData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesHeroHeaderProps {
  headingId?: string;
  data?: HospitalBillingServicesHeroData;
}

export default function HospitalBillingServicesHeroHeader({
  headingId,
  data,
}: HospitalBillingServicesHeroHeaderProps) {
  const content = data || defaultHospitalBillingServicesData.hero;
  const ctaParts = content.description2.split(content.phoneText);

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
        {content.titlePlain}
        <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
        {content.titleSuffix}
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
        <p>
          {ctaParts[0]}
          <a
            href={content.phoneLink}
            className="font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E3A8A]"
          >
            {content.phoneText}
          </a>
          {ctaParts[1] ?? ""}
        </p>
      </motion.div>
    </motion.div>
  );
}
