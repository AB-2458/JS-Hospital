import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import ReviewPageContent from "@/components/sections/ReviewPage";

export const metadata: Metadata = {
  title: "Patient Reviews | JS Hospital Narhe, Pune",
  description: "Read real patient reviews and testimonials about JS Hospital, Narhe, Pune. 4.5★ rated on Google with 247+ reviews. Trusted healthcare since 2019.",
};

export default function ReviewPage() {
  return (
    <PageLayout>
      <PageHero
        badge="PATIENT REVIEWS"
        title="What Our Patients Say"
        subtitle="Real stories from real patients. Our care speaks through the trust of those we've served."
        breadcrumb="Reviews"
      />
      <ReviewPageContent />
    </PageLayout>
  );
}
