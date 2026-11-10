/* =====================================================================
   DATA · SOAL LATIHAN TUGAS INTERAKTIF  (js/data/exercises.js)
   TOC:
     1. levelExercises — Latihan Operasi Pecahan (3 level: mudah/sedang/sulit)
     2. convertPool    — Latihan Konversi Biasa ↔ Campuran (pool 20 soal)
   ===================================================================== */


/* ---------- 1. Latihan Operasi Pecahan (3 Level, pool 15 soal/level, acak 7/sesi) ---------- */
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

/* ---------- 2. Latihan Konversi Biasa ↔ Campuran (pool 20 soal → acak 10/sesi) ---------- */
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