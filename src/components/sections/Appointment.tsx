"use client";
import React, { useState } from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function Appointment() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string, type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    const phone = fd.get('phone') as string;
    const dept = fd.get('dept') as string;
    const date = fd.get('date') as string;

    if (!name || !phone || !dept || !date) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      showToast('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      showToast('✅ Appointment booked successfully! We will call you shortly.', 'success');
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="section-padding appointment-section" id="appointment">
      {/* Toast Notification */}
      <div 
        className={`toast ${toast ? 'show' : ''}`} 
        style={{ background: toast?.type === 'success' ? 'var(--clr-accent)' : 'var(--clr-emergency)' }}
      >
        {toast?.msg}
      </div>

      <div className="container">
        <div className="appointment-grid">
          <RevealWrapper>
            <span className="section-badge">Book Appointment</span>
            <h2 className="appointment-info-title">Schedule Your Visit at<br />JS Hospital</h2>
            <p className="appointment-info-desc">
              Book your appointment in seconds. Fill out the form or contact us directly —
              we'll confirm your appointment within 2 hours.
            </p>
            <div className="appointment-methods">
              <a href="tel:+919876543210" className="appointment-method">
                <div className="method-icon phone">📞</div>
                <div>
                  <div className="method-title">Call Us</div>
                  <div className="method-desc">+91-98765-43210 (Available 24/7)</div>
                </div>
              </a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20JS%20Hospital" className="appointment-method" target="_blank" rel="noopener noreferrer">
                <div className="method-icon whatsapp">💬</div>
                <div>
                  <div className="method-title">WhatsApp Us</div>
                  <div className="method-desc">Quick appointment via WhatsApp</div>
                </div>
              </a>
              <div className="appointment-method">
                <div className="method-icon walk">🚶</div>
                <div>
                  <div className="method-title">Walk In</div>
                  <div className="method-desc">Visit us anytime — Narhe, Pune</div>
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper className="appointment-form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--clr-heading)', marginBottom: '24px' }}>📅 Book Your Appointment</h3>
            <form id="appointmentForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="patientName">Full Name *</label>
                <input type="text" id="patientName" name="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="patientPhone">Phone Number *</label>
                  <input type="tel" id="patientPhone" name="phone" placeholder="10-digit number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentDate">Preferred Date *</label>
                  <input type="date" id="appointmentDate" name="date" min={today} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="department">Department *</label>
                <select id="department" name="dept" required>
                  <option value="">Select Department</option>
                  <option value="general">General Medicine</option>
                  <option value="surgery">General Surgery</option>
                  <option value="kidney">Kidney Stone Treatment</option>
                  <option value="maternity">Pregnancy & Maternity</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="ent">ENT</option>
                  <option value="diagnostics">Diagnostics & Lab</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" placeholder="Describe your concern briefly..." rows={3}></textarea>
              </div>
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? '⏳ Booking...' : '📅 Book Appointment'}
              </button>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
