"use client";

import React from "react";
import {
  FilePenLine,
  FlaskConical,
  PieChart,
  ShieldCheck,
} from "lucide-react";
import SoftwareSectionHeader from "./SoftwareSectionHeader";
import MedicalBillingSoftwareFeatureRow from "./MedicalBillingSoftwareFeatureRow";
import {
  BusinessManagementVisual,
  LabTestsVisual,
  PrescriptionScheduleVisual,
  TopPayersVisual,
} from "./MedicalBillingSoftwareFeatureVisuals";
import {
  softwareContainerClassName,
  softwareSectionClassName,
} from "./softwareSectionLayout";

const NEW_FEATURES = [
  {
    icon: FilePenLine,
    title: "Prescribe Electronically",
    description:
      "Providers can now use the Electronic Prescribing Controlled Substances (EPCS) feature to write and transmit prescriptions for controlled substances electronically instead of using paper prescriptions.",
    visual: <PrescriptionScheduleVisual />,
    reverse: false,
  },
  {
    icon: FlaskConical,
    title: "Order Lab Tests",
    description:
      "Providers can order laboratory tests for their patients from a network of over 45,000 U.S. labs in our network. Document the lab order, results, diagnosis, treatment plan, and patient education in the patient's EHR using our medical billing software. You can also bill the insurance company for the lab test and the consultation using this same software.",
    visual: <LabTestsVisual />,
    reverse: true,
  },
  {
    icon: ShieldCheck,
    title: "Insurance Optimization",
    description:
      "The insurance optimization feature works by automatically checking the eligibility and coverage of your patients' secondary and tertiary insurance plans, based on the information you enter in the patient's profile. The feature then calculates the best order of billing for each claim, based on the rules and policies of each insurance provider.",
    visual: <TopPayersVisual />,
    reverse: false,
  },
  {
    icon: PieChart,
    title: "Business Management",
    description:
      "Leverage various features to optimize financial processes. Use Billing Analytics to analyze financial performance, such as revenue, collections, claims, and denials. Document Management lets you store and organize all your practice documents, such as contracts, policies, and invoices. Update your clinical calendar, set reminders, confirm bookings, and send notifications to patients via the Agenda Planner.",
    visual: <BusinessManagementVisual />,
    reverse: true,
  },
];

export default function MedicalBillingSoftwareNewFeatures() {
  return (
    <section
      className={softwareSectionClassName}
      aria-labelledby="medical-billing-software-new-features-heading"
    >
      <div className={softwareContainerClassName}>
        <SoftwareSectionHeader
          headingId="medical-billing-software-new-features-heading"
          badge="Exciting New Features"
          titlePlain="Boost your medical billing"
          titleHighlight="efficiency and profitability"
          endPeriod
          description="Our software is designed by medical billing professionals who understand your needs and challenges. We also provide you with dedicated account managers, training sessions, and technical support to ensure your success."
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {NEW_FEATURES.map((feature) => (
            <MedicalBillingSoftwareFeatureRow
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
