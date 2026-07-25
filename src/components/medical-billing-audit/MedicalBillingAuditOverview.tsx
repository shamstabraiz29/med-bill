"use client";

import React from "react";
import { ClipboardCheck, ScanSearch } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditSplitBlock from "./MedicalBillingAuditSplitBlock";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

const AUDIT_OVERVIEW_BLOCKS = [
  {
    icon: ClipboardCheck,
    title: (
      <>
        What are{" "}
        <span className="font-bold text-blue-600">Medical Billing Audits</span>?
      </>
    ),
    paragraphs: [
      "Medical billing and coding audits are necessary checkups to ensure a provider\u2019s billing claims and coding documentation meet medical billing compliance. Certified billing auditors inspect patient charts and billing records to guarantee the use of correct codes that match conditions and care. Like routine physicals catching health problems early, audits diagnose issues in billing, allowing providers to correct course.",
      "Audits are important as they reveal improper coding, incomplete documentation, missed charges, and noncompliance with reimbursement guidelines. This helps strengthen a provider\u2019s revenue cycle by correcting errors proactively before they can lead to denied claims or penalties for incorrect billing. Regular comprehensive audits are advantageous as they ensure proper coding, completeness of records, optimal reimbursement, compliance with payer policies, and overall financial health.",
    ],
    imageSrc: "/consultants-laptop.png",
    imageAlt: "BellMedEx billing auditor reviewing charts and analytics documentation",
    imagePosition: "left" as const,
  },
  {
    icon: ScanSearch,
    title: (
      <>
        How does{" "}
        <span className="font-bold text-blue-600">BellMedEx</span> Medical Coding Audit
        Company help?
      </>
    ),
    paragraphs: [
      "BellMedEx works as a professional medical billing audit services company. Medical billing and coding is complex work full of pitfalls for error, calling for vigilant oversight. Therefore, our medical coding audit and compliance services provide this monitoring, serving as a safety net that preserves the integrity of the entire medical claims billing process.",
      "The experienced billing auditors at BellMedEx, take a magnifying glass to documentation, coding choices, and the submitted claims to unveil inaccuracies and illuminate opportunities for billing cycle improvement. Our findings steer healthcare facilities toward error-free medical coding and full revenue capture.",
      "Just as crucial, our high quality medical billing audit program heads off billing compliance violations and fraud that lead to fines, penalties and damaged integrity. Our audit service is thus a fundamental pillar upholding clinical, financial, and regulatory excellence.",
    ],
    imageSrc: "/doctors-team.png",
    imageAlt: "BellMedEx medical coding audit team collaborating on billing compliance review",
    imagePosition: "right" as const,
  },
];

export default function MedicalBillingAuditOverview() {
  return (
    <section className={auditSectionClassName} aria-label="Medical billing audit overview">
      <div className={auditContainerClassName}>
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-6 sm:space-y-8"
        >
          {AUDIT_OVERVIEW_BLOCKS.map((block) => (
            <MotionWrapper key={block.paragraphs[0]} variant="staggerItem">
              <MedicalBillingAuditSplitBlock
                icon={block.icon}
                title={block.title}
                paragraphs={block.paragraphs}
                imageSrc={block.imageSrc}
                imageAlt={block.imageAlt}
                imagePosition={block.imagePosition}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
