import type { Metadata } from 'next'
import { getHomepageData } from '@/lib/payload'
import Hero from '@/components/Hero'
import StatsCards from '@/components/home/StatsCards'
import ServicesOverview from '@/components/home/ServicesOverview'
import MedicalClaimsService from '@/components/home/MedicalClaimsService'
import SpecialtyBillingSection from '@/components/home/SpecialtyBillingSection'
import TrustStatsSection from '@/components/home/TrustStatsSection'
import BillingCTASection from '@/components/home/BillingCTASection'
import DoctorsTeamSection from '@/components/home/DoctorsTeamSection'
import NationwidePricingSection from '@/components/home/NationwidePricingSection'
import PricingQuoteSection from '@/components/home/PricingQuoteSection'
import ProviderChallengesSection from '@/components/home/ProviderChallengesSection'
import TestimonialCarousel from '@/components/carousel/TestimonialCarousel'
import FAQSection from '@/components/home/FAQSection'

/**
 * Dynamic SEO metadata generated from Payload CMS Homepage global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData()
  const { seo } = data

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
      type: (seo.openGraph?.ogType as 'website') || 'website',
      url: seo.openGraph?.ogUrl || seo.canonicalUrl,
    },
  }
}

/**
 * Homepage — Server Component that fetches CMS data and passes it
 * as props to each client-side section component.
 */
export default async function Home() {
  const data = await getHomepageData()

  return (
    <div className="relative min-h-screen">
      <Hero data={data.hero} />
      <StatsCards data={data.statsCards} />
      <ServicesOverview data={data.servicesOverview} />
      <MedicalClaimsService data={data.medicalClaims} />
      <TrustStatsSection data={data.trustStats} />
      <BillingCTASection data={data.billingCta} />
      <DoctorsTeamSection data={data.doctorsTeam} />
      <ProviderChallengesSection data={data.providerChallenges} />
      <SpecialtyBillingSection data={data.specialtyBilling} />
      <NationwidePricingSection data={data.nationwidePricing} />
      <PricingQuoteSection data={data.pricingQuote} />
      <TestimonialCarousel data={data.testimonials} />
      <FAQSection data={data.faq} />
    </div>
  )
}
