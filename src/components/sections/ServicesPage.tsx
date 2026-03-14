"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import RevealWrapper from '../ui/RevealWrapper';

const services = [
  {
    icon: "🪨",
    title: "Kidney Stone Treatment",
    shortDesc: "Advanced, minimally invasive procedures for fast and painless kidney stone removal.",
    fullDesc: "Our urology team uses state-of-the-art lithotripsy and laser technology to treat kidney stones of all sizes. We offer non-surgical Extracorporeal Shock Wave Lithotripsy (ESWL), ureteroscopy, and percutaneous nephrolithotomy (PCNL) depending on stone size and location. Most patients are discharged within 24–48 hours with minimal discomfort.",
    highlights: ["Laser Lithotripsy", "PCNL Surgery", "Same-day Discharge", "Post-treatment Follow-up"],
    featured: true,
  },
  {
    icon: "🤰",
    title: "Pregnancy & Maternity Care",
    shortDesc: "Comprehensive prenatal, delivery, and postnatal care for a safe and comfortable motherhood journey.",
    fullDesc: "From the first trimester to postpartum recovery, our experienced gynecologists and trained nursing staff ensure a safe and supportive experience for every mother. We offer routine ultrasound monitoring, high-risk pregnancy management, normal and cesarean deliveries in modern labor rooms, and newborn care. Our lactation counseling and postpartum support help new mothers transition smoothly.",
    highlights: ["Prenatal Screening", "Normal & C-Section Delivery", "NICU Available", "Lactation Support"],
    featured: true,
  },
  {
    icon: "🩺",
    title: "General Medicine",
    shortDesc: "Expert diagnosis and treatment for a wide range of common and chronic health conditions.",
    fullDesc: "Our general medicine department treats conditions like fever, infections, diabetes, hypertension, respiratory illnesses, and digestive disorders. Our physicians take a holistic approach — combining thorough clinical examination, accurate diagnostics, and personalized treatment plans. Preventive health checkup packages are also available.",
    highlights: ["Chronic Disease Management", "Health Checkups", "Fever & Infections", "Diabetes Care"],
    featured: false,
  },
  {
    icon: "🔪",
    title: "General & Laparoscopic Surgery",
    shortDesc: "Expert surgical care including minimally invasive laparoscopic procedures for faster recovery.",
    fullDesc: "Our surgical team performs a wide range of procedures including appendectomy, hernia repair, gallbladder removal (cholecystectomy), and abscess drainage. We specialize in laparoscopic (keyhole) surgery, which means smaller incisions, less pain, and faster recovery times compared to traditional open surgery.",
    highlights: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Minimal Scarring"],
    featured: false,
  },
  {
    icon: "👶",
    title: "Pediatrics & Neonatology",
    shortDesc: "Compassionate healthcare for newborns, infants, and children with experienced pediatricians.",
    fullDesc: "Our pediatrics department provides comprehensive care for children from birth through adolescence. Services include routine vaccinations, growth monitoring, treatment of childhood infections, nutritional counseling, and management of chronic conditions like asthma. Our neonatal care unit is equipped to handle premature and high-risk newborns.",
    highlights: ["Vaccination Programs", "Growth Monitoring", "Newborn Care", "Child Nutrition"],
    featured: false,
  },
  {
    icon: "🦴",
    title: "Orthopedics & Trauma",
    shortDesc: "Specialized treatment for bone, joint, and musculoskeletal conditions including fracture care.",
    fullDesc: "From sports injuries to age-related joint problems, our orthopedic specialists provide expert care. We treat fractures, dislocations, ligament injuries, arthritis, and spinal conditions. Our trauma unit is equipped for emergency fracture management with plaster casting, splinting, and surgical fixation when needed.",
    highlights: ["Fracture Management", "Joint Care", "Sports Injuries", "Physiotherapy"],
    featured: false,
  },
  {
    icon: "🔬",
    title: "Diagnostics & Pathology Lab",
    shortDesc: "In-house pathology lab and diagnostic imaging for accurate, fast results.",
    fullDesc: "Our fully equipped diagnostic center offers blood tests, urine analysis, X-ray, ultrasound, ECG, and other imaging services. Results are available quickly to support timely diagnosis and treatment. Our lab follows strict quality control measures and is staffed by experienced pathologists and technicians.",
    highlights: ["Blood & Urine Tests", "X-Ray & Ultrasound", "ECG", "Quick Reports"],
    featured: false,
  },
  {
    icon: "🚑",
    title: "24/7 Emergency & Critical Care",
    shortDesc: "Round-the-clock emergency services with rapid response and fully-equipped trauma care.",
    fullDesc: "Our emergency department operates 24 hours a day, 7 days a week, with on-duty doctors and nurses ready to handle any medical emergency. From accident trauma and cardiac emergencies to acute abdominal pain and breathing difficulties — our rapid-response team is trained to stabilize, diagnose, and treat critical patients swiftly. Ambulance service is available on call.",
    highlights: ["24/7 On-duty Doctors", "Ambulance Service", "Trauma Stabilization", "ICU Backup"],
    featured: false,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [expanded, setExpanded] = useState(false);
  const delayClass = `reveal-delay-${(index % 4) + 1}`;

  return (
    <RevealWrapper className={`sp-card ${service.featured ? 'sp-card-featured' : ''}`} delayClass={delayClass}>
      <div className="sp-card-header">
        <div className={`sp-card-icon ${service.featured ? 'sp-card-icon-featured' : ''}`}>
          {service.icon}
        </div>
        <h3 className="sp-card-title">{service.title}</h3>
        <p className="sp-card-desc">{service.shortDesc}</p>
      </div>

      {expanded && (
        <div className="sp-card-details">
          <p className="sp-card-full-desc">{service.fullDesc}</p>
          <div className="sp-card-highlights">
            {service.highlights.map((h, i) => (
              <span key={i} className="sp-highlight-tag">✓ {h}</span>
            ))}
          </div>
        </div>
      )}

      <div className="sp-card-footer">
        <button className="sp-learn-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less ↑' : 'Learn More →'}
        </button>
        <Link href="/#appointment" className="sp-book-link">Book Now</Link>
      </div>
    </RevealWrapper>
  );
}

export default function ServicesContent() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="sp-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealWrapper className="sp-bottom-cta">
          <div className="sp-cta-inner">
            <div>
              <h3 className="sp-cta-title">Need Help Choosing the Right Treatment?</h3>
              <p className="sp-cta-desc">Our team is happy to guide you. Call us or book an appointment for a consultation.</p>
            </div>
            <div className="sp-cta-actions">
              <a href="tel:+919876543210" className="btn btn-primary">📞 Call Now</a>
              <Link href="/#appointment" className="btn btn-secondary">📅 Book Appointment</Link>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
