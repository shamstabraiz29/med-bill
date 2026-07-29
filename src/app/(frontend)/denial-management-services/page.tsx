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

export const metadata: Metadata = {
  title: "Denial Management Services | BellMedEx",
  description:
    "Get paid for denied medical coding claims and patient bills. BellMedEx provides effective denial management services with coding experts, appeal specialists, and denial prevention tactics.",
};

export default function DenialManagementServicesPage() {
  return (
    <div className="relative min-h-screen">
      <DenialManagementServicesHero />
      <DenialManagementServicesStatsSection />
      <DenialManagementServicesAboutSection />
      <DenialManagementServicesHelpSection />
      <DenialManagementServicesWhoWeServeSection />
      <DenialManagementServicesRevenueSection />
      <DenialManagementServicesOfferingsSection />
      <DenialManagementServicesOutsourceSection />
      <DenialManagementServicesWorkflowSection />
      <DenialManagementServicesCodeInsightSection />
      <DenialManagementServicesCodeInsightHowItWorksSection />
      <DenialManagementServicesCodeInsightCtaSection />
      <DenialManagementServicesBenefitsSection />
      <DenialManagementServicesDenialsCtaSection />
      <DenialManagementServicesAppealCtaSection />
      <DenialManagementServicesUnderpaymentRecoverySection />
      <DenialManagementServicesPhysicianTestimonialsSection />
      <DenialManagementServicesDeniedServicesBannerSection />
      <DenialManagementServicesContactSupportSection />
    </div>
  );
}
