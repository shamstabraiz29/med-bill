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
import { getOutsourceMedicalBillingData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Outsource Medical Billing | BellMedEx",
  description:
    "Outsource medical billing services at just 2.49%. Experience thorough compliance, robust technology, and faster reimbursements with BellMedEx.",
};

export default async function OutsourceMedicalBillingPage() {
  const data = await getOutsourceMedicalBillingData();

  return (
    <div className="relative min-h-screen">
      <OutsourceMedicalBillingHero data={data.hero} />
      <OutsourceMedicalBillingIntro data={data.intro} />
      <OutsourceMedicalBillingComparison data={data.comparison} />
      <OutsourceMedicalBillingSpecialists data={data.specialists} />
      <OutsourceMedicalBillingPracticeEfficiency data={data.practiceEfficiency} />
      <OutsourceMedicalBillingSolutions data={data.solutions} />
      <OutsourceMedicalBillingGetStartedCta data={data.getStartedCta} />
      <OutsourceMedicalBillingTechnologyExpertise data={data.technologyExpertise} />
    </div>
  );
}
