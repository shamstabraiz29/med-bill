"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PmsFeatureRow, { PmsAssetVisual } from "./PmsFeatureRow";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";

const TELEMEDICINE_RCM_FEATURES = [
  {
    label: "Telemedicine Feature",
    title: "Connect, Care, and Cure",
    paragraphs: [
      "Schedule virtual visits, send patient reminders, and document telehealth encounters in the same workflow you use for in-office care. BellMedEx PMS keeps appointments, billing, and records aligned so remote care feels seamless for your team and your patients.",
      "Measure telehealth performance with built-in analytics that track visit volume, engagement, and outcomes—helping you expand virtual services with clarity and control.",
    ],
    visual: (
      <PmsAssetVisual
        src="/pms-connect-care-cure.png"
        alt="BellMedEx telemedicine feature with video consult and patient chat"
      />
    ),
    reverse: true,
  },
  {
    label: "Revenue Cycle Reports",
    title: "Score Billing and RCM Wins",
    paragraphs: [
      "Cloud-based practice management software puts billing performance at your fingertips. Generate invoices, monitor collections, and stay on top of every claim without juggling spreadsheets or disconnected tools.",
      "Build revenue cycle reports that surface gross charges, net collections, top payers, and aging AR—so you can spot trends early, reduce leakage, and celebrate measurable RCM wins.",
    ],
    visual: (
      <PmsAssetVisual
        src="/pms-score-billing-rcm-wins.png"
        alt="Physician reviewing BellMedEx billing and RCM dashboard reports"
      />
    ),
    reverse: false,
  },
];

export default function PracticeManagementSoftwarePmsTelemedicineRcm() {
  return (
    <section
      className={pmsSectionClassName}
      aria-labelledby="practice-management-software-pms-telemedicine-rcm-heading"
    >
      <div className={pmsContainerClassName}>
        <h2 id="practice-management-software-pms-telemedicine-rcm-heading" className="sr-only">
          Telemedicine and revenue cycle reporting features
        </h2>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="space-y-10 sm:space-y-12 lg:space-y-16"
        >
          {TELEMEDICINE_RCM_FEATURES.map((feature) => (
            <MotionWrapper key={feature.title} variant="staggerItem">
              <PmsFeatureRow
                label={feature.label}
                title={feature.title}
                paragraphs={feature.paragraphs}
                visual={feature.visual}
                reverse={feature.reverse}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
