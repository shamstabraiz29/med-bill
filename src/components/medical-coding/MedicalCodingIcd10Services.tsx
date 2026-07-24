"use client";

import React from "react";
import {
  BedDouble,
  Building2,
  Globe2,
  Layers,
  LucideIcon,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Wallet,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "./MedicalCodingServiceCard";

interface CodingServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CODING_SERVICES: CodingServiceItem[] = [
  {
    icon: Building2,
    title: "Facility Coding Service",
    description:
      "Getting paid by services paid ain\u2019t easy. At least, not without experts who know the codes. BellMedEx\u2019s medical coding department has the HCPCS know-how to get it right. We take all your inpatient services - the wheels, the rooms, the nursing - and code them properly. Contact us now to avoid facility coding service.",
  },
  {
    icon: Stethoscope,
    title: "Professional Fee Coding Service",
    description:
      "The doctor sees the patient. The doctor does tests. The doctor prescribes medicine. But then what? That\u2019s where BellMedEx comes in. Our pro fee coders get the doctor paid right. We make sure the insurance company pays the doctor fast. The patient gets a correct bill too. No surprises. Contact us today for professional coding service.",
  },
  {
    icon: ShieldCheck,
    title: "Payer Specific Coding Service",
    description:
      "Each payer has their own way of accepting codes. This can confuse doctors. But our coders know the rules of big payers. Like United Health, Cigna, and Humana. Our team works as per the guidelines for each payer\u2019s codes. This way, claims process smoothly and doctors get paid without merit cuts. Contact us today to avoid coding solutions for your payer network.",
  },
  {
    icon: Globe2,
    title: "Offshore Coding Service",
    description:
      "Do you want to save your medical coding budget? With BellMedEx offshore coding service, medical receive high-caliber coding at a lower price point. We identify and develop coding talent overseas, where pay standards are more affordable. Your coding gets done for a fraction of the cost, following all HIPAA rules. Contact us today for offshore coding solutions.",
  },
  {
    icon: UserRound,
    title: "General Practitioner Visits Coding Service",
    description:
      "Getting paid for seeing patients. That\u2019s what GP visits coding does. We make sure your claims get approved, so the cash keeps flowing into your practice. Our expert coders know all the codes by heart. They get it right the first time, every time. Contact BellMedEx now to learn more about our coding service for general practitioners.",
  },
  {
    icon: Wallet,
    title: "Outpatient Coding Service",
    description:
      "Outpatient coding is a medical coding process used for patients who receive treatment but are not admitted to the hospital for an extended stay. Our medical coders are proficient in the latest documentation guidelines for outpatient evaluation and management (E/M) visit codes. They accurately use ICD-10-CM and HCPCS codes for smooth cash flow at the healthcare organization.",
  },
  {
    icon: Layers,
    title: "HCC Coding Service",
    description:
      "Hierarchical condition category (HCC) coding is a specialized field that relies on a risk-adjustment prediction model and is linked to over 10,000 ICD-10 diagnosis codes. Our trained HCC coders are experts in the regulations surrounding this risk-adjustment model and use their expertise to ensure that diagnosis codes have assigned RAF scores for both commercial risk adjustment and Medicare Advantage risk adjustment.",
  },
  {
    icon: BedDouble,
    title: "Inpatient Coding Service",
    description:
      "Inpatient coding is used for patients who require hospitalization and must be admitted for an extended stay. Our coders are certified with the Certified Inpatient Coder (CIC) credential, which validates mastery in abstracting information from the medical record for ICD-10-CM and ICD-10-PCS coding. We also have experience with Medicare Severity Diagnosis Related Groups (MS-DRGs) and the Inpatient Prospective Payment System (IPPS). This optimizes the revenue cycle of a provider by reducing claim denials and ensuring timely payments.",
  },
];

export default function MedicalCodingIcd10Services() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-icd10-services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          title={
            <span id="medical-coding-icd10-services-heading">
              BellMedEx{" "}
              <span className="font-bold text-blue-600">
                ICD-10 Medical Coding Services &amp; Solutions 2024
              </span>
            </span>
          }
          description="When it comes to medical coding, BellMedEx's advanced medical coding service is your solution. Our years analyzing records to assign compliant codes ensure you receive appropriate reimbursements. Whether you need short-term help covering a vacancy or long-term outsourcing, our commitment to quality coding at scale makes us your partner."
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {CODING_SERVICES.map((service) => (
            <MotionWrapper key={service.title} variant="staggerItem" className="h-full">
              <MedicalCodingServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
