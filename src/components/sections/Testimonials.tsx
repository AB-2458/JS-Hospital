"use client";
import React, { useState, useEffect, useRef } from 'react';
import RevealWrapper from '../ui/RevealWrapper';

const reviews = [
  { stars: "★★★★★", text: "Excellent hospital with very caring staff. Dr. Jadhav treated my kidney stone problem and I recovered within just 3 days. The staff is very polite and helpful. Highly recommended!", initials: "RM", name: "Rajesh M.", treat: "Kidney Stone Treatment" },
  { stars: "★★★★★", text: "Had a wonderful experience during my pregnancy. The doctors and nurses were very supportive throughout. The delivery was smooth and we felt very safe. Thank you JS Hospital!", initials: "PS", name: "Priya S.", treat: "Pregnancy & Delivery Care" },
  { stars: "★★★★★", text: "Very clean hospital with modern facilities. The doctors explain everything in detail before any treatment. I brought my father here for surgery and the care was outstanding.", initials: "AK", name: "Amit K.", treat: "General Surgery" },
  { stars: "★★★★⭐", text: "Good hospital near Narhe. Staff is very cooperative and the doctors are always available. I have been visiting for my family's medical needs for the past 3 years. Very trustworthy!", initials: "SJ", name: "Sunita J.", treat: "General Medicine" },
  { stars: "★★★★★", text: "My child was treated here for a fever that wasn't going away. The pediatrician was very patient and thorough. The medicine worked quickly. We are grateful to the whole team.", initials: "VD", name: "Vaishali D.", treat: "Pediatrics" }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setSlidesVisible(1);
      else if (width <= 1024) setSlidesVisible(2);
      else setSlidesVisible(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, reviews.length - slidesVisible);

  useEffect(() => {
    if (currentSlide > maxSlide) setCurrentSlide(maxSlide);
  }, [slidesVisible, maxSlide, currentSlide]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, maxSlide]);

  const prevSlide = () => setCurrentSlide(prev => Math.max(0, prev - 1));
  const nextSlide = () => setCurrentSlide(prev => Math.min(maxSlide, prev + 1));

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <RevealWrapper className="section-header">
          <span className="section-badge">Patient Reviews</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Real stories from real patients. Our 4.5★ Google rating speaks for the quality of care we provide.</p>
        </RevealWrapper>
        
        <RevealWrapper 
          className="testimonials-slider"
        >
          <div 
            className="testimonials-track" 
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              transform: `translateX(-${currentSlide * (containerRef.current?.children[0]?.clientWidth ? (containerRef.current.children[0].clientWidth + 24) : 0)}px)` 
            }}
          >
            {reviews.map((rev, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">{rev.stars}</div>
                <p className="testimonial-text">"{rev.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{rev.initials}</div>
                  <div>
                    <div className="testimonial-name">{rev.name}</div>
                    <div className="testimonial-treatment">{rev.treat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn slider-prev" aria-label="Previous testimonial" onClick={prevSlide}>◀</button>
            <div className="slider-dots">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`slider-dot ${i === currentSlide ? 'active' : ''}`} 
                  onClick={() => setCurrentSlide(i)} 
                />
              ))}
            </div>
            <button className="slider-btn slider-next" aria-label="Next testimonial" onClick={nextSlide}>▶</button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
