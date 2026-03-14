"use client";
import React, { useEffect, useState, useRef } from 'react';

const StatCounter = ({ target, suffix, label, icon }: { target: number, suffix: string, label: string, icon: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(updateCounter);
        };
        requestAnimationFrame(updateCounter);
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function Stats() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`stats reveal ${revealed ? 'revealed' : ''}`} id="stats" ref={sectionRef as any}>
      <div className="container">
        <div className="stats-grid">
          <StatCounter icon="⭐" target={4} suffix=".5" label="Google Rating" />
          <StatCounter icon="🏥" target={6} suffix="+" label="Years of Service" />
          <StatCounter icon="👥" target={5000} suffix="+" label="Patients Treated" />
          <StatCounter icon="👨‍⚕️" target={10} suffix="+" label="Expert Doctors" />
          <StatCounter icon="🕐" target={24} suffix="/7" label="Emergency Care" />
        </div>
      </div>
    </section>
  );
}
