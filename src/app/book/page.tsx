import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import BookPageContent from "@/components/sections/BookPage";

export const metadata: Metadata = {
  title: "Book Appointment | JS Hospital Narhe, Pune",
  description: "Book your appointment at JS Hospital, Narhe, Pune. Easy online booking with doctor selection, department choice, and instant confirmation. Open 24/7.",
};

export default function BookPage() {
  return (
    <PageLayout>
      <PageHero
        badge="BOOK APPOINTMENT"
        title="Schedule Your Visit"
        subtitle="Book your appointment online in just a few easy steps. Our team will confirm your appointment within 2 hours."
        breadcrumb="Book Appointment"
      />
      <BookPageContent />
    </PageLayout>
  );
}
