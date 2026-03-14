"use client";
import React, { useEffect, useState, useRef, ReactNode } from 'react';

// Wrapper for scrolling class assignment
const RevealDiv = ({ children, className, delayClass = "" }: { children: ReactNode, className?: string, delayClass?: string }) => {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className || ''} ${revealed ? 'revealed' : ''}`}>
      {children}
    </div>
  );
};

export default function Services() {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        
        <RevealDiv className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">Comprehensive Medical Services</h2>
          <p className="section-subtitle">Expert treatment across multiple specialties with state-of-the-art facilities and compassionate care.</p>
        </RevealDiv>
        
        <div className="services-grid">
          <RevealDiv className="service-card featured" delayClass="reveal-delay-1">
            <div className="service-icon">🪨</div>
            <h3 className="service-name">Kidney Stone Treatment</h3>
            <p className="service-desc">Advanced kidney stone diagnosis and treatment with minimal recovery time. Expertise in lithotripsy and surgical procedures.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card featured" delayClass="reveal-delay-2">
            <div className="service-icon">🤰</div>
            <h3 className="service-name">Pregnancy & Maternity</h3>
            <p className="service-desc">Complete pregnancy care from prenatal to postnatal. Safe deliveries with experienced gynecologists and modern labor rooms.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-3">
            <div className="service-icon">🩺</div>
            <h3 className="service-name">General Medicine</h3>
            <p className="service-desc">Comprehensive diagnosis and treatment for all common health conditions with experienced physicians.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-4">
            <div className="service-icon">🔪</div>
            <h3 className="service-name">General Surgery</h3>
            <p className="service-desc">Expert surgical care including laparoscopic and minimally invasive procedures for faster recovery.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-1">
            <div className="service-icon">👶</div>
            <h3 className="service-name">Pediatrics</h3>
            <p className="service-desc">Specialized child healthcare with gentle, caring treatment for newborns, infants, and children.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-2">
            <div className="service-icon">🦴</div>
            <h3 className="service-name">Orthopedics</h3>
            <p className="service-desc">Treatment for bone, joint, and muscle problems including fractures, arthritis, and sports injuries.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-3">
            <div className="service-icon">🔬</div>
            <h3 className="service-name">Diagnostics & Lab</h3>
            <p className="service-desc">In-house pathology lab and diagnostic imaging for accurate, fast test results to guide your treatment.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>

          <RevealDiv className="service-card" delayClass="reveal-delay-4">
            <div className="service-icon">🚑</div>
            <h3 className="service-name">Emergency Care</h3>
            <p className="service-desc">24/7 emergency services with rapid response team, fully-equipped emergency room, and ambulance service.</p>
            <a href="#" className="service-link">Learn More →</a>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
