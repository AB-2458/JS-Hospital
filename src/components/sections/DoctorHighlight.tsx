"use client";
import React from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function DoctorHighlight() {
  return (
    <section className="section-padding section-bg-alt" id="doctor">
      <div className="container">
        <RevealWrapper className="section-header">
          <span className="section-badge">Our Expert</span>
          <h2 className="section-title">Meet Dr. Umesh Jadhav</h2>
          <p className="section-subtitle">Leading our team with expertise, compassion, and a commitment to excellence in patient care.</p>
        </RevealWrapper>
        <RevealWrapper className="doctor-card-large">
          <img src="/images/doctor.jpg" alt="Dr. Umesh Jadhav — Senior Doctor at JS Hospital Narhe Pune" className="doctor-image" width="380" height="440" loading="lazy" />
          <div className="doctor-info">
            <h3 className="doctor-name">Dr. Umesh Jadhav</h3>
            <p className="doctor-title">Senior Consultant & Hospital Director</p>
            <div className="doctor-qualifications">
              <span className="doctor-qual-tag">MBBS</span>
              <span className="doctor-qual-tag">MS (Surgery)</span>
              <span className="doctor-qual-tag">General Surgery</span>
              <span className="doctor-qual-tag">Urology</span>
            </div>
            <p className="doctor-bio">
              Dr. Umesh Jadhav is the founding doctor and director of JS Hospital. With over 15 years of medical experience,
              he specializes in general surgery and kidney stone treatment. Known for his patient-first approach and clear
              communication, Dr. Jadhav has earned the trust of thousands of families in Narhe and surrounding areas.
            </p>
            <div className="doctor-stats">
              <div className="doctor-stat">
                <div className="doctor-stat-num">15+</div>
                <div className="doctor-stat-label">Years Experience</div>
              </div>
              <div className="doctor-stat">
                <div className="doctor-stat-num">5000+</div>
                <div className="doctor-stat-label">Patients Treated</div>
              </div>
              <div className="doctor-stat">
                <div className="doctor-stat-num">2000+</div>
                <div className="doctor-stat-label">Surgeries</div>
              </div>
            </div>
            <a href="#appointment" className="btn btn-primary">📅 Book Appointment with Dr. Jadhav</a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
