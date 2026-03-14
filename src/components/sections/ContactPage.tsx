"use client";
import React, { useState } from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function ContactPageContent() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    const phone = fd.get('phone') as string;
    const message = fd.get('message') as string;

    if (!name || !phone || !message) {
      showToast('Please fill in all fields.', 'error');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      showToast('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      showToast('✅ Message sent! We will get back to you shortly.', 'success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="section-padding">
      <div className={`toast ${toast ? 'show' : ''}`}
        style={{ background: toast?.type === 'success' ? 'var(--clr-accent)' : 'var(--clr-emergency)' }}>
        {toast?.msg}
      </div>

      <div className="container">
        {/* Quick Contact Buttons */}
        <RevealWrapper className="cp-quick-actions">
          <a href="tel:+919876543210" className="cp-action-card">
            <div className="cp-action-icon cp-icon-phone">📞</div>
            <div className="cp-action-title">Call Us</div>
            <div className="cp-action-desc">+91-98765-43210</div>
          </a>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help" className="cp-action-card" target="_blank" rel="noopener noreferrer">
            <div className="cp-action-icon cp-icon-whatsapp">💬</div>
            <div className="cp-action-title">WhatsApp</div>
            <div className="cp-action-desc">Chat with us</div>
          </a>
          <a href="mailto:info@jshospitalpune.com" className="cp-action-card">
            <div className="cp-action-icon cp-icon-email">📧</div>
            <div className="cp-action-title">Email</div>
            <div className="cp-action-desc">info@jshospitalpune.com</div>
          </a>
          <a href="https://www.google.com/maps/place/JS+Hospital+Narhe" className="cp-action-card" target="_blank" rel="noopener noreferrer">
            <div className="cp-action-icon cp-icon-map">📍</div>
            <div className="cp-action-title">Directions</div>
            <div className="cp-action-desc">Open in Maps</div>
          </a>
        </RevealWrapper>

        {/* Main Layout */}
        <div className="cp-layout">
          {/* Left: Contact Info + Map */}
          <div className="cp-left">
            <RevealWrapper className="cp-info-card">
              <h3 className="cp-info-title">Contact Information</h3>
              <div className="cp-info-list">
                <div className="cp-info-item">
                  <div className="cp-info-icon">📍</div>
                  <div>
                    <div className="cp-info-label">Address</div>
                    <div className="cp-info-value">JS Hospital, Narhe, Pune, Maharashtra 411041</div>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">📞</div>
                  <div>
                    <div className="cp-info-label">Phone</div>
                    <div className="cp-info-value"><a href="tel:+919876543210">+91-98765-43210</a></div>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">🚨</div>
                  <div>
                    <div className="cp-info-label">Emergency</div>
                    <div className="cp-info-value"><a href="tel:+919876543210">+91-98765-43210 (24/7)</a></div>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">💬</div>
                  <div>
                    <div className="cp-info-label">WhatsApp</div>
                    <div className="cp-info-value"><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">📧</div>
                  <div>
                    <div className="cp-info-label">Email</div>
                    <div className="cp-info-value"><a href="mailto:info@jshospitalpune.com">info@jshospitalpune.com</a></div>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">🕐</div>
                  <div>
                    <div className="cp-info-label">Working Hours</div>
                    <div className="cp-info-value">Open 24 Hours — 7 Days a Week</div>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper className="cp-map-card">
              <h3 className="cp-info-title">Our Location</h3>
              <div className="cp-map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8!2d73.84!3d18.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJS+Hospital+Narhe!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} allowFullScreen={false} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JS Hospital Narhe Pune Location"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/JS+Hospital+Narhe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
              >
                📍 Open in Google Maps
              </a>
            </RevealWrapper>
          </div>

          {/* Right: Contact Form */}
          <RevealWrapper className="cp-form-card">
            <h3 className="cp-form-title">✉️ Send Us a Message</h3>
            <p className="cp-form-desc">Have a question, feedback, or need help? Fill in the form below and our team will reach out to you.</p>

            {sent ? (
              <div className="cp-sent-card">
                <div className="cp-sent-icon">✅</div>
                <h4>Message Sent!</h4>
                <p>Thank you for contacting us. Our team will get back to you within 2 hours.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: '16px' }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="10-digit phone number" required />
                </div>
                <div className="form-group">
                  <label>Email (Optional)</label>
                  <input type="email" name="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Appointment Related</option>
                    <option value="insurance">Insurance Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" placeholder="Write your message here..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? '⏳ Sending...' : '📩 Send Message'}
                </button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
