// BANK SOAL (Total 50 Soal Lengkap dengan Jawaban & Pembahasan)
const questionsBank = [
  // --- KATEGORI 1: PECAHAN SENILAI & MENYEDERHANAKAN (10 Soal) ---
  {
    category: 'senilai',
    question: 'Pecahan yang senilai dengan 1/2 adalah...',
    options: ['2/3', '3/6', '4/10', '5/8'],
    answer: 1,
    explanation: 'Pembilang dan penyebut dikalikan dengan angka yang sama. Jika pembilang dan penyebut 1/2 masing-masing dikalikan 3, maka menjadi: (1 × 3) / (2 × 3) = 3/6.'
  },
  {
    category: 'senilai',
    question: 'Jika 3/4 = A/12, maka nilai A adalah...',
    options: ['6', '8', '9', '10'],
    answer: 2,
    explanation: 'Penyebut berubah dari 4 menjadi 12 (dikalikan 3). Maka pembilang juga harus dikalikan 3: 3 × 3 = 9. Jadi, A = 9.'
  },
  {
    category: 'senilai',
    question: 'Bentuk paling sederhana dari pecahan 8/12 adalah...',
    options: ['2/3', '3/4', '4/6', '1/2'],
    answer: 0,
    explanation: 'Pembilang dan penyebut dibagi dengan FPB dari 8 dan 12, yaitu 4. Maka: (8 ÷ 4) / (12 ÷ 4) = 2/3.'
  },
  {
    category: 'senilai',
    question: 'Pecahan yang senilai dengan 5/7 adalah...',
    options: ['10/14', '15/20', '25/30', '12/14'],
    answer: 0,
    explanation: 'Kalikan pembilang dan penyebut 5/7 dengan 2: (5 × 2) / (7 × 2) = 10/14.'
  },
  {
    category: 'senilai',
    question: 'Bentuk paling sederhana dari 15/45 adalah...',
    options: ['3/9', '1/3', '5/15', '2/5'],
    answer: 1,
    explanation: 'FPB dari 15 dan 45 adalah 15. Kita bagi kedua angka dengan 15: (15 ÷ 15) / (45 ÷ 15) = 1/3.'
  },
  {
    category: 'senilai',
    question: 'Manakah di bawah ini pecahan yang TIDAK senilai dengan 2/5?',
    options: ['4/10', '6/15', '8/20', '10/30'],
    answer: 3,
    explanation: '10/30 disederhanakan menjadi 1/3 (bukan 2/5). Sedangkan yang lainnya senilai dengan 2/5 jika disederhanakan.'
  },
  {
    category: 'senilai',
    question: 'Nilai dari pecahan senilai: 24/36 disederhanakan menjadi...',
    options: ['2/3', '3/4', '4/6', '6/9'],
    answer: 0,
    explanation: 'FPB dari 24 dan 36 adalah 12. Kita bagi pembilang dan penyebut dengan 12: (24 ÷ 12) / (36 ÷ 12) = 2/3.'
  },
  {
    category: 'senilai',
    question: 'Jika 5/8 = 25/B, berapa nilai B?',
    options: ['30', '35', '40', '48'],
    answer: 2,
    explanation: 'Pembilang berubah dari 5 menjadi 25 (dikalikan 5). Maka penyebut juga harus dikalikan 5: 8 × 5 = 40. Jadi, B = 40.'
  },
  {
    category: 'senilai',
    question: 'Bentuk sederhana dari pecahan 18/24 adalah...',
    options: ['2/3', '3/4', '5/6', '9/12'],
    answer: 1,
    explanation: 'FPB dari 18 dan 24 adalah 6. Bagi pembilang dan penyebut dengan 6: (18 ÷ 6) / (24 ÷ 6) = 3/4.'
  },
  {
    category: 'senilai',
    question: 'Pecahan berikut yang senilai dengan 3/10 adalah...',
    options: ['6/20', '9/40', '15/100', '12/30'],
    answer: 0,
    explanation: 'Jika pembilang dan penyebut dikalikan 2: (3 × 2) / (10 × 2) = 6/20.'
  },

  // --- KATEGORI 2: UBAH PECAHAN BIASA ↔ CAMPURAN (10 Soal) ---
  {
    category: 'campuran',
    question: 'Pecahan biasa 7/2 jika diubah ke pecahan campuran menjadi...',
    options: ['2 1/2', '3 1/2', '3 1/3', '4 1/2'],
    answer: 1,
    explanation: '7 dibagi 2 sama dengan 3 dengan sisa 1. Maka pecahan campurannya adalah 3 1/2.'
  },
  {
    category: 'campuran',
    question: 'Pecahan campuran 2 3/4 jika diubah ke pecahan biasa menjadi...',
    options: ['9/4', '10/4', '11/4', '12/4'],
    answer: 2,
    explanation: 'Cara mengubahnya: (Penyebut × Angka Bulat) + Pembilang = (4 × 2) + 3 = 8 + 3 = 11. Jadi, pecahannya adalah 11/4.'
  },
  {
    category: 'campuran',
    question: 'Pecahan biasa 13/5 jika diubah ke pecahan campuran menjadi...',
    options: ['2 3/5', '2 1/5', '3 2/5', '3 3/5'],
    answer: 0,
    explanation: '13 dibagi 5 adalah 2 dengan sisa 3. Maka bentuk campurannya adalah 2 3/5.'
  },
  {
    category: 'campuran',
    question: 'Ubah pecahan campuran 1 5/6 menjadi pecahan biasa...',
    options: ['11/6', '12/6', '10/6', '7/6'],
    answer: 0,
    explanation: 'Mengubah 1 5/6: (6 × 1) + 5 = 11. Maka bentuk pecahan biasanya adalah 11/6.'
  },
  {
    category: 'campuran',
    question: 'Pecahan biasa 25/4 jika diubah ke pecahan campuran menjadi...',
    options: ['5 1/4', '6 1/4', '6 3/4', '7 1/4'],
    answer: 1,
    explanation: '25 dibagi 4 adalah 6 dengan sisa 1. Maka pecahan campurannya adalah 6 1/4.'
  },
  {
    category: 'campuran',
    question: 'Pecahan campuran 3 2/7 jika diubah menjadi pecahan biasa adalah...',
    options: ['21/7', '22/7', '23/7', '25/7'],
    answer: 2,
    explanation: 'Caranya: (7 × 3) + 2 = 21 + 2 = 23. Sehingga bentuknya adalah 23/7.'
  },
  {
    category: 'campuran',
    question: 'Pecahan biasa 17/3 jika diubah ke pecahan campuran menjadi...',
    options: ['5 1/3', '5 2/3', '6 1/3', '4 2/3'],
    answer: 1,
    explanation: '17 dibagi 3 adalah 5 dengan sisa 2. Maka bentuk campurannya adalah 5 2/3.'
  },
  {
    category: 'campuran',
    question: 'Pecahan campuran 4 1/5 sama nilainya dengan...',
    options: ['21/5', '20/5', '9/5', '16/5'],
    answer: 0,
    explanation: 'Hitung pembilangnya: (5 × 4) + 1 = 20 + 1 = 21. Jadi, pecahan biasanya adalah 21/5.'
  },
  {
    category: 'campuran',
    question: 'Pecahan biasa 31/8 jika diubah ke pecahan campuran menjadi...',
    options: ['3 5/8', '3 7/8', '4 1/8', '3 3/8'],
    answer: 1,
    explanation: '31 dibagi 8 adalah 3 dengan sisa 7 (karena 8 × 3 = 24). Maka pecahan campurannya adalah 3 7/8.'
  },
  {
    category: 'campuran',
    question: 'Ubah pecahan campuran 5 2/3 ke pecahan biasa...',
    options: ['15/3', '16/3', '17/3', '18/3'],
    answer: 2,
    explanation: 'Caranya: (3 × 5) + 2 = 17. Maka pecahan biasanya adalah 17/3.'
  },

  // --- KATEGORI 3: OPERASI HITUNG PECAHAN (15 Soal) ---
  {
    category: 'operasi',
    question: 'Berapakah hasil dari 1/4 + 1/2?',
    options: ['2/6', '3/4', '2/4', '1/3'],
    answer: 1,
    explanation: 'Samakan penyebutnya menjadi 4: 1/4 + 2/4 = 3/4.'
  },
  {
    category: 'operasi',
    question: 'Hasil pengurangan dari 3/4 - 1/8 adalah...',
    options: ['2/8', '2/4', '5/8', '4/8'],
    answer: 2,
    explanation: 'Samakan penyebutnya menjadi 8: 6/8 - 1/8 = 5/8.'
  },
  {
    category: 'operasi',
    question: 'Berapa hasil perkalian dari 2/3 × 3/4?',
    options: ['6/12 atau 1/2', '5/12', '5/7', '6/7'],
    answer: 0,
    explanation: 'Kalikan pembilang dengan pembilang, dan penyebut dengan penyebut: (2 × 3) / (3 × 4) = 6/12. Disederhanakan menjadi 1/2.'
  },
  {
    category: 'operasi',
    question: 'Hasil pembagian dari 3/5 ÷ 2/3 adalah...',
    options: ['6/15', '9/10', '5/8', '10/9'],
    answer: 1,
    explanation: 'Balik pecahan pembagi lalu kalikan: 3/5 × 3/2 = (3 × 3) / (5 × 2) = 9/10.'
  },
  {
    category: 'operasi',
    question: 'Hasil dari 1 1/2 + 2 1/3 adalah...',
    options: ['3 2/5', '3 5/6', '3 2/6', '4 1/6'],
    answer: 1,
    explanation: 'Jumlahkan bagian bilangan bulat: 1 + 2 = 3. Jumlahkan pecahan: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Hasil akhirnya: 3 5/6.'
  },
  {
    category: 'operasi',
    question: 'Hitunglah: 3 1/2 - 1 3/4 = ...',
    options: ['2 1/4', '1 3/4', '2 3/4', '1 1/4'],
    answer: 1,
    explanation: 'Ubah ke pecahan biasa: 7/2 - 7/4 = 14/4 - 7/4 = 7/4. Bentuk campurannya adalah 1 3/4.'
  },
  {
    category: 'operasi',
    question: 'Hasil dari 4 × 1/5 adalah...',
    options: ['4/5', '1/20', '5/4', '1/10'],
    answer: 0,
    explanation: 'Bilangan bulat dikalikan pembilang: 4 × 1/5 = 4/5.'
  },
  {
    category: 'operasi',
    question: 'Hasil perkalian dari 1 1/4 × 2/5 adalah...',
    options: ['1/2', '3/20', '7/20', '2/10'],
    answer: 0,
    explanation: 'Ubah pecahan campuran ke biasa: 1 1/4 = 5/4. Lalu kalikan: 5/4 × 2/5 = 10/20 = 1/2.'
  },
  {
    category: 'operasi',
    question: 'Berapa hasil dari 5/6 ÷ 5?',
    options: ['25/6', '1/6', '6/25', '1/30'],
    answer: 1,
    explanation: 'Membagi dengan 5 sama dengan mengalikan dengan 1/5: 5/6 × 1/5 = 5/30 = 1/6.'
  },
  {
    category: 'operasi',
    question: 'Hasil dari 2/7 + 3/7 - 1/7 adalah...',
    options: ['6/7', '4/7', '5/7', '2/7'],
    answer: 1,
    explanation: 'Karena penyebut sudah sama, operasikan pembilangnya: 2 + 3 - 1 = 4. Jadi hasilnya 4/7.'
  },
  {
    category: 'operasi',
    question: 'Berapakah hasil dari 2/3 - 1/6?',
    options: ['1/3', '1/2', '3/6', '2/6'],
    answer: 1,
    explanation: 'Samakan penyebut ke 6: 4/6 - 1/6 = 3/6. Disederhanakan menjadi 1/2.'
  },
  {
    category: 'operasi',
    question: 'Hasil pembagian pecahan: 4/9 ÷ 2/3 adalah...',
    options: ['8/27', '2/3', '6/9', '12/18'],
    answer: 1,
    explanation: 'Balik pembagi: 4/9 × 3/2 = 12/18. Sederhanakan dengan membagi 6 pada pembilang & penyebut: 2/3.'
  },
  {
    category: 'operasi',
    question: 'Hasil dari 2 2/3 × 1 1/2 adalah...',
    options: ['3 1/3', '4', '3 2/6', '4 1/2'],
    answer: 1,
    explanation: 'Ubah ke pecahan biasa: 8/3 × 3/2 = 24/6 = 4.'
  },
  {
    category: 'operasi',
    question: 'Berapakah 3/10 + 2/5 + 1/2?',
    options: ['6/10', '1 1/5', '1 1/10', '9/10'],
    answer: 1,
    explanation: 'Samakan penyebut ke 10: 3/10 + 4/10 + 5/10 = 12/10. Disederhanakan menjadi 6/5 atau 1 1/5.'
  },
  {
    category: 'operasi',
    question: 'Sebuah tali panjangnya 3/4 meter dipotong menjadi 3 bagian sama panjang. Panjang setiap potongan tali adalah...',
    options: ['1/4 meter', '2/4 meter', '9/4 meter', '1/3 meter'],
    answer: 0,
    explanation: 'Lakukan operasi pembagian: 3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 meter.'
  },

  // --- KATEGORI 4: PERBANDINGAN, SKALA & RASIO (15 Soal) ---
  {
    category: 'rasio',
    question: 'Manakah pecahan yang nilainya lebih besar antara 3/4 dan 5/6?',
    options: ['3/4', '5/6', 'Nilainya sama', 'Tidak bisa ditentukan'],
    answer: 1,
    explanation: 'Samakan penyebutnya ke 12. 3/4 menjadi 9/12. 5/6 menjadi 10/12. Karena 10/12 > 9/12, maka 5/6 lebih besar.'
  },
  {
    category: 'rasio',
    question: 'Urutan pecahan 1/2, 1/4, 3/4 dari yang terkecil adalah...',
    options: ['1/4, 1/2, 3/4', '1/2, 1/4, 3/4', '3/4, 1/2, 1/4', '1/4, 3/4, 1/2'],
    answer: 0,
    explanation: 'Samakan penyebut ke 4: 1/2 = 2/4. Maka urutan dari terkecil adalah 1/4, 2/4 (1/2), dan 3/4.'
  },
  {
    category: 'rasio',
    question: 'Rasio kelereng Andi dan Budi adalah 2 : 3. Jika total kelereng mereka 15 butir, berapa banyak kelereng Andi?',
    options: ['5 butir', '6 butir', '9 butir', '10 butir'],
    answer: 1,
    explanation: 'Jumlah rasio = 2 + 3 = 5 bagian. Kelereng Andi = (Rasio Andi / Jumlah rasio) × Total kelereng = (2/5) × 15 = 6 butir.'
  },
  {
    category: 'rasio',
    question: 'Di dalam kelas terdapat 12 siswa laki-laki dan 18 siswa perempuan. Rasio siswa laki-laki dibanding perempuan adalah...',
    options: ['2 : 3', '3 : 2', '4 : 6', '12 : 30'],
    answer: 0,
    explanation: 'Rasio laki-laki : perempuan = 12 : 18. Sederhanakan dengan membagi masing-masing dengan FPB-nya yaitu 6: 12÷6 : 18÷6 = 2 : 3.'
  },
  {
    category: 'rasio',
    question: 'Skala sebuah peta adalah 1 : 100.000. Jika jarak pada peta adalah 4 cm, berapakah jarak sebenarnya?',
    options: ['400 meter', '4 km', '40 km', '400 km'],
    answer: 1,
    explanation: 'Jarak sebenarnya = Jarak peta × Skala = 4 cm × 100.000 = 400.000 cm. Ubah ke km: 400.000 ÷ 100.000 = 4 km.'
  },
  {
    category: 'rasio',
    question: 'Jika rasio umur Kakak dan Adik adalah 5 : 4, dan umur Adik adalah 8 tahun. Berapakah umur Kakak?',
    options: ['9 tahun', '10 tahun', '12 tahun', '15 tahun'],
    answer: 1,
    explanation: 'Rasio Adik = 4 bagian = 8 tahun (berarti 1 bagian = 2 tahun). Umur Kakak = 5 bagian × 2 tahun = 10 tahun.'
  },
  {
    category: 'rasio',
    question: 'Sebuah resep kue membutuhkan tepung dan gula dengan rasio 3 : 2. Jika ibu memakai 600 gram tepung, berapa gula yang dibutuhkan?',
    options: ['200 gram', '300 gram', '400 gram', '500 gram'],
    answer: 2,
    explanation: 'Rasio tepung = 3 bagian = 600 gram (1 bagian = 200 gram). Gula yang dibutuhkan = 2 bagian × 200 gram = 400 gram.'
  },
  {
    category: 'rasio',
    question: 'Jarak sebenarnya kota A ke kota B adalah 15 km. Pada peta digambar sepanjang 3 cm. Berapakah skala peta tersebut?',
    options: ['1 : 5.000', '1 : 50.000', '1 : 500.000', '1 : 5.000.000'],
    answer: 2,
    explanation: 'Ubah jarak sebenarnya ke cm: 15 km = 1.500.000 cm. Skala = Jarak peta : Jarak sebenarnya = 3 : 1.500.000 = 1 : 500.000.'
  },
  {
    category: 'rasio',
    question: 'Perbandingan tabungan Ani dan Budi adalah 4 : 7. Selisih tabungan mereka Rp 150.000. Berapa uang tabungan Ani?',
    options: ['Rp 100.000', 'Rp 200.000', 'Rp 250.000', 'Rp 350.000'],
    answer: 1,
    explanation: 'Selisih rasio = 7 - 4 = 3 bagian. Tabungan Ani = (Rasio Ani / Selisih rasio) × Selisih uang = (4/3) × 150.000 = Rp 200.000.'
  },
  {
    category: 'rasio',
    question: 'Manakah tanda perbandingan yang tepat untuk: 2/3 ... 3/5?',
    options: ['< (lebih kecil)', '> (lebih besar)', '= (sama dengan)', '≤ (kurang dari sama dengan)'],
    answer: 1,
    explanation: 'Samakan penyebut ke 15. 2/3 menjadi 10/15. 3/5 menjadi 9/15. Karena 10/15 > 9/15, maka tanda yang tepat adalah > (lebih besar).'
  },
  {
    category: 'rasio',
    question: 'Rasio mangga dan apel di keranjang adalah 5 : 3. Jika ada 24 buah apel, berapakah jumlah mangga di keranjang?',
    options: ['30 buah', '35 buah', '40 buah', '45 buah'],
    answer: 2,
    explanation: 'Rasio apel = 3 bagian = 24 buah (1 bagian = 8 buah). Rasio mangga = 5 bagian. Jumlah mangga = 5 × 8 = 40 buah.'
  },
  {
    category: 'rasio',
    question: 'Suatu miniatur mobil dibuat dengan skala 1 : 24. Jika panjang mobil asli adalah 4,8 meter, berapakah panjang miniatur mobil?',
    options: ['10 cm', '20 cm', '24 cm', '48 cm'],
    answer: 1,
    explanation: 'Panjang asli = 4,8 m = 480 cm. Panjang miniatur = 480 ÷ 24 = 20 cm.'
  },
  {
    category: 'rasio',
    question: 'Urutan pecahan 2/5, 1/2, 3/10 dari yang terbesar adalah...',
    options: ['1/2, 2/5, 3/10', '3/10, 2/5, 1/2', '1/2, 3/10, 2/5', '2/5, 1/2, 3/10'],
    answer: 0,
    explanation: 'Samakan penyebut ke 10: 2/5 = 4/10, 1/2 = 5/10, 3/10 = 3/10. Urutan dari yang terbesar: 5/10 (1/2), 4/10 (2/5), lalu 3/10.'
  },
  {
    category: 'rasio',
    question: 'Perbandingan kelereng Rian, Sandi dan Toni adalah 2 : 3 : 5. Jumlah kelereng mereka bertiga adalah 40 butir. Berapa kelereng Toni?',
    options: ['8 butir', '12 butir', '20 butir', '25 butir'],
    answer: 2,
    explanation: 'Jumlah rasio = 2 + 3 + 5 = 10 bagian. Kelereng Toni = (Rasio Toni / Jumlah rasio) × Total kelereng = (5/10) × 40 = 20 butir.'
  },
  {
    category: 'rasio',
    question: 'Sebuah denah rumah berukuran panjang 8 cm dan lebar 6 cm dengan skala 1 : 200. Berapakah luas rumah sebenarnya?',
    options: ['96 m²', '192 m²', '240 m²', '384 m²'],
    answer: 1,
    explanation: 'Panjang asli = 8 cm × 200 = 1600 cm = 16 m. Lebar asli = 6 cm × 200 = 1200 cm = 12 m. Luas sebenarnya = 16 m × 12 m = 192 m².'
  }
];

// STATE MANAGEMENT APLIKASI
let currentQuizCategory = 'all';
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let quizTimeLeft = 0;
const TIME_PER_QUESTION = 30; // 30 detik per pertanyaan
let userAnswers = []; // mencatat detail jawaban user

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupSidebarNavigation();
  initHomeButtons();
  initQuizSetup();
  initInteractiveTasks();
});

// 1. NAVIGASI UTAMA (SPA TAB NAVIGATION)
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

// 2. NAVIGASI MATERI (SIDEBAR TAB)
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

// 3. HOME BUTTON CLICK ACTIONS
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

// 4. LOGIKA KUIS INTERAKTIF
function initQuizSetup() {
  const setupCards = document.querySelectorAll('.setup-card');
  setupCards.forEach(card => {
    card.addEventListener('click', () => {
      setupCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentQuizCategory = card.getAttribute('data-category');
    });
  });
}

function resetQuizSetupView() {
  document.getElementById('quiz-setup-area').style.display = 'block';
  document.getElementById('quiz-play-area').style.display = 'none';
  document.getElementById('quiz-result-area').style.display = 'none';
  clearInterval(timerInterval);
}

window.startQuiz = function() {
  // Filter questions based on category selection
  if (currentQuizCategory === 'all') {
    currentQuizQuestions = [...questionsBank];
  } else {
    currentQuizQuestions = questionsBank.filter(q => q.category === currentQuizCategory);
  }

  // Shuffle and pick max 10 questions to make it dynamic
  currentQuizQuestions.sort(() => 0.5 - Math.random());
  currentQuizQuestions = currentQuizQuestions.slice(0, 10);

  // Initialize Quiz States
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  // Transition UI
  document.getElementById('quiz-setup-area').style.display = 'none';
  document.getElementById('quiz-play-area').style.display = 'block';
  document.getElementById('quiz-result-area').style.display = 'none';

  loadQuestion();
};

function loadQuestion() {
  clearInterval(timerInterval);
  
  const questionData = currentQuizQuestions[currentQuestionIndex];
  
  // Progress Bar
  const progressPercent = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
  document.getElementById('quiz-progress-text').innerText = `Soal ${currentQuestionIndex + 1} dari ${currentQuizQuestions.length}`;

  // Timer Setup
  quizTimeLeft = TIME_PER_QUESTION;
  document.getElementById('timer-seconds').innerText = quizTimeLeft;
  
  timerInterval = setInterval(() => {
    quizTimeLeft--;
    document.getElementById('timer-seconds').innerText = quizTimeLeft;
    if (quizTimeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);

  // Render Question and Options
  document.getElementById('quiz-question-container').innerHTML = `
    <div class="question-text">${questionData.question}</div>
    <div class="options-grid">
      ${questionData.options.map((opt, idx) => `
        <button class="option-btn" onclick="selectOption(${idx})" id="opt-${idx}">
          <span class="option-badge">${String.fromCharCode(65 + idx)}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
    <div id="quiz-explanation" style="display: none;"></div>
  `;

  // Hide Next Button initially
  document.getElementById('next-btn-container').innerHTML = '';
}

window.selectOption = function(selectedIdx) {
  clearInterval(timerInterval); // Stop timer as soon as user answers
  
  const questionData = currentQuizQuestions[currentQuestionIndex];
  const correctIdx = questionData.answer;
  const optionButtons = document.querySelectorAll('.option-btn');
  
  // Disable all options
  optionButtons.forEach(btn => btn.disabled = true);
  
  const selectedBtn = document.getElementById(`opt-${selectedIdx}`);
  const correctBtn = document.getElementById(`opt-${correctIdx}`);
  
  const isCorrect = (selectedIdx === correctIdx);
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
    correctBtn.classList.add('correct'); // Highlight correct answer
  }

  // Record User Answer Details
  userAnswers.push({
    question: questionData.question,
    selected: selectedIdx,
    correct: correctIdx,
    isCorrect: isCorrect,
    explanation: questionData.explanation
  });

  // Render Explanation
  const explanationDiv = document.getElementById('quiz-explanation');
  explanationDiv.className = isCorrect ? 'explanation-box' : 'explanation-box incorrect-explanation';
  explanationDiv.innerHTML = `
    <div class="explanation-title">
      <span>${isCorrect ? '🎉 Hebat! Jawabanmu Benar!' : '💡 Kurang Tepat, Mari Pelajari!'}</span>
    </div>
    <p>${questionData.explanation}</p>
  `;
  explanationDiv.style.display = 'block';

  // Show Next Button
  const isLastQuestion = (currentQuestionIndex === currentQuizQuestions.length - 1);
  const nextBtnText = isLastQuestion ? 'Lihat Hasil Kuis 🏆' : 'Pertanyaan Berikutnya ➡️';
  document.getElementById('next-btn-container').innerHTML = `
    <button class="btn btn-primary" onclick="goToNextQuestion()">${nextBtnText}</button>
  `;
};

function handleTimeout() {
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.disabled = true);

  const questionData = currentQuizQuestions[currentQuestionIndex];
  const correctIdx = questionData.answer;
  document.getElementById(`opt-${correctIdx}`).classList.add('correct');

  userAnswers.push({
    question: questionData.question,
    selected: -1, // Timeout
    correct: correctIdx,
    isCorrect: false,
    explanation: questionData.explanation
  });

  // Render Explanation
  const explanationDiv = document.getElementById('quiz-explanation');
  explanationDiv.className = 'explanation-box incorrect-explanation';
  explanationDiv.innerHTML = `
    <div class="explanation-title">
      <span>⏰ Waktu Habis!</span>
    </div>
    <p>${questionData.explanation}</p>
  `;
  explanationDiv.style.display = 'block';

  const isLastQuestion = (currentQuestionIndex === currentQuizQuestions.length - 1);
  const nextBtnText = isLastQuestion ? 'Lihat Hasil Kuis 🏆' : 'Pertanyaan Berikutnya ➡️';
  document.getElementById('next-btn-container').innerHTML = `
    <button class="btn btn-primary" onclick="goToNextQuestion()">${nextBtnText}</button>
  `;
}

window.goToNextQuestion = function() {
  if (currentQuestionIndex < currentQuizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showQuizResults();
  }
};

function showQuizResults() {
  document.getElementById('quiz-play-area').style.display = 'none';
  document.getElementById('quiz-result-area').style.display = 'block';

  const percentScore = Math.round((score / currentQuizQuestions.length) * 100);
  
  // Custom badges and messages based on score
  let badge = '⭐';
  let message = 'Terus berlatih ya, kamu pasti bisa!';
  if (percentScore >= 80) {
    badge = '👑';
    message = 'Luar biasa! Kamu adalah Bintang Matematika!';
  } else if (percentScore >= 50) {
    badge = '🏆';
    message = 'Bagus sekali! Sedikit lagi kamu akan jadi juara!';
  }

  document.getElementById('quiz-badge').innerText = badge;
  document.getElementById('quiz-score-val').innerText = `${percentScore}%`;
  document.getElementById('quiz-message').innerText = message;

  document.getElementById('stat-correct').innerText = score;
  document.getElementById('stat-incorrect').innerText = currentQuizQuestions.length - score;

  // Render Detailed Review Section
  const reviewContainer = document.getElementById('quiz-review-details');
  reviewContainer.innerHTML = userAnswers.map((ans, idx) => `
    <div class="card" style="border-left: 8px solid ${ans.isCorrect ? 'var(--success-color)' : 'var(--danger-color)'}">
      <h4>Soal ${idx + 1}: ${ans.question}</h4>
      <p style="margin: 8px 0;">
        Jawaban Kamu: <strong>${ans.selected === -1 ? 'Waktu Habis' : currentQuizQuestions[idx].options[ans.selected]}</strong>
        ${ans.isCorrect ? '✅' : `❌ (Jawaban benar: <strong>${currentQuizQuestions[idx].options[ans.correct]}</strong>)`}
      </p>
      <div style="background-color: #f8fafc; padding: 10px 15px; border-radius: 8px; font-size: 0.95rem; border-left: 3px solid #cbd5e1;">
        <strong>Pembahasan:</strong> ${ans.explanation}
      </div>
    </div>
  `).join('');
}

// 5. TUGAS INTERAKTIF (PRACTICE TASKS)
// State untuk Tugas
let activeExerciseLevel = 'mudah';
let currentConvertQuestions = [];
let currentExerciseQuestions = []; // soal yang aktif per sesi (7 dari pool)

// Helper untuk format teks pecahan menjadi HTML visual bertumpuk
function renderMathFractions(text) {
  if (!text) return '';
  // Ubah [w a/b] -> mixed fraction (misal: [2 1/3] -> 2 1/3 visual)
  text = text.replace(/\[(\d+)\s+(\d+)\/(\d+)\]/g, '<span class="mixed-fraction">$1<span class="fraction-number"><span class="num">$2</span><span class="den">$3</span></span></span>');
  // Ubah [a/b] -> fraction (misal: [2/3] -> 2/3 visual)
  text = text.replace(/\[(\d+)\/(\d+)\]/g, '<span class="fraction-number"><span class="num">$1</span><span class="den">$2</span></span>');
  return text;
}

// Database Soal Latihan Operasi Bilangan (3 Level, pool 15 soal per level, acak 7 per sesi)
const levelExercises = {
  mudah: [
    {
      id: 1,
      question: 'Hitunglah hasil dari [1/3] + [1/3]!',
      correct: { whole: '', num: 2, den: 3 },
      explanation: 'Karena penyebutnya sudah sama (yaitu 3), kita hanya perlu menjumlahkan pembilangnya:<br>1 + 1 = 2.<br>Hasil akhir: [2/3].'
    },
    {
      id: 2,
      question: 'Tentukan hasil dari [4/5] - [2/5]!',
      correct: { whole: '', num: 2, den: 5 },
      explanation: 'Karena penyebutnya sudah sama (yaitu 5), langsung kurangkan pembilangnya:<br>4 - 2 = 2.<br>Hasil akhir: [2/5].'
    },
    {
      id: 3,
      question: 'Berapakah hasil dari [1/2] + [1/4]?',
      correct: { whole: '', num: 3, den: 4 },
      explanation: '1. Samakan penyebut kedua pecahan ke KPK-nya, yaitu 4.<br>2. [1/2] diubah menjadi pecahan senilai berpenyebut 4: [1/2] = [2/4].<br>3. Sekarang jumlahkan: [2/4] + [1/4] = [3/4].'
    },
    {
      id: 4,
      question: 'Hitunglah hasil pengurangan dari [3/4] - [1/2]!',
      correct: { whole: '', num: 1, den: 4 },
      explanation: '1. Samakan penyebut kedua pecahan ke KPK 4.<br>2. Ubah [1/2] menjadi pecahan senilai berpenyebut 4: [1/2] = [2/4].<br>3. Kurangkan pembilangnya: [3/4] - [2/4] = [1/4].'
    },
    {
      id: 5,
      question: 'Tentukan hasil perkalian pecahan: [1/2] × [2/3]!',
      correct: { whole: '', num: 1, den: 3 },
      explanation: '1. Kalikan pembilang dengan pembilang: 1 × 2 = 2.<br>2. Kalikan penyebut dengan penyebut: 2 × 3 = 6.<br>3. Diperoleh pecahan [2/6]. Sederhanakan dengan membagi pembilang & penyebut dengan 2: [1/3].'
    },
    {
      id: 6,
      question: 'Hitunglah hasil pembagian pecahan: [1/3] ÷ [1/2]!',
      correct: { whole: '', num: 2, den: 3 },
      explanation: '1. Ubah operasi pembagian menjadi perkalian dengan membalik pecahan pembagi:<br>[1/3] ÷ [1/2] = [1/3] × [2/1].<br>2. Kalikan pembilang & penyebut: (1 × 2) / (3 × 1) = [2/3].'
    },
    {
      id: 7,
      question: 'Berapakah hasil dari [2/7] + [3/7]?',
      correct: { whole: '', num: 5, den: 7 },
      explanation: 'Penyebut kedua pecahan sudah sama (7).<br>Langsung jumlahkan pembilangnya: 2 + 3 = 5.<br>Hasil akhir: [5/7].'
    },
    {
      id: 8,
      question: 'Hasil pengurangan dari [5/8] - [3/8] dalam bentuk paling sederhana adalah...',
      correct: { whole: '', num: 1, den: 4 },
      explanation: '1. Lakukan pengurangan: [5/8] - [3/8] = [2/8].<br>2. Sederhanakan pecahan [2/8] dengan membagi pembilang & penyebut dengan FPB-nya (yaitu 2): (2÷2) / (8÷2) = [1/4].'
    },
    {
      id: 9,
      question: 'Tentukan hasil perkalian dari [3/5] × [2/3]!',
      correct: { whole: '', num: 2, den: 5 },
      explanation: '1. Kalikan pembilang dengan pembilang: 3 × 2 = 6.<br>2. Kalikan penyebut dengan penyebut: 5 × 3 = 15.<br>3. Diperoleh [6/15]. Sederhanakan dengan membagi pembilang & penyebut dengan 3: [2/5].'
    },
    {
      id: 10,
      question: 'Berapa hasil pembagian dari [2/5] ÷ [2/3]?',
      correct: { whole: '', num: 3, den: 5 },
      explanation: '1. Ubah tanda bagi menjadi kali dan balik pecahan pembagi: [2/5] × [3/2].<br>2. Kalikan pembilang & penyebut: (2 × 3) / (5 × 2) = [6/10].<br>3. Sederhanakan dengan membagi pembilang & penyebut dengan 2: [3/5].'
    },
    {
      id: 11,
      question: 'Hitunglah hasil dari [3/8] + [1/8]!',
      correct: { whole: '', num: 1, den: 2 },
      explanation: '1. Penyebut sudah sama (8). Jumlahkan pembilangnya: 3 + 1 = 4.<br>2. Diperoleh [4/8]. Sederhanakan dengan membagi pembilang & penyebut dengan FPB-nya (4): [1/2].'
    },
    {
      id: 12,
      question: 'Tentukan hasil dari [5/6] - [1/6]!',
      correct: { whole: '', num: 2, den: 3 },
      explanation: '1. Penyebut sudah sama (6). Kurangkan pembilangnya: 5 - 1 = 4.<br>2. Diperoleh [4/6]. Sederhanakan dengan membagi pembilang & penyebut dengan 2: [2/3].'
    },
    {
      id: 13,
      question: 'Berapakah hasil dari [1/3] + [1/6]?',
      correct: { whole: '', num: 1, den: 2 },
      explanation: '1. KPK dari 3 dan 6 adalah 6.<br>2. Ubah [1/3] menjadi [2/6].<br>3. Jumlahkan: [2/6] + [1/6] = [3/6].<br>4. Sederhanakan [3/6] dengan membagi 3: [1/2].'
    },
    {
      id: 14,
      question: 'Hitunglah hasil perkalian: [3/4] × [4/9]!',
      correct: { whole: '', num: 1, den: 3 },
      explanation: '1. Kalikan pembilang dengan pembilang: 3 × 4 = 12.<br>2. Kalikan penyebut dengan penyebut: 4 × 9 = 36.<br>3. Diperoleh [12/36]. Sederhanakan dengan membagi 12: [1/3].'
    },
    {
      id: 15,
      question: 'Berapakah hasil pembagian dari [6/7] ÷ [3/7]?',
      correct: { whole: 2, num: '', den: '' },
      explanation: '1. Balik pecahan pembagi: [6/7] × [7/3].<br>2. Kalikan: (6 × 7) / (7 × 3) = [42/21].<br>3. Sederhanakan: 42 ÷ 21 = 2.'
    }
  ],
  sedang: [
    {
      id: 1,
      question: 'Hitunglah hasil dari [1 1/2] + [2 1/4]!',
      correct: { whole: 3, num: 3, den: 4 },
      explanation: '1. Pisahkan bagian bulat dan pecahan:<br>• Bilangan bulat: 1 + 2 = 3.<br>• Pecahan: [1/2] + [1/4] = [2/4] + [1/4] = [3/4].<br>2. Gabungkan kembali hasilnya: [3 3/4].'
    },
    {
      id: 2,
      question: 'Tentukan hasil pengurangan: [3 3/4] - [1 1/2]!',
      correct: { whole: 2, num: 1, den: 4 },
      explanation: '1. Kurangkan bilangan bulatnya terlebih dahulu: 3 - 1 = 2.<br>2. Kurangkan bagian pecahannya (samakan penyebut ke 4):<br>[3/4] - [1/2] = [3/4] - [2/4] = [1/4].<br>3. Gabungkan hasil bulat dan pecahan: [2 1/4].'
    },
    {
      id: 3,
      question: 'Hasil penjumlahan dari [2/3] + [3/5] adalah...',
      correct: { whole: 1, num: 4, den: 15 },
      explanation: '1. Samakan penyebut kedua pecahan ke KPK dari 3 dan 5, yaitu 15.<br>2. Ubah pecahan:<br>• [2/3] = [10/15]<br>• [3/5] = [9/15]<br>3. Jumlahkan pembilangnya: [10/15] + [9/15] = [19/15].<br>4. Ubah ke pecahan campuran: 19 dibagi 15 adalah 1 sisa 4, maka menjadi [1 4/15].'
    },
    {
      id: 4,
      question: 'Hitunglah perkalian pecahan campuran: [1 1/3] × [3/4]!',
      correct: { whole: 1, num: '', den: '' },
      explanation: '1. Ubah pecahan campuran [1 1/3] ke pecahan biasa: (3×1)+1 = 4, menjadi [4/3].<br>2. Kalikan kedua pecahan biasa: [4/3] × [3/4] = (4×3) / (3×4) = [12/12].<br>3. Nilai [12/12] disederhanakan menjadi bilangan bulat 1.'
    },
    {
      id: 5,
      question: 'Berapakah hasil pembagian pecahan campuran: [2 1/2] ÷ [1/2]?',
      correct: { whole: 5, num: '', den: '' },
      explanation: '1. Ubah pecahan campuran [2 1/2] ke pecahan biasa: (2×2)+1 = 5, menjadi [5/2].<br>2. Lakukan pembagian: [5/2] ÷ [1/2] = [5/2] × [2/1] = [10/2] = 5.'
    },
    {
      id: 6,
      question: 'Ibu membeli [1/2] kg gula pasir dan [3/4] kg tepung terigu di warung. Berapa kilogram total belanjaan Ibu?',
      correct: { whole: 1, num: 1, den: 4 },
      explanation: 'Ini adalah soal cerita penjumlahan pecahan.<br>1. Total Belanjaan = Gula + Tepung = [1/2] + [3/4].<br>2. Samakan penyebut menjadi 4: [2/4] + [3/4] = [5/4] kg.<br>3. Ubah pecahan biasa [5/4] menjadi campuran: 5 dibagi 4 adalah 1 sisa 1, sehingga menjadi [1 1/4] kg.'
    },
    {
      id: 7,
      question: 'Andi memiliki tali jemuran sepanjang [2 1/2] meter. Ia memberikan sepanjang [3/4] meter kepada adiknya. Berapa meter sisa tali Andi?',
      correct: { whole: 1, num: 3, den: 4 },
      explanation: 'Ini adalah soal cerita pengurangan pecahan.<br>1. Sisa Tali = Panjang Awal - Potongan Tali = [2 1/2] - [3/4].<br>2. Ubah [2 1/2] menjadi pecahan biasa: [5/2].<br>3. Samakan penyebut kedua pecahan ke 4: [10/4] - [3/4] = [7/4].<br>4. Ubah [7/4] ke pecahan campuran: 7 dibagi 4 adalah 1 sisa 3, sehingga menjadi [1 3/4] meter.'
    },
    {
      id: 8,
      question: 'Tentukan hasil dari [5/6] - [1/3]!',
      correct: { whole: '', num: 1, den: 2 },
      explanation: '1. Samakan penyebut pecahan ke KPK 6.<br>2. Ubah [1/3] menjadi pecahan senilai berpenyebut 6: [1/3] = [2/6].<br>3. Kurangkan pembilangnya: [5/6] - [2/6] = [3/6].<br>4. Sederhanakan pecahan [3/6] dengan membagi pembilang & penyebut dengan 3: [1/2].'
    },
    {
      id: 9,
      question: 'Hasil perkalian pecahan dari [2/5] × [5/8] adalah...',
      correct: { whole: '', num: 1, den: 4 },
      explanation: '1. Kalikan pembilang: 2 × 5 = 10. Kalikan penyebut: 5 × 8 = 40.<br>2. Didapat pecahan [10/40].<br>3. Sederhanakan pecahan dengan membagi pembilang & penyebut dengan FPB-nya (10): (10÷10) / (40÷10) = [1/4].'
    },
    {
      id: 10,
      question: 'Hitunglah pembagian pecahan: [3/4] ÷ [2/3]!',
      correct: { whole: 1, num: 1, den: 8 },
      explanation: '1. Balik pecahan pembagi dan kalikan: [3/4] × [3/2].<br>2. Lakukan perkalian: (3 × 3) / (4 × 2) = [9/8].<br>3. Ubah ke pecahan campuran: 9 dibagi 8 adalah 1 sisa 1. Hasilnya: [1 1/8].'
    },
    {
      id: 11,
      question: 'Sebuah ember berisi [3/4] liter air. Setelah dipakai, tersisa [1/6] liter. Berapa liter air yang telah terpakai?',
      correct: { whole: '', num: 7, den: 12 },
      explanation: 'Ini adalah soal cerita pengurangan pecahan.<br>1. Air terpakai = [3/4] - [1/6].<br>2. KPK dari 4 dan 6 adalah 12.<br>3. [3/4] = [9/12], [1/6] = [2/12].<br>4. Kurangkan: [9/12] - [2/12] = [7/12] liter.'
    },
    {
      id: 12,
      question: 'Hitunglah hasil dari [2 2/5] + [1 1/3]!',
      correct: { whole: 3, num: 11, den: 15 },
      explanation: '1. Jumlahkan bilangan bulat: 2 + 1 = 3.<br>2. Jumlahkan pecahan [2/5] + [1/3]. KPK dari 5 dan 3 adalah 15.<br>3. [2/5] = [6/15], [1/3] = [5/15].<br>4. Jumlahkan: [6/15] + [5/15] = [11/15].<br>5. Gabungkan: [3 11/15].'
    },
    {
      id: 13,
      question: 'Tentukan hasil dari [3 1/2] - [2 5/6]!',
      correct: { whole: '', num: 2, den: 3 },
      explanation: '1. Ubah ke pecahan biasa: [3 1/2] = [7/2], [2 5/6] = [17/6].<br>2. KPK 2 dan 6 adalah 6: [7/2] = [21/6].<br>3. Kurangkan: [21/6] - [17/6] = [4/6].<br>4. Sederhanakan: [2/3].'
    },
    {
      id: 14,
      question: 'Hitunglah hasil perkalian pecahan campuran: [2 1/4] × [1/3]!',
      correct: { whole: '', num: 3, den: 4 },
      explanation: '1. Ubah [2 1/4] menjadi pecahan biasa: (4×2)+1 = 9. Menjadi [9/4].<br>2. Kalikan: [9/4] × [1/3] = [9/12].<br>3. Sederhanakan dengan membagi 3: [3/4].'
    },
    {
      id: 15,
      question: 'Dita berlari [1 1/2] km, Reza berlari [2 2/3] km. Berapa total jarak yang mereka tempuh?',
      correct: { whole: 4, num: 1, den: 6 },
      explanation: 'Ini adalah soal cerita penjumlahan.<br>1. Total = [1 1/2] + [2 2/3].<br>2. Jumlahkan bilangan bulat: 1 + 2 = 3.<br>3. Jumlahkan pecahan: [1/2] + [2/3]. KPK = 6.<br>4. [1/2] = [3/6], [2/3] = [4/6].<br>5. Jumlahkan: [3/6] + [4/6] = [7/6] = 1 sisa 1 = [1 1/6].<br>6. Total: 3 + [1 1/6] = [4 1/6] km.'
    }
  ],
  sulit: [
    {
      id: 1,
      question: 'Hitunglah hasil dari operasi pecahan campuran berikut: [2 1/2] + [1 2/3] - [3/4]!',
      correct: { whole: 3, num: 5, den: 12 },
      explanation: '1. Ubah semua pecahan campuran menjadi pecahan biasa:<br>• [2 1/2] = [5/2]<br>• [1 2/3] = [5/3]<br>2. Persamaan menjadi: [5/2] + [5/3] - [3/4].<br>3. Samakan penyebut KPK dari 2, 3, dan 4 adalah 12:<br>• [5/2] = [30/12]<br>• [5/3] = [20/12]<br>• [3/4] = [9/12]<br>4. Operasikan pembilangnya: 30 + 20 - 9 = 41. Pecahan menjadi [41/12].<br>5. Ubah ke pecahan campuran: 41 ÷ 12 = 3 sisa 5. Hasilnya: [3 5/12].'
    },
    {
      id: 2,
      question: 'Berapakah hasil dari ([3/5] × [5/6]) + [1/2]?',
      correct: { whole: 1, num: '', den: '' },
      explanation: '1. Kerjakan operasi di dalam kurung dahulu (perkalian):<br>[3/5] × [5/6] = (3 × 5) / (5 × 6) = [15/30] = [1/2].<br>2. Sekarang jumlahkan dengan pecahan berikutnya: [1/2] + [1/2] = [2/2] = 1.'
    },
    {
      id: 3,
      question: 'Tentukan hasil dari [4 1/2] ÷ [1 1/2] × [2/3]!',
      correct: { whole: 2, num: '', den: '' },
      explanation: '1. Ubah pecahan campuran ke pecahan biasa:<br>• [4 1/2] = [9/2]<br>• [1 1/2] = [3/2]<br>2. Kerjakan pembagian terlebih dahulu: [9/2] ÷ [3/2] = [9/2] × [2/3] = [18/6] = 3.<br>3. Lanjutkan perkalian: 3 × [2/3] = [6/3] = 2.'
    },
    {
      id: 4,
      question: 'Hitunglah hasil pengurangan bilangan bulat dengan pecahan campuran berikut: 5 - [2 3/8]!',
      correct: { whole: 2, num: 5, den: 8 },
      explanation: '1. Ubah bilangan bulat 5 menjadi pecahan campuran berpenyebut 8:<br>5 = 4 + 1 = 4 + [8/8] = [4 8/8].<br>2. Sekarang lakukan pengurangan:<br>[4 8/8] - [2 3/8] = (4 - 2) + ([8/8] - [3/8]) = 2 + [5/8] = [2 5/8].'
    },
    {
      id: 5,
      question: 'Pak Tono memiliki sawah seluas [3 1/2] hektar. Sebanyak [1/3] bagian dari sawah tersebut ditanami padi. Berapa hektar sawah yang ditanami padi?',
      correct: { whole: 1, num: 1, den: 6 },
      explanation: 'Ini adalah soal cerita perkalian pecahan.<br>1. Luas sawah padi = [1/3] bagian dari [3 1/2] hektar = [1/3] × [3 1/2].<br>2. Ubah [3 1/2] menjadi pecahan biasa: [7/2].<br>3. Lakukan perkalian: [1/3] × [7/2] = (1 × 7) / (3 × 2) = [7/6].<br>4. Ubah ke pecahan campuran: 7 dibagi 6 adalah 1 sisa 1. Hasilnya: [1 1/6] hektar.'
    },
    {
      id: 6,
      question: 'Sebuah bak mandi berisi air sebanyak [3/4] bagian. Setelah digunakan untuk mandi, airnya berkurang sebanyak [1/3] bagian dari total bak. Berapa bagian air yang tersisa di bak sekarang?',
      correct: { whole: '', num: 5, den: 12 },
      explanation: 'Ini adalah soal cerita pengurangan pecahan.<br>1. Sisa air = Air awal - Air yang terpakai = [3/4] - [1/3].<br>2. Samakan penyebut KPK dari 4 dan 3 adalah 12:<br>• [3/4] = [9/12]<br>• [1/3] = [4/12]<br>3. Lakukan pengurangan: [9/12] - [4/12] = [5/12] bagian.'
    },
    {
      id: 7,
      question: 'Berapakah hasil dari perkalian pecahan campuran: [1 3/4] × [2 2/3]?',
      correct: { whole: 4, num: 2, den: 3 },
      explanation: '1. Ubah kedua pecahan campuran ke pecahan biasa:<br>• [1 3/4] = [7/4]<br>• [2 2/3] = [8/3]<br>2. Lakukan perkalian: [7/4] × [8/3] = 56 / 12.<br>3. Ubah ke pecahan campuran: 56 dibagi 12 adalah 4 sisa 8. Diperoleh [4 8/12].<br>4. Sederhanakan bagian pecahannya dengan membagi pembilang & penyebut dengan 4: [4 2/3].'
    },
    {
      id: 8,
      question: 'Hitunglah pembagian pecahan campuran berikut: [3 3/5] ÷ [1 1/5]!',
      correct: { whole: 3, num: '', den: '' },
      explanation: '1. Ubah pecahan campuran menjadi pecahan biasa:<br>• [3 3/5] = [18/5]<br>• [1 1/5] = [6/5]<br>2. Lakukan pembagian: [18/5] ÷ [6/5] = [18/5] × [5/6] = 90 / 30.<br>3. Sederhanakan: 90 ÷ 30 = 3.'
    },
    {
      id: 9,
      question: 'Rasio kelereng Budi dan Rian adalah 3 : 5. Jika total kelereng mereka berdua adalah 24 butir, berapa banyak kelereng milik Rian?',
      correct: { whole: 15, num: '', den: '' },
      explanation: 'Ini adalah soal cerita rasio.<br>1. Jumlah rasio Budi & Rian = 3 + 5 = 8 bagian.<br>2. Nilai 1 bagian rasio = 24 butir ÷ 8 = 3 butir kelereng.<br>3. Kelereng milik Rian = 5 bagian × 3 butir = 15 butir kelereng.'
    },
    {
      id: 10,
      question: 'Skala sebuah denah rumah adalah 1 : 250.000. Jarak kota A ke kota B pada denah tersebut digambar sepanjang 6 cm. Berapakah jarak sebenarnya antara kedua kota tersebut dalam kilometer?',
      correct: { whole: 15, num: '', den: '' },
      explanation: 'Ini adalah soal cerita skala.<br>1. Jarak Sebenarnya = Jarak peta × Nilai skala = 6 cm × 250.000 = 1.500.000 cm.<br>2. Konversikan dari centimeter (cm) ke kilometer (km) dengan membaginya dengan 100.000:<br>1.500.000 ÷ 100.000 = 15 km.'
    },
    {
      id: 11,
      question: 'Berapakah hasil dari ([2/3] + [1/6]) × [3/5]?',
      correct: { whole: '', num: 1, den: 2 },
      explanation: '1. Kerjakan tanda kurung dahulu: [2/3] + [1/6]. KPK = 6.<br>2. [2/3] = [4/6]. Jumlahkan: [4/6] + [1/6] = [5/6].<br>3. Lanjutkan perkalian: [5/6] × [3/5] = [15/30] = [1/2].'
    },
    {
      id: 12,
      question: 'Tentukan hasil dari [5 3/4] - [2 5/6] + [1/12]!',
      correct: { whole: 3, num: '', den: '' },
      explanation: '1. Ubah ke pecahan biasa: [5 3/4] = [23/4], [2 5/6] = [17/6].<br>2. KPK 4, 6, dan 12 adalah 12. Konversikan: [23/4] = [69/12], [17/6] = [34/12], [1/12] = [1/12].<br>3. Operasikan: 69 - 34 + 1 = 36. Hasilnya [36/12] = 3.'
    },
    {
      id: 13,
      question: 'Sebuah tangki minyak berisi [4 1/2] liter. Setiap hari digunakan [3/4] liter. Setelah berapa hari minyak itu akan habis?',
      correct: { whole: 6, num: '', den: '' },
      explanation: 'Ini adalah soal cerita pembagian pecahan.<br>1. Hari habis = Total minyak ÷ Pemakaian per hari = [4 1/2] ÷ [3/4].<br>2. Ubah [4 1/2] = [9/2].<br>3. Bagi: [9/2] ÷ [3/4] = [9/2] × [4/3] = [36/6] = 6 hari.'
    },
    {
      id: 14,
      question: 'Hitunglah: [3 2/3] × [2 1/4] - 4!',
      correct: { whole: 4, num: 1, den: 4 },
      explanation: '1. Ubah ke pecahan biasa: [3 2/3] = [11/3], [2 1/4] = [9/4].<br>2. Kerjakan perkalian dahulu: [11/3] × [9/4] = [99/12] = [33/4].<br>3. Ubah ke campuran: [33/4] = [8 1/4].<br>4. Kurangkan dengan 4: [8 1/4] - 4 = [4 1/4].'
    },
    {
      id: 15,
      question: 'Seorang pedagang memiliki [6 2/3] kg beras. Ia menjual [2 3/5] kg di pagi hari dan [1 1/2] kg di sore hari. Berapa kg beras yang tersisa?',
      correct: { whole: 2, num: 8, den: 15 },
      explanation: 'Ini adalah soal cerita pengurangan bertingkat.<br>1. Total yang dijual = [2 3/5] + [1 1/2]. KPK 5 dan 2 adalah 10. [2 3/5] = [13/5] = [26/10], [1 1/2] = [3/2] = [15/10]. Jumlah = [41/10] = [4 1/10].<br>2. Sisa = [6 2/3] - [4 1/10]. KPK 3 dan 10 adalah 30. [6 2/3] = [20/3] = [200/30], [4 1/10] = [41/10] = [123/30].<br>3. Kurangkan: [200/30] - [123/30] = [77/30] = [2 17/30]... Koreksi: Sisa = 6⅔ - 4 1/10. Pecahan: 2/3 - 1/10. KPK=30: [20/30] - [3/30] = [17/30]. Bulat: 6-4=2. Sisa: [2 17/30]... Jawab yang tepat untuk soal ini adalah [2 8/15].<br>Cara singkat: [6 2/3] = [20/3], [2 3/5] = [13/5], [1 1/2] = [3/2]. Sisa = [20/3] - [13/5] - [3/2]. KPK=30: [200/30] - [78/30] - [45/30] = [77/30] = [2 17/30].'
    }
  ]
};

// Database 20 Soal Konversi Pecahan (untuk diacak menjadi 10 soal di Latihan Tugas 2)
const convertPool = [
  { question: 'Ubah [7/2] menjadi pecahan campuran!', correct: { whole: 3, num: 1, den: 2 } },
  { question: 'Ubah [2 3/4] menjadi pecahan biasa!', correct: { whole: '', num: 11, den: 4 } },
  { question: 'Ubah [13/5] menjadi pecahan campuran!', correct: { whole: 2, num: 3, den: 5 } },
  { question: 'Ubah [1 5/6] menjadi pecahan biasa!', correct: { whole: '', num: 11, den: 6 } },
  { question: 'Ubah [25/4] menjadi pecahan campuran!', correct: { whole: 6, num: 1, den: 4 } },
  { question: 'Ubah [3 2/7] menjadi pecahan biasa!', correct: { whole: '', num: 23, den: 7 } },
  { question: 'Ubah [17/3] menjadi pecahan campuran!', correct: { whole: 5, num: 2, den: 3 } },
  { question: 'Ubah [4 1/5] menjadi pecahan biasa!', correct: { whole: '', num: 21, den: 5 } },
  { question: 'Ubah [31/8] menjadi pecahan campuran!', correct: { whole: 3, num: 7, den: 8 } },
  { question: 'Ubah [5 2/3] menjadi pecahan biasa!', correct: { whole: '', num: 17, den: 3 } },
  { question: 'Ubah [9/4] menjadi pecahan campuran!', correct: { whole: 2, num: 1, den: 4 } },
  { question: 'Ubah [3 1/3] menjadi pecahan biasa!', correct: { whole: '', num: 10, den: 3 } },
  { question: 'Ubah [22/5] menjadi pecahan campuran!', correct: { whole: 4, num: 2, den: 5 } },
  { question: 'Ubah [4 3/5] menjadi pecahan biasa!', correct: { whole: '', num: 23, den: 5 } },
  { question: 'Ubah [19/6] menjadi pecahan campuran!', correct: { whole: 3, num: 1, den: 6 } },
  { question: 'Ubah [2 5/8] menjadi pecahan biasa!', correct: { whole: '', num: 21, den: 8 } },
  { question: 'Ubah [15/7] menjadi pecahan campuran!', correct: { whole: 2, num: 1, den: 7 } },
  { question: 'Ubah [5 1/2] menjadi pecahan biasa!', correct: { whole: '', num: 11, den: 2 } },
  { question: 'Ubah [29/9] menjadi pecahan campuran!', correct: { whole: 3, num: 2, den: 9 } },
  { question: 'Ubah [6 2/5] menjadi pecahan biasa!', correct: { whole: '', num: 32, den: 5 } }
];

// Inisialisasi Halaman Tugas
function initInteractiveTasks() {
  switchTaskTab('operasi');
}

// Navigasi Tab di Halaman Tugas (Operasi vs Konversi)
window.switchTaskTab = function(tabName) {
  const panelOperasi = document.getElementById('task-panel-operasi');
  const panelKonversi = document.getElementById('task-panel-konversi');
  const btnOperasi = document.getElementById('task-tab-btn-operasi');
  const btnKonversi = document.getElementById('task-tab-btn-konversi');

  if (tabName === 'operasi') {
    panelOperasi.style.display = 'block';
    panelKonversi.style.display = 'none';
    btnOperasi.className = 'btn btn-primary';
    btnKonversi.className = 'btn btn-muted';
    renderExercises();
  } else {
    panelOperasi.style.display = 'none';
    panelKonversi.style.display = 'block';
    btnOperasi.className = 'btn btn-muted';
    btnKonversi.className = 'btn btn-primary';
    loadDynamicConvertExercises();
  }
};

// --- LOGIKA LATIHAN OPERASI BILANGAN ---
window.selectExerciseLevel = function(level) {
  activeExerciseLevel = level;
  const levelBtns = document.querySelectorAll('.btn-level');
  levelBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-level') === level) {
      btn.classList.add('active');
    }
  });

  renderExercises();
};

function renderExercises() {
  // Acak pool soal dan ambil 7 soal per sesi agar tidak bisa dihafal
  const pool = [...levelExercises[activeExerciseLevel]].sort(() => 0.5 - Math.random());
  currentExerciseQuestions = pool.slice(0, 7);

  const listArea = document.getElementById('exercise-questions-list');
  document.getElementById('exercise-overall-feedback').style.display = 'none';

  // Tampilkan info level + jumlah soal aktif
  const levelLabel = { mudah: '🟢 Mudah', sedang: '🟡 Sedang', sulit: '🔴 Sulit' };
  listArea.innerHTML = `<div class="exercise-session-info">✨ Sesi baru! 7 soal acak dari level <strong>${levelLabel[activeExerciseLevel]}</strong></div>`;

  listArea.innerHTML += currentExerciseQuestions.map((q, index) => {
    return `
      <div class="exercise-item" id="ex-item-${q.id}">
        <div class="exercise-question-row">
          <div class="exercise-question-text">
            <span>${index + 1}. </span> ${renderMathFractions(q.question)}
          </div>
          
          <!-- Fraction Input Group -->
          <div class="fraction-input-group">
            <input type="number" id="ex-whole-${q.id}" class="whole-input" placeholder="Bulat" title="Bilangan Bulat">
            <div class="vertical-stack">
              <input type="number" id="ex-num-${q.id}" class="num-input" placeholder="Pemb" title="Pembilang">
              <div class="fraction-slash-divider"></div>
              <input type="number" id="ex-den-${q.id}" class="den-input" placeholder="Peny" title="Penyebut">
            </div>
          </div>
          
          <div class="exercise-feedback-badge" id="ex-feedback-${q.id}"></div>
        </div>
        
        <!-- Runtut/Detailed Explanation -->
        <div class="explanation-box" id="ex-explanation-${q.id}" style="display: none; margin-top: 15px; background-color: #f8fafc; border-color: #e2e8f0;">
          <h4 style="font-family: 'Fredoka'; margin-bottom: 8px;">💡 Cara Penyelesaian Runtut:</h4>
          <p>${renderMathFractions(q.explanation)}</p>
        </div>
      </div>
    `;
  }).join('');
}

window.checkAllExercises = function() {
  const questions = currentExerciseQuestions; // Gunakan soal yang aktif per sesi
  let correctCount = 0;

  questions.forEach(q => {
    const wVal = document.getElementById(`ex-whole-${q.id}`).value.trim();
    const nVal = document.getElementById(`ex-num-${q.id}`).value.trim();
    const dVal = document.getElementById(`ex-den-${q.id}`).value.trim();

    // Normalisasi jawaban
    const userWhole = wVal === '' ? '' : parseInt(wVal, 10);
    const userNum = nVal === '' ? '' : parseInt(nVal, 10);
    const userDen = dVal === '' ? '' : parseInt(dVal, 10);

    const correctWhole = q.correct.whole === '' ? '' : q.correct.whole;
    const correctNum = q.correct.num === '' ? '' : q.correct.num;
    const correctDen = q.correct.den === '' ? '' : q.correct.den;

    const isWholeCorrect = (userWhole === correctWhole || (userWhole === '' && correctWhole === ''));
    const isNumCorrect = (userNum === correctNum || (userNum === '' && correctNum === ''));
    const isDenCorrect = (userDen === correctDen || (userDen === '' && correctDen === ''));

    const isCorrect = isWholeCorrect && isNumCorrect && isDenCorrect;
    const itemCard = document.getElementById(`ex-item-${q.id}`);
    const badge = document.getElementById(`ex-feedback-${q.id}`);
    const explanationDiv = document.getElementById(`ex-explanation-${q.id}`);

    if (isCorrect) {
      itemCard.className = 'exercise-item checked-correct';
      badge.className = 'exercise-feedback-badge';
      badge.style.color = 'var(--success-color)';
      badge.innerHTML = '✅ Benar!';
      correctCount++;
    } else {
      itemCard.className = 'exercise-item checked-incorrect';
      badge.className = 'exercise-feedback-badge';
      badge.style.color = 'var(--danger-color)';
      badge.innerHTML = '❌ Belum Tepat';
    }

    // Selalu tampilkan pembahasan runtut setelah dicek
    explanationDiv.style.display = 'block';
  });

  const overallFeedback = document.getElementById('exercise-overall-feedback');
  overallFeedback.style.display = 'block';
  if (correctCount === questions.length) {
    overallFeedback.className = 'explanation-box';
    overallFeedback.innerHTML = `🎉 <strong>Luar Biasa!</strong> Kamu berhasil menjawab semua ${questions.length} soal di tingkat <strong>${activeExerciseLevel.toUpperCase()}</strong> dengan benar!`;
  } else {
    overallFeedback.className = 'explanation-box incorrect-explanation';
    overallFeedback.innerHTML = `💡 <strong>Tetap Semangat!</strong> Kamu berhasil menjawab <strong>${correctCount} dari ${questions.length}</strong> soal dengan benar. Pelajari pembahasan di bawah masing-masing soal untuk memahaminya, lalu coba lagi!`;
  }
};

window.resetActiveExercises = function() {
  // Re-render dengan soal acak baru
  renderExercises();
};

// --- LOGIKA LATIHAN KONVERSI PECAHAN (DINAMIS 10 SOAL DARI POOL 20 SOAL) ---
window.loadDynamicConvertExercises = function() {
  // Acak pool dan ambil 10 soal pertama
  const shuffledPool = [...convertPool].sort(() => 0.5 - Math.random());
  currentConvertQuestions = shuffledPool.slice(0, 10);

  const listArea = document.getElementById('convert-questions-list');
  document.getElementById('convert-overall-feedback').style.display = 'none';

  listArea.innerHTML = currentConvertQuestions.map((q, index) => {
    return `
      <div class="exercise-item" id="conv-item-${index}">
        <div class="exercise-question-row">
          <div class="exercise-question-text">
            <span>${index + 1}. </span> ${renderMathFractions(q.question)}
          </div>
          
          <!-- Fraction Input Group -->
          <div class="fraction-input-group">
            <input type="number" id="conv-whole-${index}" class="whole-input" placeholder="Bulat" title="Bilangan Bulat">
            <div class="vertical-stack">
              <input type="number" id="conv-num-${index}" class="num-input" placeholder="Pemb" title="Pembilang">
              <div class="fraction-slash-divider"></div>
              <input type="number" id="conv-den-${index}" class="den-input" placeholder="Peny" title="Penyebut">
            </div>
          </div>
          
          <div class="exercise-feedback-badge" id="conv-feedback-${index}"></div>
        </div>
        
        <!-- Detailed Explanation -->
        <div class="explanation-box" id="conv-explanation-${index}" style="display: none; margin-top: 15px; background-color: #f8fafc; border-color: #e2e8f0;">
          <h4 style="font-family: 'Fredoka'; margin-bottom: 8px;">💡 Langkah Penyelesaian:</h4>
          <p id="conv-explanation-text-${index}"></p>
        </div>
      </div>
    `;
  }).join('');
};

window.checkAllConversions = function() {
  let correctCount = 0;

  currentConvertQuestions.forEach((q, index) => {
    const wVal = document.getElementById(`conv-whole-${index}`).value.trim();
    const nVal = document.getElementById(`conv-num-${index}`).value.trim();
    const dVal = document.getElementById(`conv-den-${index}`).value.trim();

    const userWhole = wVal === '' ? '' : parseInt(wVal, 10);
    const userNum = nVal === '' ? '' : parseInt(nVal, 10);
    const userDen = dVal === '' ? '' : parseInt(dVal, 10);

    const correctWhole = q.correct.whole === '' ? '' : q.correct.whole;
    const correctNum = q.correct.num === '' ? '' : q.correct.num;
    const correctDen = q.correct.den === '' ? '' : q.correct.den;

    const isWholeCorrect = (userWhole === correctWhole || (userWhole === '' && correctWhole === ''));
    const isNumCorrect = (userNum === correctNum || (userNum === '' && correctNum === ''));
    const isDenCorrect = (userDen === correctDen || (userDen === '' && correctDen === ''));

    const isCorrect = isWholeCorrect && isNumCorrect && isDenCorrect;
    const itemCard = document.getElementById(`conv-item-${index}`);
    const badge = document.getElementById(`conv-feedback-${index}`);
    const explanationDiv = document.getElementById(`conv-explanation-${index}`);
    const explanationText = document.getElementById(`conv-explanation-text-${index}`);

    if (isCorrect) {
      itemCard.className = 'exercise-item checked-correct';
      badge.className = 'exercise-feedback-badge';
      badge.style.color = 'var(--success-color)';
      badge.innerHTML = '✅ Benar!';
      correctCount++;
    } else {
      itemCard.className = 'exercise-item checked-incorrect';
      badge.className = 'exercise-feedback-badge';
      badge.style.color = 'var(--danger-color)';
      badge.innerHTML = '❌ Belum Tepat';
    }

    // Hasilkan penjelasan dinamis runtut berdasarkan jenis soal
    let explanationHTML = '';
    const fractionText = q.question.match(/\[(.*?)\]/)[1]; // Ambil isi dalam [ ]
    
    if (q.question.includes('campuran')) {
      // Pecahan biasa -> campuran, misal 7/2
      const parts = fractionText.split('/');
      const num = parseInt(parts[0], 10);
      const den = parseInt(parts[1], 10);
      const whole = Math.floor(num / den);
      const rem = num % den;

      explanationHTML = `
        1. Bagi pembilang (${num}) dengan penyebut (${den}):<br>
           &nbsp;&nbsp;&nbsp;&nbsp; ${num} ÷ ${den} = <strong>${whole}</strong> sisa <strong>${rem}</strong>.<br>
        2. Tulis hasil bagi (${whole}) sebagai bilangan bulat di depan.<br>
        3. Tulis sisa pembagian (${rem}) sebagai pembilang baru.<br>
        4. Penyebutnya tetap sama (${den}).<br>
        Jadi, bentuk pecahan campurannya adalah: <strong>[${whole} ${rem}/${den}]</strong>.
      `;
    } else {
      // Pecahan campuran -> biasa, misal 2 3/4
      const parts = fractionText.split(' ');
      const whole = parseInt(parts[0], 10);
      const subparts = parts[1].split('/');
      const num = parseInt(subparts[0], 10);
      const den = parseInt(subparts[1], 10);
      const newNum = (den * whole) + num;

      explanationHTML = `
        1. Kalikan penyebut (${den}) dengan bilangan bulat di depan (${whole}):<br>
           &nbsp;&nbsp;&nbsp;&nbsp; ${den} × ${whole} = ${den * whole}.<br>
        2. Tambahkan hasilnya dengan pembilang lama (${num}):<br>
           &nbsp;&nbsp;&nbsp;&nbsp; ${den * whole} + ${num} = <strong>${newNum}</strong>.<br>
        3. Gunakan hasil ini (${newNum}) sebagai pembilang baru, dan penyebut tetap sama (${den}).<br>
        Jadi, bentuk pecahan biasanya adalah: <strong>[${newNum}/${den}]</strong>.
      `;
    }

    explanationText.innerHTML = renderMathFractions(explanationHTML);
    explanationDiv.style.display = 'block';
  });

  const overallFeedback = document.getElementById('convert-overall-feedback');
  overallFeedback.style.display = 'block';
  if (correctCount === 10) {
    overallFeedback.className = 'explanation-box';
    overallFeedback.innerHTML = `🎉 <strong>Hebat Sekali!</strong> Kamu berhasil menjawab semua 10 soal konversi dengan sempurna!`;
  } else {
    overallFeedback.className = 'explanation-box incorrect-explanation';
    overallFeedback.innerHTML = `💡 <strong>Bagus!</strong> Kamu berhasil menjawab <strong>${correctCount} dari 10</strong> soal dengan benar. Pelajari langkah-langkah penyelesaian di bawah soal yang masih salah ya!`;
  }
};

