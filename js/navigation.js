/* =====================================================================
   NAVIGATION · Navigasi & Interaksi Dasar  (js/navigation.js)
   TOC:
     1. setupNavigation     — Navigasi tab utama (SPA): Beranda/Materi/Kuis/Tugas
     2. setupSidebarNavigation — Navigasi daftar sub-materi (sidebar)
     3. initHomeButtons     — Tombol di Home (navigateToTab) + toggle contoh soal
   ===================================================================== */


/* ---------- 1. Navigasi Utama (SPA Tab Navigation) ---------- */
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

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

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ------------------------------------------------------------------ */
/* 2. Navigasi Materi (Sidebar Tab) */
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
/* 3. Home Button Click Actions */
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
    if (solutionDiv.classList.contains('show')) {
      solutionDiv.classList.remove('show');
      btn.innerHTML = 'Lihat Cara Penyelesaian 👇';
    } else {
      solutionDiv.classList.add('show');
      btn.innerHTML = 'Sembunyikan Penyelesaian 👆';
    }
  };
}