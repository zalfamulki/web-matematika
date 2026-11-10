/* =====================================================================
   INTERACTIONS · Interaksi & Efek Dinamis  (js/interactions.js)
   TOC:
     1. Scroll Reveal (IntersectionObserver)
     2. Fraction Lab interaktif (materi)
     3. Confetti (hasil kuis)
     4. Score Count-up (hasil kuis)
     5. Timer warning (kuis)
   ===================================================================== */

/* ---------- 1. Scroll Reveal (AOS-style) ---------- */
function initRevealObserver() {
  const targets = document.querySelectorAll('[data-animate]:not(.revealed)');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('revealed'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(el => io.observe(el));
  window.__revealObserver = io;
}

// Re-observe elements inside a newly revealed section (e.g. after tab switch)
window.observeReveals = function(scope = document) {
  const targets = scope.querySelectorAll('[data-animate]:not(.revealed)');
  if (!targets.length) return;
  if (window.__revealObserver) {
    targets.forEach(el => {
      if (el.dataset.forcedReveal) return;
      window.__revealObserver.observe(el);
    });
  } else {
    targets.forEach(el => el.classList.add('revealed'));
  }
};

/* ---------- 1b. Ripple effect untuk tombol interaktif ---------- */
function initRippleEffect() {
  const interactive = document.querySelectorAll('.btn, .option-btn, .deny-chip, .btn-level, .setup-card, .sidebar-item button, .nav-link');

  interactive.forEach(el => {
    if (el.dataset.rippleBound) return;
    el.dataset.rippleBound = '1';

    el.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;

      const rect = el.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height) * 1.3;
      const ripple = document.createElement('span');
      ripple.className = 'ripple-ink';
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - diameter / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - diameter / 2}px`;

      el.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

/* ---------- 1c. Falling background particles (stars & circles) ---------- */
function initFallingBackground() {
  const layer = document.getElementById('bg-particle-layer');
  if (!layer) return;

  // Skip heavy animation for reduced-motion users
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const starCount = 26;
  const ringCount = 14;

  for (let i = 0; i < starCount; i++) {
    const faller = document.createElement('span');
    faller.className = 'bg-particle';
    const size = 6 + Math.random() * 10;
    faller.style.width = faller.style.height = `${size}px`;
    faller.style.left = `${Math.random() * 100}%`;
    faller.style.setProperty('--dur', `${9 + Math.random() * 14}s`);
    faller.style.setProperty('--delay', `${-Math.random() * 22}s`);
    faller.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
    faller.style.setProperty('--o', (0.35 + Math.random() * 0.55).toFixed(2));

    const star = document.createElement('span');
    star.className = 'bg-star';
    star.style.width = star.style.height = '100%';
    star.style.setProperty('--tw-dur', `${1.8 + Math.random() * 2.2}s`);
    star.style.setProperty('--tw-delay', `${-Math.random() * 3}s`);
    const hue = Math.random();
    star.style.background = hue < 0.5 ? '#ffd932' : (hue < 0.8 ? '#ffffff' : '#4db4ff');

    faller.appendChild(star);
    layer.appendChild(faller);
  }

  for (let i = 0; i < ringCount; i++) {
    const faller = document.createElement('span');
    faller.className = 'bg-particle';
    const size = 18 + Math.random() * 42;
    faller.style.width = faller.style.height = `${size}px`;
    faller.style.left = `${Math.random() * 100}%`;
    faller.style.setProperty('--dur', `${14 + Math.random() * 18}s`);
    faller.style.setProperty('--delay', `${-Math.random() * 28}s`);
    faller.style.setProperty('--drift', `${(Math.random() - 0.5) * 180}px`);
    faller.style.setProperty('--spin', `${(Math.random() < 0.5 ? -1 : 1) * (240 + Math.random() * 360)}deg`);
    faller.style.setProperty('--o', (0.15 + Math.random() * 0.3).toFixed(2));

    const ring = document.createElement('span');
    ring.className = 'bg-ring';
    ring.style.width = ring.style.height = '100%';
    ring.style.borderWidth = `${1 + Math.random() * 2}px`;
    if (Math.random() < 0.4) ring.classList.add('ring-orange');
    else if (Math.random() < 0.5) ring.classList.add('ring-pink');

    faller.appendChild(ring);
    layer.appendChild(faller);
  }
}

/* ---------- 2. Fraction Lab Interaktif (materi) ---------- */
let labState = { num: 3, den: 4 };

function getLabEls() {
  return {
    bar: document.getElementById('lab-bar'),
    pie: document.getElementById('lab-pie'),
    num: document.getElementById('lab-value-num'),
    den: document.getElementById('lab-value-den'),
    caption: document.getElementById('lab-caption')
  };
}

function renderFractionLab() {
  const { bar, pie, num, den, caption } = getLabEls();
  if (!bar) return;

  const { num: n, den: d } = labState;

  // Build bar segments
  bar.innerHTML = '';
  for (let i = 0; i < d; i++) {
    const seg = document.createElement('div');
    seg.className = 'fraction-segment' + (i < n ? ' filled' : '');
    seg.dataset.index = i;
    seg.setAttribute('role', 'button');
    seg.setAttribute('tabindex', '0');
    seg.setAttribute('aria-label', `Bagian ${i + 1} dari ${d}`);
    bar.appendChild(seg);
  }

  // Update pie
  pie.style.background = `conic-gradient(var(--primary) 0% ${(n / d) * 100}%, #e8eefb ${(n / d) * 100}% 100%)`;

  // Update readout
  num.textContent = n;
  den.textContent = d;

  // Simplify fraction for caption
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const g = gcd(n, d);
  const simNum = n / g;
  const simDen = d / g;
  const simplest = simDen === 1 ? `${simNum}` : `${simNum}/${simDen}`;

  if (n === 0) {
    caption.textContent = 'Kamu belum memakan bagian cokelat apa pun. Klik batangnya!';
  } else if (n === d) {
    caption.textContent = 'Kamu memakan seluruh cokelat — itu pecahan utuh (1)!';
  } else if (g > 1) {
    caption.textContent = `${n} dari ${d} bagian, atau sama dengan ${simplest} dalam bentuk paling sederhana.`;
  } else {
    caption.textContent = `Kamu memakan ${n} dari ${d} bagian cokelat.`;
  }
}

function initFractionLab() {
  const bar = document.getElementById('lab-bar');
  if (!bar) return;

  // Click bar segment toggles filled state (fills up to index)
  bar.addEventListener('click', (e) => {
    const seg = e.target.closest('.fraction-segment');
    if (!seg) return;
    const idx = parseInt(seg.dataset.index, 10);
    if (labState.num === idx + 1) {
      labState.num = idx; // unclick the last filled one
    } else {
      labState.num = idx + 1;
    }
    renderFractionLab();
  });

  // Keyboard support
  bar.addEventListener('keydown', (e) => {
    const seg = e.target.closest('.fraction-segment');
    if (!seg) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      seg.click();
    }
  });

  renderFractionLab();
}

window.setFractionDenominator = function(newDen) {
  labState.den = newDen;
  if (labState.num > newDen) labState.num = newDen;
  // Update active chip
  document.querySelectorAll('.deny-chip').forEach(chip => {
    chip.classList.toggle('active', parseInt(chip.textContent, 10) === newDen);
  });
  renderFractionLab();
};

window.randomizeFractionLab = function() {
  labState.num = Math.floor(Math.random() * labState.den) + 1;
  renderFractionLab();
};

window.resetFractionLab = function() {
  labState = { num: Math.ceil(labState.den / 2), den: labState.den };
  renderFractionLab();
};

/* ---------- 3. Confetti (hasil kuis) ---------- */
window.launchConfetti = function(quality = 60) {
  const holders = document.querySelectorAll('.results-screen, #quiz-result-area');
  const holder = holders[holders.length - 1];
  if (!holder) return;

  const colors = ['#1ca0ff', '#ffa600', '#ff2e7e', '#16c784', '#ffd932', '#4db4ff'];
  const pieceCount = Math.min(80, Math.max(30, quality));

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = 6 + Math.random() * 8 + 'px';
    piece.style.height = 10 + Math.random() * 8 + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    piece.style.animationDuration = 2.2 + Math.random() * 2.5 + 's';
    piece.style.animationDelay = Math.random() * 0.8 + 's';
    holder.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
};

/* ---------- 4. Score Count-up (hasil kuis) ---------- */
function animateScoreCount(targetPercent) {
  const el = document.getElementById('quiz-score-val');
  if (!el) return;

  const startTime = performance.now();
  const duration = 900;

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * targetPercent) + '%';
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- 5. Timer warning (kuis) ---------- */
function addTimerWarning() {
  const timerEl = document.getElementById('timer-seconds');
  if (!timerEl) return;

  // Lightweight override: watch the timer text and flag low time
  const timerBox = document.querySelector('.quiz-timer');
  if (!timerBox) return;

  // Poll once per second; cheap enough and keeps quiz.js untouched
  setInterval(() => {
    const val = parseInt(timerEl.textContent, 10);
    if (!isNaN(val) && val <= 10 && val > 0) {
      timerBox.classList.add('danger');
    } else {
      timerBox.classList.remove('danger');
    }
  }, 400);
}
