"use client";

import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";

interface LargePracticesHeroHeaderProps {
  headingId?: string;
}

export default function LargePracticesHeroHeader({
  headingId,
}: LargePracticesHeroHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="indigo" pulse>
          Large Practice Billing.
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
      >
        Billing Services for your{" "}
        <span className="text-[#1D4ED8]">Large Practice</span>
      </motion.h1>

      <motion.div
        variants={blurRevealVariants}
        className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        <p>
          Save up to <span className="font-semibold text-[#0F172A]">30-60%</span> on annual
          payroll with billing workflows built for high-volume large practices.
        </p>
        <p>
          Billing inaccuracies can be disastrous for your large practice&apos;s financial growth.
          For 10+ years in billing and denial management, BellMedEx is known for mitigating
          lost revenue and reducing claim denials by 97% for large practices. Available in all
          50 States!
        </p>
      </motion.div>
    </motion.div>
  );
}
