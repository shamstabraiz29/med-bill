import type { Metadata } from "next";
import { getRevenueCycleManagementData, getHomepageData } from "@/lib/payload";
import RcmHero from "@/components/revenue-cycle-management-rcm/RcmHero";
import RcmImportance from "@/components/revenue-cycle-management-rcm/RcmImportance";
import RcmAuditCTA from "@/components/revenue-cycle-management-rcm/RcmAuditCTA";
import RcmServicesOverview from "@/components/revenue-cycle-management-rcm/RcmServicesOverview";
import RcmRoiCaseStudy from "@/components/revenue-cycle-management-rcm/RcmRoiCaseStudy";
import RcmFeaturesGrid from "@/components/revenue-cycle-management-rcm/RcmFeaturesGrid";
import RcmSolutionsComparison from "@/components/revenue-cycle-management-rcm/RcmSolutionsComparison";
import RcmReportingFeatures from "@/components/revenue-cycle-management-rcm/RcmReportingFeatures";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import RcmFAQ from "@/components/revenue-cycle-management-rcm/RcmFAQ";

/**
 * Dynamic SEO metadata generated from Payload CMS Revenue Cycle Management global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getRevenueCycleManagementData();
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

export default async function RevenueCycleManagementPage() {
  const data = await getRevenueCycleManagementData();
  const homepageData = await getHomepageData();

  return (
    <div className="relative min-h-screen">
      <RcmHero data={data.hero} />
      <RcmImportance data={data.importance} />
      <RcmAuditCTA data={data.auditCta} />
      <RcmServicesOverview data={data.servicesOverview} />
      <RcmRoiCaseStudy data={data.roiCaseStudy} />
      <RcmFeaturesGrid data={data.featuresGrid} />
      <RcmSolutionsComparison data={data.solutionsComparison} />
      <RcmReportingFeatures data={data.reportingFeatures} />
      <TestimonialCarousel data={homepageData.testimonials} />
      <RcmFAQ data={data.faq} />
    </div>
  );
}
