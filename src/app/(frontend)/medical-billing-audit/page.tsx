import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Medical Billing & Coding Audit Services | BellMedEx",
  description:
    "BellMedEx offers healthcare coding and compliance audit services. Our experienced billing auditors review billing codes for accuracy, compliance, and optimization.",
};

export default function MedicalBillingAuditPage() {
  return (
    <div className="flex min-h-screen flex-col py-4 sm:py-8">
      <MedicalBillingAuditHero />
      <MedicalBillingAuditOverview />
      <MedicalBillingAuditSolutions />
      <MedicalBillingAuditRecordsCta /> 
      <MedicalBillingAuditProblemsSolutions />
      <MedicalBillingAuditOptimizeProcesses />
      <MedicalBillingAuditSolutionsToDate />
      <MedicalBillingAuditPostAuditReports />
      <MedicalBillingAuditChartReviews />
      <MedicalBillingAuditClaimAccuracyCta /> 
    </div>
  );
}
