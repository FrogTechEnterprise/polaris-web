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
  var lockedScrollY = 0;

  function lockBodyScroll() {
    if (window.innerWidth > 900) {
      return;
    }

    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    body.style.position = 'fixed';
    body.style.top = '-' + lockedScrollY + 'px';
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
  }

  function unlockBodyScroll() {
    if (window.innerWidth > 900) {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      return;
    }

    var y = Math.abs(parseInt(body.style.top || '0', 10));
    var targetY = y || lockedScrollY || 0;
    var root = document.documentElement;
    var prevScrollBehavior = root.style.scrollBehavior;

    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.width = '';

    // Avoid smooth-scroll animation jump when releasing body lock.
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, targetY);

    window.requestAnimationFrame(function () {
      root.style.scrollBehavior = prevScrollBehavior;
    });
  }

  function toggleMenu() {
    var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
    body.classList.toggle('menu-open');

    if (expanded) {
      unlockBodyScroll();
    } else {
      lockBodyScroll();
    }
  }

  function closeMenu() {
    if (!menu || !menuToggle) {
      return;
    }

    menu.classList.remove('is-open');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    unlockBodyScroll();
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

    contactForm.addEventListener('input', function () {
      if (!feedback.textContent) {
        return;
      }

      feedback.textContent = '';
      feedback.classList.remove('error');
      feedback.classList.remove('success');
    });

    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      var submitButton = contactForm.querySelector('button[type="submit"]');
      var originalLabel = submitButton ? submitButton.textContent : '';

      try {
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Enviando...';
        }

        var nameField = contactForm.querySelector('[name="name"]');
        var emailField = contactForm.querySelector('[name="email"]');
        var messageField = contactForm.querySelector('[name="message"]');
        var privacyField = contactForm.querySelector('[name="privacy"]');
        var name = nameField ? nameField.value.trim() : '';
        var email = emailField ? emailField.value.trim() : '';
        var message = messageField ? messageField.value.trim() : '';
        var privacyAccepted = privacyField ? (privacyField.checked ? 'Si' : 'No') : 'No';

        var composedMessage = [
          'Nuevo mensaje desde polarismarketing.es',
          '',
          'Nombre: ' + name,
          'Email: ' + email,
          '',
          'Mensaje:',
          message,
          '',
          'Acepta privacidad: ' + privacyAccepted
        ].join('\n');

        var payload = new FormData();
        payload.append('_subject', 'Nuevo mensaje desde polarismarketing.es');
        payload.append('_captcha', 'false');
        if (email) {
          payload.append('_replyto', email);
        }
        payload.append('mensaje', composedMessage);

        var response = await fetch(contactForm.action, {
          method: 'POST',
          body: payload,
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('FormSubmit request failed');
        }

        feedback.textContent = (window.i18n && window.i18n.t('contacto.form.feedbackSuccess')) ||
          'Gracias. Tu mensaje se ha enviado correctamente.';
        feedback.classList.remove('error');
        feedback.classList.add('success');
        contactForm.reset();
      } catch (error) {
        feedback.textContent = 'No se pudo enviar el mensaje en este momento. Intentalo de nuevo.';
        feedback.classList.remove('success');
        feedback.classList.add('error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel;
        }
      }
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

  function setupBoatStarBurst() {
    var lane = document.querySelector('.boat-lane');
    var boat = document.querySelector('.boat');
    var leaderStar = lane ? lane.querySelector('.boat-leader-star') : null;
    if (!lane || !boat || !leaderStar) {
      return;
    }

    var palette = ['#ffd65d', '#8ed7ff', '#6aa8ff', '#ffffff', '#ffe89a'];
    var cooldown = false;
    var rafId = null;
    var lastTs = 0;
    var drift = 0;
    var direction = 1;
    var laneWidth = 0;
    var laneHeight = 0;
    var starX = 0;
    var starY = 0;
    var boatX = 0;
    var boatY = 0;
    var followDistance = 128;
    var starBaseYRatio = 0.79;
    var boatBaseYRatio = 0.91;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function measureLane() {
      var rect = lane.getBoundingClientRect();
      laneWidth = Math.max(280, rect.width);
      laneHeight = Math.max(120, rect.height);

      if (!starX) {
        starX = laneWidth * 0.22;
        starY = laneHeight * starBaseYRatio;
        boatX = starX - followDistance;
        boatY = laneHeight * boatBaseYRatio;
      } else {
        starX = clamp(starX, 14, laneWidth - 14);
        boatX = clamp(boatX, -120, laneWidth + 120);
        boatY = clamp(boatY, laneHeight * 0.86, laneHeight * 0.95);
      }
    }

    function animateChase(ts) {
      if (!lastTs) {
        lastTs = ts;
      }

      var dt = Math.min(0.04, (ts - lastTs) / 1000);
      lastTs = ts;
      drift += dt;

      var speed = 92;
      starX += direction * speed * dt;

      if (starX > laneWidth - 12) {
        starX = laneWidth - 12;
        direction = -1;
      }

      if (starX < 12) {
        starX = 12;
        direction = 1;
      }

      var progress = starX / laneWidth;
      var wave = Math.sin(progress * Math.PI * 4 + drift * 4.1) * 10;
      var microWave = Math.sin(drift * 7.8) * 2;
      starY = laneHeight * starBaseYRatio + wave + microWave;

      var targetBoatX = starX - (direction * followDistance);
      var lowWave = Math.sin(drift * 2.1 + (progress * Math.PI * 2.4)) * 2.2;
      var targetBoatY = laneHeight * boatBaseYRatio + lowWave;

      boatX += (targetBoatX - boatX) * 0.12;
      boatY += (targetBoatY - boatY) * 0.07;

      var tilt = clamp((targetBoatX - boatX) * 0.05 + (targetBoatY - boatY) * 0.35 + direction * 1.2, -5.5, 5.5);
      var starRotation = drift * 220;

      leaderStar.style.transform = 'translate(' + starX.toFixed(1) + 'px, ' + starY.toFixed(1) + 'px) rotate(' + starRotation.toFixed(1) + 'deg)';
      boat.style.transform = 'translate(' + boatX.toFixed(1) + 'px, ' + boatY.toFixed(1) + 'px) rotate(' + tilt.toFixed(2) + 'deg)';

      rafId = window.requestAnimationFrame(animateChase);
    }

    function emitStarBurst() {
      if (cooldown) {
        return;
      }

      cooldown = true;
      window.setTimeout(function () {
        cooldown = false;
      }, 220);

      var boatRect = boat.getBoundingClientRect();
      var laneRect = lane.getBoundingClientRect();
      var originX = boatRect.left + boatRect.width / 2 - laneRect.left;
      var originY = boatRect.top + boatRect.height / 2 - laneRect.top;
      var count = 20;

      for (var i = 0; i < count; i++) {
        var star = document.createElement('span');
        var angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        var distance = 36 + Math.random() * 120;
        var tx = Math.cos(angle) * distance;
        var ty = Math.sin(angle) * distance - (16 + Math.random() * 24);
        var duration = 680 + Math.random() * 420;
        var size = 8 + Math.random() * 9;
        var color = palette[Math.floor(Math.random() * palette.length)];
        var rotation = (-210 + Math.random() * 420).toFixed(0) + 'deg';

        star.className = 'boat-star';
        star.style.left = originX + 'px';
        star.style.top = originY + 'px';
        star.style.setProperty('--star-tx', tx.toFixed(1) + 'px');
        star.style.setProperty('--star-ty', ty.toFixed(1) + 'px');
        star.style.setProperty('--star-duration', duration.toFixed(0) + 'ms');
        star.style.setProperty('--star-size', size.toFixed(1) + 'px');
        star.style.setProperty('--star-color', color);
        star.style.setProperty('--star-rot', rotation);

        star.addEventListener('animationend', function () {
          this.remove();
        });

        lane.appendChild(star);
      }
    }

    measureLane();
    rafId = window.requestAnimationFrame(animateChase);

    window.addEventListener('resize', measureLane);

    boat.addEventListener('click', emitStarBurst);
    boat.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        emitStarBurst();
      }
    });

    window.addEventListener('beforeunload', function () {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener('resize', measureLane);
    });
  }

  function setupServicesCarousel() {
    var list = document.querySelector('.services-list');
    if (!list) {
      return;
    }

    var items = Array.prototype.slice.call(list.querySelectorAll('.service-item'));
    if (items.length < 2) {
      return;
    }

    var progress = 0;
    var active = 0;
    var isDown = false;
    var startX = 0;
    var activePointerId = null;
    var isInteractive = false;
    var hasAutoPlayed = false;
    var autoFrameId = null;
    var autoplayDuration = 2100;
    var SPEED_WHEEL = 0.03;
    var SPEED_DRAG = -0.13;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function computeZ(index) {
      return Math.max(1, items.length - Math.round(Math.abs(active - index)));
    }

    function easeInOutCubic(value) {
      if (value < 0.5) {
        return 4 * value * value * value;
      }

      return 1 - Math.pow(-2 * value + 2, 3) / 2;
    }

    function render() {
      progress = clamp(progress, 0, 100);
      active = (progress / 100) * (items.length - 1);

      items.forEach(function (item, index) {
        var relative = index - active;
        item.style.setProperty('--items', String(items.length));
        item.style.setProperty('--z-index', String(computeZ(index)));
        item.style.setProperty('--active', relative.toFixed(4));
      });
    }

    function moveToIndex(index) {
      if (items.length <= 1) {
        return;
      }

      progress = (index / (items.length - 1)) * 100;
      render();
    }

    function onWheel(event) {
      if (!isInteractive) {
        return;
      }

      event.preventDefault();
      // Trackpads often emit horizontal deltaX, while mouse wheels usually emit deltaY.
      var axisDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      progress += axisDelta * SPEED_WHEEL;
      render();
    }

    function onPointerDown(event) {
      if (!isInteractive) {
        return;
      }

      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      isDown = true;
      startX = event.clientX;
      activePointerId = event.pointerId;
      if (typeof list.setPointerCapture === 'function') {
        try {
          list.setPointerCapture(activePointerId);
        } catch (error) {
          /* ignore capture failures */
        }
      }
      list.classList.add('is-dragging');
    }

    function onPointerMove(event) {
      if (!isDown || (activePointerId !== null && event.pointerId !== activePointerId)) {
        return;
      }

      event.preventDefault();
      var delta = (event.clientX - startX) * SPEED_DRAG;
      progress += delta;
      startX = event.clientX;
      render();
    }

    function onPointerUp(event) {
      if (!isDown || (event && activePointerId !== null && event.pointerId !== activePointerId)) {
        return;
      }

      if (activePointerId !== null && typeof list.releasePointerCapture === 'function') {
        try {
          list.releasePointerCapture(activePointerId);
        } catch (error) {
          /* ignore release failures */
        }
      }

      activePointerId = null;
      isDown = false;
      list.classList.remove('is-dragging');
    }

    function onTouchMove(event) {
      if (!isDown) {
        return;
      }

      event.preventDefault();
    }

    function onListKeydown(event) {
      if (!isInteractive) {
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        progress += 8;
        render();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        progress -= 8;
        render();
      }
    }

    function runIntroAutoplay() {
      if (hasAutoPlayed) {
        return;
      }

      hasAutoPlayed = true;
      isInteractive = false;
      // Start from the opposite edge so the intro sweep reads left-to-right.
      progress = 100;
      render();

      var startTime = 0;

      function step(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var elapsed = timestamp - startTime;
        var t = clamp(elapsed / autoplayDuration, 0, 1);
        progress = (1 - easeInOutCubic(t)) * 100;
        render();

        if (t < 1) {
          autoFrameId = window.requestAnimationFrame(step);
          return;
        }

        autoFrameId = null;
        isInteractive = true;
      }

      autoFrameId = window.requestAnimationFrame(step);
    }

    items.forEach(function (item, index) {
      item.setAttribute('tabindex', '0');

      item.addEventListener('click', function () {
        moveToIndex(index);
      });

      item.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          moveToIndex(index);
        }
      });
    });

    list.setAttribute('tabindex', '0');
    list.addEventListener('keydown', onListKeydown);
    list.addEventListener('wheel', onWheel, { passive: false });
    list.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    list.addEventListener('touchmove', onTouchMove, { passive: false });

    render();

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isInteractive = true;
      return;
    }

    if (!('IntersectionObserver' in window)) {
      runIntroAutoplay();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            runIntroAutoplay();
            observer.disconnect();
          }
        });
      },
      {
        threshold: [0.15]
      }
    );

    observer.observe(list);

    window.addEventListener('beforeunload', function () {
      if (autoFrameId) {
        window.cancelAnimationFrame(autoFrameId);
      }

      observer.disconnect();
    });
  }

  function setupTestimonialsScrollSection() {
    var section = document.querySelector('[data-testimonials-scroll-section]');
    var stage = document.querySelector('[data-testimonials-scroll-stage]');
    var intro = section ? section.querySelector('.testimonials-scroll-intro') : null;
    var scaler = document.querySelector('[data-ts-scaler]');
    var layers = document.querySelectorAll('[data-ts-layer]');
    var floatingAvatars = section ? section.querySelectorAll('.ts-avatar[data-ts-target]') : [];
    var entries = document.querySelectorAll('[data-ts-entry]');

    if (!section || !stage || !intro || !scaler || !layers.length || !entries.length) {
      return;
    }

    var activeEntry = 1;
    var manualMode = false;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function easeOutCubic(value) {
      return 1 - Math.pow(1 - value, 3);
    }

    function setEntry(id) {
      activeEntry = id;

      entries.forEach(function (entry) {
        var entryId = Number(entry.getAttribute('data-ts-entry'));
        entry.classList.remove('is-active', 'is-hidden-up', 'is-hidden-down');

        if (entryId === activeEntry) {
          entry.classList.add('is-active');
        } else if (entryId < activeEntry) {
          entry.classList.add('is-hidden-up');
        } else {
          entry.classList.add('is-hidden-down');
        }
      });

      floatingAvatars.forEach(function (avatar) {
        var target = Number(avatar.getAttribute('data-ts-target'));
        avatar.classList.toggle('is-selected', target === activeEntry);
      });
    }

    function updateTestimonialsScrollState() {
      var rect = stage.getBoundingClientRect();
      var travel = Math.max(1, rect.height - window.innerHeight);
      var rawProgress = (-rect.top) / travel;
      var progress = clamp(rawProgress, 0, 1);
      var introOutStart = 0.01;
      var introOutEnd = 0.12;
      var cardInStart = 0.02;
      var cardInEnd = 0.15;
      var testimonialsStart = 0.08;
      var manualStart = 0.88;

      section.style.setProperty('--ts-progress', progress.toFixed(4));

      var scalePhase = clamp(progress / 0.26, 0, 1);
      var scalerScale = 2.6 - (1.6 * easeOutCubic(scalePhase));
      scaler.style.transform = 'translate(-50%, -50%) scale(' + scalerScale.toFixed(4) + ')';

      var introOut = clamp((progress - introOutStart) / (introOutEnd - introOutStart), 0, 1);
      intro.style.opacity = (1 - introOut).toFixed(4);
      intro.style.transform = 'translateX(-50%) translateY(' + (introOut * -18).toFixed(2) + 'px)';

      var cardIn = clamp((progress - cardInStart) / (cardInEnd - cardInStart), 0, 1);
      scaler.style.opacity = easeOutCubic(cardIn).toFixed(4);

      layers.forEach(function (layer, index) {
        var start = index * 0.045;
        var end = 0.24 + (index * 0.085);
        var local = clamp((progress - start) / (end - start), 0, 1);
        var localEase = easeOutCubic(local);

        layer.style.opacity = localEase.toFixed(4);
        layer.style.transform = 'scale(' + (0.45 + localEase * 0.55).toFixed(4) + ') translateY(' + ((1 - localEase) * 28).toFixed(2) + 'px)';
      });

      var entryProgress = clamp((progress - testimonialsStart) / (1 - testimonialsStart), 0, 1);
      var nextEntry = Math.min(entries.length, Math.max(1, Math.floor(entryProgress * entries.length) + 1));

      if (progress < manualStart) {
        manualMode = false;
        setEntry(nextEntry);
      } else if (!manualMode) {
        setEntry(nextEntry);
      }
    }

    floatingAvatars.forEach(function (avatar) {
      avatar.addEventListener('click', function () {
        var rect = stage.getBoundingClientRect();
        var travel = Math.max(1, rect.height - window.innerHeight);
        var progress = clamp((-rect.top) / travel, 0, 1);

        if (progress < 0.88) {
          return;
        }

        var target = Number(avatar.getAttribute('data-ts-target'));
        if (!target) {
          return;
        }

        manualMode = true;
        setEntry(target);
      });
    });

    window.addEventListener('scroll', updateTestimonialsScrollState, { passive: true });
    window.addEventListener('resize', updateTestimonialsScrollState);
    updateTestimonialsScrollState();
  }

  function setupAboutImageRevealCanvas() {
    var aboutImage = document.querySelector('.about-image');
    var canvas = document.querySelector('[data-about-reveal-canvas]');
    if (!aboutImage || !canvas) {
      return;
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    var WORD = ['START NOW', 'WITH US'];
    var WALL = 'rgb(243,243,239)';
    var CELL = 18;
    var R = 160;
    var PUSH = 200;
    var CLEAR = 0.5;
    var EASE = 0.09;
    var DECAY = 0.988;

    var width = 0;
    var height = 0;
    var cols = 0;
    var rows = 0;
    var dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    var frameId = null;
    var wordCanvas = null;
    var coverCanvas = null;
    var coverImage = null;
    var revealStrength = 0;
    var revealTarget = 0;
    var idleTimer = null;

    var mouse = {
      x: -9999,
      y: -9999,
      sx: -9999,
      sy: -9999,
      active: false
    };

    var rev;
    var tox;
    var toy;
    var ox;
    var oy;

    function buildGrid() {
      var n = cols * rows;
      rev = new Float32Array(n);
      tox = new Float32Array(n);
      toy = new Float32Array(n);
      ox = new Float32Array(n);
      oy = new Float32Array(n);
    }

    function buildWord() {
      wordCanvas = document.createElement('canvas');
      wordCanvas.width = width;
      wordCanvas.height = height;
      var w = wordCanvas.getContext('2d');

      var size = Math.min(height * 0.28, width * 0.16);
      w.textAlign = 'center';
      w.textBaseline = 'middle';
      w.font = '700 ' + size + 'px "Manrope", sans-serif';

      var widest = 0;
      WORD.forEach(function (line) {
        var lineWidth = w.measureText(line).width;
        if (lineWidth > widest) {
          widest = lineWidth;
        }
      });

      if (widest > width * 0.84) {
        size *= (width * 0.84) / widest;
      }

      w.font = '700 ' + size + 'px "Manrope", sans-serif';

      var gradient = w.createLinearGradient(width * 0.16, 0, width * 0.84, 0);
      gradient.addColorStop(0, '#2f67ff');
      gradient.addColorStop(0.5, '#17a8ff');
      gradient.addColorStop(1, '#f3be2b');
      w.fillStyle = gradient;

      var lineHeight = size * 1.04;
      var y0 = height * 0.5 - ((WORD.length - 1) * lineHeight) / 2;
      WORD.forEach(function (line, i) {
        w.fillText(line, width / 2, y0 + i * lineHeight);
      });
    }

    function drawCoverImageToCanvas(targetCtx) {
      if (!coverImage || !coverImage.complete) {
        targetCtx.fillStyle = '#dfe7f2';
        targetCtx.fillRect(0, 0, width, height);
        return;
      }

      var iw = coverImage.naturalWidth || coverImage.width;
      var ih = coverImage.naturalHeight || coverImage.height;
      if (!iw || !ih) {
        targetCtx.fillStyle = '#dfe7f2';
        targetCtx.fillRect(0, 0, width, height);
        return;
      }

      var scale = Math.max(width / iw, height / ih);
      var dw = iw * scale;
      var dh = ih * scale;
      var dx = (width - dw) / 2;
      var dy = (height - dh) / 2;

      targetCtx.drawImage(coverImage, dx, dy, dw, dh);
      targetCtx.fillStyle = 'rgba(16, 39, 72, 0.2)';
      targetCtx.fillRect(0, 0, width, height);
    }

    function buildCover() {
      coverCanvas = document.createElement('canvas');
      coverCanvas.width = width;
      coverCanvas.height = height;
      var c = coverCanvas.getContext('2d');
      drawCoverImageToCanvas(c);
    }

    function draw() {
      revealStrength += (revealTarget - revealStrength) * 0.12;

      if (mouse.active) {
        mouse.sx += (mouse.x - mouse.sx) * 0.25;
        mouse.sy += (mouse.y - mouse.sy) * 0.25;
      }

      if (revealStrength <= 0.02) {
        ctx.clearRect(0, 0, width, height);
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (!wordCanvas) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      if (!coverCanvas) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      // The word remains fixed; only the pixel wall moves to reveal it.
      ctx.fillStyle = WALL;
      ctx.globalAlpha = Math.min(1, revealStrength);
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(wordCanvas, 0, 0);

      var mx = mouse.sx;
      var my = mouse.sy;
      var active = mouse.active;

      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var i = r * cols + c;
          var hx = c * CELL;
          var hy = r * CELL;
          var inf = 0;

          if (active) {
            var dx = hx + CELL * 0.5 - mx;
            var dy = hy + CELL * 0.5 - my;
            var d2 = dx * dx + dy * dy;

            if (d2 < R * R && d2 > 0.001) {
              var d = Math.sqrt(d2);
              var p = 1 - d / R;
              inf = Math.min(1, p * CLEAR);

              if (inf > rev[i]) {
                var mag = PUSH * p * p;
                tox[i] = dx / d * mag;
                toy[i] = dy / d * mag;
              }
            }
          }

          var rv = rev[i] * DECAY;
          if (inf > rv) {
            rv = inf;
          }
          rev[i] = rv;

          ox[i] += (tox[i] * rv - ox[i]) * EASE;
          oy[i] += (toy[i] * rv - oy[i]) * EASE;

          var dxp = hx + ox[i];
          var dyp = hy + oy[i];

          ctx.globalAlpha = Math.min(1, 0.95 * revealStrength);
          ctx.drawImage(coverCanvas, hx, hy, CELL, CELL, dxp, dyp, CELL, CELL);

          if (rv > 0.08) {
            ctx.globalAlpha = Math.min(0.55, rv * revealStrength * 0.85);
            ctx.strokeStyle = 'rgba(15, 28, 52, 0.22)';
            ctx.lineWidth = 1;
            ctx.strokeRect(dxp + 0.5, dyp + 0.5, CELL - 1, CELL - 1);
          }
        }
      }

      ctx.globalAlpha = 1;

      frameId = window.requestAnimationFrame(draw);
    }

    function resize() {
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      width = Math.max(1, Math.floor(aboutImage.clientWidth));
      height = Math.max(1, Math.floor(aboutImage.clientHeight));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;

      buildGrid();
      buildWord();
      buildCover();
    }

    function onPointerMove(event) {
      var rect = aboutImage.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      if (!mouse.active) {
        mouse.sx = x;
        mouse.sy = y;
      }

      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
      revealTarget = 1;
      aboutImage.classList.add('is-reveal-active');

      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }

      idleTimer = window.setTimeout(function () {
        revealTarget = 0;
        aboutImage.classList.remove('is-reveal-active');
        mouse.active = false;
      }, 520);
    }

    function onPointerLeave() {
      mouse.active = false;
      revealTarget = 0;
      aboutImage.classList.remove('is-reveal-active');

      if (idleTimer) {
        window.clearTimeout(idleTimer);
        idleTimer = null;
      }
    }

    aboutImage.addEventListener('pointermove', onPointerMove);
    aboutImage.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', resize);

    coverImage = new Image();
    coverImage.src = 'assets/images/hero-placeholder.jpg';
    coverImage.addEventListener('load', function () {
      buildCover();
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        buildWord();
        buildCover();
      });
    }

    resize();
    draw();

    window.addEventListener('beforeunload', function () {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }
    });
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
  setupBoatStarBurst();
  setupServicesCarousel();
  setupTestimonialsScrollSection();
  setupAboutImageRevealCanvas();
}());
