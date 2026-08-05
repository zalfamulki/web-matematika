/* =====================================================================
   TASKS · Logika Tugas Interaktif  (js/tasks.js)
   TOC:
     1. State Tugas
     2. Init & Navigasi Tab Tugas (Operasi / Konversi)
     3. Latihan Operasi Pecahan (renderExercises, checkAllExercises)
     4. Latihan Konversi Biasa ↔ Campuran (loadDynamicConvertExercises, checkAllConversions)
   ===================================================================== */


/* ---------- 1. State Tugas ---------- */
let activeExerciseLevel = 'mudah';
let currentConvertQuestions = [];
let currentExerciseQuestions = []; // soal yang aktif per sesi (7 dari pool)


/* ---------- 2. Init & Navigasi Tab Tugas ---------- */
function initInteractiveTasks() {
  switchTaskTab('operasi');
}

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

/* ---------- 3. Latihan Operasi Pecahan ---------- */
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

/* ---------- 4. Latihan Konversi Biasa ↔ Campuran ---------- */
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