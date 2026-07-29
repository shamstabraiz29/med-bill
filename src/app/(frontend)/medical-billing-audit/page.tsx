import type { Metadata } from "next";
import { getMedicalBillingAuditData } from "@/lib/payload";
import {
  MedicalBillingAuditChartReviews,
  MedicalBillingAuditClaimAccuracyCta,
  MedicalBillingAuditHero,
  MedicalBillingAuditOverview,
  MedicalBillingAuditOptimizeProcesses,
  MedicalBillingAuditPostAuditReports,
  MedicalBillingAuditProblemsSolutions,
  MedicalBillingAuditRecordsCta,
  MedicalBillingAuditSolutions,
  MedicalBillingAuditSolutionsToDate,
} from "@/components/medical-billing-audit";

/**
 * Dynamic SEO metadata generated from Payload CMS Medical Billing Audit global.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getMedicalBillingAuditData();
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

export default async function MedicalBillingAuditPage() {
  const data = await getMedicalBillingAuditData();

  return (
    <div className="relative min-h-screen">
      <MedicalBillingAuditHero data={data.hero} />
      <MedicalBillingAuditOverview data={data.overview} />
      <MedicalBillingAuditSolutions data={data.solutions} />
      <MedicalBillingAuditRecordsCta data={data.recordsCta} />
      <MedicalBillingAuditProblemsSolutions data={data.problemsSolutions} />
      <MedicalBillingAuditOptimizeProcesses data={data.optimizeProcesses} />
      <MedicalBillingAuditSolutionsToDate data={data.solutionsToDate} />
      <MedicalBillingAuditPostAuditReports data={data.postAuditReports} />
      <MedicalBillingAuditChartReviews data={data.chartReviews} />
      <MedicalBillingAuditClaimAccuracyCta data={data.claimAccuracyCta} />
    </div>
  );
}
