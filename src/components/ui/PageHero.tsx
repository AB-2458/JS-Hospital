"use client";
import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ badge, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-breadcrumb">
          <Link href="/">Home</Link>
          <span className="page-hero-separator">›</span>
          <span>{breadcrumb}</span>
        </div>
        <span className="section-badge">{badge}</span>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
