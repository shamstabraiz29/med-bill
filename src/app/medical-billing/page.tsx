import type { Metadata } from "next";
import { 
  ConsultationSection, 
  MedicalBillingWhyChooseUs 
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
    </div>
  );
}
