"use client";
import React from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-bg-blue" id="why-us">
      <div className="container">
        <RevealWrapper className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">Why Families Trust JS Hospital</h2>
          <p className="section-subtitle">We combine medical expertise with genuine compassion to deliver healthcare you can rely on.</p>
        </RevealWrapper>
        <div className="why-grid">
          <RevealWrapper className="why-card" delayClass="reveal-delay-1">
            <div className="why-icon">🏆</div>
            <h3 className="why-title">Experienced Team</h3>
            <p className="why-desc">6+ years of dedicated healthcare service with experienced doctors and trained medical staff across all departments.</p>
          </RevealWrapper>
          <RevealWrapper className="why-card" delayClass="reveal-delay-2">
            <div className="why-icon">❤️</div>
            <h3 className="why-title">Patient-First Care</h3>
            <p className="why-desc">Known for our polite, compassionate staff who treat every patient like family. Our 4.5★ Google rating reflects our commitment.</p>
          </RevealWrapper>
          <RevealWrapper className="why-card" delayClass="reveal-delay-3">
            <div className="why-icon">🔬</div>
            <h3 className="why-title">Modern Facilities</h3>
            <p className="why-desc">Equipped with modern diagnostic equipment, well-maintained operation theatres, and comfortable patient rooms.</p>
          </RevealWrapper>
          <RevealWrapper className="why-card" delayClass="reveal-delay-1">
            <div className="why-icon">🕐</div>
            <h3 className="why-title">24/7 Availability</h3>
            <p className="why-desc">Round-the-clock emergency and critical care services. We're always here when you need us, day or night.</p>
          </RevealWrapper>
          <RevealWrapper className="why-card" delayClass="reveal-delay-2">
            <div className="why-icon">💰</div>
            <h3 className="why-title">Affordable Treatment</h3>
            <p className="why-desc">Quality healthcare at accessible prices. We accept major insurance providers with cashless treatment options.</p>
          </RevealWrapper>
          <RevealWrapper className="why-card" delayClass="reveal-delay-3">
            <div className="why-icon">📍</div>
            <h3 className="why-title">Convenient Location</h3>
            <p className="why-desc">Easily accessible from Sinhagad Road and Navale Bridge with ample parking space. Serving Narhe and surrounding areas.</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
