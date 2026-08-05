import type { Metadata } from 'next'
import { getHomepageData } from '@/lib/payload'
import HomePage from '@/components/home/redesign/HomePage'

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
 * Homepage — entirely new structure composed from redesign modules.
 * CMS data + form/business logic preserved; previous section layouts unused.
 */
export default async function Home() {
  const data = await getHomepageData()
  return <HomePage data={data} />
}
