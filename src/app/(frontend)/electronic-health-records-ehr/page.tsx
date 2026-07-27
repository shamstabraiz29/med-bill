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
import { getElectronicHealthRecordsEhrData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Electronic Health Records (EHR) Software | BellMedEx",
  description:
    "Store, organize, and access patient charts, billing, and appointments securely with free EHR software by BellMedEx. Start your free trial today.",
};

export default async function ElectronicHealthRecordsEhrPage() {
  const data = await getElectronicHealthRecordsEhrData();

  return (
    <div className="relative min-h-screen">
      <ElectronicHealthRecordsEhrHero data={data.hero} />
      <ElectronicHealthRecordsEhrFeatures data={data.features} />
      <ElectronicHealthRecordsEhrIcd10Cta data={data.icd10Cta} />
      <ElectronicHealthRecordsEhrSpecialties data={data.specialties} />
      <ElectronicHealthRecordsEhrWhyAce data={data.whyAce} />
      <ElectronicHealthRecordsEhrBenefits data={data.benefits} />
      <ElectronicHealthRecordsEhrFaq data={data.faq} />
      <ElectronicHealthRecordsEhrGetStartedCta data={data.getStartedCta} />
    </div>
  );
}
