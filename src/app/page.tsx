import Hero from "@/components/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import MedicalClaimsService from "@/components/home/MedicalClaimsService";
import SpecialtyBillingSection from "@/components/home/SpecialtyBillingSection";
import TrustStatsSection from "@/components/home/TrustStatsSection";
import BillingCTASection from "@/components/home/BillingCTASection";
import DoctorsTeamSection from "@/components/home/DoctorsTeamSection";
import NationwidePricingSection from "@/components/home/NationwidePricingSection";
import PricingQuoteSection from "@/components/home/PricingQuoteSection";
import ProviderChallengesSection from "@/components/home/ProviderChallengesSection";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <ServicesOverview />
      <MedicalClaimsService />
      <TrustStatsSection />
      <BillingCTASection />
      <DoctorsTeamSection />
      <ProviderChallengesSection />
      <SpecialtyBillingSection />
      <NationwidePricingSection />
      <PricingQuoteSection />
      <TestimonialCarousel />
      <FAQSection />
    </div>
  );
}
