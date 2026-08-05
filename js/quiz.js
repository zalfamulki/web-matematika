/* =====================================================================
   QUIZ · Logika Kuis Pilihan Ganda  (js/quiz.js)
   TOC:
     1. State Kuis
     2. Init & Reset Setup
     3. Mulai Kuis (startQuiz)
     4. Render Soal dan Timer (loadQuestion)
     5. Pilih Jawaban (selectOption) & Timeout
     6. Pindah Soal & Tampilkan Hasil (showQuizResults)
   ===================================================================== */


/* ---------- 1. State Kuis ---------- */
let currentQuizCategory = 'all';
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let quizTimeLeft = 0;
const TIME_PER_QUESTION = 30; // 30 detik per pertanyaan
let userAnswers = []; // mencatat detail jawaban user


/* ---------- 2. Init & Reset Setup ---------- */
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

/* ---------- 3. Mulai Kuis ---------- */
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

/* ---------- 4. Render Soal dan Timer ---------- */
function loadQuestion() {
  clearInterval(timerInterval);

  const questionData = currentQuizQuestions[currentQuestionIndex];

  // Progress Bar (transform-based for smoothness)
  const progressPercent = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;
  document.getElementById('quiz-progress-bar').style.transform = `scaleX(${progressPercent / 100})`;
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

/* ---------- 5. Pilih Jawaban ---------- */
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
      ${isCorrect
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2c0 4-2 6-4 8"/><path d="M2 20c4 0 6-2 8-4"/><path d="M5 19L19 5"/><path d="M16 4l4-2-2 4"/><path d="M4 16l-2 4 4-2"/><path d="M13 8l3-3"/><path d="M17 12l-2 2"/><path d="M9 15l-2 2"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.5 1.4 1.5 2.1h4c0-.7.8-1.6 1.5-2.1A6 6 0 0 0 12 3z"/></svg>'}
      <span>${isCorrect ? 'Hebat! Jawabanmu Benar!' : 'Kurang Tepat, Mari Pelajari!'}</span>
    </div>
    <p>${questionData.explanation}</p>
  `;
  explanationDiv.style.display = 'block';

  // Show Next Button
  const isLastQuestion = (currentQuestionIndex === currentQuizQuestions.length - 1);
  const nextBtnText = isLastQuestion ? 'Lihat Hasil Kuis' : 'Pertanyaan Berikutnya';
  const nextBtnArrow = isLastQuestion
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';
  document.getElementById('next-btn-container').innerHTML = `
    <button class="btn btn-primary" onclick="goToNextQuestion()">${nextBtnText}${nextBtnArrow}</button>
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
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L3 5"/><path d="M19 3l2 2"/><path d="M12 1v2"/></svg>
      <span>Waktu Habis!</span>
    </div>
    <p>${questionData.explanation}</p>
  `;
  explanationDiv.style.display = 'block';

  const isLastQuestion = (currentQuestionIndex === currentQuizQuestions.length - 1);
  const nextBtnText = isLastQuestion ? 'Lihat Hasil Kuis' : 'Pertanyaan Berikutnya';
  const nextBtnArrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';
  document.getElementById('next-btn-container').innerHTML = `
    <button class="btn btn-primary" onclick="goToNextQuestion()">${nextBtnText}${nextBtnArrow}</button>
  `;
}

/* ---------- 6. Pindah Soal & Hasil ---------- */
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
  let badge = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="currentColor"><path d="M12 2l3.1 6.3 7 1-5.1 4.9 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.2l7-1z"/></svg>';
  let message = 'Terus berlatih ya, kamu pasti bisa!';
  if (percentScore >= 80) {
    badge = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="currentColor"><path d="M2 17l3-8 4 4L12 5l3 8 4-4 3 8z"/><path d="M2 20h20v-1.5H2z"/></svg>';
    message = 'Luar biasa! Kamu adalah Bintang Matematika!';
  } else if (percentScore >= 50) {
    badge = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="currentColor"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4v8a5 5 0 0 0 10 0V4H7z"/><path d="M7 6H4L6 9"/><path d="M17 6h3l-2 3"/></svg>';
    message = 'Bagus sekali! Sedikit lagi kamu akan jadi juara!';
  }

  document.getElementById('quiz-badge').innerHTML = badge;
  document.getElementById('quiz-message').innerText = message;

  document.getElementById('stat-correct').innerText = score;
  document.getElementById('stat-incorrect').innerText = currentQuizQuestions.length - score;

  // Animate score counting up
  animateScoreCount(percentScore);

  // Fire confetti on strong results
  if (percentScore >= 50 && typeof launchConfetti === 'function') {
    setTimeout(() => launchConfetti(percentScore), 400);
  }

  // Render Detailed Review Section
  const reviewContainer = document.getElementById('quiz-review-details');
  reviewContainer.innerHTML = userAnswers.map((ans, idx) => {
    const accentDone = ans.isCorrect;
    return `
    <div class="card review-card ${accentDone ? 'accent-green' : 'accent-orange'}">
      <div class="review-head">
        <span class="review-num">${idx + 1}</span>
        <h4 style="flex:1">${ans.question}</h4>
        ${ans.isCorrect
          ? '<span class="review-status correct-status"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4L12 14.01l-3-3"/></svg> Benar</span>'
          : '<span class="review-status wrong-status">Belum tepat</span>'}
      </div>
      <p style="margin: 8px 0;">
        Jawaban Kamu: <strong>${ans.selected === -1 ? 'Waktu Habis' : currentQuizQuestions[idx].options[ans.selected]}</strong>
        ${ans.isCorrect ? '' : `(Jawaban benar: <strong>${currentQuizQuestions[idx].options[ans.correct]}</strong>)`}
      </p>
      <div class="review-explanation">
        <strong>Pembahasan:</strong> ${ans.explanation}
      </div>
    </div>`;
  }).join('');
}