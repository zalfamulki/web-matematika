/* =====================================================================
   NAVIGATION · Navigasi & Interaksi Dasar  (js/navigation.js)
   TOC:
     1. setupNavigation        — Navigasi tab utama (SPA) + header scroll
     2. setupMobileNav         — Drawer navigasi mobile (hamburger)
     3. setupSidebarNavigation — Navigasi daftar sub-materi (sidebar)
     4. initHomeButtons        — Tombol di Home (navigateToTab) + toggle contoh
   ===================================================================== */


/* ---------- 1. Navigasi Utama (SPA Tab Navigation) ---------- */
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const headerEl = document.querySelector('header');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Reset Active Class
      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Activate clicked
      link.classList.add('active');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Special action if entering page
      if (targetId === 'kuis') {
        resetQuizSetupView();
      } else {
        clearInterval(timerInterval); // Stop timer if navigating away
      }

      // Close mobile drawer when navigating
      closeMobileNav();

      // Re-trigger reveal animations inside the freshly shown section
      if (window.observeReveals) {
        setTimeout(() => window.observeReveals(targetSection), 60);
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Toggle scrolled class on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ------------------------------------------------------------------ */
/* 2. Navigasi Mobile (Drawer) */
function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      closeMobileNav();
    } else {
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Tutup menu navigasi');
      document.body.classList.add('nav-open');
    }
  });

  // Close drawer when clicking outside nav
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMobileNav();
      toggle.focus();
    }
  });
}

function closeMobileNav() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Buka menu navigasi');
  document.body.classList.remove('nav-open');
}

/* ------------------------------------------------------------------ */
/* 3. Navigasi Materi (Sidebar Tab) */
function setupSidebarNavigation() {
  const sidebarBtns = document.querySelectorAll('.sidebar-item button');
  const materiSections = document.querySelectorAll('.materi-content-section');

  sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMateri = btn.getAttribute('data-materi');

      sidebarBtns.forEach(b => b.classList.remove('active'));
      materiSections.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      const targetSection = document.getElementById(`materi-${targetMateri}`);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
}

/* ------------------------------------------------------------------ */
/* 4. Home Button Click Actions */
function initHomeButtons() {
  // Hubungkan tombol di Home dengan Tab navigasi yang sesuai
  window.navigateToTab = function(tabId, subMateriId = null) {
    const navLink = document.querySelector(`.nav-link[href="#${tabId}"]`);
    if (navLink) {
      navLink.click();
    }

    // Jika ada submateri tertentu yang ingin dibuka langsung
    if (subMateriId) {
      const sidebarBtn = document.querySelector(`.sidebar-item button[data-materi="${subMateriId}"]`);
      if (sidebarBtn) {
        sidebarBtn.click();
      }
    }
  };

  // Toggle Jawaban Contoh Soal
  window.toggleExampleSolution = function(btn) {
    const solutionDiv = btn.nextElementSibling;
    const isOpen = solutionDiv.classList.toggle('show');
    btn.innerHTML = 'Lihat Cara Penyelesaian ' + (isOpen
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>');
  };
}
