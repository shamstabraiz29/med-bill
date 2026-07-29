import type { Metadata } from "next";
import { getProviderCredentialingData } from "@/lib/payload";
import ProviderCredentialingHero from "@/components/provider-credentialing/ProviderCredentialingHero";
import CredentialingWhatToExpect from "@/components/provider-credentialing/CredentialingWhatToExpect";
import SoloPractitionerCTA from "@/components/provider-credentialing/SoloPractitionerCTA";
import PremiumPayerNetworks from "@/components/provider-credentialing/PremiumPayerNetworks";
import CredentialingWorkflowSteps from "@/components/provider-credentialing/CredentialingWorkflowSteps";
import ExpeditedCredentialingServices from "@/components/provider-credentialing/ExpeditedCredentialingServices";
import BenefitsOfOutsourcingCredentialing from "@/components/provider-credentialing/BenefitsOfOutsourcingCredentialing";
import HealthcareEntitiesGrid from "@/components/provider-credentialing/HealthcareEntitiesGrid";
import EnrollFavoritePayers from "@/components/provider-credentialing/EnrollFavoritePayers";
import CredentialingPricingPackages from "@/components/provider-credentialing/CredentialingPricingPackages";
import RedTapeCTA from "@/components/provider-credentialing/RedTapeCTA";

/**
 * Dynamic SEO metadata generated from Payload CMS Provider Credentialing global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getProviderCredentialingData();
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
 * Provider Credentialing Page — Server Component that fetches CMS data and passes it
 * as props to each client-side section component.
 */
export default async function ProviderCredentialingPage() {
  const data = await getProviderCredentialingData();

  return (
    <div className="relative min-h-screen">
      <ProviderCredentialingHero data={data.hero} />
      <CredentialingWhatToExpect data={data.whatToExpect} />
      <SoloPractitionerCTA data={data.soloPractitionerCta} />
      <PremiumPayerNetworks data={data.premiumPayerNetworks} />
      <CredentialingWorkflowSteps data={data.workflowSteps} />
      <ExpeditedCredentialingServices data={data.expeditedServices} />
      <BenefitsOfOutsourcingCredentialing data={data.benefitsOfOutsourcing} />
      <HealthcareEntitiesGrid data={data.healthcareEntities} />
      <EnrollFavoritePayers data={data.enrollFavoritePayers} />
      <CredentialingPricingPackages data={data.pricingPackages} />
      <RedTapeCTA data={data.redTapeCta} />
    </div>
  );
}
