"use client";

import { motion } from "motion/react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";

interface SmallPracticesHeroHeaderProps {
  headingId?: string;
}

export default function SmallPracticesHeroHeader({
  headingId,
}: SmallPracticesHeroHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="indigo" pulse>
          Small Practice Billing.
        </SectionBadge>
      </motion.div>

      <motion.h1
        id={headingId}
        variants={blurRevealVariants}
        className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
      >
        Medical Billing Services for{" "}
        <span className="text-[#1D4ED8]">Small Practices</span>
      </motion.h1>

      <motion.div
        variants={blurRevealVariants}
        className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        <p>
          Medical billing for small practices is an expert service that transforms each patient
          encounter in a small clinic or solo provider&apos;s office into a clean, payer-ready claim.
          This service makes sure that each patient visit gets the right ICD-10 code. It follows up
          on every Medicare or private healthcare insurance claim. This way, small physician groups
          and micro clinics receive payments for the services given to patients.
        </p>
        <p>
          BellMedEx provides medical billing services for small healthcare practices. We act as a
          complete revenue cycle partner. We turn every chart into a claim that meets payer
          requirements and deposit the reimbursements directly into your account. You don&apos;t need
          to hire more staff or deal with software problems.
        </p>
      </motion.div>
    </motion.div>
  );
}
