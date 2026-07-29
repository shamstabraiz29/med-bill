import type { Metadata } from "next";
import {
  DenialManagementServicesAboutSection,
  DenialManagementServicesAppealCtaSection,
  DenialManagementServicesBenefitsSection,
  DenialManagementServicesCodeInsightCtaSection,
  DenialManagementServicesCodeInsightHowItWorksSection,
  DenialManagementServicesCodeInsightSection,
  DenialManagementServicesContactSupportSection,
  DenialManagementServicesDeniedServicesBannerSection,
  DenialManagementServicesDenialsCtaSection,
  DenialManagementServicesHelpSection,
  DenialManagementServicesHero,
  DenialManagementServicesOfferingsSection,
  DenialManagementServicesOutsourceSection,
  DenialManagementServicesPhysicianTestimonialsSection,
  DenialManagementServicesRevenueSection,
  DenialManagementServicesStatsSection,
  DenialManagementServicesUnderpaymentRecoverySection,
  DenialManagementServicesWhoWeServeSection,
  DenialManagementServicesWorkflowSection,
} from "@/components/denial-management-services";
import { getDenialManagementServicesData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Denial Management Services | BellMedEx",
  description:
    "Get paid for denied medical coding claims and patient bills. BellMedEx provides effective denial management services with coding experts, appeal specialists, and denial prevention tactics.",
};

export default async function DenialManagementServicesPage() {
  const data = await getDenialManagementServicesData();

  return (
    <div className="relative min-h-screen">
      <DenialManagementServicesHero data={data.hero} />
      <DenialManagementServicesStatsSection data={data.stats} />
      <DenialManagementServicesAboutSection data={data.about} />
      <DenialManagementServicesBenefitsSection data={data.benefits} />
      <DenialManagementServicesAppealCtaSection data={data.appealCta} />
      <DenialManagementServicesHelpSection data={data.help} />
      <DenialManagementServicesWhoWeServeSection data={data.whoWeServe} />
      <DenialManagementServicesRevenueSection data={data.revenue} />
      <DenialManagementServicesOfferingsSection data={data.serviceOfferings} />
      <DenialManagementServicesOutsourceSection data={data.outsource} />
      <DenialManagementServicesDenialsCtaSection data={data.denialsCta} />
      <DenialManagementServicesWorkflowSection data={data.workflow} />
      <DenialManagementServicesCodeInsightSection data={data.codeInsight} />
      <DenialManagementServicesCodeInsightHowItWorksSection data={data.codeInsightHowItWorks} />
      <DenialManagementServicesCodeInsightCtaSection data={data.codeInsightCta} />
      <DenialManagementServicesUnderpaymentRecoverySection data={data.underpaymentRecovery} />
      <DenialManagementServicesPhysicianTestimonialsSection data={data.physicianTestimonials} />
      <DenialManagementServicesDeniedServicesBannerSection data={data.deniedServicesBanner} />
      <DenialManagementServicesContactSupportSection data={data.contactSupport} />
    </div>
  );
}
