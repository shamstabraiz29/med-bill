import type { Metadata } from "next";
import {
  OutsourceMedicalBillingComparison,
  OutsourceMedicalBillingGetStartedCta,
  OutsourceMedicalBillingHero,
  OutsourceMedicalBillingIntro,
  OutsourceMedicalBillingPracticeEfficiency,
  OutsourceMedicalBillingSolutions,
  OutsourceMedicalBillingSpecialists,
  OutsourceMedicalBillingTechnologyExpertise,
} from "@/components/outsource-medical-billing";

export const metadata: Metadata = {
  title: "Outsource Medical Billing | BellMedEx",
  description:
    "Outsource medical billing services at just 2.49%. Experience thorough compliance, robust technology, and faster reimbursements with BellMedEx.",
};

export default function OutsourceMedicalBillingPage() {
  return (
    <div className="relative min-h-screen">
      <OutsourceMedicalBillingHero />
      <OutsourceMedicalBillingIntro />
      <OutsourceMedicalBillingComparison />
      <OutsourceMedicalBillingSpecialists />
      <OutsourceMedicalBillingPracticeEfficiency />
      <OutsourceMedicalBillingSolutions />
      <OutsourceMedicalBillingGetStartedCta />
      <OutsourceMedicalBillingTechnologyExpertise />
    </div>
  );
}
