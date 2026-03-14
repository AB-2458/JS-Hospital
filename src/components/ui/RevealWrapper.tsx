"use client";
import React, { useEffect, useState, useRef, ReactNode } from 'react';

export default function RevealWrapper({ children, className = "", delayClass = "", id }: { children: ReactNode, className?: string, delayClass?: string, id?: string }) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} className={`reveal ${delayClass} ${className} ${revealed ? 'revealed' : ''}`}>
      {children}
    </div>
  );
}
