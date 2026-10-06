/* Small progressive enhancements. All content and contact links work without JS. */
(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const mobile = window.matchMedia('(max-width: 980px)');

  if (header && toggle && nav) {
    header.classList.add('nav-ready');
    const setOpen = (open, restoreFocus = false) => {
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      setOpen(false);
      /* Move keyboard focus to the destination after closing a mobile disclosure. */
      if (mobile.matches && link.hash) {
        const destination = document.querySelector(link.hash);
        if (destination) {
          destination.setAttribute('tabindex', '-1');
          destination.focus({ preventScroll: true });
          destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
        }
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
    });
    document.addEventListener('click', event => {
      if (!header.contains(event.target) && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
    const resetMenu = () => setOpen(false);
    if (mobile.addEventListener) mobile.addEventListener('change', resetMenu);
    else mobile.addListener(resetMenu);
  }

  const year = document.querySelector('#copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* Elements are always visible; the observer only adds a gentle entrance motion. */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-seen');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
