export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Open 24/7 — Emergency Care Available
          </div>
          <h1 className="hero-title">
            Your Trusted <span>Healthcare</span> Partner in Narhe, Pune
          </h1>
          <p className="hero-desc">
            JS Hospital provides compassionate, expert medical care with modern facilities.
            From kidney stone treatment to pregnancy care — we're here for you, 24 hours a day.
          </p>
          <div className="hero-btns">
            <a href="#appointment" className="btn btn-primary">📅 Book Appointment</a>
            <a href="tel:+919876543210" className="btn btn-secondary">📞 Call Now</a>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon blue">🏥</div>
              <span>Multispecialty</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon green">✓</div>
              <span>Cashless Insurance</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon red">🚑</div>
              <span>24/7 Emergency</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/images/hospital-hero.png" alt="JS Hospital building in Narhe, Pune — Modern healthcare facility" width="480" height="420" loading="eager" />
          </div>
          <div className="hero-float-card card-rating">
            <div className="card-icon gold">⭐</div>
            <div>
              <div style={{ fontSize: '1.1rem', color: 'var(--clr-heading)' }}>4.5 Rating</div>
              <div style={{ fontSize: '.75rem', color: 'var(--clr-text)' }}>Google Reviews</div>
            </div>
          </div>
          <div className="hero-float-card card-patients">
            <div className="card-icon blue">👥</div>
            <div>
              <div style={{ fontSize: '1.1rem', color: 'var(--clr-heading)' }}>5000+</div>
              <div style={{ fontSize: '.75rem', color: 'var(--clr-text)' }}>Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
