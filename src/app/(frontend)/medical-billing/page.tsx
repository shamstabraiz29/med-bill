import type { Metadata } from "next";
import {
  ConsultationSection,
  MedicalBillingWhyChooseUs,
  MedicalBillingWorkflow,
  MedicalBillingWhatWeOffer,
  MedicalBillingConsultingServices,
  MedicalBillingConsultancyBenefits,
  MedicalBillingConsultancyFeatures,
  MedicalBillingCodingConsultants,
  MedicalBillingSpecialtySolutions,
  MedicalBillingPartnersSuccess,
  MedicalBillingRevenueCta,
  MedicalBillingFAQ,
} from "@/components/medical-billing";

export const metadata: Metadata = {
  title: "Medical Billing Consulting Services | BellMedEx",
  description: "Schedule a free consultation with BellMedEx professional medical billing consultants. Accelerate cash flow, optimize billing processes, and reduce claim denials.",
};

export default function MedicalBillingPage() {
  return (
    <div className="flex flex-col min-h-screen py-4 sm:py-8 space-y-8 sm:space-y-12">
      {/* Consultation & Schedule Form Section (From Image 1) */}
      <ConsultationSection />

      {/* RCM Highlights & Why Choose Us Section (From Image 2) */}
      <MedicalBillingWhyChooseUs />

      {/* Billing Process Workflow Section */}
      <MedicalBillingWorkflow />

      {/* What We Offer Section */}
      <MedicalBillingWhatWeOffer />

      {/* Smart Billing Advisory Services Section */}
      <MedicalBillingConsultingServices />

      {/* Consultancy Benefits Section */}
      <MedicalBillingConsultancyBenefits />

      {/* Consultancy Features Section */}
      <MedicalBillingConsultancyFeatures />

      {/* Medical Coding Consultants Section */}
      <MedicalBillingCodingConsultants />

      {/* All Specialties Lead Capture Section */}
      <MedicalBillingSpecialtySolutions />

      {/* Partners in Success Section */}
      <MedicalBillingPartnersSuccess />

      {/* Revenue Recovery CTA Section */}
      <MedicalBillingRevenueCta />
    </div>
  );
}
