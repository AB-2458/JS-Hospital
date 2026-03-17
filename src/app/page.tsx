import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import DoctorHighlight from '@/components/sections/DoctorHighlight';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Appointment from '@/components/sections/Appointment';
import EmergencyCta from '@/components/sections/EmergencyCta';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <DoctorHighlight />
      <WhyChooseUs />
      <Testimonials />
      <Appointment />
      <Contact />
      <EmergencyCta />
      <Footer />
      <FloatingActions />
    </>
  );
}
