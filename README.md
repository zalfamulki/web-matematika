# Web Interaktif Matematika Kelas 6 — Pecahan, Pecahan Campuran & Rasio

README ini berisi **prompt lengkap** untuk membuat web interaktif pembelajaran matematika anak kelas 6 SD yang berfokus pada **pecahan**, **pecahan campuran**, dan **rasio**. Web mencakup penjelasan materi, kuis, dan tugas interaktif dengan soal yang bervariatif lengkap dengan penjelasannya.

---

## Prompt Utama (copy-paste ke AI / pembuat web)

```
Buatkan saya sebuah web interaktif pembelajaran matematika untuk siswa kelas 6 SD
dengan fokus pada materi PECAHAN, PECAHAN CAMPURAN, dan RASIO.

## Kebutuhan Umum
- Bahasa: Indonesia, dengan bahasa yang ramah dan mudah dipahami anak-anak.
- Desain: warna-warni, ceria, menarik untuk anak, responsif (bisa dibuka di HP dan laptop).
- Navigasi: menu sederhana untuk berpindah antar bagian.
- Bisa dijalankan offline tanpa server (single file HTML/CSS/JS atau folder sederhana).

## Struktur Web
1. **Halaman Beranda** — sapaan, pilihan menu materi, kuis, dan tugas.
2. **Halaman Materi**
   - Pecahan biasa (definisi, pembilang/penyebut, pecahan senilai, menyederhanakan pecahan).
   - Pecahan campuran (mengubah pecahan biasa ke campuran dan sebaliknya).
   - Operasi pecahan (penjumlahan, pengurangan, perkalian, pembagian).
   - Perbandingan pecahan (lebih besar/kecil, urutan pecahan).
   - Rasio (pengertian rasio, menyatakan rasio, soal cerita rasio, skala sederhana).
   - Setiap sub-materi disertai CONTOH SOAL + LANGKAH PENYELESAIAN yang jelas.
3. **Halaman Kuis**
   - Soal pilihan ganda (minimal 20 soal bervariatif per materi atau soal acak dari bank soal).
   - Variasi: pecahan, pecahan campuran, operasi hitung, perbandingan, rasio, soal cerita.
   - Skor ditampilkan di akhir, beserta jawaban benar/salah.
   - Setiap soal MENAMPILKAN PENJELASAN setelah dijawab (pembahasan langkah demi langkah).
   - Tombol "Ulangi Kuis".
4. **Halaman Tugas Interaktif**
   - Soal isian / drag-and-drop / pilih-jawaban yang dikerjakan langsung.
   - Contoh tugas: mengubah pecahan menjadi campuran, menyederhanakan pecahan,
     membandingkan dua pecahan, mengisi nilai rasio yang hilang.
   - Cek jawaban otomatis + skor + penjelasan setiap soal.
   - Tombol "Kerjakan Ulang".

## Bank Soal (minimal)
- Pecahan senilai: 5 soal
- Menyederhanakan pecahan: 5 soal
- Ubah pecahan biasa ↔ pecahan campuran: 5 soal
- Penjumlahan & pengurangan pecahan/campuran: 10 soal
- Perkalian & pembagian pecahan/campuran: 8 soal
- Perbandingan/urutan pecahan: 5 soal
- Rasio (termasuk soal cerita): 10 soal

## Fitur
- Feedback langsung (benar = animasi ceria, salah = pembahasan).
- Progress/jumlah soal yang sudah dikerjakan.
- Progress bar pada kuis.
- Suara/animasi opsional jika mudah (bisa dilewati).
- Tidak memerlukan login.
```

---

## Petunjuk Penggunaan

1. Salin seluruh teks di dalam blok "Prompt Utama" di atas.
2. Tempelkan ke AI pembuat kode (mis. ChatGPT, Claude, atau langsung minta di opencode).
3. Minta hasil berupa file yang bisa langsung dijalankan:
   - `index.html` (bisa single file), atau
   - folder berisi `index.html`, `style.css`, `script.js`.
4. Buka `index.html` di browser untuk mencoba.

---

## Daftar Soal Contoh (opsional, bisa ikut disertakan)

| Materi | Contoh Soal | Jawaban |
|--------|-------------|---------|
| Pecahan senilai | `1/2 = ?/6` | 3 |
| Sederhanakan | `8/12 = ?` | `2/3` |
| Biasa → Campuran | `7/2 = ?` | `3 1/2` |
| Campuran → Biasa | `2 3/4 = ?` | `11/4` |
| Penjumlahan | `1/4 + 1/2 = ?` | `3/4` |
| Pengurangan | `3 1/2 − 1 3/4 = ?` | `1 3/4` |
| Perkalian | `2/3 × 3/4 = ?` | `1/2` |
| Pembagian | `3/5 ÷ 2/3 = ?` | `9/10` |
| Perbandingan | Mana lebih besar, `3/4` atau `5/6`? | `5/6` |
| Rasio | Rasio kelereng A:B = 2:3, total 15, berapa milik A? | 6 |
| Soal cerita rasio | Jarak peta 4 cm, skala 1:100.000, jarak sebenarnya? | 4 km |

---

## Struktur File yang Disarankan (jika bukan single-file)

```
web-mtk/
├── index.html        # Halaman utama + navigasi
├── style.css         # Tampilan ceria & responsif
├── script.js         # Logika kuis, tugas, bank soal
└── README.md         # File ini
```

Selamat belajar! Semoga web interaktif matematika ini bermanfaat untuk anak kelas 6. 🎉
