"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { blurRevealVariants, springPopVariants, staggerContainerVariants } from "@/lib/motion";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingHeroHeaderProps {
  data?: typeof defaultMedicalCodingData.hero;
}

export default function MedicalCodingHeroHeader({ data }: MedicalCodingHeroHeaderProps) {
  const heroData = data || defaultMedicalCodingData.hero;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(0.12, 0.05)}
      className="flex flex-col space-y-6 text-left"
    >
      <motion.div variants={springPopVariants}>
        <SectionBadge variant="blue" pulse>
          {heroData.badge}
        </SectionBadge>
      </motion.div>

      <motion.h1
        variants={blurRevealVariants}
        className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:max-w-2xl lg:text-5xl"
      >
        {heroData.titlePlain}
        <span className="text-[#1D4ED8]">{heroData.titleHighlight}</span>
      </motion.h1>

      <motion.p
        variants={blurRevealVariants}
        className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base"
      >
        {heroData.description}
      </motion.p>

      <motion.ul
        variants={blurRevealVariants}
        className="flex max-w-2xl flex-col gap-2.5"
        role="list"
      >
        {heroData.benefits.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm leading-snug text-[#475569] sm:text-[15px]"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 stroke-[3] text-[#22C55E]"
              aria-hidden="true"
            />
            {item.label}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
