import type { Metadata } from "next";
import {
  ElectronicHealthRecordsEhrBenefits,
  ElectronicHealthRecordsEhrFaq,
  ElectronicHealthRecordsEhrFeatures,
  ElectronicHealthRecordsEhrGetStartedCta,
  ElectronicHealthRecordsEhrHero,
  ElectronicHealthRecordsEhrIcd10Cta,
  ElectronicHealthRecordsEhrSpecialties,
  ElectronicHealthRecordsEhrWhyAce,
} from "@/components/electronic-health-records-ehr";

export const metadata: Metadata = {
  title: "Electronic Health Records (EHR) Software | BellMedEx",
  description:
    "Store, organize, and access patient charts, billing, and appointments securely with free EHR software by BellMedEx. Start your free trial today.",
};

export default function ElectronicHealthRecordsEhrPage() {
  return (
    <div className="relative min-h-screen">
      <ElectronicHealthRecordsEhrHero />
      <ElectronicHealthRecordsEhrFeatures />
      <ElectronicHealthRecordsEhrIcd10Cta />
      <ElectronicHealthRecordsEhrSpecialties />
      <ElectronicHealthRecordsEhrWhyAce />
      <ElectronicHealthRecordsEhrBenefits />
      <ElectronicHealthRecordsEhrFaq />
      <ElectronicHealthRecordsEhrGetStartedCta />
    </div>
  );
}
