// Generator for complete production script.js
const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('./scripts/enriched_questions.json', 'utf8'));
const dailyFacts = JSON.parse(fs.readFileSync('./scripts/daily_facts.json', 'utf8'));

console.log('Loaded questions:', questions.length);
console.log('Loaded daily facts:', dailyFacts.length);

const headerComment = `/**
 * ==========================================================================
 * 🕌 مَعارِف | Ma3arf — منصة التعليم والمسابقات الإسلامية الموثوقة
 * الإصدار: 2.0 (Ultra Pro Max Edition)
 * المصادر موثقة وفق القرآن الكريم والسنة النبوية وتاريخ الإسلام
 * ==========================================================================
 */
`;

const jsBody = `
// ==========================================================================
// 1. قاعدة البيانات الموثقة الشاملة (200 سؤال إسلامي مفصل مع مصادره)
// ==========================================================================
const QUESTIONS = ${JSON.stringify(questions, null, 2)};

// ==========================================================================
// 2. بطاقات معلومة اليوم الموثقة (31 يوماً متتالياً)
// ==========================================================================
const DAILY_FACTS = ${JSON.stringify(dailyFacts, null, 2)};

// ==========================================================================
// 3. إعدادات المستويات والأوسمة والنظام التراكمي
// ==========================================================================
const LEVEL_CONFIGS = [
  { name: 'المبتدئ', minXp: 0, maxXp: 100, icon: '🌱' },
  { name: 'المبادر', minXp: 100, maxXp: 250, icon: '⚡' },
  { name: 'المتوسط', minXp: 250, maxXp: 500, icon: '⚔️' },
  { name: 'المتقدم', minXp: 500, maxXp: 1000, icon: '🏛️' },
  { name: 'الخبير', minXp: 1000, maxXp: 2000, icon: '👑' },
  { name: 'العالم الأثري', minXp: 2000, maxXp: 5000, icon: '🌟' },
  { name: 'الحافظ المجاز', minXp: 5000, maxXp: 999999, icon: '🕌' }
];

const BADGES = [
  { id: 'first_quiz', name: 'باحث عن العلم', icon: '🌱', desc: 'أكملت أول اختبار بنجاح على المنصة.', condition: 'complete_first_quiz' },
  { id: 'quiz_10', name: 'طالب علم مجتهد', icon: '📚', desc: 'أكملت 10 اختبارات معرفية مكتملة.', condition: 'complete_10_quizzes' },
  { id: 'perfect_score', name: 'حافظ متقن', icon: '🏆', desc: 'حققت نسبة كاملة 100% في أي اختبار.', condition: 'perfect_score' },
  { id: 'hard_core', name: 'عالم المستقبل', icon: '👑', desc: 'أكملت بنجاح اختباراً بمستوى المتقدم أو الخبير.', condition: 'complete_hard_quiz' },
  { id: 'xp_master', name: 'سادن المعرفة', icon: '🏛️', desc: 'جمعت أكثر من 500 نقطة خبرة (XP) إجمالاً.', condition: 'xp_500' },
  { id: 'xp_grandmaster', name: 'بحر العلوم', icon: '⭐', desc: 'تجاوزت 1500 نقطة خبرة تراكمية.', condition: 'xp_1500' },
  { id: 'quran_master', name: 'صديق القرآن', icon: '📖', desc: 'أجبت على 5 أسئلة متتالية صحيحة في علوم القرآن.', condition: 'quran_streak' },
  { id: 'hadith_master', name: 'محب السنة', icon: '📜', desc: 'أجبت على 5 أسئلة متتالية صحيحة في الحديث الشريف.', condition: 'hadith_streak' },
  { id: 'daily_champion', name: 'مداوم على التحدي', icon: '🔥', desc: 'أكملت التحدي اليومي بنجاح.', condition: 'daily_challenge' },
  { id: 'favorite_collector', name: 'جامع الفوائد', icon: '🔖', desc: 'حفظت 5 أسئلة أو أكثر في قائمة المفضلة.', condition: 'favorite_5' },
  { id: 'diligent_reviewer', name: 'المراجع الدقيق', icon: '🔄', desc: 'راجعت وصححت إجاباتك السابقة الخاطئة.', condition: 'review_wrong' },
  { id: 'polymath', name: 'موسوعي الثقافة', icon: '🌍', desc: 'أجريت اختبارات في 5 تصنيفات علمية مختلفة.', condition: 'five_categories' }
];

const CATEGORY_ICONS = {
  'القرآن الكريم': '📖',
  'الحديث الشريف': '📜',
  'السيرة النبوية': '🕌',
  'قصص الأنبياء': '⛵',
  'الصحابة': '👥',
  'العقيدة': '⚖️',
  'الفقه': '🏛️',
  'الأخلاق الإسلامية': '🌱',
  'العبادات': '📿',
  'معلومات إسلامية عامة': '🌍'
};

const DIFFICULTY_LABELS = {
  'easy': 'المبتدئ',
  'medium': 'المتوسط',
  'hard': 'المتقدم',
  'expert': 'الخبير'
};

// ==========================================================================
// 4. إدارة الملف الشخصي والتخزين المحلي مع استراتيجية الترقية (Migration)
// ==========================================================================
const DEFAULT_PROFILE = {
  version: 2,
  theme: 'dark',
  totalQuizzes: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalTimedOut: 0,
  totalXp: 0,
  bestScorePercent: 0,
  unlockedBadges: [],
  favorites: [],           // قائمة بمعرفات الأسئلة المفضلة
  wrongAnswers: [],        // قائمة { id, questionId, timestamp }
  testedCategories: [],    // تصنيفات تم اختبارها
  dailyChallengeDate: null,// آخر تاريخ أكمل فيه التحدي اليومي
  dailyChallengeScore: 0,
  streak: 0,
  lastActiveDate: null
};

let profile = { ...DEFAULT_PROFILE };

function loadProfile() {
  try {
    const saved = localStorage.getItem('معارف_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration from Version 1 to Version 2
      profile = {
        ...DEFAULT_PROFILE,
        ...parsed,
        version: 2,
        favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
        wrongAnswers: Array.isArray(parsed.wrongAnswers) ? parsed.wrongAnswers : [],
        testedCategories: Array.isArray(parsed.testedCategories) ? parsed.testedCategories : [],
        unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : []
      };
    }
  } catch (err) {
    console.warn('تعذر قراءة بيانات المستخدم من التخزين المحلي، سيتم استخدام الإعدادات الافتراضية:', err);
    profile = { ...DEFAULT_PROFILE };
  }
}

function saveProfile() {
  try {
    localStorage.setItem('معارف_profile', JSON.stringify(profile));
  } catch (err) {
    console.warn('تعذر حفظ بيانات المستخدم في التخزين المحلي:', err);
  }
}

function updateXpUI() {
  const xp = profile.totalXp || 0;
  let currentLvl = LEVEL_CONFIGS[0];
  let nextLvl = LEVEL_CONFIGS[1];

  for (let i = 0; i < LEVEL_CONFIGS.length; i++) {
    if (xp >= LEVEL_CONFIGS[i].minXp) {
      currentLvl = LEVEL_CONFIGS[i];
      nextLvl = LEVEL_CONFIGS[i + 1] || LEVEL_CONFIGS[i];
    }
  }

  let percent = 0;
  if (currentLvl === nextLvl) {
    percent = 100;
  } else {
    const range = nextLvl.minXp - currentLvl.minXp;
    const progress = xp - currentLvl.minXp;
    percent = Math.min(100, Math.max(0, Math.round((progress / range) * 100)));
  }

  const badgeEl = document.getElementById('user-level-badge');
  const nameEl = document.getElementById('current-level-name');
  const fillEl = document.getElementById('xp-progress-fill');
  const currentValEl = document.getElementById('current-xp-val');
  const nextValEl = document.getElementById('next-level-xp-val');

  if (badgeEl) badgeEl.innerText = currentLvl.icon;
  if (nameEl) nameEl.innerText = currentLvl.name;
  if (fillEl) fillEl.style.width = percent + '%';
  if (currentValEl) currentValEl.innerText = xp;
  if (nextValEl) nextValEl.innerText = (currentLvl === nextLvl ? 'الحد الأقصى' : nextLvl.minXp);
}

// ==========================================================================
// 5. حالة التطبيق والمحرك (State Machine)
// ==========================================================================
const state = {
  currentScreen: 'screen-landing',
  quizMode: 'challenge',     // 'challenge' (مؤقت ونقاط) أو 'learning' (بدون مؤقت)
  selectedMode: 'difficulty', // 'difficulty', 'category', 'favorites', 'wrong', 'daily'
  selectedVal: 'easy',       // قيمة الصعوبة أو اسم التصنيف
  selectedQuestionCount: 10, // 5, 10, 15, 20, 25, 30
  quizQuestions: [],
  currentQuestionIdx: 0,
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  timedOutAnswers: 0,
  timeSpent: 0,
  runTimerInterval: null,
  questionTimerInterval: null,
  questionTimeLeft: 0,
  totalQuestionTime: 20,
  hasAnswered: false,
  answersLog: [],
  questionStartTime: 0
};

// التنقل بين الشاشات
function navigateTo(screenId) {
  const screens = document.querySelectorAll('.app-screen');
  screens.forEach(s => s.classList.remove('active'));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    state.currentScreen = screenId;
  }

  // تحديث شريط التنقل السفلي في الهواتف
  updateBottomNavActive(screenId);
  window.scrollTo(0, 0);
}

function updateBottomNavActive(screenId) {
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  if (screenId === 'screen-landing') {
    const el = document.getElementById('nav-home');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-search') {
    const el = document.getElementById('nav-search');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-daily') {
    const el = document.getElementById('nav-daily');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-favorites') {
    const el = document.getElementById('nav-favorites');
    if (el) el.classList.add('active');
  }
}

// ==========================================================================
// 6. تهيئة المظهر (Dark / Light Theme)
// ==========================================================================
function initThemeEngine() {
  const savedTheme = profile.theme || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      profile.theme = next;
      saveProfile();
    });
  }
}

// ==========================================================================
// 7. تحضير وبدء جلسة الاختبار (Quiz Preparation & Engine)
// ==========================================================================
function prepareQuizSession(overrideQuestions = null, modeTitle = null) {
  let pool = [];

  if (overrideQuestions && overrideQuestions.length > 0) {
    pool = [...overrideQuestions];
  } else if (state.selectedMode === 'favorites') {
    pool = QUESTIONS.filter(q => profile.favorites.includes(q.id));
    if (pool.length === 0) {
      alert('لا توجد أسئلة محفوظة في المفضلة حالياً.');
      return;
    }
    pool = shuffleArray(pool).slice(0, Math.min(pool.length, state.selectedQuestionCount));
  } else if (state.selectedMode === 'wrong') {
    const wrongIds = profile.wrongAnswers.map(w => w.questionId);
    pool = QUESTIONS.filter(q => wrongIds.includes(q.id));
    if (pool.length === 0) {
      alert('لا توجد إجابات خاطئة مسجلة للمراجعة.');
      return;
    }
    pool = shuffleArray(pool).slice(0, Math.min(pool.length, state.selectedQuestionCount));
  } else if (state.selectedMode === 'daily') {
    pool = getDailyChallengeQuestions();
  } else if (state.selectedMode === 'difficulty') {
    const matching = QUESTIONS.filter(q => q.difficulty === state.selectedVal);
    pool = shuffleArray(matching).slice(0, Math.min(matching.length, state.selectedQuestionCount));
  } else {
    // Mode: Category
    const matching = QUESTIONS.filter(q => q.category === state.selectedVal);
    pool = shuffleArray(matching).slice(0, Math.min(matching.length, state.selectedQuestionCount));
  }

  if (pool.length === 0) {
    alert('عذراً، لم نجد أسئلة كافية تتطابق مع هذا الاختيار.');
    return;
  }

  // إعادة تهيئة حالة الاختبار
  state.quizQuestions = pool;
  state.currentQuestionIdx = 0;
  state.score = 0;
  state.correctAnswers = 0;
  state.wrongAnswers = 0;
  state.timedOutAnswers = 0;
  state.timeSpent = 0;
  state.answersLog = [];
  state.hasAnswered = false;

  // إيقاف أي مؤقتات سابقة
  clearInterval(state.runTimerInterval);
  clearInterval(state.questionTimerInterval);

  // بدء مؤقت الجلسة الكلي
  state.runTimerInterval = setInterval(() => {
    state.timeSpent++;
  }, 1000);

  // الانتقال إلى شاشة الاختبار
  navigateTo('screen-quiz');
  displayQuestion();
}

function updateQuestionTimerDuration() {
  if (state.quizMode === 'learning') {
    state.totalQuestionTime = 0;
    return;
  }

  const currentQ = state.quizQuestions[state.currentQuestionIdx];
  if (!currentQ) return;

  if (currentQ.difficulty === 'expert') state.totalQuestionTime = 12;
  else if (currentQ.difficulty === 'hard') state.totalQuestionTime = 15;
  else if (currentQ.difficulty === 'medium') state.totalQuestionTime = 20;
  else state.totalQuestionTime = 20;
}

// عرض السؤال الحالي
function displayQuestion() {
  state.hasAnswered = false;
  clearInterval(state.questionTimerInterval);

  const currentQ = state.quizQuestions[state.currentQuestionIdx];
  if (!currentQ) {
    finishQuizSession();
    return;
  }

  updateQuestionTimerDuration();
  state.questionTimeLeft = state.totalQuestionTime;

  // تحديث أرقام الرأس
  const qIndexEl = document.getElementById('quiz-question-index');
  const qTotalEl = document.getElementById('quiz-total-questions');
  const progressFillEl = document.getElementById('quiz-progress-bar-fill');
  const categoryEl = document.getElementById('quiz-current-category');
  const scoreEl = document.getElementById('quiz-current-score');
  const diffBadgeEl = document.getElementById('question-difficulty-badge');

  if (qIndexEl) qIndexEl.innerText = state.currentQuestionIdx + 1;
  if (qTotalEl) qTotalEl.innerText = state.quizQuestions.length;

  const percentProgress = ((state.currentQuestionIdx) / state.quizQuestions.length) * 100;
  if (progressFillEl) progressFillEl.style.width = Math.max(5, percentProgress) + '%';

  if (categoryEl) categoryEl.innerText = currentQ.category;
  if (scoreEl) scoreEl.innerText = state.score;

  if (diffBadgeEl) {
    diffBadgeEl.innerText = DIFFICULTY_LABELS[currentQ.difficulty] || currentQ.difficulty;
    diffBadgeEl.className = 'q-difficulty-badge ' + currentQ.difficulty;
  }

  // تحديث زر المفضلة
  updateFavoriteButtonState(currentQ.id);

  // نص السؤال
  const qTextEl = document.getElementById('question-text');
  if (qTextEl) qTextEl.innerText = currentQ.question;

  // خيارات الإجابة
  const optionsContainer = document.getElementById('options-grid-container');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const letters = ['أ', 'ب', 'ج', 'د'];
    const choices = currentQ.options || currentQ.choices || [];

    choices.forEach((choice, idx) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'option-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', 'false');
      card.innerHTML = \`
        <span class="option-letter">\${letters[idx] || (idx + 1)}</span>
        <span class="option-text">\${choice}</span>
        <span class="option-status-icon"></span>
      \`;

      card.addEventListener('click', () => {
        if (!state.hasAnswered) {
          handleAnswerSelection(idx, card);
        }
      });

      optionsContainer.appendChild(card);
    });
  }

  // إخفاء لوحة التغذية الراجعة وتعطيل زر التالي
  const feedbackPanel = document.getElementById('feedback-panel');
  if (feedbackPanel) feedbackPanel.classList.add('hidden');

  const nextBtn = document.getElementById('next-question-btn');
  if (nextBtn) {
    nextBtn.classList.add('disabled');
    nextBtn.disabled = true;
    const isLast = (state.currentQuestionIdx === state.quizQuestions.length - 1);
    const span = nextBtn.querySelector('span');
    if (span) span.innerText = isLast ? 'عرض النتيجة الإجمالية' : 'السؤال التالي';
  }

  // إدارة المؤقت حسب النمط (تحدي أم تعلم)
  const timerContainer = document.querySelector('.smart-timer-container');
  if (state.quizMode === 'learning') {
    if (timerContainer) {
      timerContainer.classList.add('learning-mode-active');
      timerContainer.setAttribute('title', 'وضع التعلّم: بدون مؤقت زمني');
      const timerDigits = document.getElementById('timer-digits');
      if (timerDigits) timerDigits.innerText = '📖';
      const timerLbl = timerContainer.querySelector('.timer-lbl');
      if (timerLbl) timerLbl.innerText = 'تعلّم';
    }
  } else {
    if (timerContainer) {
      timerContainer.classList.remove('learning-mode-active');
      const timerLbl = timerContainer.querySelector('.timer-lbl');
      if (timerLbl) timerLbl.innerText = 'ثانية';
    }
    startQuestionCountdown();
  }
}

// بدء مؤقت العد التنازلي للسؤال
function startQuestionCountdown() {
  const timerRing = document.getElementById('timer-ring-fill');
  const timerDigits = document.getElementById('timer-digits');
  const timerContainer = document.querySelector('.smart-timer-container');

  if (timerContainer) timerContainer.classList.remove('timer-warning');
  if (timerDigits) timerDigits.innerText = state.questionTimeLeft;

  const circumference = 314.159;
  if (timerRing) {
    timerRing.style.strokeDasharray = circumference;
    timerRing.style.strokeDashoffset = '0';
  }

  state.questionStartTime = Date.now();

  state.questionTimerInterval = setInterval(() => {
    state.questionTimeLeft--;

    if (timerDigits) timerDigits.innerText = Math.max(0, state.questionTimeLeft);

    if (timerRing && state.totalQuestionTime > 0) {
      const offset = circumference - (state.questionTimeLeft / state.totalQuestionTime) * circumference;
      timerRing.style.strokeDashoffset = offset;
    }

    if (state.questionTimeLeft <= 5 && timerContainer) {
      timerContainer.classList.add('timer-warning');
    }

    if (state.questionTimeLeft <= 0) {
      clearInterval(state.questionTimerInterval);
      handleAnswerTimeout();
    }
  }, 1000);
}

// معالجة اختيار الإجابة
function handleAnswerSelection(selectedIdx, selectedCard) {
  if (state.hasAnswered) return;
  state.hasAnswered = true;
  clearInterval(state.questionTimerInterval);

  const currentQ = state.quizQuestions[state.currentQuestionIdx];
  const correctIdx = (currentQ.correctAnswerIndex !== undefined ? currentQ.correctAnswerIndex : currentQ.correct);
  const isCorrect = (selectedIdx === correctIdx);

  // تجميد كافة الخيارات
  const allCards = document.querySelectorAll('.option-card');
  allCards.forEach(card => {
    card.classList.add('disabled');
    card.setAttribute('aria-disabled', 'true');
  });

  // تسجيل النتيجة في اللوج
  state.answersLog.push({
    questionId: currentQ.id,
    question: currentQ.question,
    category: currentQ.category,
    choices: currentQ.options || currentQ.choices,
    selected: selectedIdx,
    correct: correctIdx,
    isCorrect: isCorrect,
    timedOut: false,
    explanation: currentQ.explanation,
    source: currentQ.source
  });

  if (isCorrect) {
    selectedCard.classList.add('correct');
    state.correctAnswers++;

    let pts = 10;
    if (currentQ.difficulty === 'medium') pts = 15;
    else if (currentQ.difficulty === 'hard') pts = 20;
    else if (currentQ.difficulty === 'expert') pts = 25;

    if (state.quizMode === 'challenge') {
      state.score += pts;
    } else {
      state.score += 5; // نقاط رمزية في وضع التعلم
    }

    const scoreEl = document.getElementById('quiz-current-score');
    if (scoreEl) scoreEl.innerText = state.score;

    showFeedbackPanel(true, currentQ);
  } else {
    selectedCard.classList.add('incorrect');
    state.wrongAnswers++;

    // إظهار الإجابة الصحيحة
    if (allCards[correctIdx]) {
      allCards[correctIdx].classList.add('correct');
    }

    // إضافة السؤال إلى سجل الأخطاء للتكرار لاحقاً
    recordWrongAnswer(currentQ.id);

    showFeedbackPanel(false, currentQ);
  }

  enableNextButton();
}

// معالجة انتهاء وقت السؤال
function handleAnswerTimeout() {
  if (state.hasAnswered) return;
  state.hasAnswered = true;
  state.wrongAnswers++;
  state.timedOutAnswers++;

  const currentQ = state.quizQuestions[state.currentQuestionIdx];
  const correctIdx = (currentQ.correctAnswerIndex !== undefined ? currentQ.correctAnswerIndex : currentQ.correct);

  const allCards = document.querySelectorAll('.option-card');
  allCards.forEach(card => card.classList.add('disabled'));

  if (allCards[correctIdx]) {
    allCards[correctIdx].classList.add('correct');
  }

  state.answersLog.push({
    questionId: currentQ.id,
    question: currentQ.question,
    category: currentQ.category,
    choices: currentQ.options || currentQ.choices,
    selected: -1,
    correct: correctIdx,
    isCorrect: false,
    timedOut: true,
    explanation: currentQ.explanation,
    source: currentQ.source
  });

  recordWrongAnswer(currentQ.id);
  showFeedbackPanel(false, currentQ, 'انتهى الوقت المحدد للإجابة!');
  enableNextButton();
}

// تسجيل سؤال خاطئ في التخزين المحلي
function recordWrongAnswer(questionId) {
  if (!profile.wrongAnswers.some(w => w.questionId === questionId)) {
    profile.wrongAnswers.push({
      questionId: questionId,
      timestamp: Date.now()
    });
    saveProfile();
  }
}

// عرض لوحة التفسير العلمي والمصدر
function showFeedbackPanel(isCorrect, questionObj, customTitle = null) {
  const panel = document.getElementById('feedback-panel');
  const iconEl = document.getElementById('feedback-icon');
  const titleEl = document.getElementById('feedback-title');
  const descEl = document.getElementById('feedback-explanation');

  if (!panel) return;
  panel.className = 'feedback-panel';

  if (isCorrect) {
    panel.classList.add('correct-feedback');
    if (iconEl) iconEl.innerText = '✅';
    if (titleEl) titleEl.innerText = customTitle || 'إجابة صحيحة! أحسنت';
  } else {
    panel.classList.add('incorrect-feedback');
    if (iconEl) iconEl.innerText = '⚠️';
    if (titleEl) titleEl.innerText = customTitle || 'إجابة خاطئة! الصواب:';
  }

  let text = questionObj.explanation || '';
  if (questionObj.source && questionObj.source.reference) {
    text += \`\\n\\n📖 المرجع: \${questionObj.source.reference}\`;
  }

  if (descEl) descEl.innerText = text;
  panel.classList.remove('hidden');
}

// تفعيل زر الانتقال
function enableNextButton() {
  const nextBtn = document.getElementById('next-question-btn');
  if (nextBtn) {
    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
  }
}

function handleNextQuestion() {
  if (state.currentQuestionIdx < state.quizQuestions.length - 1) {
    state.currentQuestionIdx++;
    displayQuestion();
  } else {
    finishQuizSession();
  }
}

// ==========================================================================
// 8. إكمال الاختبار وحساب النتائج والأوسمة
// ==========================================================================
function finishQuizSession() {
  clearInterval(state.runTimerInterval);
  clearInterval(state.questionTimerInterval);

  const totalQuestions = state.quizQuestions.length;
  const percent = totalQuestions > 0 ? Math.round((state.correctAnswers / totalQuestions) * 100) : 0;

  // احتساب نقاط الخبرة (XP) بدقة
  let xpEarned = state.score;
  if (state.quizMode === 'challenge') {
    if (percent === 100) xpEarned += 50; // بونص الإتقان التام
    else if (percent >= 80) xpEarned += 20; // بونص التميز
  }

  // تحديث بيانات المستخدم
  profile.totalQuizzes++;
  profile.totalQuestionsAnswered += totalQuestions;
  profile.totalCorrectAnswers += state.correctAnswers;
  profile.totalTimedOut = (profile.totalTimedOut || 0) + state.timedOutAnswers;
  profile.totalXp += xpEarned;

  if (percent > (profile.bestScorePercent || 0)) {
    profile.bestScorePercent = percent;
  }

  // تسجيل التصنيف في قائمة التصنيفات المختبرة
  const currentCategory = state.quizQuestions[0] ? state.quizQuestions[0].category : null;
  if (currentCategory && !profile.testedCategories.includes(currentCategory)) {
    profile.testedCategories.push(currentCategory);
  }

  // فحص استحقاق الأوسمة الجديدة
  const newlyUnlocked = checkAndUnlockBadges(percent);

  saveProfile();
  updateXpUI();

  // عرض شاشة النتائج
  renderResultsScreen(percent, xpEarned, newlyUnlocked);
}

function checkAndUnlockBadges(runPercent) {
  const newlyUnlocked = [];

  // 1. أول اختبار
  if (!profile.unlockedBadges.includes('first_quiz') && profile.totalQuizzes >= 1) {
    unlockBadge('first_quiz', newlyUnlocked);
  }

  // 2. 10 اختبارات
  if (!profile.unlockedBadges.includes('quiz_10') && profile.totalQuizzes >= 10) {
    unlockBadge('quiz_10', newlyUnlocked);
  }

  // 3. النتيجة الكاملة
  if (!profile.unlockedBadges.includes('perfect_score') && runPercent === 100 && state.quizQuestions.length >= 10) {
    unlockBadge('perfect_score', newlyUnlocked);
  }

  // 4. اختبار صعب أو خبير
  if (!profile.unlockedBadges.includes('hard_core') && state.selectedMode === 'difficulty' && (state.selectedVal === 'hard' || state.selectedVal === 'expert') && runPercent >= 70) {
    unlockBadge('hard_core', newlyUnlocked);
  }

  // 5. XP > 500
  if (!profile.unlockedBadges.includes('xp_master') && profile.totalXp >= 500) {
    unlockBadge('xp_master', newlyUnlocked);
  }

  // 6. XP > 1500
  if (!profile.unlockedBadges.includes('xp_grandmaster') && profile.totalXp >= 1500) {
    unlockBadge('xp_grandmaster', newlyUnlocked);
  }

  // 7. صديق القرآن (5 إجابات متتالية صحيحة في القرآن)
  if (!profile.unlockedBadges.includes('quran_master')) {
    let streak = 0;
    state.answersLog.forEach(log => {
      if (log.category === 'القرآن الكريم' && log.isCorrect) streak++;
      else streak = 0;
      if (streak >= 5) unlockBadge('quran_master', newlyUnlocked);
    });
  }

  // 8. محب السنة (5 إجابات متتالية صحيحة في الحديث)
  if (!profile.unlockedBadges.includes('hadith_master')) {
    let streak = 0;
    state.answersLog.forEach(log => {
      if (log.category === 'الحديث الشريف' && log.isCorrect) streak++;
      else streak = 0;
      if (streak >= 5) unlockBadge('hadith_master', newlyUnlocked);
    });
  }

  // 9. جامع الفوائد (5 مفضلة)
  if (!profile.unlockedBadges.includes('favorite_collector') && profile.favorites.length >= 5) {
    unlockBadge('favorite_collector', newlyUnlocked);
  }

  // 10. موسوعي الثقافة (5 تصنيفات مختلفة)
  if (!profile.unlockedBadges.includes('polymath') && profile.testedCategories.length >= 5) {
    unlockBadge('polymath', newlyUnlocked);
  }

  return newlyUnlocked;
}

function unlockBadge(badgeId, newlyUnlockedList) {
  if (!profile.unlockedBadges.includes(badgeId)) {
    profile.unlockedBadges.push(badgeId);
    const badgeObj = BADGES.find(b => b.id === badgeId);
    if (badgeObj) {
      newlyUnlockedList.push(badgeObj);
      showAchievementToast(badgeObj);
    }
  }
}

function showAchievementToast(badge) {
  const toast = document.getElementById('achievement-toast');
  const nameEl = document.getElementById('toast-badge-name');
  const descEl = document.getElementById('toast-badge-desc');

  if (!toast) return;
  if (nameEl) nameEl.innerText = badge.name;
  if (descEl) descEl.innerText = badge.desc;

  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 4500);
}

// عرض شاشة النتائج
function renderResultsScreen(percent, xpEarned, newlyUnlocked) {
  const titleEl = document.getElementById('results-motivational-title');
  const descEl = document.getElementById('results-motivational-desc');

  if (percent === 100) {
    if (titleEl) titleEl.innerText = 'ما شاء الله! إتقان تام ونتيجة كاملة 🌟';
    if (descEl) descEl.innerText = 'أحسنت القول والعمل، لقد أجبت على كافة الأسئلة بدقة بالغة. بارك الله في علمك ونفع بك.';
    triggerConfettiEffect();
  } else if (percent >= 80) {
    if (titleEl) titleEl.innerText = 'أحسنت! أداء متميز ورفيع 🏅';
    if (descEl) descEl.innerText = 'أظهرت إلماماً واسعاً بمسائل العلوم الشرعية والتاريخ الإسلامي، استمر في ترقية معارفك.';
    triggerConfettiEffect();
  } else if (percent >= 50) {
    if (titleEl) titleEl.innerText = 'أداء حسن وبداية طيبة 👍';
    if (descEl) descEl.innerText = 'لديك أساس معرفي طيب، راجع الأسئلة التي تعثرت فيها لتثبيت المعلومات الشرعية النافعة.';
  } else {
    if (titleEl) titleEl.innerText = 'طلب العلم عبادة وتدرج 📚';
    if (descEl) descEl.innerText = 'كل خطأ هو باب لتعلم معلومة موثقة جديدة. راجع الإجابات النموذجية وأعد المحاولة.';
  }

  // الدائرة البصرية
  const percentEl = document.getElementById('results-percent');
  const fractionEl = document.getElementById('results-fraction');
  if (percentEl) percentEl.innerText = percent + '%';
  if (fractionEl) fractionEl.innerText = \`\${state.correctAnswers} / \${state.quizQuestions.length}\`;

  const resultsRing = document.getElementById('results-ring-fill');
  if (resultsRing) {
    const circumference = 439.82;
    resultsRing.style.strokeDasharray = circumference;
    setTimeout(() => {
      const offset = circumference - (percent / 100) * circumference;
      resultsRing.style.strokeDashoffset = offset;
    }, 200);
  }

  // الإحصائيات التفصيلية
  const xpEl = document.getElementById('results-xp-earned');
  const corrEl = document.getElementById('results-correct-count');
  const wrongEl = document.getElementById('results-wrong-count');
  const timeTakenEl = document.getElementById('results-time-taken');
  const perfLvlEl = document.getElementById('results-performance-level');
  const accuracyEl = document.getElementById('results-accuracy');
  const timeoutEl = document.getElementById('results-timeout-count');

  if (xpEl) xpEl.innerText = \`+\${xpEarned} XP\`;
  if (corrEl) corrEl.innerText = state.correctAnswers;
  if (wrongEl) wrongEl.innerText = state.wrongAnswers;
  if (accuracyEl) accuracyEl.innerText = percent + '%';
  if (timeoutEl) timeoutEl.innerText = state.timedOutAnswers;

  const mins = Math.floor(state.timeSpent / 60);
  const secs = state.timeSpent % 60;
  if (timeTakenEl) {
    timeTakenEl.innerText = mins > 0 ? \`\${mins} د و \${secs} ث\` : \`\${secs} ثانية\`;
  }

  let perfText = 'مبتدئ واعد 🌱';
  if (percent === 100) perfText = 'حافظ متقن 🌟';
  else if (percent >= 80) perfText = 'طالب علم متمكن 🏛️';
  else if (percent >= 50) perfText = 'باحث متوسط ⚔️';
  if (perfLvlEl) perfLvlEl.innerText = perfText;

  // إظهار زر إعادة الخاطئة إذا وُجدت
  const retryWrongBtn = document.getElementById('results-retry-wrong-btn');
  if (retryWrongBtn) {
    if (state.wrongAnswers > 0) {
      retryWrongBtn.classList.remove('hidden');
    } else {
      retryWrongBtn.classList.add('hidden');
    }
  }

  // عرض الأوسمة المفتوحة في هذه الجولة
  const newBadgesPanel = document.getElementById('new-badges-panel');
  const badgesRow = document.getElementById('unlocked-badges-row-container');
  if (newBadgesPanel && badgesRow) {
    if (newlyUnlocked.length > 0) {
      badgesRow.innerHTML = '';
      newlyUnlocked.forEach(b => {
        const item = document.createElement('div');
        item.className = 'badge-item unlocked';
        item.innerHTML = \`
          <div class="badge-medal-icon">\${b.icon}</div>
          <div class="badge-name">\${b.name}</div>
          <div class="badge-desc-tip">\${b.desc}</div>
        \`;
        badgesRow.appendChild(item);
      });
      newBadgesPanel.classList.remove('hidden');
    } else {
      newBadgesPanel.classList.add('hidden');
    }
  }

  // تعبئة مراجعة الأسئلة بالتفصيل مع مصادرها
  renderAnswersReviewAccordion();
  navigateTo('screen-results');
}

// مراجعة الأسئلة في أكورديون النتائج
function renderAnswersReviewAccordion() {
  const container = document.getElementById('review-answers-list');
  if (!container) return;
  container.innerHTML = '';

  state.answersLog.forEach((log, idx) => {
    const item = document.createElement('div');
    item.className = 'review-item';

    const statusIcon = log.isCorrect ? '✅' : '❌';
    const statusClass = log.isCorrect ? 'text-green' : 'text-red';
    const selectedText = log.selected === -1 ? 'انتهى الوقت دون إجابة' : log.choices[log.selected];
    const correctText = log.choices[log.correct];

    let sourceHTML = '';
    if (log.source && log.source.reference) {
      sourceHTML = \`<div class="ans-comp-row source-row">
        <span class="ans-comp-lbl">المصدر والمرجع:</span>
        <span class="ans-comp-val text-gold">\${log.source.reference}</span>
      </div>\`;
    }

    item.innerHTML = \`
      <div class="review-q-text">
        <span class="review-q-num">السؤال \${idx + 1}:</span> \${log.question} 
        <span class="review-q-cat">(\${log.category})</span>
      </div>
      <div class="review-answers-compare">
        <div class="ans-comp-row">
          <span class="ans-comp-lbl">حالة الإجابة:</span>
          <span class="ans-comp-val \${statusClass}">\${statusIcon} \${log.isCorrect ? 'صحيحة' : 'خاطئة'}</span>
        </div>
        <div class="ans-comp-row">
          <span class="ans-comp-lbl">إجابتك:</span>
          <span class="ans-comp-val">\${selectedText}</span>
        </div>
        <div class="ans-comp-row">
          <span class="ans-comp-lbl">الإجابة الصحيحة:</span>
          <span class="ans-comp-val text-green" style="font-weight:700;">\${correctText}</span>
        </div>
        <div class="ans-comp-row explanation-row">
          <span class="ans-comp-lbl">الشرح التوضيحي:</span>
          <span class="ans-comp-val">\${log.explanation || 'تم التحقق من صحة الإجابة علمياً.'}</span>
        </div>
        \${sourceHTML}
      </div>
    \`;
    container.appendChild(item);
  });
}

// ==========================================================================
// 9. نظام المفضلة والبحث والإجابات الخاطئة
// ==========================================================================
function toggleFavorite(questionId) {
  const idx = profile.favorites.indexOf(questionId);
  let isFav = false;
  if (idx === -1) {
    profile.favorites.push(questionId);
    isFav = true;
  } else {
    profile.favorites.splice(idx, 1);
    isFav = false;
  }
  saveProfile();
  updateFavoriteButtonState(questionId);

  // تحديث الشاشات الأخرى إذا كانت مفتوحة
  if (state.currentScreen === 'screen-favorites') {
    renderFavoritesScreen();
  }
  return isFav;
}

function updateFavoriteButtonState(questionId) {
  const favBtn = document.getElementById('favorite-btn');
  if (!favBtn) return;
  const isFav = profile.favorites.includes(questionId);
  if (isFav) {
    favBtn.classList.add('active');
    favBtn.setAttribute('title', 'إزالة من المفضلة');
  } else {
    favBtn.classList.remove('active');
    favBtn.setAttribute('title', 'حفظ في المفضلة');
  }
}

function renderFavoritesScreen() {
  const container = document.getElementById('favorites-list-container');
  const emptyState = document.getElementById('favorites-empty-state');
  const startBtn = document.getElementById('start-favorites-quiz-btn');

  if (!container) return;
  container.innerHTML = '';

  const favQuestions = QUESTIONS.filter(q => profile.favorites.includes(q.id));

  if (favQuestions.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (startBtn) startBtn.classList.add('disabled');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (startBtn) startBtn.classList.remove('disabled');

  favQuestions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'favorite-item-card';
    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="fav-card-cat">\${CATEGORY_ICONS[q.category] || '📖'} \${q.category}</span>
        <span class="fav-card-diff \${q.difficulty}">\${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <button class="remove-fav-btn" title="حذف من المفضلة">&times;</button>
      </div>
      <h4 class="fav-card-question">\${q.question}</h4>
      <div class="fav-card-answer"><strong>الإجابة:</strong> \${q.options[q.correctAnswerIndex]}</div>
      <div class="fav-card-explanation">\${q.explanation}</div>
      <div class="fav-card-source">📖 المرجع: \${q.source ? q.source.reference : 'موثق'}</div>
    \`;

    const removeBtn = card.querySelector('.remove-fav-btn');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        toggleFavorite(q.id);
        renderFavoritesScreen();
      });
    }

    container.appendChild(card);
  });
}

function renderWrongAnswersScreen() {
  const container = document.getElementById('wrong-answers-list-container');
  const emptyState = document.getElementById('wrong-empty-state');
  const retryBtn = document.getElementById('start-wrong-quiz-btn');

  if (!container) return;
  container.innerHTML = '';

  const wrongIds = profile.wrongAnswers.map(w => w.questionId);
  const wrongQuestions = QUESTIONS.filter(q => wrongIds.includes(q.id));

  if (wrongQuestions.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (retryBtn) retryBtn.classList.add('disabled');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (retryBtn) retryBtn.classList.remove('disabled');

  wrongQuestions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'wrong-item-card';
    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="fav-card-cat">\${CATEGORY_ICONS[q.category] || '📖'} \${q.category}</span>
        <button class="mark-understood-btn">✓ تم الفهم</button>
      </div>
      <h4 class="fav-card-question">\${q.question}</h4>
      <div class="fav-card-answer text-green"><strong>الإجابة الصحيحة:</strong> \${q.options[q.correctAnswerIndex]}</div>
      <div class="fav-card-explanation">\${q.explanation}</div>
      <div class="fav-card-source">📖 المرجع: \${q.source ? q.source.reference : 'موثق'}</div>
    \`;

    const markBtn = card.querySelector('.mark-understood-btn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        profile.wrongAnswers = profile.wrongAnswers.filter(w => w.questionId !== q.id);
        saveProfile();
        renderWrongAnswersScreen();
      });
    }

    container.appendChild(card);
  });
}

// محرك البحث العربي الذكي مع معالجة التشكيل والهمزات
function normalizeArabicText(str) {
  if (!str) return '';
  return str
    .replace(/[\\u064B-\\u065F\\u0670]/g, '') // إزالة التشكيل
    .replace(/[إأآا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .toLowerCase()
    .trim();
}

function performSearch() {
  const inputEl = document.getElementById('search-input');
  const catFilter = document.getElementById('search-cat-filter');
  const diffFilter = document.getElementById('search-diff-filter');
  const container = document.getElementById('search-results-container');
  const countEl = document.getElementById('search-results-count');

  if (!container || !inputEl) return;

  const query = normalizeArabicText(inputEl.value);
  const selectedCat = catFilter ? catFilter.value : 'all';
  const selectedDiff = diffFilter ? diffFilter.value : 'all';

  let results = QUESTIONS.filter(q => {
    if (selectedCat !== 'all' && q.category !== selectedCat) return false;
    if (selectedDiff !== 'all' && q.difficulty !== selectedDiff) return false;
    if (!query) return true;

    const normQ = normalizeArabicText(q.question);
    const normExp = normalizeArabicText(q.explanation);
    const normOpts = q.options.map(o => normalizeArabicText(o)).join(' ');

    return normQ.includes(query) || normExp.includes(query) || normOpts.includes(query);
  });

  if (countEl) countEl.innerText = results.length + ' سؤالاً';
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<div class="empty-search-msg">لم يتم العثور على أي سؤال يطابق البحث. جرب كلمات أخرى.</div>';
    return;
  }

  results.slice(0, 30).forEach(q => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    const isFav = profile.favorites.includes(q.id);

    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="fav-card-cat">\${CATEGORY_ICONS[q.category] || '📖'} \${q.category}</span>
        <span class="fav-card-diff \${q.difficulty}">\${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <button class="search-fav-btn \${isFav ? 'active' : ''}">\${isFav ? '★' : '☆'}</button>
      </div>
      <h4 class="fav-card-question">\${q.question}</h4>
      <div class="fav-card-answer text-green"><strong>الإجابة:</strong> \${q.options[q.correctAnswerIndex]}</div>
      <div class="fav-card-explanation">\${q.explanation}</div>
      <div class="fav-card-source">📖 المرجع: \${q.source ? q.source.reference : 'موثق'}</div>
    \`;

    const favBtn = card.querySelector('.search-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        const nowFav = toggleFavorite(q.id);
        favBtn.innerText = nowFav ? '★' : '☆';
        favBtn.classList.toggle('active', nowFav);
      });
    }

    container.appendChild(card);
  });
}

// ==========================================================================
// 10. التحدي اليومي ومعلومة اليوم
// ==========================================================================
function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return \`\${year}-\${month}-\${day}\`;
}

function getDailyChallengeQuestions() {
  const dateStr = getTodayDateString();
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i)) % 100000;
  }

  // اختيار 10 أسئلة حتمية بدون تكرار
  const shuffled = [...QUESTIONS];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 10);
}

function getTodayFact() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const factIdx = dayOfYear % DAILY_FACTS.length;
  return DAILY_FACTS[factIdx] || DAILY_FACTS[0];
}

function renderDailyFactPreview() {
  const fact = getTodayFact();
  const container = document.getElementById('daily-fact-preview');
  if (!container || !fact) return;

  container.innerHTML = \`
    <div class="daily-badge-tag">معلومة اليوم 🌟</div>
    <h3 class="daily-title">\${fact.title}</h3>
    <p class="daily-fact-txt">\${fact.fact}</p>
    <p class="daily-exp-txt">\${fact.explanation}</p>
    <div class="daily-meta-row">
      <span class="daily-source-txt">📖 \${fact.source.reference}</span>
      <button class="btn btn-sm btn-primary" id="daily-fact-quiz-btn">اختبر نفسك بهذا التصنيف</button>
    </div>
  \`;

  const btn = document.getElementById('daily-fact-quiz-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      state.selectedMode = 'category';
      state.selectedVal = fact.category;
      state.quizMode = 'learning';
      prepareQuizSession();
    });
  }
}

function renderDailyScreen() {
  const fact = getTodayFact();
  const container = document.getElementById('daily-screen-fact-container');
  const dateBadge = document.getElementById('daily-screen-date');

  if (dateBadge) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateBadge.innerText = new Date().toLocaleDateString('ar-EG', options);
  }

  if (container && fact) {
    container.innerHTML = \`
      <div class="daily-badge-tag">\${CATEGORY_ICONS[fact.category] || '📖'} \${fact.category}</div>
      <h3 class="daily-title">\${fact.title}</h3>
      <p class="daily-fact-txt" style="font-size: 1.15rem; font-weight: 600; margin-bottom: 12px;">\${fact.fact}</p>
      <p class="daily-exp-txt" style="color: var(--text-secondary); line-height: 1.8;">\${fact.explanation}</p>
      <div class="daily-source-txt" style="margin-top: 16px; color: var(--color-secondary); font-size: 0.95rem;">
        📖 المرجع المعتمد: \${fact.source.reference}
      </div>
    \`;
  }

  const isCompleted = (profile.dailyChallengeDate === getTodayDateString());
  const statusEl = document.getElementById('daily-challenge-status');
  const startBtn = document.getElementById('start-daily-challenge-btn');

  if (statusEl) {
    if (isCompleted) {
      statusEl.innerHTML = '<span class="status-badge completed">✓ تم إكمال تحدي اليوم بنجاح!</span>';
    } else {
      statusEl.innerHTML = '<span class="status-badge ready">⚡ جاهز للانطلاق (10 أسئلة)</span>';
    }
  }

  if (startBtn) {
    startBtn.innerText = isCompleted ? 'إعادة التحدي اليومي' : 'ابدأ التحدي اليومي 🚀';
  }
}

// ==========================================================================
// 11. لوحة الإحصائيات والأوسمة المنبثقة
// ==========================================================================
function openStatsModal() {
  const modal = document.getElementById('stats-modal');
  if (!modal) return;

  const totalQEl = document.getElementById('stats-total-quizzes');
  const totalAnsEl = document.getElementById('stats-total-answers');
  const rateEl = document.getElementById('stats-success-rate');
  const xpEl = document.getElementById('stats-total-xp');

  if (totalQEl) totalQEl.innerText = profile.totalQuizzes;
  if (totalAnsEl) totalAnsEl.innerText = profile.totalQuestionsAnswered;

  let rate = 0;
  if (profile.totalQuestionsAnswered > 0) {
    rate = Math.round((profile.totalCorrectAnswers / profile.totalQuestionsAnswered) * 100);
  }
  if (rateEl) rateEl.innerText = rate + '%';
  if (xpEl) xpEl.innerText = profile.totalXp + ' XP';

  renderBadgesGallery();
  modal.classList.remove('hidden');
}

function closeStatsModal() {
  const modal = document.getElementById('stats-modal');
  if (modal) modal.classList.add('hidden');
}

function renderBadgesGallery() {
  const container = document.getElementById('modal-badges-grid-container');
  if (!container) return;
  container.innerHTML = '';

  BADGES.forEach(badge => {
    const isUnlocked = profile.unlockedBadges.includes(badge.id);
    const card = document.createElement('div');
    card.className = 'badge-item ' + (isUnlocked ? 'unlocked' : 'locked');
    card.innerHTML = \`
      <div class="badge-medal-icon">\${badge.icon}</div>
      <div class="badge-name">\${badge.name}</div>
      <div class="badge-desc-tip">\${badge.desc}</div>
      <div class="badge-status-tag">\${isUnlocked ? 'مكتمل ✓' : 'مقفل 🔒'}</div>
    \`;
    container.appendChild(card);
  });
}

function showResetConfirmationModal() {
  const modal = document.getElementById('reset-confirm-modal');
  if (modal) modal.classList.remove('hidden');
}

function hideResetConfirmationModal() {
  const modal = document.getElementById('reset-confirm-modal');
  if (modal) modal.classList.add('hidden');
}

function executeResetAllData() {
  const currentTheme = profile.theme;
  profile = {
    ...DEFAULT_PROFILE,
    theme: currentTheme
  };
  saveProfile();
  updateXpUI();
  hideResetConfirmationModal();
  closeStatsModal();

  const landingTotalEl = document.getElementById('landing-total-quizzes');
  const landingBestEl = document.getElementById('landing-best-score');
  if (landingTotalEl) landingTotalEl.innerText = '0';
  if (landingBestEl) landingBestEl.innerText = '0%';

  alert('تمت إعادة تهيئة كافة بيانات الحساب بنجاح.');
}

// ==========================================================================
// 12. تهيئة الواجهة والأحداث عند تشغيل التطبيق
// ==========================================================================
function renderCategoriesInSelection() {
  const container = document.getElementById('categories-list-container');
  if (!container) return;
  container.innerHTML = '';

  const categories = Object.keys(CATEGORY_ICONS);

  categories.forEach(cat => {
    const count = QUESTIONS.filter(q => q.category === cat).length;
    const icon = CATEGORY_ICONS[cat] || '✨';

    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-mode', 'category');
    card.setAttribute('data-val', cat);

    card.innerHTML = \`
      <div class="category-card-icon">\${icon}</div>
      <div class="category-card-title">\${cat}</div>
      <div class="category-card-count">\${count} سؤالاً متاحاً</div>
    \`;

    card.addEventListener('click', () => {
      selectGameConfig('category', cat, card);
    });

    container.appendChild(card);
  });
}

function selectGameConfig(mode, val, cardElement) {
  state.selectedMode = mode;
  state.selectedVal = val;

  const allCards = document.querySelectorAll('.mode-card, .category-card');
  allCards.forEach(c => c.classList.remove('selected'));

  if (cardElement) cardElement.classList.add('selected');

  const summaryEl = document.getElementById('selected-setup-name');
  if (summaryEl) {
    if (mode === 'difficulty') {
      summaryEl.innerText = \`نمط الصعوبة: \${DIFFICULTY_LABELS[val] || val} (\${state.selectedQuestionCount} أسئلة)\`;
    } else {
      summaryEl.innerText = \`التصنيف: \${val} (\${state.selectedQuestionCount} أسئلة)\`;
    }
  }
}

function initEventHandlers() {
  // أزرار الصفحة الرئيسية
  const startJourneyBtn = document.getElementById('start-journey-btn');
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener('click', () => navigateTo('screen-selection'));
  }

  const selectionBackBtn = document.getElementById('selection-back-btn');
  if (selectionBackBtn) {
    selectionBackBtn.addEventListener('click', () => navigateTo('screen-landing'));
  }

  // تبديل الأنماط بين التحدي والتعلم في شاشة الاختيار
  const challengeModeBtn = document.getElementById('mode-challenge-btn');
  const learningModeBtn = document.getElementById('mode-learning-btn');

  if (challengeModeBtn) {
    challengeModeBtn.addEventListener('click', () => {
      state.quizMode = 'challenge';
      challengeModeBtn.classList.add('active');
      if (learningModeBtn) learningModeBtn.classList.remove('active');
    });
  }

  if (learningModeBtn) {
    learningModeBtn.addEventListener('click', () => {
      state.quizMode = 'learning';
      learningModeBtn.classList.add('active');
      if (challengeModeBtn) challengeModeBtn.classList.remove('active');
    });
  }

  // اختيار عدد الأسئلة
  const countBtns = document.querySelectorAll('#question-count-selector .count-btn');
  countBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      countBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedQuestionCount = parseInt(btn.getAttribute('data-count'), 10) || 10;

      const summaryEl = document.getElementById('selected-setup-name');
      if (summaryEl && state.selectedVal) {
        const lbl = DIFFICULTY_LABELS[state.selectedVal] || state.selectedVal;
        summaryEl.innerText = \`\${state.selectedMode === 'difficulty' ? 'نمط الصعوبة' : 'التصنيف'}: \${lbl} (\${state.selectedQuestionCount} أسئلة)\`;
      }
    });
  });

  // تبويبات الصعوبة والتصنيفات
  const tabs = document.querySelectorAll('.selection-tabs .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = 'tab-' + tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const activeContent = document.getElementById(targetId);
      if (activeContent) activeContent.classList.add('active');
    });
  });

  // كروت الصعوبة
  const diffCards = document.querySelectorAll('.diff-card');
  diffCards.forEach(card => {
    card.addEventListener('click', () => {
      const val = card.getAttribute('data-val');
      selectGameConfig('difficulty', val, card);
    });
  });

  // زر إطلاق الاختبار
  const launchBtn = document.getElementById('launch-quiz-btn');
  if (launchBtn) {
    launchBtn.addEventListener('click', () => prepareQuizSession());
  }

  // شاشة الاختبار
  const nextBtn = document.getElementById('next-question-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', handleNextQuestion);
  }

  const quitBtn = document.getElementById('quit-quiz-btn');
  if (quitBtn) {
    quitBtn.addEventListener('click', () => {
      if (confirm('هل أنت متأكد من رغبتك في الانسحاب؟ لن يتم تسجيل تقدم هذا الاختبار.')) {
        clearInterval(state.runTimerInterval);
        clearInterval(state.questionTimerInterval);
        navigateTo('screen-landing');
      }
    });
  }

  const favBtn = document.getElementById('favorite-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      const currentQ = state.quizQuestions[state.currentQuestionIdx];
      if (currentQ) toggleFavorite(currentQ.id);
    });
  }

  // شاشة النتائج
  const retryBtn = document.getElementById('results-retry-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => prepareQuizSession());
  }

  const retryWrongBtn = document.getElementById('results-retry-wrong-btn');
  if (retryWrongBtn) {
    retryWrongBtn.addEventListener('click', () => {
      const wrongList = state.answersLog
        .filter(a => !a.isCorrect)
        .map(a => QUESTIONS.find(q => q.id === a.questionId))
        .filter(Boolean);
      if (wrongList.length > 0) {
        state.quizMode = 'learning';
        prepareQuizSession(wrongList);
      }
    });
  }

  const homeBtn = document.getElementById('results-home-btn');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      const landingTotal = document.getElementById('landing-total-quizzes');
      const landingBest = document.getElementById('landing-best-score');
      if (landingTotal) landingTotal.innerText = profile.totalQuizzes;
      if (landingBest) landingBest.innerText = (profile.bestScorePercent || 0) + '%';
      navigateTo('screen-landing');
    });
  }

  const toggleReviewBtn = document.getElementById('toggle-review-btn');
  if (toggleReviewBtn) {
    toggleReviewBtn.addEventListener('click', () => {
      const list = document.getElementById('review-answers-list');
      const isActive = toggleReviewBtn.classList.toggle('active');
      if (list) list.classList.toggle('hidden', !isActive);
    });
  }

  // إحصائيات وأوسمة
  const openStatsBtn = document.getElementById('open-stats-btn');
  if (openStatsBtn) openStatsBtn.addEventListener('click', openStatsModal);

  const closeStatsBtn = document.getElementById('close-stats-btn-x');
  if (closeStatsBtn) closeStatsBtn.addEventListener('click', closeStatsModal);

  const resetDataBtn = document.getElementById('reset-data-btn');
  if (resetDataBtn) resetDataBtn.addEventListener('click', showResetConfirmationModal);

  const resetCancelBtn = document.getElementById('reset-cancel-btn');
  if (resetCancelBtn) resetCancelBtn.addEventListener('click', hideResetConfirmationModal);

  const resetConfirmBtn = document.getElementById('reset-confirm-btn');
  if (resetConfirmBtn) resetConfirmBtn.addEventListener('click', executeResetAllData);

  // شاشات التنقل الإضافية (المفضلة، البحث، الأخطاء، اليومي)
  setupFeatureScreenHandlers();
}

function setupFeatureScreenHandlers() {
  // أزرار العودة
  const backMappings = [
    { btn: 'favorites-back-btn', screen: 'screen-landing' },
    { btn: 'wrong-review-back-btn', screen: 'screen-landing' },
    { btn: 'search-back-btn', screen: 'screen-landing' },
    { btn: 'daily-back-btn', screen: 'screen-landing' }
  ];

  backMappings.forEach(m => {
    const el = document.getElementById(m.btn);
    if (el) el.addEventListener('click', () => navigateTo(m.screen));
  });

  // كروت الصفحة الرئيسية السريعة
  const cardDaily = document.getElementById('landing-card-daily');
  if (cardDaily) cardDaily.addEventListener('click', () => {
    renderDailyScreen();
    navigateTo('screen-daily');
  });

  const cardLearn = document.getElementById('landing-card-learn');
  if (cardLearn) cardLearn.addEventListener('click', () => {
    state.quizMode = 'learning';
    navigateTo('screen-selection');
  });

  const cardFav = document.getElementById('landing-card-favorites');
  if (cardFav) cardFav.addEventListener('click', () => {
    renderFavoritesScreen();
    navigateTo('screen-favorites');
  });

  const cardWrong = document.getElementById('landing-card-wrong');
  if (cardWrong) cardWrong.addEventListener('click', () => {
    renderWrongAnswersScreen();
    navigateTo('screen-wrong-review');
  });

  const cardSearch = document.getElementById('landing-card-search');
  if (cardSearch) cardSearch.addEventListener('click', () => {
    performSearch();
    navigateTo('screen-search');
  });

  // شريط التنقل السفلي (الهواتف)
  const navHome = document.getElementById('nav-home');
  if (navHome) navHome.addEventListener('click', () => navigateTo('screen-landing'));

  const navSearch = document.getElementById('nav-search');
  if (navSearch) navSearch.addEventListener('click', () => {
    performSearch();
    navigateTo('screen-search');
  });

  const navDaily = document.getElementById('nav-daily');
  if (navDaily) navDaily.addEventListener('click', () => {
    renderDailyScreen();
    navigateTo('screen-daily');
  });

  const navFav = document.getElementById('nav-favorites');
  if (navFav) navFav.addEventListener('click', () => {
    renderFavoritesScreen();
    navigateTo('screen-favorites');
  });

  const navStats = document.getElementById('nav-stats-btn');
  if (navStats) navStats.addEventListener('click', openStatsModal);

  // شاشة البحث
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.addEventListener('input', debounce(performSearch, 300));

  const searchCatFilter = document.getElementById('search-cat-filter');
  if (searchCatFilter) searchCatFilter.addEventListener('change', performSearch);

  const searchDiffFilter = document.getElementById('search-diff-filter');
  if (searchDiffFilter) searchDiffFilter.addEventListener('change', performSearch);

  // شاشة المفضلة والأخطاء
  const startFavQuizBtn = document.getElementById('start-favorites-quiz-btn');
  if (startFavQuizBtn) {
    startFavQuizBtn.addEventListener('click', () => {
      state.selectedMode = 'favorites';
      state.quizMode = 'learning';
      prepareQuizSession();
    });
  }

  const startWrongQuizBtn = document.getElementById('start-wrong-quiz-btn');
  if (startWrongQuizBtn) {
    startWrongQuizBtn.addEventListener('click', () => {
      state.selectedMode = 'wrong';
      state.quizMode = 'learning';
      prepareQuizSession();
    });
  }

  // التحدي اليومي
  const startDailyBtn = document.getElementById('start-daily-challenge-btn');
  if (startDailyBtn) {
    startDailyBtn.addEventListener('click', () => {
      state.selectedMode = 'daily';
      state.quizMode = 'challenge';
      profile.dailyChallengeDate = getTodayDateString();
      saveProfile();
      prepareQuizSession();
    });
  }
}

// دالة مساعدة للتأخير (Debounce)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// خلط المصفوفة بنظام Fisher-Yates
function shuffleArray(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

// تأثير الأوراق المتساقطة (Confetti)
function triggerConfettiEffect() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  container.innerHTML = '';

  const colors = ['#2E8B68', '#D7B56D', '#10B981', '#F4F1E8', '#172B23'];

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.style.position = 'absolute';
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.top = '-20px';
    piece.style.left = (Math.random() * 100) + 'vw';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.opacity = (Math.random() * 0.7 + 0.3).toString();

    const duration = (Math.random() * 2.5 + 2);
    piece.style.transition = \`transform \${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity \${duration}s ease\`;

    container.appendChild(piece);

    setTimeout(() => {
      piece.style.transform = \`translateY(\${window.innerHeight + 40}px) rotate(\${Math.random() * 720}deg)\`;
      piece.style.opacity = '0';
    }, 40);
  }
}

// التحقق عند تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  updateXpUI();
  initThemeEngine();
  renderCategoriesInSelection();
  renderDailyFactPreview();
  initEventHandlers();

  // إحصائيات الصفحة الرئيسية
  const landingTotal = document.getElementById('landing-total-quizzes');
  const landingBest = document.getElementById('landing-best-score');
  if (landingTotal) landingTotal.innerText = profile.totalQuizzes;
  if (landingBest) landingBest.innerText = (profile.bestScorePercent || 0) + '%';
});
`;

fs.writeFileSync('./script.js', headerComment + jsBody, 'utf8');
console.log('Successfully generated complete script.js!');
