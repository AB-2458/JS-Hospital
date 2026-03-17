import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ServicesContent from '@/components/sections/ServicesPage';

export const metadata: Metadata = {
  title: "Our Services | JS Hospital Narhe, Pune",
  description: "Explore the full range of medical services offered at JS Hospital — from kidney stone treatment and pregnancy care to general surgery, pediatrics, orthopedics, diagnostics, and 24/7 emergency care.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Our Services"
        title="Comprehensive Medical Services"
        subtitle="Expert treatment across multiple specialties with state-of-the-art facilities, experienced doctors, and compassionate care — all under one roof."
        breadcrumb="Services"
      />
      <ServicesContent />
    </PageLayout>
  );
}
