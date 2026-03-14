"use client";
import React from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <RevealWrapper className="section-header">
          <span className="section-badge">Find Us</span>
          <h2 className="section-title">Visit JS Hospital</h2>
          <p className="section-subtitle">Conveniently located in Narhe, Pune — easily accessible from Sinhagad Road and Navale Bridge.</p>
        </RevealWrapper>
        <RevealWrapper className="map-grid">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8!2d73.84!3d18.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJS+Hospital+Narhe!5e0!3m2!1sen!2sin!4v1"
              width="600" height="380" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JS Hospital Narhe Pune Location on Google Maps"></iframe>
          </div>
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value">JS Hospital, Narhe, Pune, Maharashtra 411041</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value"><a href="tel:+919876543210" style={{ color: 'var(--clr-primary)' }}>+91-98765-43210</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value"><a href="https://wa.me/919876543210" style={{ color: 'var(--clr-whatsapp)' }} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value"><a href="mailto:info@jshospitalpune.com" style={{ color: 'var(--clr-primary)' }}>info@jshospitalpune.com</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Working Hours</div>
                <div className="contact-value">Open 24 Hours — 7 Days a Week</div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
