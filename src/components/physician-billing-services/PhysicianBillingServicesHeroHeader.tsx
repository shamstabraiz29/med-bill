"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

interface PhysicianBillingServicesHeroHeaderProps {
  headingId?: string;
  data?: PhysicianBillingServicesPageData["hero"];
}

export default function PhysicianBillingServicesHeroHeader({
  headingId,
  data,
}: PhysicianBillingServicesHeroHeaderProps) {
  const content = data || defaultPhysicianBillingServicesData.hero;

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
        <span className="text-blue-600">{content.titleHighlight}</span>
      </motion.h1>

      <motion.p
        variants={blurRevealVariants}
        className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        {content.description}
      </motion.p>
    </motion.div>
  );
}
