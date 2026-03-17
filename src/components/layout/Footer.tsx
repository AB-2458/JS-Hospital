export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ color: '#fff' }}>
              <div className="logo-icon">JS</div>
              <div>
                <div style={{ lineHeight: 1.1 }}>JS Hospital</div>
                <div style={{ fontSize: '.65rem', fontWeight: 400, color: 'rgba(255,255,255,.5)', letterSpacing: '.5px' }}>NARHE, PUNE</div>
              </div>
            </a>
            <p>Your trusted healthcare partner in Narhe, Pune. Providing compassionate, expert medical care with modern facilities since 2019. Open 24/7 for emergencies.</p>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Our Services</a>
              <a href="#doctor">Our Doctors</a>
              <a href="#testimonials">Patient Reviews</a>
              <a href="#appointment">Book Appointment</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <div className="footer-links">
              <a href="#">Kidney Stone Treatment</a>
              <a href="#">Pregnancy & Maternity</a>
              <a href="#">General Surgery</a>
              <a href="#">Pediatrics</a>
              <a href="#">Orthopedics</a>
              <a href="#">Emergency Care</a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-item">
              <span className="icon">📍</span>
              <span>Narhe, Pune, Maharashtra 411041</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📞</span>
              <a href="tel:+917745849680" style={{ color: 'rgba(255,255,255,.75)' }}>+91-77458-49680</a>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📧</span>
              <a href="mailto:info@jshospitalpune.com" style={{ color: 'rgba(255,255,255,.75)' }}>info@jshospitalpune.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="icon">🕐</span>
              <span>Open 24/7 — All Days</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JS Hospital, Narhe, Pune. All Rights Reserved.</span>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Facebook">f</a>
            <a href="#" className="footer-social" aria-label="Instagram">ig</a>
            <a href="#" className="footer-social" aria-label="YouTube">yt</a>
            <a href="#" className="footer-social" aria-label="Google">G</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
