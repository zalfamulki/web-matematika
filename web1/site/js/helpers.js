/* =====================================================================
   HELPERS · Fungsi Bantu Umum  (js/helpers.js)
   renderMathFractions: mengubah teks pecahan menjadi HTML visual bertumpuk.
   Format yang didukung:
     - [a/b]      → pecahan biasa (contoh: [2/3])
     - [w a/b]    → pecahan campuran (contoh: [2 1/3])
   ===================================================================== */

function renderMathFractions(text) {
  if (!text) return '';
  // Ubah [w a/b] -> mixed fraction (misal: [2 1/3] -> 2 1/3 visual)
  text = text.replace(/\[(\d+)\s+(\d+)\/(\d+)\]/g, '<span class="mixed-fraction">$1<span class="fraction-number"><span class="num">$2</span><span class="den">$3</span></span></span>');
  // Ubah [a/b] -> fraction (misal: [2/3] -> 2/3 visual)
  text = text.replace(/\[(\d+)\/(\d+)\]/g, '<span class="fraction-number"><span class="num">$1</span><span class="den">$2</span></span>');
  return text;
}