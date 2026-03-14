import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import InsuranceContent from '@/components/sections/InsurancePage';

export const metadata: Metadata = {
  title: "Insurance Partners | JS Hospital Narhe, Pune",
  description: "JS Hospital Narhe, Pune accepts cashless treatment from all major insurance providers. View our complete list of accepted health insurance companies.",
};

export default function InsurancePage() {
  return (
    <PageLayout>
      <PageHero
        badge="Insurance Partners"
        title="Cashless Insurance Accepted"
        subtitle="We have partnered with leading health insurance companies so you can focus on your recovery — not your bills. Hassle-free cashless treatment available."
        breadcrumb="Insurance"
      />
      <InsuranceContent />
    </PageLayout>
  );
}
