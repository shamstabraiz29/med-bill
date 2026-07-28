import type { Metadata } from "next";
import {
  LargePracticesAddOnServices,
  LargePracticesAuditMetricsSection,
  LargePracticesBillingFlowchart,
  LargePracticesBillingInfrastructure,
  LargePracticesCommonGoals,
  LargePracticesHero,
  LargePracticesKpisSection,
  LargePracticesPersonalizedServices,
  LargePracticesWorkProcessSection,
} from "@/components/large-practices";
import { getLargePracticesData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Large Practice Billing Services | BellMedEx",
  description:
    "BellMedEx billing services for large practices help reduce claim denials by 97%, mitigate lost revenue, and save up to 30-60% on annual payroll. Available in all 50 states.",
};

export default async function LargePracticesPage() {
  const data = await getLargePracticesData();

  return (
    <div className="relative min-h-screen">
      <LargePracticesHero data={data.hero} />
      <LargePracticesCommonGoals data={data.commonGoals} />
      <LargePracticesBillingInfrastructure data={data.infrastructure} />
      <LargePracticesKpisSection data={data.kpis} />
      <LargePracticesAuditMetricsSection data={data.auditMetrics} />
      <LargePracticesPersonalizedServices data={data.personalizedServices} />
      <LargePracticesBillingFlowchart data={data.billingFlowchart} />
      <LargePracticesWorkProcessSection data={data.workProcess} />
      <LargePracticesAddOnServices data={data.addOnServices} />
    </div>
  );
}
