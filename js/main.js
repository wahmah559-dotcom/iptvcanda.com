/* ================================================
   IPTV Canada — Main JavaScript
   ================================================ */

'use strict';

/* === STICKY HEADER === */
(function () {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

/* === MOBILE MENU === */
(function () {
  const burger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('active');
    mobileNav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* === SCROLL ANIMATIONS (IntersectionObserver) === */
(function () {
  const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* === FAQ ACCORDION === */
(function () {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      q.setAttribute('aria-expanded', !isOpen);
    });
  });
})();

/* === PLAN PRICE TOGGLE === */
(function () {
  const toggleBtns = document.querySelectorAll('.tgl-btn');
  if (!toggleBtns.length) return;

  const priceData = {
    monthly:   { basic:['14','per month',null], standard:['24','per month',null], premium:['34','per month',null], family:['44','per month',null] },
    quarterly: { basic:['34','per 3 months','CA$42'], standard:['59','per 3 months','CA$72'], premium:['89','per 3 months','CA$102'], family:['109','per 3 months','CA$132'] },
    biannual:  { basic:['59','per 6 months','CA$84'], standard:['109','per 6 months','CA$144'], premium:['149','per 6 months','CA$204'], family:['199','per 6 months','CA$264'] },
    yearly:    { basic:['99','per year','CA$168'],    standard:['179','per year','CA$288'],    premium:['249','per year','CA$408'],    family:['349','per year','CA$528'] },
  };

  function updatePrices(period) {
    const pSet = priceData[period];
    document.querySelectorAll('.plan-card[data-plan]').forEach(card => {
      const key = card.dataset.plan;
      const [amt, prd, orig] = pSet[key] || [];
      const amtEl  = card.querySelector('.price-amt');
      const prdEl  = card.querySelector('.price-prd');
      const origEl = card.querySelector('.price-orig');
      if (amtEl)  amtEl.textContent  = 'CA$' + amt;
      if (prdEl)  prdEl.textContent  = prd;
      if (origEl) { origEl.textContent = orig || ''; origEl.style.display = orig ? 'inline' : 'none'; }
      const waBtn = card.querySelector('[data-wa-plan]');
      if (waBtn) {
        const planName = card.dataset.waName || key;
        waBtn.href = `https://wa.me/17867352904?text=Hello%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(planName)}%20plan%20(${encodeURIComponent(period)}%20billing)`;
      }
    });
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePrices(btn.dataset.period);
    });
  });
})();

/* === ANIMATED COUNTERS === */
(function () {
  const els = document.querySelectorAll('[data-counter]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 2000, 1);
        const v = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = v.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
})();

/* === COOKIE CONSENT === */
(function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (!localStorage.getItem('iptv-cookies')) {
    setTimeout(() => banner.classList.add('show'), 1200);
  }
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('iptv-cookies', 'accepted');
    banner.classList.remove('show');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('iptv-cookies', 'declined');
    banner.classList.remove('show');
  });
})();

/* === CONTACT FORM (UI only — redirects to WhatsApp) === */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const msg  = form.querySelector('[name="message"]')?.value || '';
    const waMsg = encodeURIComponent(`Hello, my name is ${name}. ${msg}`);
    const success = document.getElementById('form-success');
    if (success) { success.style.display = 'block'; }
    setTimeout(() => {
      window.open(`https://wa.me/17867352904?text=${waMsg}`, '_blank', 'noopener');
    }, 600);
    form.reset();
  });
})();

/* === ACTIVE NAV LINK === */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* === MOVIE SHOWCASE SCROLL === */
document.querySelectorAll('.movie-row').forEach(function(row) {
  var grid = row.querySelector('.movie-grid');
  var prev = row.querySelector('.scroll-prev');
  var next = row.querySelector('.scroll-next');
  if (prev && next && grid) {
    prev.addEventListener('click', function() { grid.scrollBy({ left: -900, behavior: 'smooth' }); });
    next.addEventListener('click', function() { grid.scrollBy({ left: 900, behavior: 'smooth' }); });
  }
});
