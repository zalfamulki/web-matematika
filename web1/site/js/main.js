/* =====================================================================
   MAIN · Titik Masuk Aplikasi  (js/main.js)
   Inisialisasi seluruh modul saat halaman siap dimuat.
   Urutan muat file JS di index.html:
     1. js/data/questions.js   (bank soal kuis)
     2. js/data/exercises.js   (soal latihan & konversi)
     3. js/helpers.js          (fungsi bantu umum)
     4. js/quiz.js             (logika kuis)
     5. js/tasks.js            (logika tugas)
6. js/navigation.js       (navigasi tab & sidebar)
      7. js/interactions.js     (menu mobile, scroll reveal, lab pecahan)
      8. js/main.js             (INISIALISASI DI SINI)
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupMobileNav();
  setupSidebarNavigation();
  initHomeButtons();
  initQuizSetup();
  initInteractiveTasks();
  initFractionLab();
  initRevealObserver();
  addTimerWarning();
  initRippleEffect();
  initFallingBackground();
});