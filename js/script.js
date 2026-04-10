/* ================================================================
   KEDAR NATH — PORTFOLIO JAVASCRIPT
   All interactive features: preloader, cursor, typing, scroll
   reveals, navbar, mobile menu, project filter, testimonials,
   contact form, counters, particles, back-to-top, dark/light mode
   ================================================================ */

$(document).ready(function () {

  /* ==============================================================
     1. PRELOADER
     ============================================================== */
  $(window).on('load', function () {
    setTimeout(function () {
      $('#preloader').addClass('hidden');
      // Trigger hero reveals after preloader
      setTimeout(triggerHeroReveals, 200);
    }, 1500);
  });

  // Fallback: hide preloader after 4 seconds max
  setTimeout(function () {
    $('#preloader').addClass('hidden');
    triggerHeroReveals();
  }, 4000);

  function triggerHeroReveals() {
    $('#hero .reveal-fade, #hero .reveal-slide-left, #hero .reveal-slide-right').each(function () {
      var el = $(this);
      var delay = parseInt(el.data('delay')) || 0;
      setTimeout(function () {
        el.addClass('revealed');
      }, delay);
    });
  }

  /* ==============================================================
     2. CUSTOM CURSOR
     ============================================================== */
  var cursorDot = $('#cursor-dot');
  var cursorOutline = $('#cursor-outline');
  var mouseX = 0, mouseY = 0;
  var outlineX = 0, outlineY = 0;

  $(document).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.css({ left: mouseX + 'px', top: mouseY + 'px' });
  });

  // Smooth trailing outline
  function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    cursorOutline.css({ left: outlineX + 'px', top: outlineY + 'px' });
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  $('a, button, input, textarea, .project-card, .filter-btn, .social-icon, .tech-badge').on('mouseenter', function () {
    cursorOutline.addClass('hover');
  }).on('mouseleave', function () {
    cursorOutline.removeClass('hover');
  });

  /* ==============================================================
     3. DARK / LIGHT MODE TOGGLE
     ============================================================== */
  var themeToggle = $('#theme-toggle');
  var html = $('html');

  // Check saved preference — default to dark on first visit
  var savedTheme = localStorage.getItem('kn-theme');
  if (savedTheme === 'light') {
    html.removeClass('dark');
  } else {
    html.addClass('dark');
  }

  themeToggle.on('click', function () {
    html.toggleClass('dark');
    var isDark = html.hasClass('dark');
    localStorage.setItem('kn-theme', isDark ? 'dark' : 'light');
  });

  /* ==============================================================
     4. STICKY NAVBAR + SCROLL EFFECTS
     ============================================================== */
  var navbar = $('#navbar');

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    // Shrink navbar on scroll
    if (scrollTop > 80) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }

    // Back to top button
    if (scrollTop > 600) {
      $('#back-to-top').css({ opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' });
    } else {
      $('#back-to-top').css({ opacity: 0, transform: 'translateY(1rem)', pointerEvents: 'none' });
    }
  });

  // Trigger once on load
  $(window).trigger('scroll');

  /* ==============================================================
     5. SMOOTH SCROLLING (Nav Links)
     ============================================================== */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      var offset = navbar.outerHeight() || 80;
      $('html, body').animate({
        scrollTop: target.offset().top - offset
      }, 800, 'swing');

      // Close mobile menu if open
      if ($('#mobile-menu').hasClass('open')) {
        closeMobileMenu();
      }
    }
  });

  /* ==============================================================
     6. ACTIVE MENU HIGHLIGHTING (Scrollspy)
     ============================================================== */
  var sections = $('section[id]');
  var navLinks = $('.nav-link');

  function updateActiveNav() {
    var scrollPos = $(window).scrollTop() + 150;

    sections.each(function () {
      var section = $(this);
      var sectionTop = section.offset().top;
      var sectionHeight = section.outerHeight();
      var sectionId = section.attr('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.removeClass('active');
        $(".nav-link[data-section='" + sectionId + "']").addClass('active');
      }
    });
  }

  $(window).on('scroll', updateActiveNav);
  updateActiveNav();

  /* ==============================================================
     7. MOBILE MENU TOGGLE
     ============================================================== */
  function closeMobileMenu() {
    $('#mobile-toggle').removeClass('open');
    $('#mobile-menu').removeClass('open');
    $('body').removeClass('menu-open');
  }

  $('#mobile-toggle').on('click', function () {
    var isOpen = $('#mobile-menu').hasClass('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      $(this).addClass('open');
      $('#mobile-menu').addClass('open');
      $('body').addClass('menu-open');
    }
  });

  /* ==============================================================
     8. TYPING ANIMATION
     ============================================================== */
  var typedText = $('#typed-text');
  var words = ['Web Designer', 'UI/UX Designer', 'Visual Creator', 'Front-end Developer'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 80;

  function typeLoop() {
    var currentWord = words[wordIndex];

    if (isDeleting) {
      typedText.text(currentWord.substring(0, charIndex - 1));
      charIndex--;
      typeSpeed = 40;
    } else {
      typedText.text(currentWord.substring(0, charIndex + 1));
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before new word
    }

    setTimeout(typeLoop, typeSpeed);
  }

  typeLoop();

  /* ==============================================================
     9. SCROLL REVEAL (IntersectionObserver)
     ============================================================== */
  var revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide-left, .reveal-slide-right');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = parseInt(el.dataset.delay) || 0;

        // Skip hero elements (handled by preloader callback)
        if (el.closest('#hero')) return;

        setTimeout(function () {
          el.classList.add('revealed');
        }, delay);

        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(function (el) {
    // Don't observe hero elements
    if (!el.closest('#hero')) {
      revealObserver.observe(el);
    }
  });

  /* ==============================================================
     10. ANIMATED SKILL BARS
     ============================================================== */
  var skillBars = document.querySelectorAll('.skill-bar-fill');

  var skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        var width = bar.dataset.width + '%';
        bar.style.setProperty('--target-width', width);
        bar.classList.add('animated');
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(function (bar) {
    skillObserver.observe(bar);
  });

  /* ==============================================================
     11. COUNTER ANIMATION (Stats)
     ============================================================== */
  var counters = document.querySelectorAll('.counter');

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var counter = entry.target;
        var target = parseInt(counter.dataset.target);
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          var progress = Math.min((currentTime - startTime) / duration, 1);
          // Ease out cubic
          var ease = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(ease * target) + '+';

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });

  /* ==============================================================
     12. PROJECT FILTER (jQuery)
     ============================================================== */
  var filterBtns = $('.filter-btn');
  var projectCards = $('.project-card');

  filterBtns.on('click', function () {
    var filter = $(this).data('filter');

    // Update active button
    filterBtns.removeClass('active');
    $(this).addClass('active');

    // Filter cards with animation
    projectCards.each(function () {
      var card = $(this);
      var category = card.data('category');

      if (filter === 'all' || category === filter) {
        card.removeClass('hidden-card').addClass('show-card');
      } else {
        card.removeClass('show-card').addClass('hidden-card');
      }
    });
  });

  // Initialize all cards as visible
  projectCards.addClass('show-card');

  /* ==============================================================
     13. BACK TO TOP
     ============================================================== */
  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
  });

  /* ==============================================================
     16. PARTICLE BACKGROUND (Canvas)
     ============================================================== */
  var canvas = document.getElementById('particles-canvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 60;
  var mouse = { x: null, y: null };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  $(window).on('resize', resizeCanvas);

  // Track mouse for particle interaction
  $(document).on('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212';
  }

  Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;

    // Mouse interaction
    if (mouse.x !== null) {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.x -= dx * 0.01;
        this.y -= dy * 0.01;
      }
    }

    // Wrap around edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.color + ', ' + this.opacity + ')';
    ctx.fill();
  };

  // Initialize particles
  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          var opacity = (1 - dist / 150) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(124, 58, 237, ' + opacity + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function (p) {
      p.update();
      p.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  /* ==============================================================
     17. PARALLAX EFFECT (Hero Orbs)
     ============================================================== */
  $(document).on('mousemove', function (e) {
    var moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    var moveY = (e.clientY - window.innerHeight / 2) * 0.02;

    $('#hero .animate-float-slow').css('transform', 'translate(' + moveX + 'px, ' + (moveY - 20) + 'px)');
    $('#hero .animate-float-slower').css('transform', 'translate(' + (-moveX) + 'px, ' + (moveY - 10) + 'px)');
  });

}); // End document.ready
