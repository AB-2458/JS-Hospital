"use client";
import React from 'react';
import Link from 'next/link';
import RevealWrapper from '../ui/RevealWrapper';

const doctors = [
  {
    name: "Dr. Umesh Jadhav",
    title: "Founder & Chief Consultant",
    specialization: "General Surgery, Urology & Laparoscopy",
    education: ["MBBS", "MS (Surgery)"],
    experience: "15+ Years",
    bio: "Founder and director of JS Hospital, Dr. Umesh Jadhav is renowned for his expertise in general surgery and kidney stone treatment. His patient-first approach and transparent communication have earned the trust of thousands of families in Narhe and surrounding areas.",
    availability: "Mon – Sat, 10 AM – 8 PM",
    initials: "UJ",
    featured: true,
    image: "/images/UmeshJadhav.png",
  },
  {
    name: "Dr. Sneha Kulkarni",
    title: "Senior Consultant",
    specialization: "Obstetrics & Gynecology",
    education: ["MBBS", "MS (OB-GYN)"],
    experience: "12+ Years",
    bio: "Dr. Sneha specializes in prenatal care, high-risk pregnancies, and gynecological surgeries. Her calm and reassuring approach helps expectant mothers feel confident and supported throughout their journey.",
    availability: "Mon – Fri, 11 AM – 6 PM",
    initials: "SK",
    featured: false,
  },
  {
    name: "Dr. Rajesh Patil",
    title: "Consultant",
    specialization: "General Medicine & Diabetology",
    education: ["MBBS", "MD (Medicine)"],
    experience: "10+ Years",
    bio: "Dr. Rajesh provides expert care for a wide range of medical conditions including diabetes, hypertension, respiratory illnesses, and infections. He is known for his thorough diagnostic approach and personalized treatment plans.",
    availability: "Mon – Sat, 9 AM – 5 PM",
    initials: "RP",
    featured: false,
  },
  {
    name: "Dr. Anil Deshmukh",
    title: "Consultant",
    specialization: "Orthopedics & Trauma",
    education: ["MBBS", "MS (Ortho)"],
    experience: "8+ Years",
    bio: "Dr. Anil specializes in fracture management, joint disorders, and sports injuries. He combines modern surgical techniques with comprehensive physiotherapy plans for optimal patient recovery.",
    availability: "Tue – Sat, 10 AM – 6 PM",
    initials: "AD",
    featured: false,
  },
  {
    name: "Dr. Priya Sharma",
    title: "Consultant",
    specialization: "Pediatrics & Neonatology",
    education: ["MBBS", "MD (Pediatrics)"],
    experience: "9+ Years",
    bio: "Dr. Priya provides compassionate care for children from newborns to adolescents. She specializes in vaccination programs, growth monitoring, and management of childhood illnesses with a gentle approach that puts children at ease.",
    availability: "Mon – Fri, 10 AM – 4 PM",
    initials: "PS",
    featured: false,
  },
  {
    name: "Dr. Amit Joshi",
    title: "Consultant",
    specialization: "Anesthesiology & Critical Care",
    education: ["MBBS", "MD (Anesthesia)"],
    experience: "11+ Years",
    bio: "Dr. Amit manages anesthesia services for all surgeries and oversees the ICU and critical care unit. His expertise ensures patient safety during surgical procedures and critical illness management.",
    availability: "Available On-call 24/7",
    initials: "AJ",
    featured: false,
  },
];

function DoctorCard({ doctor, index }: { doctor: typeof doctors[0], index: number }) {
  const delayClass = `reveal-delay-${(index % 4) + 1}`;
  return (
    <RevealWrapper className={`dp-card ${doctor.featured ? 'dp-card-featured' : ''}`} delayClass={delayClass}>
      <div className="dp-card-photo">
        {doctor.image ? (
          <img src={doctor.image} alt={doctor.name} className="dp-photo-img" />
        ) : (
          <div className="dp-photo-placeholder">
            <span>{doctor.initials}</span>
          </div>
        )}
        {doctor.featured && <span className="dp-featured-badge">Lead Doctor</span>}
      </div>
      <div className="dp-card-body">
        <h3 className="dp-name">{doctor.name}</h3>
        <p className="dp-role">{doctor.title}</p>
        <p className="dp-spec">{doctor.specialization}</p>

        <div className="dp-tags">
          {doctor.education.map((ed, i) => (
            <span key={i} className="dp-tag">{ed}</span>
          ))}
          <span className="dp-tag dp-tag-exp">{doctor.experience}</span>
        </div>

        <p className="dp-bio">{doctor.bio}</p>

        <div className="dp-availability">
          <span className="dp-avail-dot"></span>
          <span>{doctor.availability}</span>
        </div>

        <Link href="/#appointment" className="btn btn-primary btn-sm dp-book-btn">
          📅 Book Consultation
        </Link>
      </div>
    </RevealWrapper>
  );
}

export default function DoctorsContent() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Featured Doctor — Full Width */}
        <DoctorCard doctor={doctors[0]} index={0} />

        {/* Other Doctors — Grid */}
        <div className="dp-grid">
          {doctors.slice(1).map((doc, i) => (
            <DoctorCard key={i + 1} doctor={doc} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
