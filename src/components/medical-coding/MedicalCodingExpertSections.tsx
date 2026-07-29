"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingExpertBlock from "./MedicalCodingExpertBlock";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingExpertSectionsProps {
  data?: typeof defaultMedicalCodingData.expertSections;
}

export default function MedicalCodingExpertSections({ data }: MedicalCodingExpertSectionsProps) {
  const expertData = data || defaultMedicalCodingData.expertSections;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-label="Medical coding expert services"
    >
      <div className="mx-auto max-w-7xl">
        <MotionWrapper variant="stagger" staggerDelay={0.1} className="space-y-6 sm:space-y-8">
          {expertData.blocks.map((block) => (
            <MotionWrapper key={block.ctaLabel} variant="staggerItem">
              <MedicalCodingExpertBlock
                title={
                  <>
                    {block.titlePlain}{" "}
                    <span className="font-bold text-blue-600">
                      {block.titleHighlight}
                    </span>
                  </>
                }
                description={block.description}
                ctaLabel={block.ctaLabel}
                ctaHref={block.ctaHref || "/contact-us"}
                imageSrc={block.imageSrc}
                imageAlt={block.imageAlt}
                imagePosition={(block.imagePosition as "left" | "right") || "right"}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
