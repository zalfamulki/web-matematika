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