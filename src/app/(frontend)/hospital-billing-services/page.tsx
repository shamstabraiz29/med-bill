import type { Metadata } from "next";
import {
  HospitalBillingServicesAffordableSection,
  HospitalBillingServicesAssessmentCtaSection,
  HospitalBillingServicesCodingSection,
  HospitalBillingServicesComplianceChecklistSection,
  HospitalBillingServicesExperienceSection,
  HospitalBillingServicesFaqSection,
  HospitalBillingServicesHero,
  HospitalBillingServicesNeedSection,
  HospitalBillingServicesOverviewSection,
  HospitalBillingServicesPatientManagementSection,
  HospitalBillingServicesPromiseSection,
  HospitalBillingServicesRcmSection,
  HospitalBillingServicesResultsSection,
  HospitalBillingServicesScheduleCallSection,
  HospitalBillingServicesSoftwareSection,
  HospitalBillingServicesTeamSection,
  HospitalBillingServicesTestimonialsSection,
  HospitalBillingServicesTransformSection,
  HospitalBillingServicesWeAlsoDoSection,
  HospitalBillingServicesWhatAreSection,
  HospitalBillingServicesWhySection,
} from "@/components/hospital-billing-services";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";

export const metadata: Metadata = {
  title: "Hospital Billing Services | BellMedEx",
  description:
    "Outsource hospital billing, coding, and RCM to BellMedEx. Customized financial solutions for hospitals as low as 2.49% of monthly collections with 10+ years of experience.",
};

export default function HospitalBillingServicesPage() {
  const data = defaultHospitalBillingServicesData;

  return (
    <div className="relative min-h-screen">
      <HospitalBillingServicesHero data={data.hero} />
      <HospitalBillingServicesResultsSection data={data.results} />
      <HospitalBillingServicesOverviewSection data={data.overview} />
      <HospitalBillingServicesAssessmentCtaSection data={data.assessmentCta} />
      <HospitalBillingServicesExperienceSection data={data.experience} />
      <HospitalBillingServicesWhatAreSection data={data.whatAre} />
      <HospitalBillingServicesWeAlsoDoSection data={data.weAlsoDo} />
      <HospitalBillingServicesNeedSection data={data.need} />
      <HospitalBillingServicesTeamSection data={data.team} />
      <HospitalBillingServicesAffordableSection data={data.affordable} />
      <HospitalBillingServicesRcmSection data={data.rcm} />
      <HospitalBillingServicesCodingSection data={data.coding} />
      <HospitalBillingServicesComplianceChecklistSection data={data.complianceChecklist} />
      <HospitalBillingServicesPatientManagementSection data={data.patientManagement} />
      <HospitalBillingServicesTransformSection data={data.transform} />
      <HospitalBillingServicesSoftwareSection data={data.software} />
      <HospitalBillingServicesWhySection data={data.why} />
      <HospitalBillingServicesScheduleCallSection data={data.scheduleCall} />
      <HospitalBillingServicesPromiseSection data={data.promise} />
      <HospitalBillingServicesTestimonialsSection data={data.testimonials} />
      <HospitalBillingServicesFaqSection data={data.faq} />
    </div>
  );
}
