"use client";
import React from 'react';
import Link from 'next/link';
import RevealWrapper from '../ui/RevealWrapper';

const insurancePartners = [
  "Star Health Insurance",
  "ICICI Lombard",
  "HDFC ERGO",
  "Bajaj Allianz",
  "New India Assurance",
  "Oriental Insurance",
  "United India Insurance",
  "National Insurance",
  "Niva Bupa (formerly Max Bupa)",
  "Care Health Insurance",
  "Manipal Cigna",
  "Aditya Birla Health Insurance",
  "SBI General Insurance",
  "Reliance General Insurance",
  "Tata AIG",
  "Cholamandalam MS",
  "IFFCO Tokio",
  "Liberty General Insurance",
  "MagmaHDI General Insurance",
  "Kotak General Insurance",
  "Future Generali",
  "Royal Sundaram",
  "Edelweiss General Insurance",
  "Raheja QBE Insurance",
];

export default function InsuranceContent() {
  return (
    <section className="section-padding">
      <div className="container">

        {/* Info Banner */}
        <RevealWrapper className="ins-info-banner">
          <div className="ins-info-icon">🛡️</div>
          <div>
            <h3 className="ins-info-title">Cashless Treatment Available</h3>
            <p className="ins-info-desc">
              JS Hospital is empaneled with all major health insurance companies listed below. 
              Our dedicated insurance desk assists patients with claim processing, pre-authorization, 
              and all necessary paperwork — so you can focus entirely on your recovery.
            </p>
          </div>
        </RevealWrapper>

        {/* Insurance Grid */}
        <div className="ins-grid">
          {insurancePartners.map((name, i) => (
            <RevealWrapper key={i} className="ins-card" delayClass={`reveal-delay-${(i % 4) + 1}`}>
              <div className="ins-card-logo">
                <span className="ins-card-initial">{name.charAt(0)}</span>
              </div>
              <span className="ins-card-name">{name}</span>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom Help Section */}
        <RevealWrapper className="ins-help-section">
          <div className="ins-help-grid">
            <div className="ins-help-card">
              <div className="ins-help-icon">📋</div>
              <h4>How Cashless Works</h4>
              <p>Simply show your health insurance card at the time of admission. Our insurance desk will handle the pre-authorization and direct settlement with your insurer.</p>
            </div>
            <div className="ins-help-card">
              <div className="ins-help-icon">📞</div>
              <h4>Need Help with Insurance?</h4>
              <p>Our insurance coordination team is available to answer your queries and guide you through the claim process.</p>
              <a href="tel:+919876543210" className="btn btn-primary btn-sm" style={{ marginTop: '16px' }}>Call Insurance Desk</a>
            </div>
            <div className="ins-help-card">
              <div className="ins-help-icon">📄</div>
              <h4>Documents Required</h4>
              <ul className="ins-doc-list">
                <li>Health Insurance Card / Policy Copy</li>
                <li>Photo ID Proof (Aadhaar / PAN)</li>
                <li>Doctor's Referral (if applicable)</li>
                <li>Previous Medical Records</li>
              </ul>
            </div>
          </div>
        </RevealWrapper>

        {/* Bottom CTA */}
        <RevealWrapper className="sp-bottom-cta">
          <div className="sp-cta-inner">
            <div>
              <h3 className="sp-cta-title">Don't See Your Insurance Provider?</h3>
              <p className="sp-cta-desc">We may still be able to help. Contact our insurance desk to check if your plan is accepted.</p>
            </div>
            <div className="sp-cta-actions">
              <a href="tel:+919876543210" className="btn btn-primary">📞 Call Insurance Desk</a>
              <Link href="/#appointment" className="btn btn-secondary">📅 Book Appointment</Link>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
