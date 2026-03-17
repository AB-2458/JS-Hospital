"use client";
import React, { useEffect, useState, useRef, ReactNode } from 'react';

export default function RevealWrapper({ children, className = "", delayClass = "", id }: { children: ReactNode, className?: string, delayClass?: string, id?: string }) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport (for sub-pages where content loads above fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Small delay for staggered reveal effect
      const timer = setTimeout(() => setRevealed(true), 100);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} className={`reveal ${delayClass} ${className} ${revealed ? 'revealed' : ''}`}>
      {children}
    </div>
  );
}
