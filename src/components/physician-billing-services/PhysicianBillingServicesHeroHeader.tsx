"use client";

import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";

interface PhysicianBillingServicesHeroHeaderProps {
  headingId?: string;
}

export default function PhysicianBillingServicesHeroHeader({
  headingId,
}: PhysicianBillingServicesHeroHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="indigo" pulse>
          Physician Billing Services.
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
      >
        Physician{" "}
        <span className="text-blue-600">Billing Services</span>
      </motion.h1>

      <motion.p
        variants={blurRevealVariants}
        className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        BellMedEx Physician Billing Services ensure physicians obtain rightful payments for
        caring for patients via accurate claim filing, coding, denial resolution, and unpaid
        claim follow-up. We serve as your outsourced billing team, multiplying income so your
        medical practice thrives.
      </motion.p>
    </motion.div>
  );
}
