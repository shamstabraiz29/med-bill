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
import { getMedicalBillingSoftwareData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Medical Billing Software | BellMedEx",
  description:
    "Automate billing workflow, eliminate errors, and maximize reimbursement with BellMedEx medical billing software. 100% free to try. No credit card required.",
};

export default async function MedicalBillingSoftwarePage() {
  const data = await getMedicalBillingSoftwareData();

  return (
    <div className="flex min-h-screen flex-col py-4 sm:py-8">
      <MedicalBillingSoftwareHero data={data.hero} />
      <MedicalBillingSoftwareDelivers data={data.delivers} />
      <MedicalBillingSoftwareInAction data={data.inAction} />
      <MedicalBillingSoftwareNewFeatures data={data.newFeatures} />
      <MedicalBillingSoftwareGrowthTools data={data.growthTools} />
      <MedicalBillingSoftwareTestimonials data={data.testimonials} />
      <MedicalBillingSoftwareSignUpCta data={data.signUpCta} />
    </div>
  );
}
