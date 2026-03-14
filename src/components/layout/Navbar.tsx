"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      if (isHome) {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id') || '';
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const openMobileNav = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || targetId === '#') return;
    if (targetId.startsWith('#')) {
      e.preventDefault();
      closeMobileNav();
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = document.querySelector('.navbar')?.clientHeight || 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Emergency Top Bar */}
      <div className="emergency-bar" id="emergencyBar">
        <span className="pulse-dot"></span>
        🚑 24/7 Emergency Services Available — Call Now:
        <a href="tel:+919876543210">+91-98765-43210</a>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" aria-label="JS Hospital Home">
            <div className="logo-icon">JS</div>
            <div>
              <div style={{ lineHeight: 1.1 }}>JS Hospital</div>
              <div style={{ fontSize: '.65rem', fontWeight: 400, color: 'var(--clr-text)', letterSpacing: '.5px' }}>NARHE, PUNE</div>
            </div>
          </Link>
          <div className="nav-links" id="navLinks">
            {isHome ? (
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleSmoothScroll}>Home</a>
            ) : (
              <Link href="/">Home</Link>
            )}
            <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link href="/doctors" className={pathname === '/doctors' ? 'active' : ''}>Doctors</Link>
            <Link href="/insurance" className={pathname === '/insurance' ? 'active' : ''}>Insurance</Link>
            <Link href="/reviews" className={pathname === '/reviews' ? 'active' : ''}>Reviews</Link>
            <Link href="/book" className={pathname === '/book' ? 'active' : ''}>Book</Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </div>
          <div className="nav-cta">
            <a href="tel:+919876543210" className="nav-phone">📞 98765-43210</a>
            <Link href="/book" className="btn btn-primary btn-sm">Book Appointment</Link>
            <button className="hamburger" id="hamburger" aria-label="Open Menu" onClick={openMobileNav}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} id="mobileOverlay" onClick={closeMobileNav}></div>
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <button className="mobile-nav-close" id="mobileClose" aria-label="Close Menu" onClick={closeMobileNav}>✕</button>
        <div className="mobile-nav-links">
          {isHome ? (
            <a href="#home" onClick={handleSmoothScroll}>🏠 Home</a>
          ) : (
            <Link href="/" onClick={closeMobileNav}>🏠 Home</Link>
          )}
          <Link href="/services" onClick={closeMobileNav}>🏥 All Services</Link>
          <Link href="/doctors" onClick={closeMobileNav}>👨‍⚕️ Our Doctors</Link>
          <Link href="/insurance" onClick={closeMobileNav}>🛡️ Insurance</Link>
          <Link href="/reviews" onClick={closeMobileNav}>💬 Reviews</Link>
          <Link href="/book" onClick={closeMobileNav}>📅 Book Appointment</Link>
          <Link href="/contact" onClick={closeMobileNav}>📞 Contact Us</Link>
        </div>
        <div className="mobile-nav-cta">
          <a href="tel:+919876543210" className="btn btn-primary">📞 Call Now</a>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20JS%20Hospital" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        </div>
      </div>
    </>
  );
}
