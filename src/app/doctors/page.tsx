import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import DoctorsContent from '@/components/sections/DoctorsPage';

export const metadata: Metadata = {
  title: "Our Doctors | JS Hospital Narhe, Pune",
  description: "Meet the expert medical team at JS Hospital Narhe, Pune. Experienced doctors specializing in surgery, urology, gynecology, pediatrics, orthopedics, and more.",
};

export default function DoctorsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Our Team"
        title="Meet Our Expert Doctors"
        subtitle="A dedicated team of highly qualified and experienced medical professionals committed to providing the best healthcare to our patients."
        breadcrumb="Doctors"
      />
      <DoctorsContent />
    </PageLayout>
  );
}
