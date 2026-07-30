"use client";

import React from "react";
import { cn } from "@/lib/utils";
import PhysicianBillingServicesSplitRow from "./PhysicianBillingServicesSplitRow";
import {
  physicianSectionAltClassName,
  physicianSectionBlockClassName,
} from "./physicianSectionLayout";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianSplitSection } from "@/payload/types/physicianBillingServices";

interface PhysicianBillingServicesSplitSectionsProps {
  data?: PhysicianSplitSection[];
}

export default function PhysicianBillingServicesSplitSections({ data }: PhysicianBillingServicesSplitSectionsProps) {
  const sectionsList = data && data.length > 0 ? data : defaultPhysicianBillingServicesData.splitSections;

  return (
    <>
      {sectionsList.map((section, idx) => {
        const parsedParagraphs = section.paragraphs.map(p => typeof p === 'string' ? p : p.text);
        const position = section.imagePosition || (idx % 2 === 0 ? "left" : "right");
        const sectionBg = idx % 2 === 0
          ? cn(physicianSectionBlockClassName, "border-t border-[#E2E6EC]")
          : physicianSectionAltClassName;

        return (
          <PhysicianBillingServicesSplitRow
            key={section.headingId || idx}
            badge={section.badge}
            headingId={section.headingId || `physician-split-${idx}`}
            heading={
              <>
                {section.titlePlain}{" "}
                <span className="text-blue-600">{section.titleHighlight}</span>
              </>
            }
            paragraphs={parsedParagraphs}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt || section.titlePlain}
            fallbackSrc={defaultPhysicianBillingServicesData.splitSections[idx]?.imageSrc ?? "/consultants-laptop.png"}
            ctaLabel={section.ctaLabel}
            ctaHref={section.ctaHref}
            imagePosition={position}
            sectionClassName={sectionBg}
          />
        );
      })}
    </>
  );
}
