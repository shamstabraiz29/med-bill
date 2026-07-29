import type { Metadata } from "next";
import { getMedicalBillingData } from "@/lib/payload";
import {
  ConsultationSection,
  MedicalBillingWhyChooseUs,
  MedicalBillingWorkflow,
  MedicalBillingWhatWeOffer,
  MedicalBillingConsultingServices,
  MedicalBillingConsultancyBenefits,
  MedicalBillingConsultancyFeatures,
  MedicalBillingCodingConsultants,
  MedicalBillingSpecialtySolutions,
  MedicalBillingPartnersSuccess,
  MedicalBillingRevenueCta,
  MedicalBillingFAQ,
} from "@/components/medical-billing";

/**
 * Dynamic SEO metadata generated from Payload CMS Medical Billing global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getMedicalBillingData();
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

export default async function MedicalBillingPage() {
  const data = await getMedicalBillingData();

  return (
    <div className="relative min-h-screen">
      {/* Consultation & Schedule Form Section */}
      <ConsultationSection data={data.consultation} />

      {/* RCM Highlights & Why Choose Us Section */}
      <MedicalBillingWhyChooseUs data={data.whyChooseUs} />

      {/* Billing Process Workflow Section */}
      <MedicalBillingWorkflow data={data.workflow} />

      {/* What We Offer Section */}
      <MedicalBillingWhatWeOffer data={data.whatWeOffer} />

      {/* Smart Billing Advisory Services Section */}
      <MedicalBillingConsultingServices data={data.consultingServices} />

      {/* Consultancy Benefits Section */}
      <MedicalBillingConsultancyBenefits data={data.consultancyBenefits} />

      {/* Consultancy Features Section */}
      <MedicalBillingConsultancyFeatures data={data.consultancyFeatures} />

      {/* Medical Coding Consultants Section */}
      <MedicalBillingCodingConsultants data={data.codingConsultants} />

      {/* All Specialties Lead Capture Section */}
      <MedicalBillingSpecialtySolutions data={data.specialtySolutions} />

      {/* Partners in Success Section */}
      <MedicalBillingPartnersSuccess data={data.partnersSuccess} />

      {/* Revenue Recovery CTA Section */}
      <MedicalBillingRevenueCta data={data.revenueCta} />

      {/* Medical Billing FAQ Section */}
      <MedicalBillingFAQ data={data.faq} />
    </div>
  );
}
