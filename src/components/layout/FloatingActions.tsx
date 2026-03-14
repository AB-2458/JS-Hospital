"use client";
import React, { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fab-container">
        <a href="tel:+919876543210" className="fab fab-call" aria-label="Call JS Hospital">📞</a>
        <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20JS%20Hospital" className="fab fab-whatsapp" aria-label="WhatsApp JS Hospital" target="_blank" rel="noopener noreferrer">💬</a>
      </div>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        id="backToTop" 
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
}
