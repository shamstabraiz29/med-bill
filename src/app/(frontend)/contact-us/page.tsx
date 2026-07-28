import type { Metadata } from "next";
import ContactHero from "@/components/contact-us/ContactHero";
import ContactFormSection from "@/components/contact-us/ContactFormSection";
import ContactFaq from "@/components/contact-us/ContactFaq";
import ContactCTA from "@/components/contact-us/ContactCTA";
import { getContactUsData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Contact Us | BellMedEx Healthcare Revenue Cycle Management",
  description:
    "Get in touch with BellMedEx RCM experts. Call (888) 500-BILL or email info@bellmedex.com to request a free medical billing audit or consultation.",
};

export default async function ContactUsPage() {
  const data = await getContactUsData();

  return (
    <main className="flex flex-col min-h-screen bg-transparent pb-12 sm:pb-16">
      <ContactHero data={data.hero} />
      <ContactFormSection data={data.formSection} />
      <ContactFaq data={data.faq} />
      <ContactCTA data={data.cta} />
    </main>
  );
}
