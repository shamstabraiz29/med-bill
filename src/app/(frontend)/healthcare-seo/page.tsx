import type { Metadata } from "next";
import { getHealthcareSeoData } from "@/lib/payload";
import HealthcareSeoHero from "@/components/healthcare-seo/HealthcareSeoHero";
import HealthcareSeoPillars from "@/components/healthcare-seo/HealthcareSeoPillars";
import HealthcareSeoExpertise from "@/components/healthcare-seo/HealthcareSeoExpertise";
import HealthcareSeoServicesList from "@/components/healthcare-seo/HealthcareSeoServicesList";
import HealthcareSeoPricingUnlockCTA from "@/components/healthcare-seo/HealthcareSeoPricingUnlockCTA";
import HealthcareSeoHipaaAndServices from "@/components/healthcare-seo/HealthcareSeoHipaaAndServices";
import HealthcareSeoScheduleConsultation from "@/components/healthcare-seo/HealthcareSeoScheduleConsultation";

/**
 * Dynamic SEO metadata generated from Payload CMS Healthcare SEO global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHealthcareSeoData();
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

/**
 * Healthcare SEO Page — Server Component that fetches CMS data and passes it
 * as props to each client-side section component.
 */
export default async function HealthcareSeoPage() {
  const data = await getHealthcareSeoData();

  return (
    <div className="flex flex-col min-h-screen">
      <HealthcareSeoHero data={data.hero} />
      <HealthcareSeoPillars data={data.pillars} />
      <HealthcareSeoExpertise data={data.expertise} />
      <HealthcareSeoServicesList data={data.servicesList} />
      <HealthcareSeoPricingUnlockCTA data={data.pricingUnlockCta} />
      <HealthcareSeoHipaaAndServices data={data.hipaaAndServices} />
      <HealthcareSeoScheduleConsultation data={data.scheduleConsultation} />
    </div>
  );
}
