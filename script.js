/* ============================================
   JS HOSPITAL — Interactive Features
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar Scroll Effect ---- */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Back to top
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Mobile Navigation ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileNav() {
    mobileNav.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileNav);
  mobileClose.addEventListener('click', closeMobileNav);
  mobileOverlay.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  /* ---- Smooth Scroll for Anchor Links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ---- Testimonial Slider ---- */
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slidesVisible = 3;

  function getSlidesVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateSlider() {
    slidesVisible = getSlidesVisible();
    const maxSlide = Math.max(0, cards.length - slidesVisible);
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    const cardWidth = cards[0].offsetWidth + 24; // width + margin
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) { currentSlide--; updateSlider(); }
    });
    nextBtn.addEventListener('click', () => {
      const maxSlide = Math.max(0, cards.length - getSlidesVisible());
      if (currentSlide < maxSlide) { currentSlide++; updateSlider(); }
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { currentSlide = i; updateSlider(); });
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();

  // Auto-play testimonials
  let autoplayInterval = setInterval(() => {
    const maxSlide = Math.max(0, cards.length - getSlidesVisible());
    currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    updateSlider();
  }, 5000);

  // Pause on hover
  const sliderContainer = document.querySelector('.testimonials-slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    sliderContainer.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        const maxSlide = Math.max(0, cards.length - getSlidesVisible());
        currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
        updateSlider();
      }, 5000);
    });
  }

  /* ---- Stat Counter Animation ---- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statAnimated = false;

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      const targetNum = parseInt(target);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(eased * targetNum);
        stat.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(updateCounter);
      }
      requestAnimationFrame(updateCounter);
    });
  }

  /* ---- Scroll Reveal Animations ---- */
  const reveals = document.querySelectorAll('.reveal');
  const statsSection = document.querySelector('.stats');

  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Trigger stat animation
        if (entry.target === statsSection && !statAnimated) {
          statAnimated = true;
          animateCounters();
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => revealObserver.observe(el));
  if (statsSection) revealObserver.observe(statsSection);

  /* ---- Appointment Form ---- */
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const dept = document.getElementById('department').value;
      const date = document.getElementById('appointmentDate').value;

      if (!name || !phone || !dept || !date) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      if (!/^[6-9]\d{9}$/.test(phone)) {
        showToast('Please enter a valid 10-digit phone number.', 'error');
        return;
      }

      // Simulate submission
      const submitBtn = appointmentForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '⏳ Booking...';

      setTimeout(() => {
        showToast('✅ Appointment booked successfully! We will call you shortly.', 'success');
        appointmentForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '📅 Book Appointment';
      }, 1500);
    });
  }

  // Set min date to today
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  /* ---- Toast Notification ---- */
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === 'success' ? 'var(--clr-accent)' : 'var(--clr-emergency)';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  /* ---- Active Nav Link Highlighter ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  /* ---- FAQ Accordion ---- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});
