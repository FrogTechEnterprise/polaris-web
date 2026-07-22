(function () {
  'use strict';

  var body = document.body;
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  var menuBackdrop = document.querySelector('[data-menu-backdrop]');
  var header = document.querySelector('.site-header');
  var menuLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var sections = document.querySelectorAll('main section[id]');
  var revealItems = document.querySelectorAll('[data-reveal]');
  var contactForm = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');
  var progressBar = document.querySelector('[data-scroll-progress]');
  var backToTop = document.querySelector('[data-back-to-top]');
  var methodTimeline = document.querySelector('.method-timeline');
  var timelineSteps = methodTimeline ? methodTimeline.querySelectorAll('.timeline-step') : [];

  function toggleMenu() {
    var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  }

  function closeMenu() {
    if (!menu || !menuToggle) {
      return;
    }

    menu.classList.remove('is-open');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function closeMenuOnResize() {
    if (window.innerWidth > 900 && menu.classList.contains('is-open')) {
      closeMenu();
    }
  }

  function getHeaderOffset() {
    if (!header) {
      return 0;
    }

    return header.offsetHeight;
  }

  function smoothScrollToHash(hash) {
    if (!hash || hash === '#') {
      return;
    }

    if (hash === '#inicio' || hash === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    var target = document.querySelector(hash);
    if (!target) {
      return;
    }

    var targetTop = target.getBoundingClientRect().top + window.pageYOffset;
    var finalTop = Math.max(0, targetTop - getHeaderOffset());

    window.scrollTo({
      top: finalTop,
      behavior: 'smooth'
    });
  }

  function setupSmoothAnchors() {
    if (!anchorLinks.length) {
      return;
    }

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') {
          return;
        }

        var target = document.querySelector(href);
        if (!target && href !== '#inicio' && href !== '#top') {
          return;
        }

        event.preventDefault();
        smoothScrollToHash(href);
      });
    });
  }

  function setupReveal() {
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var stagger = entry.target.getAttribute('data-delay');
            if (stagger) {
              entry.target.style.transitionDelay = stagger + 'ms';
            }
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function setActiveNav() {
    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return;
    }

    var currentId = '';

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            currentId = entry.target.id;
          }
        });

        menuLinks.forEach(function (link) {
          var hash = link.getAttribute('href');
          if (!hash) {
            return;
          }

          if (hash === '#' + currentId) {
            link.classList.add('is-current');
          } else {
            link.classList.remove('is-current');
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-25% 0px -55% 0px'
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function setupContactForm() {
    if (!contactForm || !feedback) {
      return;
    }

    contactForm.addEventListener('submit', function () {
      feedback.textContent = (window.i18n && window.i18n.t('contacto.form.feedbackSuccess')) ||
        'Gracias. Se abrira tu gestor de correo para completar el envio.';
      feedback.classList.remove('error');
      feedback.classList.add('success');
    });
  }

  function updateScrollProgress() {
    if (progressBar) {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }

    if (backToTop) {
      if (window.scrollY > window.innerHeight * 0.6) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }

    updateTimelineProgress();
  }

  function updateTimelineProgress() {
    if (!methodTimeline) {
      return;
    }

    var rect = methodTimeline.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var start = viewportHeight * 0.72;
    var end = viewportHeight * 0.32;
    var travel = rect.height + start - end;
    var rawProgress = (start - rect.top) / travel;
    var progress = Math.min(1, Math.max(0, rawProgress));
    var firstStep = timelineSteps.length ? timelineSteps[0] : null;
    var middleStep = timelineSteps.length > 1 ? timelineSteps[1] : null;
    var lastStep = timelineSteps.length ? timelineSteps[timelineSteps.length - 1] : null;
    var firstStop = firstStep ? (firstStep.offsetTop + (firstStep.offsetHeight / 2)) / rect.height : 0;
    var middleStop = middleStep ? (middleStep.offsetTop + (middleStep.offsetHeight / 2)) / rect.height : 0.45;
    var lastStop = lastStep ? (lastStep.offsetTop + (lastStep.offsetHeight / 2)) / rect.height : 1;
    var visibleProgress = firstStop + (progress * (lastStop - firstStop));
    var drawProgress = visibleProgress;

    if (middleStep) {
      var middleSkipStart = Math.max(firstStop, middleStop - 0.07);
      var middleExit = Math.min(lastStop, middleStop + 0.16);
      var middleBoost = middleExit - middleSkipStart;

      if (visibleProgress >= middleSkipStart) {
        drawProgress = Math.min(lastStop, visibleProgress + middleBoost);
      }
    }

    methodTimeline.style.setProperty('--timeline-start', (firstStop * 100).toFixed(1) + '%');
    methodTimeline.style.setProperty('--timeline-middle', (middleStop * 100).toFixed(1) + '%');
    methodTimeline.style.setProperty('--timeline-end', (lastStop * 100).toFixed(1) + '%');
    methodTimeline.style.setProperty('--timeline-progress', (drawProgress * 100).toFixed(1) + '%');

    timelineSteps.forEach(function (step, index) {
      var stepCenter = step.offsetTop + (step.offsetHeight / 2);
      var stepProgress = stepCenter / rect.height;
      var revealLead = index === timelineSteps.length - 1 ? 0.18 : 0.12;

      if (index === 0 || drawProgress >= stepProgress - revealLead) {
        step.classList.add('is-timeline-reached');
      } else {
        step.classList.remove('is-timeline-reached');
      }
    });
  }

  function setupScrollEffects() {
    if (!progressBar && !backToTop && !methodTimeline) {
      return;
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress();

    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', toggleMenu);
    window.addEventListener('resize', closeMenuOnResize);

    if (menuBackdrop) {
      menuBackdrop.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 900) {
          closeMenu();
        }
      });
    });
  }

  setupReveal();
  setupSmoothAnchors();
  setActiveNav();
  setupContactForm();
  setupScrollEffects();
}());
