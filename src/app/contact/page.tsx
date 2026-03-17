import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import ContactPageContent from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | JS Hospital Narhe, Pune",
  description: "Contact JS Hospital, Narhe, Pune. Call, WhatsApp, email, or visit us. 24/7 emergency services available. Get directions on Google Maps.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        badge="GET IN TOUCH"
        title="Contact JS Hospital"
        subtitle="We're here to help. Reach out to us by phone, WhatsApp, email, or visit us in person — we're open 24/7."
        breadcrumb="Contact"
      />
      <ContactPageContent />
    </PageLayout>
  );
}
