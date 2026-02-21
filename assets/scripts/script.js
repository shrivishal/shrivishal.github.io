// ===================================================
//  VISHAL SHRIVASTAVA PORTFOLIO
//  Vintage India × Batman Comic — Interactive Logic
// ===================================================

document.addEventListener('DOMContentLoaded', function () {

  // ===== SCROLL REVEAL =====
  // Stagger reveal for elements with .reveal class
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 70);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));


  // ===== NAVBAR: HAMBURGER =====
  const hamburger = document.getElementById('nav-hamburger');
  const navbar    = document.getElementById('navbar');

  hamburger?.addEventListener('click', () => {
    navbar.classList.toggle('nav-mobile-open');
    // Animate hamburger → X
    const spans = hamburger.querySelectorAll('span');
    const isOpen = navbar.classList.contains('nav-mobile-open');
    if (isOpen) {
      spans[0].style.transform = 'translateY(8px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-mobile-open');
      hamburger?.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });


  // ===== NAVBAR: SCROLL STYLE =====
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });


  // ===== ACTIVE NAV LINK (highlight on scroll) =====
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => sectionObserver.observe(s));


  // ===== SKILL TAG: RANDOM TILT ON HOVER =====
  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
      const tilt = (Math.random() * 6 - 3).toFixed(1);
      this.style.setProperty('--tilt', `${tilt}deg`);
    });
    tag.addEventListener('mouseleave', function () {
      this.style.removeProperty('--tilt');
    });
  });


  // ===== PROJECT PANEL: COMIC HOVER SHAKE =====
  document.querySelectorAll('.project-panel').forEach(panel => {
    panel.addEventListener('mouseenter', function () {
      this.style.transition = 'transform 0.18s ease, box-shadow 0.18s ease';
    });
  });


  // ===== CONTACT FORM =====
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  form?.addEventListener('submit', function (e) {
    e.preventDefault();

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'SENT! ✦';
    submitBtn.style.background = 'var(--peacock)';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent  = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 3500);
  });


  // ===== HERO BURST: CLICK POP EFFECT =====
  const heroBurst = document.querySelector('.hero-burst');
  const burstWords = ['POW!', 'BAM!', 'ZAP!', 'KA-POW!', 'BOOM!', 'WHAM!'];
  let burstIndex = 1;

  heroBurst?.addEventListener('click', function () {
    this.textContent = burstWords[burstIndex % burstWords.length];
    burstIndex++;
    this.style.transform = 'rotate(4deg) scale(1.15)';
    setTimeout(() => {
      this.style.transform = 'rotate(-3deg) scale(1)';
    }, 200);
  });


  // ===== CONSOLE EASTER EGG =====
  console.log(
    '%c⚡ VS Portfolio ⚡',
    'font-size:22px; color:#E8751A; font-weight:bold; font-family:Impact,sans-serif;'
  );
  console.log(
    '%cVintage India × Batman Comics · Built with ☕ & Code',
    'font-size:12px; color:#7B1F1F;'
  );

});
