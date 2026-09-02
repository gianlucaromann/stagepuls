(function () {
  'use strict';

  function setupHeroAnimations() {
    var els = document.querySelectorAll('[data-hero-animate]');
    els.forEach(function (el) {
      var delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(function () {
        el.classList.add('is-visible');
      }, delay + 60);
    });
  }

  function setupScrollAnimations() {
    var els = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = parseInt(el.dataset.delay || '0', 10);
          setTimeout(function () {
            el.classList.add('is-visible');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });
  }

  function setupModal() {
    var overlay = document.getElementById('anfrage-modal');
    if (!overlay) return;
    var openTriggers = document.querySelectorAll('[data-open-modal]');
    var closeTriggers = overlay.querySelectorAll('[data-close-modal]');
    var modal = overlay.querySelector('.modal');

    function openModal(e) {
      if (e) e.preventDefault();
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    openTriggers.forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });
    closeTriggers.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });
    overlay.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', function (e) { e.stopPropagation(); });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupHeroAnimations();
    setupScrollAnimations();
    setupModal();
  });
})();
