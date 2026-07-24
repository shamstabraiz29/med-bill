import type { Metadata } from "next";
import {
  MedicalCodingAffordableCta,
  MedicalCodingAdvancedHelp,
  MedicalCodingAuditsConsultancy,
  MedicalCodingAuditsDemoCta,
  MedicalCodingErrorsRevenueCta,
  MedicalCodingExpertSections,
  MedicalCodingFairRevenueCta,
  MedicalCodingFrustratedCta,
  MedicalCodingHero,
  MedicalCodingHowWeHelp,
  MedicalCodingIcd10Services,
  MedicalCodingModernSolutions,
  MedicalCodingProvenProcess,
  MedicalCodingSecurityCompliance,
  MedicalCodingWhyChooseUs,
} from "@/components/medical-coding";

export const metadata: Metadata = {
  title: "Medical Coding Services | BellMedEx",
  description:
    "BellMedEx provides expert medical coding services for every specialty. Reduce revenue leakage, improve claim acceptance, and get paid on time with certified clinical coders.",
};

export default function MedicalCodingPage() {
  return (
    <div className="flex min-h-screen flex-col py-4 sm:py-8">
      <MedicalCodingHero />
      <MedicalCodingHowWeHelp />
      <MedicalCodingWhyChooseUs />
      <MedicalCodingAffordableCta />
      <MedicalCodingExpertSections />
      <MedicalCodingProvenProcess />
      <MedicalCodingIcd10Services />
      <MedicalCodingFrustratedCta />
      <MedicalCodingAuditsConsultancy />
      <MedicalCodingFairRevenueCta />
      <MedicalCodingSecurityCompliance />
      <MedicalCodingAdvancedHelp />
      <MedicalCodingAuditsDemoCta />
      <MedicalCodingModernSolutions />
      <MedicalCodingErrorsRevenueCta />
    </div>
  );
}
