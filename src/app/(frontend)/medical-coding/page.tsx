import type { Metadata } from "next";
import { getMedicalCodingData } from "@/lib/payload";
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

/**
 * Dynamic SEO metadata generated from Payload CMS Medical Coding global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getMedicalCodingData();
  const { seo } = data;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.robots,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.openGraph?.ogTitle || seo.metaTitle,
      description: seo.openGraph?.ogDescription || seo.metaDescription,
      type: (seo.openGraph?.ogType as "website") || "website",
      url: seo.openGraph?.ogUrl || seo.canonicalUrl,
    },
  };
}

export default async function MedicalCodingPage() {
  const data = await getMedicalCodingData();

  return (
    <div className="flex min-h-screen flex-col py-4 sm:py-8">
      <MedicalCodingHero data={data.hero} />
      <MedicalCodingHowWeHelp data={data.howWeHelp} />
      <MedicalCodingWhyChooseUs data={data.whyChooseUs} />
      <MedicalCodingAffordableCta data={data.affordableCta} />
      <MedicalCodingExpertSections data={data.expertSections} />
      <MedicalCodingProvenProcess data={data.provenProcess} />
      <MedicalCodingIcd10Services data={data.icd10Services} />
      <MedicalCodingFrustratedCta data={data.frustratedCta} />
      <MedicalCodingAuditsConsultancy data={data.auditsConsultancy} />
      <MedicalCodingFairRevenueCta data={data.fairRevenueCta} />
      <MedicalCodingSecurityCompliance data={data.securityCompliance} />
      <MedicalCodingAdvancedHelp data={data.advancedHelp} />
      <MedicalCodingAuditsDemoCta data={data.auditsDemoCta} />
      <MedicalCodingModernSolutions data={data.modernSolutions} />
      <MedicalCodingErrorsRevenueCta data={data.errorsRevenueCta} />
    </div>
  );
}
