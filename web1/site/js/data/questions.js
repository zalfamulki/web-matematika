/* =====================================================================
   DATA · BANK SOAL KUIS  (js/data/questions.js)
   Total 50 soal kuis pilihan ganda.
   Kategori: senilai · campuran · operasi · rasio
   Setiap soal: { category, question, options[], answer, explanation }
   ===================================================================== */

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