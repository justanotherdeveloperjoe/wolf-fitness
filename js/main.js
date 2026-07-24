/* Wolf Fitness — site interactions */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Mobile navigation ----- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----- Scroll reveal + price count-up -----
     Cards, gallery tiles and section titles fade up into view.
     Price amounts count up from 0 the moment their card reveals. */
  var revealEls = document.querySelectorAll('[data-reveal]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10);
    if (!target || el.dataset.counted) return;
    el.dataset.counted = 'true';

    if (reducedMotion) {
      el.textContent = target;
      return;
    }

    var start = null;
    var duration = 900;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (revealEls.length) {
    if (reducedMotion || !window.IntersectionObserver) {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
        el.querySelectorAll('[data-count-to]').forEach(animateCount);
      });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          entry.target.querySelectorAll('[data-count-to]').forEach(animateCount);
          obs.unobserve(entry.target);
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ----- Vanta NET background on the CTA section -----
     Desktop-only, skipped for reduced-motion users; the CSS
     radial glow on .cta remains as the fallback look. */
  var cta = document.getElementById('cta');

  if (cta && window.Promise && !reducedMotion && window.innerWidth > 768) {
    var vantaReady = (window.VANTA && window.VANTA.NET)
      ? Promise.resolve()
      : loadScript('js/vendor/three.min.js').then(function () {
          return loadScript('js/vendor/vanta.net.min.js');
        });

    vantaReady
      .then(function () {
        if (!(window.VANTA && window.VANTA.NET)) return;
        window.VANTA.NET({
          el: cta,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          color: 0x76b900,
          backgroundColor: 0x000000,
          points: 9,
          maxDistance: 20,
          spacing: 17
        });
      })
      .catch(function () {
        /* WebGL or script failure: CSS fallback stays */
      });
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
})();
