import type { Metadata } from "next";
import {
  MedicalBillingSoftwareDelivers,
  MedicalBillingSoftwareGrowthTools,
  MedicalBillingSoftwareHero,
  MedicalBillingSoftwareInAction,
  MedicalBillingSoftwareNewFeatures,
  MedicalBillingSoftwareSignUpCta,
  MedicalBillingSoftwareTestimonials,
} from "@/components/medical-billing-software";

export const metadata: Metadata = {
  title: "Medical Billing Software | BellMedEx",
  description:
    "Automate billing workflow, eliminate errors, and maximize reimbursement with BellMedEx medical billing software. 100% free to try. No credit card required.",
};

export default function MedicalBillingSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col py-4 sm:py-8">
      <MedicalBillingSoftwareHero />
      <MedicalBillingSoftwareDelivers />
      <MedicalBillingSoftwareInAction />
      <MedicalBillingSoftwareNewFeatures />
      <MedicalBillingSoftwareGrowthTools />
      <MedicalBillingSoftwareTestimonials />
      <MedicalBillingSoftwareSignUpCta />
    </div>
  );
}
