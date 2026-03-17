"use client";
import React, { useState } from 'react';
import RevealWrapper from '../ui/RevealWrapper';

const allReviews = [
  {
    name: "Rajesh Mehta",
    initials: "RM",
    stars: 5,
    text: "Excellent hospital with very caring staff. Dr. Jadhav treated my kidney stone problem and I recovered within just 3 days. The staff is very polite and helpful. Highly recommended!",
    treatment: "Kidney Stone Treatment",
    date: "2 months ago",
    source: "Google",
  },
  {
    name: "Priya Sontakke",
    initials: "PS",
    stars: 5,
    text: "Had a wonderful experience during my pregnancy. The doctors and nurses were very supportive throughout. The delivery was smooth and we felt very safe. Thank you JS Hospital!",
    treatment: "Pregnancy & Delivery",
    date: "1 month ago",
    source: "Google",
  },
  {
    name: "Amit Kale",
    initials: "AK",
    stars: 5,
    text: "Very clean hospital with modern facilities. The doctors explain everything in detail before any treatment. I brought my father here for surgery and the care was outstanding.",
    treatment: "General Surgery",
    date: "3 months ago",
    source: "Google",
  },
  {
    name: "Sunita Jagtap",
    initials: "SJ",
    stars: 4,
    text: "Good hospital near Narhe. Staff is very cooperative and the doctors are always available. I have been visiting for my family's medical needs for the past 3 years. Very trustworthy!",
    treatment: "General Medicine",
    date: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Vaishali Deshpande",
    initials: "VD",
    stars: 5,
    text: "My child was treated here for a fever that wasn't going away. The pediatrician was very patient and thorough. The medicine worked quickly. We are grateful to the whole team.",
    treatment: "Pediatrics",
    date: "1 month ago",
    source: "Google",
  },
  {
    name: "Manoj Gaikwad",
    initials: "MG",
    stars: 5,
    text: "I had a surgery for appendicitis and Dr. Jadhav handled it perfectly. From admission to discharge, everything was smooth. The hospital maintains excellent hygiene and the nursing staff is very attentive.",
    treatment: "General Surgery",
    date: "3 weeks ago",
    source: "Google",
  },
  {
    name: "Swati Pawar",
    initials: "SP",
    stars: 5,
    text: "Best hospital in Narhe area. I visited for my mother's orthopedic consultation and the doctor gave very good advice. The waiting time was also not much. Will definitely recommend to others.",
    treatment: "Orthopedics",
    date: "5 months ago",
    source: "Google",
  },
  {
    name: "Rahul Shinde",
    initials: "RS",
    stars: 4,
    text: "Good experience overall. The hospital is well maintained and the staff is friendly. Got my full body checkup done here. Reports came on time and the doctor explained everything properly.",
    treatment: "Diagnostics & Lab",
    date: "4 months ago",
    source: "Google",
  },
  {
    name: "Neeta Kulkarni",
    initials: "NK",
    stars: 5,
    text: "I was very scared about my kidney stone surgery but Dr. Jadhav made me feel comfortable. The procedure was minimally invasive and I went home the next day. Amazing experience!",
    treatment: "Kidney Stone Treatment",
    date: "6 weeks ago",
    source: "Google",
  },
  {
    name: "Deepak Wagh",
    initials: "DW",
    stars: 5,
    text: "Emergency care is very quick here. My father had chest pain at night and we rushed him to JS Hospital. The team responded immediately and handled everything professionally. Saved his life!",
    treatment: "Emergency Care",
    date: "2 months ago",
    source: "Google",
  },
  {
    name: "Asha Bhosale",
    initials: "AB",
    stars: 4,
    text: "Visited for my child's vaccination. The pediatrician was very gentle and explained the vaccination schedule clearly. The hospital is clean and child-friendly. Good experience.",
    treatment: "Pediatrics",
    date: "3 months ago",
    source: "Google",
  },
  {
    name: "Vikram Chavan",
    initials: "VC",
    stars: 5,
    text: "Had my wife's delivery at JS Hospital. The maternity ward is excellent, nurses were very caring, and Dr. Kulkarni was amazing. Our whole family is grateful. Highly recommended for pregnancy care!",
    treatment: "Pregnancy & Maternity",
    date: "1 month ago",
    source: "Google",
  },
];

const filterOptions = ["All", "Kidney Stone Treatment", "Pregnancy & Delivery", "General Surgery", "Pediatrics", "Orthopedics", "Emergency Care"];

export default function ReviewPageContent() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const totalReviews = 247;
  const avgRating = 4.5;
  const fiveStarPercent = 78;
  const fourStarPercent = 17;
  const threeStarPercent = 3;
  const twoStarPercent = 1;
  const oneStarPercent = 1;

  const filteredReviews = filter === "All"
    ? allReviews
    : allReviews.filter(r => r.treatment === filter);

  const visible = filteredReviews.slice(0, visibleCount);

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`rv-star ${i < count ? 'rv-star-filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="section-padding">
      <div className="container">
        {/* Rating Summary Card */}
        <RevealWrapper className="rv-summary-card">
          <div className="rv-summary-left">
            <div className="rv-big-rating">{avgRating}</div>
            <div className="rv-stars-row">{renderStars(Math.round(avgRating))}</div>
            <div className="rv-total-reviews">{totalReviews} Google Reviews</div>
            <a
              href="https://www.google.com/maps/place/JS+Hospital+Narhe"
              target="_blank"
              rel="noopener noreferrer"
              className="rv-google-badge"
            >
              <span className="rv-google-icon">G</span> Google Reviews
            </a>
          </div>
          <div className="rv-summary-right">
            <div className="rv-bar-row">
              <span className="rv-bar-label">5 ★</span>
              <div className="rv-bar-track"><div className="rv-bar-fill" style={{ width: `${fiveStarPercent}%` }}></div></div>
              <span className="rv-bar-pct">{fiveStarPercent}%</span>
            </div>
            <div className="rv-bar-row">
              <span className="rv-bar-label">4 ★</span>
              <div className="rv-bar-track"><div className="rv-bar-fill" style={{ width: `${fourStarPercent}%` }}></div></div>
              <span className="rv-bar-pct">{fourStarPercent}%</span>
            </div>
            <div className="rv-bar-row">
              <span className="rv-bar-label">3 ★</span>
              <div className="rv-bar-track"><div className="rv-bar-fill" style={{ width: `${threeStarPercent}%` }}></div></div>
              <span className="rv-bar-pct">{threeStarPercent}%</span>
            </div>
            <div className="rv-bar-row">
              <span className="rv-bar-label">2 ★</span>
              <div className="rv-bar-track"><div className="rv-bar-fill" style={{ width: `${twoStarPercent}%` }}></div></div>
              <span className="rv-bar-pct">{twoStarPercent}%</span>
            </div>
            <div className="rv-bar-row">
              <span className="rv-bar-label">1 ★</span>
              <div className="rv-bar-track"><div className="rv-bar-fill" style={{ width: `${oneStarPercent}%` }}></div></div>
              <span className="rv-bar-pct">{oneStarPercent}%</span>
            </div>
          </div>
        </RevealWrapper>

        {/* Filter */}
        <RevealWrapper className="rv-filters">
          {filterOptions.map(f => (
            <button
              key={f}
              className={`rv-filter-btn ${filter === f ? 'rv-filter-active' : ''}`}
              onClick={() => { setFilter(f); setVisibleCount(6); }}
            >
              {f}
            </button>
          ))}
        </RevealWrapper>

        {/* Reviews Grid */}
        <div className="rv-grid">
          {visible.map((rev, i) => (
            <RevealWrapper key={i} className="rv-card">
              <div className="rv-card-header">
                <div className="rv-avatar">{rev.initials}</div>
                <div>
                  <div className="rv-name">{rev.name}</div>
                  <div className="rv-date">{rev.date}</div>
                </div>
                <div className="rv-source-badge">
                  <span className="rv-google-icon-sm">G</span>
                </div>
              </div>
              <div className="rv-card-stars">{renderStars(rev.stars)}</div>
              <p className="rv-card-text">&ldquo;{rev.text}&rdquo;</p>
              <div className="rv-card-treatment">🏥 {rev.treatment}</div>
            </RevealWrapper>
          ))}
        </div>

        {visibleCount < filteredReviews.length && (
          <div className="rv-load-more">
            <button className="btn btn-secondary" onClick={() => setVisibleCount(v => v + 6)}>
              Load More Reviews
            </button>
          </div>
        )}

        {/* CTA */}
        <RevealWrapper className="rv-cta-card">
          <div className="rv-cta-content">
            <h3>Share Your Experience</h3>
            <p>Your feedback helps us serve our patients better and helps others make informed decisions.</p>
          </div>
          <div className="rv-cta-actions">
            <a
              href="https://www.google.com/maps/place/JS+Hospital+Narhe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ⭐ Write a Google Review
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
