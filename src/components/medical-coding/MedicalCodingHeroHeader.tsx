"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";

const BENEFITS = [
  "Providers receive timely payment.",
  "Patients are accurately billed for services.",
  "Payers accept claims without rejection.",
];

export default function MedicalCodingHeroHeader() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="blue" pulse>
          Medical Coding Services
        </SectionBadge>
      </motion.div>

      <motion.h1
        variants={blurRevealVariants}
        className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:max-w-2xl lg:text-5xl"
      >
        Best Medical Coding Solutions. No Revenue Leakage,{" "}
        <span className="text-[#1D4ED8]">Get Paid On-Time.</span>
      </motion.h1>

      <motion.p
        variants={blurRevealVariants}
        className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        Medical coding services are the need of healthcare providers in the USA.
        Our expert clinical coders fulfill the coding needs of every specialty by
        assigning diagnosis and procedure codes that facilitate the creation of
        claims for submission to payers.
      </motion.p>

      <motion.ul
        variants={blurRevealVariants}
        className="flex max-w-2xl flex-col gap-2.5"
        role="list"
      >
        {BENEFITS.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2 text-sm leading-snug text-[#475569] sm:text-[15px]"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 stroke-[3] text-[#22C55E]"
              aria-hidden="true"
            />
            {benefit}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
