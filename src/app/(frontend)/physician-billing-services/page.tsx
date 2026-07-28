import type { Metadata } from "next";
import {
  PhysicianBillingServicesDemoCta,
  PhysicianBillingServicesExploreFeatures,
  PhysicianBillingServicesHero,
  PhysicianBillingServicesMipsSection,
  PhysicianBillingServicesSplitSections,
} from "@/components/physician-billing-services";

export const metadata: Metadata = {
  title: "Physician Billing Services | BellMedEx",
  description:
    "BellMedEx Physician Billing Services help physicians obtain rightful payments through accurate claim filing, coding, denial resolution, and follow-up.",
};

export default function PhysicianBillingServicesPage() {
  return (
    <div className="relative min-h-screen">
      <PhysicianBillingServicesHero />
      <PhysicianBillingServicesSplitSections />
      <PhysicianBillingServicesMipsSection />
      <PhysicianBillingServicesExploreFeatures />
      <PhysicianBillingServicesDemoCta />
    </div>
  );
}
