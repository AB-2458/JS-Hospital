"use client";
import React, { useState } from 'react';
import RevealWrapper from '../ui/RevealWrapper';

const doctors = [
  { name: "Dr. Umesh Jadhav", spec: "General Surgery, Urology & Laparoscopy" },
  { name: "Dr. Sneha Kulkarni", spec: "Obstetrics & Gynecology" },
  { name: "Dr. Rajesh Patil", spec: "General Medicine & Diabetology" },
  { name: "Dr. Anil Deshmukh", spec: "Orthopedics & Trauma" },
  { name: "Dr. Priya Sharma", spec: "Pediatrics & Neonatology" },
  { name: "Dr. Amit Joshi", spec: "Anesthesiology & Critical Care" },
];

const departments = [
  "General Medicine", "General Surgery", "Kidney Stone Treatment",
  "Pregnancy & Maternity", "Pediatrics", "Orthopedics",
  "Diagnostics & Lab", "ENT", "Emergency Care", "Other",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
];

type FormStep = 1 | 2 | 3;

export default function BookPageContent() {
  const [step, setStep] = useState<FormStep>(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [isEmergency, setIsEmergency] = useState(false);

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', age: '', gender: '',
    date: '', time: '', doctor: '', department: '',
    reason: '', previousPatient: '', notes: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.phone || !formData.gender) {
      showToast('Please fill in all required fields.', 'error');
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      showToast('Please enter a valid 10-digit phone number.', 'error');
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showToast('Please enter a valid email address.', 'error');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.date || !formData.time || !formData.department) {
      showToast('Please select date, time, and department.', 'error');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as FormStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.reason) {
      showToast('Please describe your reason for visit.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container">
          <RevealWrapper className="bp-success-card">
            <div className="bp-success-icon">✅</div>
            <h2 className="bp-success-title">Appointment Booked Successfully!</h2>
            <p className="bp-success-desc">
              Thank you, <strong>{formData.name}</strong>. Your appointment has been submitted.
              Our team will confirm within 2 hours via phone call.
            </p>
            <div className="bp-success-details">
              <div className="bp-detail-row">
                <span className="bp-detail-label">📅 Date</span>
                <span className="bp-detail-value">{formData.date}</span>
              </div>
              <div className="bp-detail-row">
                <span className="bp-detail-label">🕐 Time</span>
                <span className="bp-detail-value">{formData.time}</span>
              </div>
              <div className="bp-detail-row">
                <span className="bp-detail-label">🏥 Department</span>
                <span className="bp-detail-value">{formData.department}</span>
              </div>
              {formData.doctor && (
                <div className="bp-detail-row">
                  <span className="bp-detail-label">👨‍⚕️ Doctor</span>
                  <span className="bp-detail-value">{formData.doctor}</span>
                </div>
              )}
            </div>
            <div className="bp-success-actions">
              <a href="/" className="btn btn-primary">🏠 Back to Home</a>
              <a href="tel:+919876543210" className="btn btn-secondary">📞 Call Hospital</a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      {/* Toast */}
      <div
        className={`toast ${toast ? 'show' : ''}`}
        style={{ background: toast?.type === 'success' ? 'var(--clr-accent)' : 'var(--clr-emergency)' }}
      >
        {toast?.msg}
      </div>

      <div className="container">
        <div className="bp-layout">
          {/* Left: Info Panel */}
          <RevealWrapper className="bp-info-panel">
            <h3 className="bp-info-title">How It Works</h3>
            <div className="bp-steps-list">
              <div className={`bp-step-item ${step >= 1 ? 'bp-step-active' : ''}`}>
                <div className="bp-step-number">1</div>
                <div>
                  <div className="bp-step-name">Personal Details</div>
                  <div className="bp-step-desc">Name, phone, and basic info</div>
                </div>
              </div>
              <div className={`bp-step-item ${step >= 2 ? 'bp-step-active' : ''}`}>
                <div className="bp-step-number">2</div>
                <div>
                  <div className="bp-step-name">Appointment Details</div>
                  <div className="bp-step-desc">Date, time, and doctor</div>
                </div>
              </div>
              <div className={`bp-step-item ${step >= 3 ? 'bp-step-active' : ''}`}>
                <div className="bp-step-number">3</div>
                <div>
                  <div className="bp-step-name">Reason & Confirm</div>
                  <div className="bp-step-desc">Symptoms and final review</div>
                </div>
              </div>
            </div>

            <div className="bp-contact-box">
              <h4>Need Help Booking?</h4>
              <p>Our staff can book for you over the phone.</p>
              <a href="tel:+919876543210" className="btn btn-primary btn-sm" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}>📞 Call Now</a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" style={{ marginTop: '8px', width: '100%', justifyContent: 'center', background: 'var(--clr-whatsapp)', color: '#fff' }}>💬 WhatsApp</a>
            </div>
          </RevealWrapper>

          {/* Right: Form */}
          <RevealWrapper className="bp-form-card">
            {/* Progress Bar */}
            <div className="bp-progress">
              <div className="bp-progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>
            <h3 className="bp-form-title">
              {step === 1 && '👤 Personal Information'}
              {step === 2 && '📅 Appointment Details'}
              {step === 3 && '📋 Reason & Confirmation'}
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <div className="bp-form-fields">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" value={formData.name} onChange={e => updateField('name', e.target.value)} placeholder="Enter your full name" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="10-digit number" required />
                    </div>
                    <div className="form-group">
                      <label>Email (Optional)</label>
                      <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Age</label>
                      <input type="number" value={formData.age} onChange={e => updateField('age', e.target.value)} placeholder="Age" min="0" max="120" />
                    </div>
                    <div className="form-group">
                      <label>Gender *</label>
                      <select value={formData.gender} onChange={e => updateField('gender', e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Previous Patient?</label>
                    <div className="bp-radio-group">
                      <label className={`bp-radio ${formData.previousPatient === 'yes' ? 'bp-radio-selected' : ''}`}>
                        <input type="radio" name="previousPatient" value="yes" checked={formData.previousPatient === 'yes'} onChange={e => updateField('previousPatient', e.target.value)} />
                        Yes, I've visited before
                      </label>
                      <label className={`bp-radio ${formData.previousPatient === 'no' ? 'bp-radio-selected' : ''}`}>
                        <input type="radio" name="previousPatient" value="no" checked={formData.previousPatient === 'no'} onChange={e => updateField('previousPatient', e.target.value)} />
                        No, first visit
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="bp-form-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Date *</label>
                      <input type="date" value={formData.date} onChange={e => updateField('date', e.target.value)} min={today} required />
                    </div>
                    <div className="form-group">
                      <label>Preferred Time *</label>
                      <select value={formData.time} onChange={e => updateField('time', e.target.value)} required>
                        <option value="">Select Time Slot</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Department *</label>
                    <select value={formData.department} onChange={e => updateField('department', e.target.value)} required>
                      <option value="">Select Department</option>
                      {departments.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Preferred Doctor (Optional)</label>
                    <select value={formData.doctor} onChange={e => updateField('doctor', e.target.value)}>
                      <option value="">Any Available Doctor</option>
                      {doctors.map(d => <option key={d.name} value={d.name}>{d.name} — {d.spec}</option>)}
                    </select>
                  </div>
                  <div className="bp-emergency-toggle">
                    <label className="bp-toggle-label">
                      <span>🚨 This is an emergency case</span>
                      <button type="button" className={`bp-toggle ${isEmergency ? 'bp-toggle-on' : ''}`} onClick={() => setIsEmergency(!isEmergency)}>
                        <span className="bp-toggle-knob"></span>
                      </button>
                    </label>
                    {isEmergency && (
                      <div className="bp-emergency-note">
                        For medical emergencies, please call <a href="tel:+919876543210"><strong>+91-98765-43210</strong></a> immediately. Our emergency department is open 24/7.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="bp-form-fields">
                  <div className="form-group">
                    <label>Reason for Visit / Symptoms *</label>
                    <textarea value={formData.reason} onChange={e => updateField('reason', e.target.value)} placeholder="Describe your symptoms or reason for visit..." rows={4} required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Additional Notes (Optional)</label>
                    <textarea value={formData.notes} onChange={e => updateField('notes', e.target.value)} placeholder="Any allergies, ongoing medications, or special requests..." rows={3}></textarea>
                  </div>

                  {/* Summary */}
                  <div className="bp-summary">
                    <h4 className="bp-summary-title">📋 Appointment Summary</h4>
                    <div className="bp-summary-grid">
                      <div><span>Name:</span> {formData.name}</div>
                      <div><span>Phone:</span> {formData.phone}</div>
                      <div><span>Date:</span> {formData.date}</div>
                      <div><span>Time:</span> {formData.time}</div>
                      <div><span>Department:</span> {formData.department}</div>
                      {formData.doctor && <div><span>Doctor:</span> {formData.doctor}</div>}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="bp-form-nav">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>← Back</button>
                )}
                <div style={{ flex: 1 }}></div>
                {step < 3 ? (
                  <button type="button" className="btn btn-primary" onClick={nextStep}>Next Step →</button>
                ) : (
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? '⏳ Submitting...' : '✅ Confirm Appointment'}
                  </button>
                )}
              </div>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
