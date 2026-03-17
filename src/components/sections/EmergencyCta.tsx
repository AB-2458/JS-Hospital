"use client";
import React from 'react';
import RevealWrapper from '../ui/RevealWrapper';

export default function EmergencyCta() {
  return (
    <RevealWrapper className="emergency-cta">
      <div className="container emergency-inner">
        <div className="emergency-text">
          <h3>🚑 24/7 Emergency Services Available</h3>
          <p>Don't wait in an emergency. Our team is ready to help you round the clock.</p>
        </div>
        <div className="emergency-actions">
          <a href="tel:+917745849680" className="btn btn-white">📞 Call Emergency: 77458-49680</a>
          <a href="https://maps.google.com/?q=JS+Hospital+Narhe+Pune" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ borderColor: 'rgba(255,255,255,.5)', background: 'rgba(255,255,255,.15)', color: '#fff' }}>📍 Get Directions</a>
        </div>
      </div>
    </RevealWrapper>
  );
}
