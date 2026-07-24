import type { Metadata } from 'next'
import { getClearinghouseData } from '@/lib/payload'
import ClearinghouseHero from '@/components/clearinghouse/ClearinghouseHero'
import ClearinghouseCapabilities from '@/components/clearinghouse/ClearinghouseCapabilities'
import WhyChooseClearinghouse from '@/components/clearinghouse/WhyChooseClearinghouse'
import ClearinghouseValueFeatures from '@/components/clearinghouse/ClearinghouseValueFeatures'
import ClearinghouseEFTERA from '@/components/clearinghouse/ClearinghouseEFTERA'
import ClearinghouseRCMFunctions from '@/components/clearinghouse/ClearinghouseRCMFunctions'
import ReduceErrorRatesCTA from '@/components/clearinghouse/ReduceErrorRatesCTA'
import ClearinghouseEDISecurity from '@/components/clearinghouse/ClearinghouseEDISecurity'
import ClearinghouseStats from '@/components/clearinghouse/ClearinghouseStats'
import DirectPayersCTA from '@/components/clearinghouse/DirectPayersCTA'

/**
 * Dynamic SEO metadata generated from Payload CMS Clearinghouse global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getClearinghouseData()
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
 * Clearinghouse Page — Server Component that fetches CMS data and passes it
 * as props to each client-side section component.
 */
export default async function ClearinghousePage() {
  const data = await getClearinghouseData()

  return (
    <div className="flex flex-col min-h-screen">
      <ClearinghouseHero data={data.hero} />
      <ClearinghouseCapabilities data={data.capabilities} />
      <WhyChooseClearinghouse data={data.whyChoose} />
      <DirectPayersCTA data={data.directPayersCta} />
      <ClearinghouseValueFeatures data={data.valueFeatures} />
      <ClearinghouseEFTERA data={data.eftEra} />
      <ClearinghouseStats data={data.stats} />
      <ClearinghouseEDISecurity data={data.ediSecurity} />
      <ClearinghouseRCMFunctions data={data.rcmFunctions} />
      <ReduceErrorRatesCTA data={data.reduceErrorRatesCta} />
    </div>
  )
}
