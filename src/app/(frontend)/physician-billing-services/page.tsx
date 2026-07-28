import type { Metadata } from "next";
import {
  PhysicianBillingServicesDemoCta,
  PhysicianBillingServicesExploreFeatures,
  PhysicianBillingServicesHero,
  PhysicianBillingServicesMipsSection,
  PhysicianBillingServicesSplitSections,
} from "@/components/physician-billing-services";
import { getPhysicianBillingServicesData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Physician Billing Services | BellMedEx",
  description:
    "BellMedEx Physician Billing Services help physicians obtain rightful payments through accurate claim filing, coding, denial resolution, and follow-up.",
};

export default async function PhysicianBillingServicesPage() {
  const data = await getPhysicianBillingServicesData();

  return (
    <div className="relative min-h-screen">
      <PhysicianBillingServicesHero data={data.hero} />
      <PhysicianBillingServicesSplitSections data={data.splitSections} />
      <PhysicianBillingServicesMipsSection data={data.mipsSection} />
      <PhysicianBillingServicesExploreFeatures data={data.exploreFeatures} />
      <PhysicianBillingServicesDemoCta data={data.demoCta} />
    </div>
  );
}
