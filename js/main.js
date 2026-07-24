/* Wolf Fitness — site interactions */
(function () {
  'use strict';

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

  /* ----- Vanta NET background on the CTA section -----
     Desktop-only, skipped for reduced-motion users; the CSS
     radial glow on .cta remains as the fallback look. */
  var cta = document.getElementById('cta');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
