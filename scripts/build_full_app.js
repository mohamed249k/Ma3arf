// scripts/build_full_app.js
// Production script builder for Ma3arf Islamic Learning Platform
const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('./scripts/enriched_questions.json', 'utf8'));
const dailyFacts = JSON.parse(fs.readFileSync('./scripts/daily_facts.json', 'utf8'));
const iconsData = fs.readFileSync('./scripts/icons_data.js', 'utf8');
const { AppIcons } = require('./icons_data.js');

console.log('Building script.js with:');
console.log('- Total verified questions:', questions.length);
console.log('- Total daily facts:', dailyFacts.length);

const headerComment = `/**
 * ==========================================================================
 * 🕌 مَعارِف | Ma3arf — منصة التعليم والمسابقات الإسلامية الموثوقة
 * الإصدار: 3.0 (Ultra Pro Max Edition — Extended & Verified)
 * المصادر موثقة وفق القرآن الكريم وصحيح السنة النبوية المطهرة
 * فكرة وإعداد وتطوير: محمد كرم (Mohamed Karam) — صدقة جارية
 * ==========================================================================
 */
`;

const jsBody = `
// ==========================================================================
// 0. محرك الأيقونات المتجهية الموحدة (Phosphor Duotone + Islamic Icons)
// ==========================================================================
${iconsData}

// ==========================================================================
// 1. قاعدة البيانات الموثقة الشاملة (800 سؤال إسلامي مع المصادر والآيات)
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
  { name: 'المبتدئ', minXp: 0, maxXp: 100, icon: AppIcons.get('plant', { size: 20, className: 'icon-gold' }) },
  { name: 'المبادر', minXp: 100, maxXp: 250, icon: AppIcons.get('lightning', { size: 20, className: 'icon-gold' }) },
  { name: 'المتوسط', minXp: 250, maxXp: 500, icon: AppIcons.get('sword', { size: 20, className: 'icon-gold' }) },
  { name: 'المتقدم', minXp: 500, maxXp: 1000, icon: AppIcons.get('bank', { size: 20, className: 'icon-gold' }) },
  { name: 'الخبير', minXp: 1000, maxXp: 2000, icon: AppIcons.get('crown', { size: 20, className: 'icon-gold' }) },
  { name: 'العالم الأثري', minXp: 2000, maxXp: 5000, icon: AppIcons.get('sparkle', { size: 20, className: 'icon-gold' }) },
  { name: 'الحافظ المجاز', minXp: 5000, maxXp: 999999, icon: AppIcons.get('fa-mosque', { size: 20, className: 'icon-gold' }) }
];

const BADGES = [
  { id: 'first_quiz', name: 'باحث عن العلم', icon: AppIcons.get('plant', { size: 32, className: 'icon-gold' }), desc: 'أكملت أول اختبار بنجاح على المنصة.', condition: 'complete_first_quiz' },
  { id: 'quiz_10', name: 'طالب علم مجتهد', icon: AppIcons.get('books', { size: 32, className: 'icon-gold' }), desc: 'أكملت 10 اختبارات معرفية مكتملة.', condition: 'complete_10_quizzes' },
  { id: 'perfect_score', name: 'حافظ متقن', icon: AppIcons.get('trophy', { size: 32, className: 'icon-gold' }), desc: 'حققت نسبة كاملة 100% في أي اختبار.', condition: 'perfect_score' },
  { id: 'hard_core', name: 'عالم المستقبل', icon: AppIcons.get('crown', { size: 32, className: 'icon-gold' }), desc: 'أكملت بنجاح اختباراً بمستوى المتقدم أو الخبير.', condition: 'complete_hard_quiz' },
  { id: 'xp_master', name: 'سادن المعرفة', icon: AppIcons.get('bank', { size: 32, className: 'icon-gold' }), desc: 'جمعت أكثر من 500 نقطة خبرة (XP) إجمالاً.', condition: 'xp_500' },
  { id: 'xp_grandmaster', name: 'بحر العلوم', icon: AppIcons.get('sparkle', { size: 32, className: 'icon-gold' }), desc: 'تجاوزت 1500 نقطة خبرة تراكمية.', condition: 'xp_1500' },
  { id: 'quran_master', name: 'صديق القرآن', icon: AppIcons.get('fa-quran', { size: 32, className: 'icon-gold' }), desc: 'أجبت على 5 أسئلة متتالية صحيحة في علوم القرآن.', condition: 'quran_streak' },
  { id: 'hadith_master', name: 'محب السنة', icon: AppIcons.get('scroll', { size: 32, className: 'icon-gold' }), desc: 'أجبت على 5 أسئلة متتالية صحيحة في الحديث الشريف.', condition: 'hadith_streak' },
  { id: 'daily_champion', name: 'مداوم على التحدي', icon: AppIcons.get('flame', { size: 32, className: 'icon-gold' }), desc: 'أكملت التحدي اليومي بنجاح.', condition: 'daily_challenge' },
  { id: 'favorite_collector', name: 'جامع الفوائد', icon: AppIcons.get('bookmark-simple', { size: 32, className: 'icon-gold' }), desc: 'حفظت 5 أسئلة أو أكثر في قائمة المفضلة.', condition: 'favorite_5' },
  { id: 'diligent_reviewer', name: 'المراجع الدقيق', icon: AppIcons.get('arrow-counter-clockwise', { size: 32, className: 'icon-gold' }), desc: 'راجعت وصححت إجاباتك السابقة الخاطئة.', condition: 'review_wrong' },
  { id: 'polymath', name: 'موسوعي الثقافة', icon: AppIcons.get('globe', { size: 32, className: 'icon-gold' }), desc: 'أجريت اختبارات في 5 تصنيفات علمية مختلفة.', condition: 'five_categories' }
];

const CATEGORY_ICONS = {
  'القرآن الكريم': AppIcons.get('fa-quran', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'الحديث الشريف': AppIcons.get('scroll', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'السيرة النبوية': AppIcons.get('fa-mosque', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'قصص الأنبياء': AppIcons.get('compass', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'الصحابة': AppIcons.get('users-three', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'العقيدة': AppIcons.get('scales', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'الفقه': AppIcons.get('bank', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'الأخلاق الإسلامية': AppIcons.get('hand-heart', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'العبادات': AppIcons.get('fa-kaaba', { size: 32, className: 'icon-gold cat-icon-svg' }),
  'معلومات إسلامية عامة': AppIcons.get('globe-hemisphere-east', { size: 32, className: 'icon-gold cat-icon-svg' })
};

const DIFFICULTY_LABELS = {
  'easy': 'المبتدئ',
  'medium': 'المتوسط',
  'hard': 'المتقدم',
  'expert': 'الخبير'
};

// ==========================================================================
// 4. محرك المؤثرات الصوتية التوليدي (Web Audio API - Zero External Files)
// ==========================================================================
const SoundEngine = {
  ctx: null,
  init() {
    if (!this.ctx && (typeof window !== 'undefined')) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  },
  playTone(freq, duration, type = 'sine', gainVal = 0.12) {
    if (!profile.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio synthesis issue:', e);
    }
  },
  playCorrect() {
    if (!profile.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      // نغمة صاعدة مبهجة هادئة (C5, E5, G5, C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 0.25, 'sine', 0.10);
        }, idx * 70);
      });
    } catch (e) {}
  },
  playIncorrect() {
    if (!profile.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      // نغمة هابطة دافئة ووقورة وغير منفرة
      this.playTone(220, 0.15, 'sine', 0.08);
      setTimeout(() => {
        this.playTone(174.61, 0.32, 'triangle', 0.07);
      }, 90);
    } catch (e) {}
  },
  playCountdownTick() {
    if (!profile.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      // نقرة خشبية رقيقة للثواني الخمس الأخيرة
      this.playTone(950, 0.035, 'sine', 0.035);
    } catch (e) {}
  },
  playVictory() {
    if (!profile.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      // تسلسل احتفالي لطيف بمناسبة إتمام الاختبار
      const fanfare = [
        { f: 523.25, d: 0.16 },
        { f: 659.25, d: 0.16 },
        { f: 783.99, d: 0.20 },
        { f: 880.00, d: 0.20 },
        { f: 1046.50, d: 0.50 }
      ];
      let delay = 0;
      fanfare.forEach(note => {
        setTimeout(() => {
          this.playTone(note.f, note.d, 'sine', 0.12);
        }, delay);
        delay += note.d * 700;
      });
    } catch (e) {}
  },
  toggleSound() {
    profile.soundEnabled = !profile.soundEnabled;
    saveProfile();
    this.updateUI();
  },
  updateUI() {
    const btn = document.getElementById('sound-toggle-btn');
    const icon = document.getElementById('sound-icon-display');
    if (!btn || !icon) return;
    if (profile.soundEnabled) {
      btn.classList.remove('muted');
      btn.title = 'المؤثرات الصوتية: مفعّلة (انقر للكتم)';
      btn.setAttribute('aria-label', 'المؤثرات الصوتية: مفعّلة');
      icon.innerHTML = AppIcons.get('speaker-high', { size: 18, className: 'icon-gold' });
    } else {
      btn.classList.add('muted');
      btn.title = 'المؤثرات الصوتية: متوقفة (انقر للتشغيل)';
      btn.setAttribute('aria-label', 'المؤثرات الصوتية: متوقفة');
      icon.innerHTML = AppIcons.get('speaker-slash', { size: 18, className: 'icon-muted' });
    }
  }
};

// ==========================================================================
// 5. إدارة الملف الشخصي والتخزين المحلي والترقية الشاملة (Multi-Profile Support)
// ==========================================================================
const DEFAULT_PROFILE = {
  version: 3,
  theme: 'dark',
  soundEnabled: true,
  activeProfileId: 'default',
  profiles: [
    { id: 'default', name: 'طالب علم', totalXp: 0, totalQuizzes: 0, bestScorePercent: 0, createdAt: Date.now() }
  ],
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
  lastActiveDate: null,
  localLeaderboard: [],    // قائمة النتائج المسجلة محلياً
  userSubmissions: [],     // مسودات الأسئلة المقترحة
  userReports: []          // سجل الملاحظات والإبلاغات
};

let profile = { ...DEFAULT_PROFILE };

function loadProfile() {
  try {
    const saved = localStorage.getItem('معارف_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      // ترقية آمنة لكافة الإصدارات السابقة (Migration)
      profile = {
        ...DEFAULT_PROFILE,
        ...parsed,
        version: 3,
        soundEnabled: parsed.soundEnabled !== undefined ? parsed.soundEnabled : true,
        activeProfileId: parsed.activeProfileId || 'default',
        profiles: (Array.isArray(parsed.profiles) && parsed.profiles.length > 0)
          ? parsed.profiles
          : [{ id: 'default', name: 'طالب علم', totalXp: parsed.totalXp || 0, totalQuizzes: parsed.totalQuizzes || 0, bestScorePercent: parsed.bestScorePercent || 0, createdAt: Date.now() }],
        favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
        wrongAnswers: Array.isArray(parsed.wrongAnswers) ? parsed.wrongAnswers : [],
        testedCategories: Array.isArray(parsed.testedCategories) ? parsed.testedCategories : [],
        unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : [],
        localLeaderboard: Array.isArray(parsed.localLeaderboard) ? parsed.localLeaderboard : [],
        userSubmissions: Array.isArray(parsed.userSubmissions) ? parsed.userSubmissions : [],
        userReports: Array.isArray(parsed.userReports) ? parsed.userReports : []
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

function getActiveProfile() {
  if (!Array.isArray(profile.profiles) || profile.profiles.length === 0) {
    profile.profiles = [{ id: 'default', name: 'طالب علم', totalXp: profile.totalXp || 0, totalQuizzes: profile.totalQuizzes || 0, bestScorePercent: profile.bestScorePercent || 0, createdAt: Date.now() }];
    profile.activeProfileId = 'default';
  }
  const found = profile.profiles.find(p => p.id === profile.activeProfileId);
  return found || profile.profiles[0];
}

function switchActiveProfile(profileId) {
  const target = profile.profiles.find(p => p.id === profileId);
  if (!target) return;
  profile.activeProfileId = target.id;
  saveProfile();
  updateXpUI();
  renderLeaderboardScreen();
  renderProfilesList();
}

function createNewProfile(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) {
    alert('يرجى كتابة اسم مناسب للملف الشخصي الجديد.');
    return;
  }
  const newId = 'p_' + Date.now();
  profile.profiles.push({
    id: newId,
    name: trimmed,
    totalXp: 0,
    totalQuizzes: 0,
    bestScorePercent: 0,
    createdAt: Date.now()
  });
  profile.activeProfileId = newId;
  saveProfile();
  updateXpUI();
  renderLeaderboardScreen();
  renderProfilesList();
  closeModal('profile-modal');
  alert(\`تم إنشاء الملف الشخصي "\${trimmed}" وتفعيله بنجاح! 🎉\`);
}

function renderProfilesList() {
  const container = document.getElementById('profiles-list-container');
  if (!container) return;
  container.innerHTML = '';

  profile.profiles.forEach(p => {
    const isActive = (p.id === profile.activeProfileId);
    const row = document.createElement('div');
    row.className = 'profile-item-row' + (isActive ? ' active' : '');
    row.innerHTML = \`
      <div class="profile-info-mini">
        <span class="profile-badge-icon">\${isActive ? '⭐' : '👤'}</span>
        <div>
          <strong class="profile-name-txt">\${p.name}</strong>
          <span class="profile-sub-lbl">\${p.totalXp || 0} XP — \${p.totalQuizzes || 0} اختبارات</span>
        </div>
      </div>
      <div>
        \${isActive
          ? ('<span class=\"status-badge ready\">' + AppIcons.get('check-circle', { size: 14, className: 'icon-green' }) + ' النشط حالياً</span>')
          : \`<button type="button" class="btn btn-sm btn-outline" onclick="switchActiveProfile('\${p.id}')">تفعيل</button>\`
        }
      </div>
    \`;
    container.appendChild(row);
  });
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

  if (badgeEl) badgeEl.innerHTML = currentLvl.icon;
  if (nameEl) nameEl.innerText = currentLvl.name;
  if (fillEl) fillEl.style.width = percent + '%';
  if (currentValEl) currentValEl.innerText = xp;
  if (nextValEl) nextValEl.innerText = (currentLvl === nextLvl ? 'الحد الأقصى' : nextLvl.minXp);

  // تحديث اسم الملف الشخصي في لوحة المتصدرين إن وجد
  const activeProfile = getActiveProfile();
  const lbName = document.getElementById('lb-profile-name');
  const lbIcon = document.getElementById('lb-profile-icon');
  if (lbName) lbName.innerText = activeProfile.name;
  if (lbIcon) lbIcon.innerHTML = currentLvl.icon;
}

// ==========================================================================
// 6. حالة التطبيق والمحرك (State Machine)
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

  // إدارة وضع الجلسة في الهواتف لإخفاء القائمة السفلية وضبط الشاشة
  if (document.body) {
    if (screenId === 'screen-quiz') {
      document.body.classList.add('in-quiz-session');
    } else {
      document.body.classList.remove('in-quiz-session');
    }
  }

  // تحديث شريط التنقل السفلي في الهواتف
  updateBottomNavActive(screenId);
  window.scrollTo(0, 0);

  if (screenId === 'screen-landing') {
    renderLandingStats();
  } else if (screenId === 'screen-leaderboard') {
    renderLeaderboardScreen();
  }
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
// 7. تهيئة المظهر (Dark / Light Theme)
// ==========================================================================
function initThemeEngine() {
  const savedTheme = profile.theme || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    const updateTitle = (theme) => {
      toggleBtn.title = (theme === 'dark') 
        ? 'المظهر الحالي: داكن (انقر للتحويل للمظهر الفاتح)' 
        : 'المظهر الحالي: فاتح (انقر للتحويل للمظهر الداكن)';
      toggleBtn.setAttribute('aria-label', (theme === 'dark') ? 'تفعيل المظهر الفاتح' : 'تفعيل المظهر الداكن');
    };
    updateTitle(savedTheme);

    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = (current === 'light') ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      profile.theme = next;
      saveProfile();
      updateTitle(next);
    });
  }
}

// ==========================================================================
// 8. تحضير وبدء جلسة الاختبار (Quiz Preparation & Engine)
// ==========================================================================
function prepareQuizSession() {
  clearInterval(state.runTimerInterval);
  clearInterval(state.questionTimerInterval);

  let pool = [];

  if (state.selectedMode === 'difficulty') {
    pool = QUESTIONS.filter(q => q.difficulty === state.selectedVal);
  } else if (state.selectedMode === 'category') {
    pool = QUESTIONS.filter(q => q.category === state.selectedVal);
  } else if (state.selectedMode === 'favorites') {
    pool = QUESTIONS.filter(q => profile.favorites.includes(q.id));
  } else if (state.selectedMode === 'wrong') {
    const wrongIds = profile.wrongAnswers.map(w => w.questionId);
    pool = QUESTIONS.filter(q => wrongIds.includes(q.id));
  } else if (state.selectedMode === 'daily') {
    const todayStr = getTodayDateKey();
    pool = getDailyChallengeQuestions(todayStr);
  }

  // في حال عدم وجود أسئلة كافية
  if (pool.length === 0) {
    alert('عذراً، لم يتم العثور على أسئلة متاحة في هذا القسم حالياً.');
    return;
  }

  // خلط الأسئلة واختيار العدد المحدد
  const shuffled = shuffleArray([...pool]);
  const count = (state.selectedMode === 'daily') ? 10 : Math.min(state.selectedQuestionCount, shuffled.length);
  state.quizQuestions = shuffled.slice(0, count);

  state.currentQuestionIdx = 0;
  state.score = 0;
  state.correctAnswers = 0;
  state.wrongAnswers = 0;
  state.timedOutAnswers = 0;
  state.timeSpent = 0;
  state.answersLog = [];

  // ضبط أوقات المؤقت حسب الصعوبة
  if (state.selectedMode === 'difficulty') {
    if (state.selectedVal === 'easy') state.totalQuestionTime = 20;
    else if (state.selectedVal === 'medium') state.totalQuestionTime = 20;
    else if (state.selectedVal === 'hard') state.totalQuestionTime = 15;
    else if (state.selectedVal === 'expert') state.totalQuestionTime = 12;
  } else {
    state.totalQuestionTime = 20;
  }

  // مؤقت الجلسة الإجمالية
  state.runTimerInterval = setInterval(() => {
    state.timeSpent++;
  }, 1000);

  navigateTo('screen-quiz');
  displayQuestion();
}

function displayQuestion() {
  clearInterval(state.questionTimerInterval);
  state.hasAnswered = false;
  state.questionTimeLeft = state.totalQuestionTime;

  const currentQ = state.quizQuestions[state.currentQuestionIdx];
  if (!currentQ) return;

  // فحص هل هذا السؤال قد تم حله مسبقاً (في حال العودة من المراجعة)
  const existingLog = state.answersLog.find(l => l.questionId === currentQ.id);

  // تحديث واجهة السؤال
  const idxEl = document.getElementById('quiz-question-index');
  const totalEl = document.getElementById('quiz-total-questions');
  const progressFill = document.getElementById('quiz-progress-bar-fill');
  const categoryEl = document.getElementById('quiz-current-category');
  const scoreEl = document.getElementById('quiz-current-score');
  const diffBadgeEl = document.getElementById('question-difficulty-badge');

  if (idxEl) idxEl.innerText = state.currentQuestionIdx + 1;
  if (totalEl) totalEl.innerText = state.quizQuestions.length;

  if (progressFill) {
    const pct = ((state.currentQuestionIdx + 1) / state.quizQuestions.length) * 100;
    progressFill.style.width = pct + '%';
  }

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
    const correctIdx = (currentQ.correctAnswerIndex !== undefined ? currentQ.correctAnswerIndex : currentQ.correct);

    choices.forEach((choice, idx) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'option-card';
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', 'false');

      // إذا كان السؤال قد أُجيب عليه سابقاً (من المراجعة)
      if (existingLog) {
        card.classList.add('disabled');
        card.setAttribute('aria-disabled', 'true');
        if (idx === correctIdx) card.classList.add('correct');
        if (idx === existingLog.selected && !existingLog.isCorrect) card.classList.add('incorrect');
      }

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

  // إخفاء أو إظهار لوحة التغذية الراجعة
  const feedbackPanel = document.getElementById('feedback-panel');
  if (existingLog) {
    showFeedbackPanel(existingLog.isCorrect, currentQ);
    enableNextButton();
    state.hasAnswered = true;
  } else {
    if (feedbackPanel) feedbackPanel.classList.add('hidden');
    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
      nextBtn.classList.add('disabled');
      nextBtn.disabled = true;
      const isLast = (state.currentQuestionIdx === state.quizQuestions.length - 1);
      const span = nextBtn.querySelector('span');
      if (span) span.innerText = isLast ? 'عرض النتيجة الإجمالية' : 'السؤال التالي';
    }
  }

  // إدارة المؤقت حسب النمط (تحدي أم تعلم)
  const timerContainer = document.querySelector('.smart-timer-container');
  if (state.quizMode === 'learning') {
    if (timerContainer) {
      timerContainer.classList.add('learning-mode-active');
      timerContainer.setAttribute('title', 'وضع التعلّم: بدون مؤقت زمني');
      const timerDigits = document.getElementById('timer-digits');
      if (timerDigits) timerDigits.innerHTML = AppIcons.get('book-open-text', { size: 22, className: 'icon-gold' });
      const timerLbl = timerContainer.querySelector('.timer-lbl');
      if (timerLbl) timerLbl.innerText = 'تعلّم';
    }
  } else {
    if (timerContainer) {
      timerContainer.classList.remove('learning-mode-active');
      const timerLbl = timerContainer.querySelector('.timer-lbl');
      if (timerLbl) timerLbl.innerText = 'ثانية';
    }
    if (!existingLog) {
      startQuestionCountdown();
    }
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

    if (state.questionTimeLeft <= 5 && state.questionTimeLeft > 0) {
      if (timerContainer) timerContainer.classList.add('timer-warning');
      SoundEngine.playCountdownTick();
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

  // تسجيل النتيجة في السجل
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
    SoundEngine.playCorrect();

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
    SoundEngine.playIncorrect();

    // إظهار الإجابة الصحيحة
    if (allCards[correctIdx]) {
      allCards[correctIdx].classList.add('correct');
    }

    // إضافة السؤال إلى سجل الأخطاء
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
  SoundEngine.playIncorrect();

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
  showFeedbackPanel(false, currentQ, 'انتهى الوقت المحدد للسؤال! الصواب:');
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
    if (iconEl) iconEl.innerHTML = AppIcons.get('check-circle', { size: 28, className: 'icon-green' });
    if (titleEl) titleEl.innerText = customTitle || 'إجابة صحيحة! أحسنت';
  } else {
    panel.classList.add('incorrect-feedback');
    if (iconEl) iconEl.innerHTML = AppIcons.get('x-circle', { size: 28, className: 'icon-red' });
    if (titleEl) titleEl.innerText = customTitle || 'إجابة خاطئة! الصواب:';
  }

  let text = questionObj.explanation || '';
  if (questionObj.source && questionObj.source.reference) {
    text += \`\\n\\n📖 المرجع: \${questionObj.source.reference}\`;
  }

  if (descEl) descEl.innerText = text;
  panel.classList.remove('hidden');

  // ربط أزرار لوحة التغذية الراجعة
  const sourceBtn = document.getElementById('open-source-modal-btn');
  if (sourceBtn) {
    sourceBtn.onclick = () => openSourceDetailsModal(questionObj);
  }

  const reportBtn = document.getElementById('report-question-btn');
  if (reportBtn) {
    reportBtn.onclick = () => {
      openFeedbackModal('report', questionObj);
    };
  }
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
// 9. إكمال الاختبار وحساب النتائج والأوسمة ولوحة المتصدرين
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

  // تحديث إحصائيات الملف الشخصي النشط
  const activeProfile = getActiveProfile();
  activeProfile.totalQuizzes = (activeProfile.totalQuizzes || 0) + 1;
  activeProfile.totalXp = (activeProfile.totalXp || 0) + xpEarned;
  if (percent > (activeProfile.bestScorePercent || 0)) {
    activeProfile.bestScorePercent = percent;
  }

  // تسجيل نتيجة الاختبار في لوحة المتصدرين المحلية
  const currentCategory = state.quizQuestions[0] ? state.quizQuestions[0].category : 'منوع';
  const entry = {
    id: 'lb_' + Date.now(),
    profileName: activeProfile.name || 'طالب علم',
    profileId: activeProfile.id || 'default',
    score: state.score,
    percent: percent,
    xpEarned: xpEarned,
    correctCount: state.correctAnswers,
    totalCount: totalQuestions,
    category: currentCategory,
    difficulty: state.selectedVal || 'easy',
    date: new Date().toLocaleDateString('ar-EG'),
    timestamp: Date.now()
  };
  profile.localLeaderboard.unshift(entry);
  if (profile.localLeaderboard.length > 50) {
    profile.localLeaderboard.pop();
  }

  // تسجيل التصنيف في قائمة التصنيفات المختبرة
  if (currentCategory && !profile.testedCategories.includes(currentCategory)) {
    profile.testedCategories.push(currentCategory);
  }

  // فحص استحقاق الأوسمة الجديدة
  const newlyUnlocked = checkAndUnlockBadges(percent);

  saveProfile();
  updateXpUI();

  // تشغيل نغمة النصر إن كانت النتيجة ممتازة
  if (percent >= 70) {
    SoundEngine.playVictory();
  }

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
    if (titleEl) titleEl.innerHTML = 'ما شاء الله! إتقان تام ونتيجة كاملة ' + AppIcons.get('sparkle', { size: 22, className: 'icon-gold' });
    if (descEl) descEl.innerText = 'أحسنت القول والعمل، لقد أجبت على كافة الأسئلة بدقة بالغة. بارك الله في علمك ونفع بك.';
    triggerConfettiEffect();
  } else if (percent >= 80) {
    if (titleEl) titleEl.innerHTML = 'أحسنت! أداء متميز ورفيع ' + AppIcons.get('medal', { size: 22, className: 'icon-gold' });
    if (descEl) descEl.innerText = 'أظهرت إلماماً واسعاً بمسائل العلوم الشرعية والتاريخ الإسلامي، استمر في ترقية معارفك.';
    triggerConfettiEffect();
  } else if (percent >= 50) {
    if (titleEl) titleEl.innerHTML = 'أداء حسن وبداية طيبة ' + AppIcons.get('thumbs-up', { size: 22, className: 'icon-gold' });
    if (descEl) descEl.innerText = 'لديك أساس معرفي طيب، راجع الأسئلة التي تعثرت فيها لتثبيت المعلومات الشرعية النافعة.';
  } else {
    if (titleEl) titleEl.innerHTML = 'طلب العلم عبادة وتدرج ' + AppIcons.get('books', { size: 22, className: 'icon-gold' });
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
    }, 100);
  }

  // التفاصيل الرقمية
  const xpEl = document.getElementById('results-xp-earned');
  const correctEl = document.getElementById('results-correct-count');
  const wrongEl = document.getElementById('results-wrong-count');
  const timeoutEl = document.getElementById('results-timeout-count');
  const accuracyEl = document.getElementById('results-accuracy');
  const timeEl = document.getElementById('results-time-taken');
  const lvlEl = document.getElementById('results-performance-level');

  if (xpEl) xpEl.innerText = '+' + xpEarned + ' XP';
  if (correctEl) correctEl.innerText = state.correctAnswers;
  if (wrongEl) wrongEl.innerText = state.wrongAnswers;
  if (timeoutEl) timeoutEl.innerText = state.timedOutAnswers;
  if (accuracyEl) accuracyEl.innerText = percent + '%';
  if (timeEl) timeEl.innerText = state.timeSpent + ' ثانية';

  if (lvlEl) {
    if (percent === 100) lvlEl.innerHTML = 'الحافظ المتقن ' + AppIcons.get('crown', { size: 18, className: 'icon-gold' });
    else if (percent >= 80) lvlEl.innerHTML = 'العالم المتبحر ' + AppIcons.get('bank', { size: 18, className: 'icon-gold' });
    else if (percent >= 50) lvlEl.innerHTML = 'المبادر المجتهد ' + AppIcons.get('sword', { size: 18, className: 'icon-gold' });
    else lvlEl.innerHTML = 'طالب العلم التأسيسي ' + AppIcons.get('plant', { size: 18, className: 'icon-green' });
  }

  // زر مراجعة الأخطاء
  const retryWrongBtn = document.getElementById('results-retry-wrong-btn');
  if (retryWrongBtn) {
    if (state.wrongAnswers > 0) {
      retryWrongBtn.classList.remove('hidden');
    } else {
      retryWrongBtn.classList.add('hidden');
    }
  }

  // قائمة الأسئلة والأجوبة التفصيلية مع المصادر
  renderReviewAnswersList();

  // ربط زر المشاركة وتحدي صديق
  const shareBtn = document.getElementById('results-share-btn');
  if (shareBtn) {
    shareBtn.onclick = () => openShareModal(percent, xpEarned);
  }

  // ربط زر لوحة المتصدرين
  const lbBtn = document.getElementById('results-leaderboard-btn');
  if (lbBtn) {
    lbBtn.onclick = () => navigateTo('screen-leaderboard');
  }

  navigateTo('screen-results');
}

function renderReviewAnswersList() {
  const container = document.getElementById('review-answers-list');
  if (!container) return;
  container.innerHTML = '';

  state.answersLog.forEach((log, idx) => {
    const item = document.createElement('div');
    item.className = 'review-item';

    const statusIcon = log.isCorrect ? AppIcons.get('check-circle', { size: 16, className: 'icon-green' }) : AppIcons.get('x-circle', { size: 16, className: 'icon-red' });
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
        <div style="margin-top: 8px;">
          <button type="button" class="btn btn-sm btn-outline" style="font-size:12px; padding:4px 10px;" onclick="openSourceDetailsModal(QUESTIONS.find(q => q.id === '\${log.questionId}'))">
            📖 فحص التوثيق الشرعي
          </button>
        </div>
      </div>
    \`;
    container.appendChild(item);
  });
}

// ==========================================================================
// 10. المراجعة الشاملة قبل التسليم (In-Quiz Comprehensive Review)
// ==========================================================================
function openQuizReviewModal() {
  const modal = document.getElementById('quiz-review-modal');
  if (!modal) return;

  const total = state.quizQuestions.length;
  const answeredCount = state.quizQuestions.filter(q => state.answersLog.some(l => l.questionId === q.id)).length;
  const unansweredCount = total - answeredCount;

  const ansEl = document.getElementById('review-answered-count');
  const unansEl = document.getElementById('review-unanswered-count');
  const totalEl = document.getElementById('review-total-count');

  if (ansEl) ansEl.innerText = answeredCount;
  if (unansEl) unansEl.innerText = unansweredCount;
  if (totalEl) totalEl.innerText = total;

  const container = document.getElementById('quiz-review-items-container');
  if (container) {
    container.innerHTML = '';

    state.quizQuestions.forEach((q, idx) => {
      const log = state.answersLog.find(l => l.questionId === q.id);
      const isAnswered = !!log;
      const card = document.createElement('div');
      card.className = 'quiz-review-item ' + (isAnswered ? 'answered' : 'unanswered');

      let choiceLabel = 'لم يُجب عليه بعد';
      if (isAnswered) {
        if (log.selected === -1) choiceLabel = 'منتهي بالوقت';
        else choiceLabel = 'الإجابة: ' + (log.choices[log.selected] || '');
      }

      card.innerHTML = \`
        <div class="review-item-q">
          <span class="review-item-q-num">#\${idx + 1}</span>
          <span class="review-item-q-title">\${q.question}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="review-status-pill \${isAnswered ? 'answered' : 'unanswered'}">\${choiceLabel}</span>
          <button type="button" class="btn btn-sm btn-outline" onclick="jumpToQuestionFromReview(\${idx})">انتقال</button>
        </div>
      \`;
      container.appendChild(card);
    });
  }

  modal.classList.remove('hidden');
}

function jumpToQuestionFromReview(targetIdx) {
  closeModal('quiz-review-modal');
  if (targetIdx >= 0 && targetIdx < state.quizQuestions.length) {
    state.currentQuestionIdx = targetIdx;
    displayQuestion();
  }
}

function finalizeQuizFromReview() {
  const total = state.quizQuestions.length;
  const answeredCount = state.quizQuestions.filter(q => state.answersLog.some(l => l.questionId === q.id)).length;
  const unansweredCount = total - answeredCount;

  if (unansweredCount > 0) {
    if (!confirm(\`لديك \${unansweredCount} أسئلة لم تجب عليها بعد. هل ترغب في تسليم الاختبار الآن واحتساب الأسئلة المتبقية كإجابات خاطئة؟\`)) {
      return;
    }
    // تسجيل الأسئلة المتروكة كإجابات منتهية بالوقت
    state.quizQuestions.forEach((q) => {
      if (!state.answersLog.some(l => l.questionId === q.id)) {
        const correctIdx = (q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correct);
        state.wrongAnswers++;
        state.timedOutAnswers++;
        state.answersLog.push({
          questionId: q.id,
          question: q.question,
          category: q.category,
          choices: q.options || q.choices,
          selected: -1,
          correct: correctIdx,
          isCorrect: false,
          timedOut: true,
          explanation: q.explanation,
          source: q.source
        });
        recordWrongAnswer(q.id);
      }
    });
  }

  closeModal('quiz-review-modal');
  finishQuizSession();
}

// ==========================================================================
// 11. مشاركة النتائج وبطاقة التحدي بالكانفاس (Friend Challenge & Canvas Share)
// ==========================================================================
function getChallengeUrl() {
  const activeProfile = getActiveProfile();
  const base = window.location.origin + window.location.pathname;
  const params = new URLSearchParams({
    challenge: '1',
    mode: state.selectedMode || 'difficulty',
    val: state.selectedVal || 'easy',
    count: (state.selectedQuestionCount || 10).toString(),
    qmode: state.quizMode || 'challenge',
    challenger: activeProfile.name || 'صديق'
  });
  return base + '?' + params.toString();
}

function openShareModal(percent, xpEarned) {
  const modal = document.getElementById('share-result-modal');
  if (!modal) return;

  const activeProfile = getActiveProfile();
  const challengeUrl = getChallengeUrl();
  const currentCategory = state.quizQuestions[0] ? state.quizQuestions[0].category : 'العلوم الإسلامية';
  const diffLabel = DIFFICULTY_LABELS[state.selectedVal] || state.selectedVal;

  // إعداد نص المشاركة العربي المنسق
  const shareText = \`🕌 تحدي مَعارِف للعلوم الإسلامية 🌟\\n\\nحققت نسبة \${percent}% (\${state.correctAnswers} من \${state.quizQuestions.length} إجابات صحيحة) في اختبار (\${currentCategory} - \${diffLabel})!\\n\\n🏆 نقاط الخبرة المكتسبة: +\${xpEarned} XP\\nالمتسابق: \${activeProfile.name}\\n\\nهل تستطيع التفوق عليّ؟ خض التحدي الآن:\\n\${challengeUrl}\\n\\n(صدقة جارية ومتاح لكل مسلم ومسلمة للنشر والتعلم)\`;

  const textarea = document.getElementById('share-text-preview');
  if (textarea) textarea.value = shareText;

  // رسم بطاقة الكانفاس بدقة عالية
  renderShareCardOnCanvas(percent, xpEarned, activeProfile.name, currentCategory, diffLabel);

  modal.classList.remove('hidden');
}

function renderShareCardOnCanvas(percent, xpEarned, userName, category, difficulty) {
  const canvas = document.getElementById('share-card-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 800;
  const height = 800;
  canvas.width = width;
  canvas.height = height;

  // 1. خلفية متدرجة زمردية فاخرة
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, '#0B1512');
  grad.addColorStop(0.5, '#10211B');
  grad.addColorStop(1, '#172B23');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 2. زخارف إسلامية هندسية رقيقة في المركز
  ctx.save();
  ctx.strokeStyle = 'rgba(215, 181, 109, 0.08)';
  ctx.lineWidth = 1.5;
  for (let r = 80; r <= 320; r += 40) {
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 + 30, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // 3. إطار ذهبي مزدوج مع زوايا أرابيسك
  ctx.save();
  ctx.strokeStyle = '#D7B56D';
  ctx.lineWidth = 3;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  ctx.strokeStyle = 'rgba(215, 181, 109, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  // زوايا الزخرفة
  const drawCorner = (x, y, flipX, flipY) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
    ctx.fillStyle = '#D7B56D';
    ctx.beginPath();
    ctx.arc(10, 10, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(20, 20);
    ctx.lineTo(20, 0);
    ctx.strokeStyle = '#D7B56D';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  };
  drawCorner(45, 45, false, false);
  drawCorner(width - 45, 45, true, false);
  drawCorner(45, height - 45, false, true);
  drawCorner(width - 45, height - 45, true, true);
  ctx.restore();

  // 4. رأس البطاقة: الشعار والعنوان
  ctx.save();
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  ctx.font = 'bold 38px Cairo, sans-serif';
  ctx.fillStyle = '#D7B56D';
  ctx.fillText('🕌 مَعارِف | Ma3arf', width / 2, 95);

  ctx.font = '16px Cairo, sans-serif';
  ctx.fillStyle = '#A0B2C6';
  ctx.fillText('منصة التعليم والمسابقات الإسلامية الموثوقة', width / 2, 130);

  // فاصل زخرفي
  ctx.strokeStyle = 'rgba(215, 181, 109, 0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(250, 150);
  ctx.lineTo(550, 150);
  ctx.stroke();
  ctx.restore();

  // 5. اسم المتسابق وإنجازه
  ctx.save();
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  ctx.font = '22px Cairo, sans-serif';
  ctx.fillStyle = '#F4F1E8';
  ctx.fillText('أكمل المتسابق', width / 2, 195);

  ctx.font = 'bold 32px Cairo, sans-serif';
  ctx.fillStyle = '#D7B56D';
  ctx.fillText(userName, width / 2, 238);

  ctx.font = '18px Cairo, sans-serif';
  ctx.fillStyle = '#A0B2C6';
  ctx.fillText(\`تحدي (\${category} - \${difficulty})\`, width / 2, 275);
  ctx.restore();

  // 6. مربع النتيجة المركزية
  ctx.save();
  ctx.fillStyle = 'rgba(11, 21, 18, 0.85)';
  ctx.strokeStyle = '#D7B56D';
  ctx.lineWidth = 2;
  const boxW = 420;
  const boxH = 200;
  const boxX = (width - boxW) / 2;
  const boxY = 310;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 18);
  ctx.fill();
  ctx.stroke();

  // النسبة المئوية
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';
  ctx.font = 'bold 74px Cairo, sans-serif';
  ctx.fillStyle = (percent >= 80) ? '#2E8B68' : (percent >= 50) ? '#D7B56D' : '#E67E22';
  ctx.fillText(percent + '%', width / 2, boxY + 95);

  // الكسر والنقاط
  ctx.font = 'bold 22px Cairo, sans-serif';
  ctx.fillStyle = '#F4F1E8';
  ctx.fillText(\`\${state.correctAnswers} من \${state.quizQuestions.length} إجابات صحيحة\`, width / 2, boxY + 140);

  ctx.font = 'bold 20px Cairo, sans-serif';
  ctx.fillStyle = '#D7B56D';
  ctx.fillText(\`+\${xpEarned} نقطة خبرة (XP)\`, width / 2, boxY + 175);
  ctx.restore();

  // 7. رسالة التحدي والدعوة للمنافسة
  ctx.save();
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  ctx.font = 'bold 24px Cairo, sans-serif';
  ctx.fillStyle = '#F4F1E8';
  ctx.fillText('🌟 هل تستطيع تحقيق نتيجة أفضل؟ خض التحدي الآن!', width / 2, 570);

  ctx.font = '16px Cairo, sans-serif';
  ctx.fillStyle = '#A0B2C6';
  ctx.fillText('اختبر معلوماتك الشرعية في علوم القرآن والحديث والسيرة النبوية', width / 2, 605);
  ctx.restore();

  // 8. تذييل البطاقة والحقوق
  ctx.save();
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  ctx.font = '14px Cairo, sans-serif';
  ctx.fillStyle = '#D7B56D';
  ctx.fillText('https://mohamed249k.github.io/Ma3arf/', width / 2, 690);

  ctx.font = '13px Cairo, sans-serif';
  ctx.fillStyle = 'rgba(244, 241, 232, 0.7)';
  ctx.fillText('فكرة وإعداد وتطوير: محمد كرم (Mohamed Karam) — صدقة جارية', width / 2, 725);
  ctx.restore();
}

function downloadShareCard() {
  const canvas = document.getElementById('share-card-canvas');
  if (!canvas) return;
  try {
    const link = document.createElement('a');
    link.download = 'ma3arf-challenge.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    alert('تعذر تحميل الصورة تلقائياً، يمكنك النقر بزر الفأرة الأيمن على البطاقة وحفظها كصورة.');
  }
}

function shareViaWhatsApp() {
  const textarea = document.getElementById('share-text-preview');
  const text = textarea ? textarea.value : '';
  const url = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
}

function copyChallengeText() {
  const textarea = document.getElementById('share-text-preview');
  if (!textarea) return;
  navigator.clipboard.writeText(textarea.value).then(() => {
    alert('تم نسخ نص التحدي والرابط إلى الحافظة بنجاح! 📋');
  }).catch(() => {
    textarea.select();
    document.execCommand('copy');
    alert('تم نسخ النص إلى الحافظة.');
  });
}

function shareViaWebShare() {
  const activeProfile = getActiveProfile();
  const challengeUrl = getChallengeUrl();
  const text = \`تحداك \${activeProfile.name} في منصة معارف الإسلامية! هل تستطيع التفوق عليه؟\`;

  if (navigator.share) {
    navigator.share({
      title: 'تحدي منصة مَعارِف الإسلامية',
      text: text,
      url: challengeUrl
    }).catch(() => {});
  } else {
    copyChallengeText();
  }
}

// ==========================================================================
// 12. استقبال تحديات الأصدقاء عند فتح الرابط (Incoming Challenge Handler)
// ==========================================================================
function checkIncomingChallengeUrl() {
  if (typeof window === 'undefined') return;
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('challenge') === '1') {
    const challenger = urlParams.get('challenger') || 'صديق';
    const mode = urlParams.get('mode') || 'difficulty';
    const val = urlParams.get('val') || 'easy';
    const count = parseInt(urlParams.get('count')) || 10;
    const qmode = urlParams.get('qmode') || 'challenge';

    const inviterEl = document.getElementById('challenge-inviter-name');
    const modeEl = document.getElementById('challenge-spec-mode');
    const targetEl = document.getElementById('challenge-spec-target');
    const countEl = document.getElementById('challenge-spec-count');
    const qmodeEl = document.getElementById('challenge-spec-qmode');

    if (inviterEl) inviterEl.innerText = challenger;
    if (modeEl) modeEl.innerText = (mode === 'difficulty' ? 'حسب المستوى' : 'حسب التصنيف');
    if (targetEl) targetEl.innerText = (mode === 'difficulty' ? (DIFFICULTY_LABELS[val] || val) : val);
    if (countEl) countEl.innerText = count + ' أسئلة';
    if (qmodeEl) qmodeEl.innerText = (qmode === 'learning' ? 'وضع التعلم الهادئ' : 'تحدي زمني');

    const modal = document.getElementById('challenge-welcome-modal');
    if (modal) modal.classList.remove('hidden');

    const acceptBtn = document.getElementById('accept-challenge-btn');
    if (acceptBtn) {
      acceptBtn.onclick = () => {
        state.selectedMode = mode;
        state.selectedVal = val;
        state.selectedQuestionCount = count;
        state.quizMode = qmode;
        closeModal('challenge-welcome-modal');
        prepareQuizSession();
      };
    }

    const declineBtn = document.getElementById('decline-challenge-btn');
    if (declineBtn) {
      declineBtn.onclick = () => {
        closeModal('challenge-welcome-modal');
      };
    }
  }
}

// ==========================================================================
// 13. اقتراح سؤال وإبلاغ عن ملاحظة (Feedback & Contributions Engine)
// ==========================================================================
const DEVELOPER_WHATSAPP_PHONE = '201017325592'; // رقم واتساب المطوّر: محمد كرم (01017325592)
function openFeedbackModal(initialTab = 'suggest', questionContext = null) {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;

  switchFeedbackTab(initialTab);

  if (questionContext && initialTab === 'report') {
    const targetInput = document.getElementById('report-question-target');
    if (targetInput) {
      targetInput.value = \`[\${questionContext.id}] \${questionContext.question}\`;
    }
  }

  modal.classList.remove('hidden');
}

function switchFeedbackTab(tabName) {
  const tabSuggestBtn = document.getElementById('tab-suggest-btn');
  const tabReportBtn = document.getElementById('tab-report-btn');
  const paneSuggest = document.getElementById('tab-suggest-pane');
  const paneReport = document.getElementById('tab-report-pane');

  if (tabName === 'suggest') {
    if (tabSuggestBtn) tabSuggestBtn.classList.add('active');
    if (tabReportBtn) tabReportBtn.classList.remove('active');
    if (paneSuggest) paneSuggest.classList.remove('hidden');
    if (paneReport) paneReport.classList.add('hidden');
  } else {
    if (tabReportBtn) tabReportBtn.classList.add('active');
    if (tabSuggestBtn) tabSuggestBtn.classList.remove('active');
    if (paneReport) paneReport.classList.remove('hidden');
    if (paneSuggest) paneSuggest.classList.add('hidden');
  }
}

function submitUserSuggestion(actionType = 'save') {
  const qText = (document.getElementById('suggest-q-text')?.value || '').trim();
  const opt0 = (document.getElementById('suggest-opt-0')?.value || '').trim();
  const opt1 = (document.getElementById('suggest-opt-1')?.value || '').trim();
  const opt2 = (document.getElementById('suggest-opt-2')?.value || '').trim();
  const opt3 = (document.getElementById('suggest-opt-3')?.value || '').trim();
  const rad = document.querySelector('input[name="suggest-correct"]:checked');
  const correctIdx = rad ? parseInt(rad.value) : 0;
  const category = document.getElementById('suggest-category')?.value || 'القرآن الكريم';
  const difficulty = document.getElementById('suggest-difficulty')?.value || 'medium';
  const explanation = (document.getElementById('suggest-explanation')?.value || '').trim();
  const source = (document.getElementById('suggest-source')?.value || '').trim();

  if (!qText) {
    alert('يرجى كتابة نص السؤال المقترح أولاً ليتم إرساله مباشرة إلى واتساب المطوّر (محمد كرم: 01017325592).');
    return;
  }

  if (actionType === 'save' && (!opt0 || !opt1 || !explanation || !source)) {
    alert('لحفظ السؤال في المسودات المحلية، يرجى استكمال الخيارات والشرح وتوثيق المصدر الشرعي لضمان الجودة.');
    return;
  }

  const suggestion = {
    id: 'sub_' + Date.now(),
    question: qText,
    options: [opt0, opt1, opt2, opt3],
    correctAnswerIndex: correctIdx,
    category: category,
    difficulty: difficulty,
    explanation: explanation,
    source: { reference: source },
    date: new Date().toLocaleDateString('ar-EG')
  };

  profile.userSubmissions.push(suggestion);
  saveProfile();

  const diffLabels = { 'easy': 'المبتدئ', 'medium': 'المتوسط', 'hard': 'المتقدم', 'expert': 'الخبير' };
  const diffArabic = diffLabels[difficulty] || difficulty;
  const rawOptions = [opt0, opt1, opt2, opt3].filter(o => o.length > 0);
  const correctText = [opt0, opt1, opt2, opt3][correctIdx] || opt0 || 'الخيار الأول';

  let formatted = \`السلام عليكم ورحمة الله وبركاته يا أستاذ محمد كرم،\\n🌱 أود اقتراح سؤال جديد موثق لمنصة «مَعارِف»:\\n\\n📖 *السؤال:*\\n\${qText}\`;

  if (rawOptions.length > 0) {
    formatted += \`\\n\\n🔘 *الخيارات المقترحة:*\\n\` + rawOptions.map((o, i) => \`\${i + 1}️⃣ \${o}\`).join('\\n');
    formatted += \`\\n\\n✅ *الإجابة الصحيحة:*\\n\${correctText}\`;
  }

  formatted += \`\\n\\n🏷️ *التصنيف:* \${category}\\n📊 *المستوى المقترح:* \${diffArabic}\`;

  if (explanation) {
    formatted += \`\\n\\n💡 *الشرح والبيان التوضيحي:*\\n\${explanation}\`;
  }

  if (source) {
    formatted += \`\\n\\n📚 *المصدر والتوثيق الشرعي:*\\n\${source}\`;
  }

  formatted += \`\\n\\n— أُرسل عبر منصة مَعارِف للتعليم الإسلامي (صدقة جارية)\`;

  if (actionType === 'copy') {
    navigator.clipboard.writeText(formatted).then(() => {
      alert('تم حفظ السؤال محلياً ونسخ نصه بنجاح! 📋');
    });
  } else if (actionType === 'whatsapp') {
    const url = 'https://api.whatsapp.com/send?phone=' + DEVELOPER_WHATSAPP_PHONE + '&text=' + encodeURIComponent(formatted);
    window.open(url, '_blank');
  } else {
    alert('تم حفظ السؤال المقترح كمسودة محلية بنجاح على جهازك! جزاك الله خيراً.');
    closeModal('feedback-modal');
  }
}

function submitUserReport(actionType = 'save') {
  const type = document.getElementById('report-issue-type')?.value || 'answer_dispute';
  const target = (document.getElementById('report-question-target')?.value || '').trim();
  const details = (document.getElementById('report-description')?.value || '').trim();

  if (!target && !details) {
    alert('يرجى كتابة نص السؤال أو تفاصيل الملاحظة بوضوح ليتم إرسالها إلى واتساب المطوّر (محمد كرم: 01017325592).');
    return;
  }

  const typeMap = {
    'answer_dispute': 'خطأ في الإجابة الصحيحة المحددة',
    'question_text': 'خطأ أو لبس في صياغة السؤال',
    'typo': 'خطأ لغوي أو نحوي أو إملائي',
    'source_error': 'خطأ أو نقص في توثيق المصدر الشرعي',
    'enhancement': 'اقتراح تحسين أو فائدة إضافية'
  };
  const typeArabic = typeMap[type] || type;

  const report = {
    id: 'rep_' + Date.now(),
    type: type,
    target: target || 'غير محدد',
    details: details || '',
    date: new Date().toLocaleDateString('ar-EG')
  };

  profile.userReports.push(report);
  saveProfile();

  const formatted = \`السلام عليكم ورحمة الله وبركاته يا أستاذ محمد كرم،\\n⚠️ لدي ملاحظة علمية / بلاغ حول محتوى منصة «مَعارِف»:\\n\\n📌 *نوع الملاحظة:* \${typeArabic}\\n🔍 *السؤال المعني / معرّفه:*\\n\${target || 'غير محدد'}\\n\\n📝 *تفاصيل الملاحظة ومقترح التصحيح:*\\n\${details || 'لا توجد تفاصيل إضافية'}\\n\\n— أُرسل عبر منصة مَعارِف للتعليم الإسلامي (صدقة جارية)\`;

  if (actionType === 'copy') {
    navigator.clipboard.writeText(formatted).then(() => {
      alert('تم حفظ الملاحظة محلياً ونسخ نصها بنجاح! 📋');
    });
  } else if (actionType === 'whatsapp') {
    const url = 'https://api.whatsapp.com/send?phone=' + DEVELOPER_WHATSAPP_PHONE + '&text=' + encodeURIComponent(formatted);
    window.open(url, '_blank');
  } else {
    alert('تم حفظ الملاحظة محلياً بنجاح. بارك الله في حرصك على دقة العلم الشرعي.');
    closeModal('feedback-modal');
  }
}

// ==========================================================================
// 14. فحص التوثيق والمصدر الشرعي (Source Details Inspector Modal)
// ==========================================================================
function openSourceDetailsModal(questionObj) {
  if (!questionObj) return;
  const modal = document.getElementById('source-details-modal');
  if (!modal) return;

  const qTextEl = document.getElementById('source-details-q-text');
  const ansEl = document.getElementById('source-details-correct-ans');
  const catEl = document.getElementById('source-details-category');
  const diffEl = document.getElementById('source-details-difficulty');
  const typeEl = document.getElementById('source-details-type');
  const refEl = document.getElementById('source-details-reference');
  const expEl = document.getElementById('source-details-explanation');

  const choices = questionObj.options || questionObj.choices || [];
  const correctIdx = (questionObj.correctAnswerIndex !== undefined ? questionObj.correctAnswerIndex : questionObj.correct);
  const correctAnsText = choices[correctIdx] || 'الإجابة الصحيحة المعتمدة';

  if (qTextEl) qTextEl.innerText = questionObj.question;
  if (ansEl) ansEl.innerText = correctAnsText;
  if (catEl) catEl.innerText = questionObj.category;
  if (diffEl) diffEl.innerText = DIFFICULTY_LABELS[questionObj.difficulty] || questionObj.difficulty;
  if (typeEl) typeEl.innerText = questionObj.source?.type || 'المصدر الشرعي';
  if (refEl) refEl.innerText = questionObj.source?.reference || 'موثق وفق الأصول العلمية المعتمدة';
  if (expEl) expEl.innerText = questionObj.explanation || 'تم التحقق من صحة الإجابة وفق القرآن والسنة.';

  const copyBtn = document.getElementById('copy-source-details-btn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      const text = \`📖 التوثيق الشرعي من منصة مَعارِف:\\nالسؤال: \${questionObj.question}\\nالصواب: \${correctAnsText}\\nالمرجع: \${questionObj.source?.reference || ''}\\nالشرح: \${questionObj.explanation || ''}\`;
      navigator.clipboard.writeText(text).then(() => {
        alert('تم نسخ التوثيق الشرعي الكامل إلى الحافظة! 📋');
      });
    };
  }

  modal.classList.remove('hidden');
}

// ==========================================================================
// 15. لوحة المتصدرين المحلية (Local Leaderboard Engine)
// ==========================================================================
function renderLeaderboardScreen() {
  const catFilter = document.getElementById('leaderboard-cat-filter')?.value || 'all';
  const diffFilter = document.getElementById('leaderboard-diff-filter')?.value || 'all';

  let list = [...(profile.localLeaderboard || [])];

  if (catFilter !== 'all') {
    list = list.filter(item => item.category === catFilter);
  }
  if (diffFilter !== 'all') {
    list = list.filter(item => item.difficulty === diffFilter);
  }

  // ترتيب حسب النسبة المئوية أولاً ثم النقاط ثم التاريخ
  list.sort((a, b) => {
    if (b.percent !== a.percent) return b.percent - a.percent;
    if (b.xpEarned !== a.xpEarned) return b.xpEarned - a.xpEarned;
    return (b.timestamp || 0) - (a.timestamp || 0);
  });

  const emptyState = document.getElementById('leaderboard-empty-state');
  const tableCard = document.getElementById('leaderboard-table-card');
  const podiumContainer = document.getElementById('leaderboard-podium-container');
  const rowsContainer = document.getElementById('leaderboard-rows-container');

  if (list.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (tableCard) tableCard.classList.add('hidden');
    if (podiumContainer) podiumContainer.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (tableCard) tableCard.classList.remove('hidden');
  if (podiumContainer) podiumContainer.classList.remove('hidden');

  // منصة التتويج (Top 3)
  if (podiumContainer) {
    podiumContainer.innerHTML = '';
    const top3 = list.slice(0, 3);
    const ranks = ['rank-1', 'rank-2', 'rank-3'];
    const medals = ['🥇', '🥈', '🥉'];
    const crowns = ['👑', '⭐', '✨'];

    top3.forEach((item, idx) => {
      const slot = document.createElement('div');
      slot.className = 'podium-slot ' + ranks[idx];
      slot.innerHTML = \`
        <span class="podium-crown">\${crowns[idx]}</span>
        <div class="podium-rank-badge">\${medals[idx]}</div>
        <div class="podium-name">\${item.profileName}</div>
        <div class="podium-score">\${item.percent}%</div>
        <div class="podium-xp">+\${item.xpEarned} XP</div>
        <div class="podium-meta">\${item.category}</div>
      \`;
      podiumContainer.appendChild(slot);
    });
  }

  // جدول المتصدرين الكامل
  if (rowsContainer) {
    rowsContainer.innerHTML = '';
    const activeProfile = getActiveProfile();

    list.forEach((item, idx) => {
      const isCur = (item.profileName === activeProfile.name);
      const row = document.createElement('div');
      row.className = 'leaderboard-row' + (isCur ? ' current-user-row' : '');

      let rankDisplay = (idx + 1).toString();
      if (idx === 0) rankDisplay = AppIcons.get('crown', { size: 16, className: 'icon-gold' }) + ' 1';
      else if (idx === 1) rankDisplay = AppIcons.get('medal', { size: 16, className: 'icon-silver' }) + ' 2';
      else if (idx === 2) rankDisplay = AppIcons.get('medal', { size: 16, className: 'icon-bronze' }) + ' 3';

      row.innerHTML = \`
        <span class="col-rank"><strong>\${rankDisplay}</strong></span>
        <span class="col-user">\${item.profileName} \${isCur ? '(أنت)' : ''}</span>
        <span class="col-score text-green" style="font-weight:700;">\${item.percent}%</span>
        <span class="col-xp text-gold">+\${item.xpEarned} XP</span>
        <span class="col-category">\${item.category} (\${DIFFICULTY_LABELS[item.difficulty] || item.difficulty})</span>
        <span class="col-date">\${item.date || 'اليوم'}</span>
      \`;
      rowsContainer.appendChild(row);
    });
  }
}

// ==========================================================================
// 16. المفضلة والبحث ومراجعة الأخطاء
// ==========================================================================
function toggleFavorite(questionId) {
  const idx = profile.favorites.indexOf(questionId);
  const favBtn = document.getElementById('favorite-btn');
  if (idx === -1) {
    profile.favorites.push(questionId);
    if (favBtn) favBtn.classList.add('active');
  } else {
    profile.favorites.splice(idx, 1);
    if (favBtn) favBtn.classList.remove('active');
  }
  saveProfile();
}

function updateFavoriteButtonState(questionId) {
  const favBtn = document.getElementById('favorite-btn');
  if (!favBtn) return;
  if (profile.favorites.includes(questionId)) {
    favBtn.classList.add('active');
    favBtn.title = 'السؤال محفوظ في المفضلة (انقر للإزالة)';
  } else {
    favBtn.classList.remove('active');
    favBtn.title = 'حفظ السؤال في المفضلة';
  }
}

function renderFavoritesScreen() {
  const container = document.getElementById('favorites-list-container');
  const emptyState = document.getElementById('favorites-empty-state');
  if (!container) return;

  const favQuestions = QUESTIONS.filter(q => profile.favorites.includes(q.id));
  if (favQuestions.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    container.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  container.innerHTML = '';

  favQuestions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="q-difficulty-badge \${q.difficulty}">\${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <span class="fav-card-cat">\${q.category}</span>
        <button type="button" class="btn-remove-fav" title="إزالة من المفضلة">${AppIcons.get('trash', { size: 16, className: 'icon-muted' })}</button>
      </div>
      <h4 class="fav-card-q">\${q.question}</h4>
      <p class="fav-card-exp">\${q.explanation || ''}</p>
      \${q.source?.reference ? \`<div class="fav-card-src">📖 \${q.source.reference}</div>\` : ''}
    \`;

    const removeBtn = card.querySelector('.btn-remove-fav');
    if (removeBtn) {
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(q.id);
        renderFavoritesScreen();
      });
    }

    container.appendChild(card);
  });
}

function renderWrongReviewScreen() {
  const container = document.getElementById('wrong-answers-list-container');
  const emptyState = document.getElementById('wrong-empty-state');
  if (!container) return;

  const wrongIds = profile.wrongAnswers.map(w => w.questionId);
  const wrongQuestions = QUESTIONS.filter(q => wrongIds.includes(q.id));

  if (wrongQuestions.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    container.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  container.innerHTML = '';

  wrongQuestions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'favorite-card wrong-card';
    const choices = q.options || q.choices || [];
    const correctIdx = (q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correct);

    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="q-difficulty-badge \${q.difficulty}">\${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <span class="fav-card-cat">\${q.category}</span>
      </div>
      <h4 class="fav-card-q">\${q.question}</h4>
      <div class="correct-answer-pill">الصواب: \${choices[correctIdx] || ''}</div>
      <p class="fav-card-exp">\${q.explanation || ''}</p>
      \${q.source?.reference ? \`<div class="fav-card-src">📖 \${q.source.reference}</div>\` : ''}
    \`;
    container.appendChild(card);
  });
}

// محرك البحث مع تطبيع الحروف العربية
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

function searchQuestionsBank(query, category = 'all', difficulty = 'all') {
  const normQuery = normalizeArabicText(query);

  return QUESTIONS.filter(q => {
    if (category !== 'all' && q.category !== category) return false;
    if (difficulty !== 'all' && q.difficulty !== difficulty) return false;

    if (!normQuery) return true;

    const normQ = normalizeArabicText(q.question);
    const normExp = normalizeArabicText(q.explanation);
    const normRef = normalizeArabicText(q.source?.reference);
    const normOpts = (q.options || q.choices || []).map(o => normalizeArabicText(o)).join(' ');

    return normQ.includes(normQuery) || normExp.includes(normQuery) || normRef.includes(normQuery) || normOpts.includes(normQuery);
  });
}

function handleSearchExecution() {
  const input = document.getElementById('search-input');
  const catFilter = document.getElementById('search-cat-filter');
  const diffFilter = document.getElementById('search-diff-filter');
  const countBadge = document.getElementById('search-results-count');
  const container = document.getElementById('search-results-container');

  if (!container) return;

  const query = input ? input.value : '';
  const cat = catFilter ? catFilter.value : 'all';
  const diff = diffFilter ? diffFilter.value : 'all';

  const results = searchQuestionsBank(query, cat, diff);
  if (countBadge) countBadge.innerText = results.length + ' سؤالاً';

  container.innerHTML = '';
  if (results.length === 0) {
    container.innerHTML = \`
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <div class="empty-icon">${AppIcons.get('magnifying-glass', { size: 48, className: 'icon-muted' })}</div>
        <h3>لم يتم العثور على نتائج</h3>
        <p>جرب البحث بكلمات أخرى أو تغيير تصنيف ومستوى الصعوبة.</p>
      </div>
    \`;
    return;
  }

  results.slice(0, 60).forEach(q => {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    const choices = q.options || q.choices || [];
    const correctIdx = (q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correct);

    card.innerHTML = \`
      <div class="fav-card-header">
        <span class="q-difficulty-badge \${q.difficulty}">\${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}</span>
        <span class="fav-card-cat">\${q.category}</span>
        <button type="button" class="btn-fav-star" title="حفظ في المفضلة">\${profile.favorites.includes(q.id) ? '❤️' : '🤍'}</button>
      </div>
      <h4 class="fav-card-q">\${q.question}</h4>
      <div class="correct-answer-pill">الإجابة: \${choices[correctIdx] || ''}</div>
      <p class="fav-card-exp">\${q.explanation || ''}</p>
      \${q.source?.reference ? \`<div class="fav-card-src">📖 \${q.source.reference}</div>\` : ''}
    \`;

    const starBtn = card.querySelector('.btn-fav-star');
    if (starBtn) {
      starBtn.addEventListener('click', () => {
        toggleFavorite(q.id);
        starBtn.innerHTML = profile.favorites.includes(q.id) ? AppIcons.get('bookmark-simple', { size: 18, className: 'icon-gold' }) : AppIcons.get('bookmark-simple', { size: 18, className: 'icon-muted' });
      });
    }

    container.appendChild(card);
  });
}

// ==========================================================================
// 17. التحدي اليومي ومعلومة اليوم
// ==========================================================================
function getTodayDateKey() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return \`\${year}-\${month}-\${day}\`;
}

function getDailyChallengeQuestions(dateStr) {
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i)) % 100000;
  }
  const shuffled = [...QUESTIONS];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 10);
}

function getDailyFactForToday() {
  const d = new Date();
  const dayOfMonth = d.getDate();
  const idx = (dayOfMonth - 1) % DAILY_FACTS.length;
  return DAILY_FACTS[idx] || DAILY_FACTS[0];
}

function renderDailyFactPreview() {
  const container = document.getElementById('daily-fact-preview');
  if (!container) return;
  const fact = getDailyFactForToday();
  if (!fact) return;

  container.innerHTML = \`
    <div class="fact-header">
      <span class="fact-badge">${AppIcons.get('sparkle', { size: 14, className: 'icon-gold' })} معلومة اليوم</span>
      <span class="fact-category">\${fact.category}</span>
    </div>
    <h3 class="fact-title">\${fact.title}</h3>
    <p class="fact-text">\${fact.text}</p>
    \${fact.source ? \`<div class="fact-source">📖 المصدر: \${fact.source}</div>\` : ''}
    <div style="margin-top: 12px; display:flex; gap:8px;">
      <button type="button" class="btn btn-sm btn-outline" id="daily-fact-quiz-btn">اختبر نفسك بهذا التصنيف</button>
    </div>
  \`;

  const btn = document.getElementById('daily-fact-quiz-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      selectGameConfig('category', fact.category);
      navigateTo('screen-selection');
    });
  }
}

function renderDailyScreen() {
  const dateEl = document.getElementById('daily-screen-date');
  const factContainer = document.getElementById('daily-screen-fact-container');
  const statusEl = document.getElementById('daily-challenge-status');

  const todayStr = getTodayDateKey();
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = new Date().toLocaleDateString('ar-EG', options);
  }

  // حالة التحدي اليومي
  if (statusEl) {
    if (profile.dailyChallengeDate === todayStr) {
      statusEl.innerHTML = '<span class="status-badge completed">' + AppIcons.get('check-circle', { size: 14, className: 'icon-green' }) + ' تم إكمال التحدي اليومي بنجاح!</span>';
    } else {
      statusEl.innerHTML = '<span class="status-badge ready">' + AppIcons.get('lightning', { size: 14, className: 'icon-gold' }) + ' التحدي اليومي جاهز للانطلاق</span>';
    }
  }

  // البطاقة المعرفية
  if (factContainer) {
    const fact = getDailyFactForToday();
    if (fact) {
      factContainer.innerHTML = \`
        <div class="dk-badge">${AppIcons.get('sparkle', { size: 14, className: 'icon-gold' })} معلومة اليوم الموثقة</div>
        <h3 class="dk-title">\${fact.title}</h3>
        <div class="dk-category">\${fact.category}</div>
        <p class="dk-text">\${fact.text}</p>
        \${fact.source ? \`<div class="dk-source">📖 المرجع والتوثيق: \${fact.source}</div>\` : ''}
      \`;
    }
  }
}

// ==========================================================================
// 18. مركز الإحصائيات والأوسمة المنبثقة
// ==========================================================================
function openStatsModal() {
  const modal = document.getElementById('stats-modal');
  if (!modal) return;

  const totalQuizzesEl = document.getElementById('stats-total-quizzes');
  const totalAnswersEl = document.getElementById('stats-total-answers');
  const successRateEl = document.getElementById('stats-success-rate');
  const totalXpEl = document.getElementById('stats-total-xp');

  const quizzes = profile.totalQuizzes || 0;
  const answered = profile.totalQuestionsAnswered || 0;
  const correct = profile.totalCorrectAnswers || 0;
  const xp = profile.totalXp || 0;
  const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  if (totalQuizzesEl) totalQuizzesEl.innerText = quizzes;
  if (totalAnswersEl) totalAnswersEl.innerText = answered;
  if (successRateEl) successRateEl.innerText = rate + '%';
  if (totalXpEl) totalXpEl.innerText = xp + ' XP';

  // معرض الأوسمة
  const badgesContainer = document.getElementById('modal-badges-grid-container');
  if (badgesContainer) {
    badgesContainer.innerHTML = '';
    BADGES.forEach(badge => {
      const isUnlocked = profile.unlockedBadges.includes(badge.id);
      const card = document.createElement('div');
      card.className = 'badge-card ' + (isUnlocked ? 'unlocked' : 'locked');
      card.innerHTML = \`
        <div class="badge-icon">\${badge.icon}</div>
        <h5 class="badge-name">\${badge.name}</h5>
        <p class="badge-desc">\${badge.desc}</p>
        <span class="badge-status">\${isUnlocked ? 'مكتسب ✓' : 'قيد الإنجاز 🔒'}</span>
      \`;
      badgesContainer.appendChild(card);
    });
  }

  modal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

// ==========================================================================
// 19. تهيئة واجهة الاختيار والصفحة الرئيسية والأحداث
// ==========================================================================
function renderCategoriesInSelection() {
  const container = document.getElementById('categories-list-container');
  if (!container) return;
  container.innerHTML = '';

  const categories = Object.keys(CATEGORY_ICONS);
  categories.forEach(cat => {
    const icon = CATEGORY_ICONS[cat] || '📖';
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-category', cat);

    // حساب عدد الأسئلة في هذا التصنيف
    const count = QUESTIONS.filter(q => q.category === cat).length;

    card.innerHTML = \`
      <div class="cat-icon">\${icon}</div>
      <h4 class="cat-name">\${cat}</h4>
      <span class="cat-count">\${count} سؤالاً موثقاً</span>
    \`;

    card.addEventListener('click', () => {
      selectGameConfig('category', cat, card);
    });

    container.appendChild(card);
  });
}

function selectGameConfig(mode, val, clickedEl = null) {
  state.selectedMode = mode;
  state.selectedVal = val;

  if (mode === 'difficulty') {
    document.querySelectorAll('.diff-card').forEach(c => {
      c.classList.remove('selected');
      const action = c.querySelector('.card-action-btn');
      if (action) action.innerText = 'اختر النمط';
    });
    if (clickedEl) {
      clickedEl.classList.add('selected');
      const action = clickedEl.querySelector('.card-action-btn');
      if (action) action.innerHTML = 'محدد حالياً ' + AppIcons.get('check-circle', { size: 14, className: 'icon-green' });
    }
  } else if (mode === 'category') {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
    if (clickedEl) clickedEl.classList.add('selected');
  }

  updateSetupSummary();
}

function updateSetupSummary() {
  const summaryEl = document.getElementById('selected-setup-name');
  if (!summaryEl) return;
  const countStr = (state.selectedQuestionCount <= 10) ? \`\${state.selectedQuestionCount} أسئلة\` : \`\${state.selectedQuestionCount} سؤالاً\`;
  const lbl = (state.selectedMode === 'difficulty')
    ? (DIFFICULTY_LABELS[state.selectedVal] || state.selectedVal)
    : state.selectedVal;
  summaryEl.innerText = \`\${state.selectedMode === 'difficulty' ? 'نمط الصعوبة' : 'التصنيف'}: \${lbl} (\${countStr})\`;
}

function renderLandingStats() {
  const landingTotal = document.getElementById('landing-total-quizzes');
  const landingBest = document.getElementById('landing-best-score');
  if (landingTotal) landingTotal.innerText = profile.totalQuizzes;
  if (landingBest) landingBest.innerText = (profile.bestScorePercent || 0) + '%';
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function triggerConfettiEffect() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  container.innerHTML = '';

  const colors = ['#D7B56D', '#2E8B68', '#F4F1E8', '#E67E22', '#5dade2'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-20px';
    piece.style.width = (Math.random() * 10 + 6) + 'px';
    piece.style.height = (Math.random() * 10 + 6) + 'px';
    piece.style.opacity = '1';
    piece.style.transition = 'transform 3.5s cubic-bezier(0.1, 1, 0.1, 1), opacity 3.5s ease';

    container.appendChild(piece);

    setTimeout(() => {
      piece.style.transform = \`translateY(\${window.innerHeight + 40}px) rotate(\${Math.random() * 720}deg)\`;
      piece.style.opacity = '0';
    }, 40);
  }
}

// ==========================================================================
// 20. تهيئة كافة الأحداث وربط الأزرار (Event Listeners & Init)
// ==========================================================================
function initEventHandlers() {
  // زر بدء الرحلة من الصفحة الرئيسية
  const startJourneyBtn = document.getElementById('start-journey-btn');
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener('click', () => navigateTo('screen-selection'));
  }

  const selectionBackBtn = document.getElementById('selection-back-btn');
  if (selectionBackBtn) {
    selectionBackBtn.addEventListener('click', () => navigateTo('screen-landing'));
  }

  // كروت الانتقال السريع في الصفحة الرئيسية
  const cardDaily = document.getElementById('landing-card-daily');
  if (cardDaily) {
    cardDaily.addEventListener('click', () => {
      renderDailyScreen();
      navigateTo('screen-daily');
    });
  }

  const cardLearn = document.getElementById('landing-card-learn');
  if (cardLearn) {
    cardLearn.addEventListener('click', () => {
      state.quizMode = 'learning';
      navigateTo('screen-selection');
    });
  }

  const cardWrong = document.getElementById('landing-card-wrong');
  if (cardWrong) {
    cardWrong.addEventListener('click', () => {
      renderWrongReviewScreen();
      navigateTo('screen-wrong-review');
    });
  }

  const cardFavorites = document.getElementById('landing-card-favorites');
  if (cardFavorites) {
    cardFavorites.addEventListener('click', () => {
      renderFavoritesScreen();
      navigateTo('screen-favorites');
    });
  }

  const cardSearch = document.getElementById('landing-card-search');
  if (cardSearch) {
    cardSearch.addEventListener('click', () => {
      handleSearchExecution();
      navigateTo('screen-search');
    });
  }

  const cardLeaderboard = document.getElementById('landing-card-leaderboard');
  if (cardLeaderboard) {
    cardLeaderboard.addEventListener('click', () => {
      navigateTo('screen-leaderboard');
    });
  }

  const cardFeedback = document.getElementById('landing-card-feedback');
  if (cardFeedback) {
    cardFeedback.addEventListener('click', () => {
      openFeedbackModal('suggest');
    });
  }

  // أزرار الرأس (Header Actions)
  const statsBtn = document.getElementById('open-stats-btn');
  if (statsBtn) statsBtn.addEventListener('click', openStatsModal);

  const lbHeaderBtn = document.getElementById('open-leaderboard-header-btn');
  if (lbHeaderBtn) lbHeaderBtn.addEventListener('click', () => navigateTo('screen-leaderboard'));

  const feedbackHeaderBtn = document.getElementById('open-feedback-header-btn');
  if (feedbackHeaderBtn) feedbackHeaderBtn.addEventListener('click', () => openFeedbackModal('suggest'));

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) soundBtn.addEventListener('click', () => SoundEngine.toggleSound());

  // تخصيص نمط التجربة (تحدي زمني / تعلم هادئ)
  const challengePill = document.getElementById('mode-challenge-btn');
  const learnPill = document.getElementById('mode-learning-btn');

  if (challengePill && learnPill) {
    challengePill.addEventListener('click', () => {
      state.quizMode = 'challenge';
      challengePill.classList.add('active');
      learnPill.classList.remove('active');
    });
    learnPill.addEventListener('click', () => {
      state.quizMode = 'learning';
      learnPill.classList.add('active');
      challengePill.classList.remove('active');
    });
  }

  // عدد الأسئلة للجلسة (5, 10, 15, 20, 25, 30)
  const countButtons = document.querySelectorAll('.count-btn, .count-pill');
  countButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      countButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
      const count = parseInt(btn.getAttribute('data-count'), 10) || 10;
      state.selectedQuestionCount = count;

      if (typeof SoundEngine !== 'undefined' && typeof SoundEngine.playCountdownTick === 'function') {
        SoundEngine.playCountdownTick();
      }
      updateSetupSummary();
    });
  });

  // تبويبات الصعوبة والتصنيفات في التخصيص
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

  const reviewQuizBtn = document.getElementById('review-quiz-btn');
  if (reviewQuizBtn) {
    reviewQuizBtn.addEventListener('click', openQuizReviewModal);
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
        .filter(l => !l.isCorrect)
        .map(l => QUESTIONS.find(q => q.id === l.questionId))
        .filter(Boolean);

      if (wrongList.length > 0) {
        state.quizQuestions = shuffleArray(wrongList);
        state.currentQuestionIdx = 0;
        state.score = 0;
        state.correctAnswers = 0;
        state.wrongAnswers = 0;
        state.timedOutAnswers = 0;
        state.timeSpent = 0;
        state.answersLog = [];
        navigateTo('screen-quiz');
        displayQuestion();
      }
    });
  }

  const resultsHomeBtn = document.getElementById('results-home-btn');
  if (resultsHomeBtn) {
    resultsHomeBtn.addEventListener('click', () => navigateTo('screen-landing'));
  }

  const toggleReviewBtn = document.getElementById('toggle-review-btn');
  const reviewList = document.getElementById('review-answers-list');
  if (toggleReviewBtn && reviewList) {
    toggleReviewBtn.addEventListener('click', () => {
      const isHidden = reviewList.classList.contains('hidden');
      if (isHidden) {
        reviewList.classList.remove('hidden');
        toggleReviewBtn.setAttribute('aria-expanded', 'true');
      } else {
        reviewList.classList.add('hidden');
        toggleReviewBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // شاشة المتصدرين وإدارة الملفات
  const lbBackBtn = document.getElementById('leaderboard-back-btn');
  if (lbBackBtn) lbBackBtn.addEventListener('click', () => navigateTo('screen-landing'));

  const lbCatFilter = document.getElementById('leaderboard-cat-filter');
  if (lbCatFilter) lbCatFilter.addEventListener('change', renderLeaderboardScreen);

  const lbDiffFilter = document.getElementById('leaderboard-diff-filter');
  if (lbDiffFilter) lbDiffFilter.addEventListener('change', renderLeaderboardScreen);

  const clearLbBtn = document.getElementById('clear-leaderboard-btn');
  if (clearLbBtn) {
    clearLbBtn.addEventListener('click', () => {
      if (confirm('هل أنت متأكد من رغبتك في مسح سجل المتصدرين المحلي؟')) {
        profile.localLeaderboard = [];
        saveProfile();
        renderLeaderboardScreen();
      }
    });
  }

  const manageProfilesBtn = document.getElementById('manage-profiles-btn');
  if (manageProfilesBtn) {
    manageProfilesBtn.addEventListener('click', () => {
      renderProfilesList();
      const modal = document.getElementById('profile-modal');
      if (modal) modal.classList.remove('hidden');
    });
  }

  const createProfileBtn = document.getElementById('create-profile-btn');
  if (createProfileBtn) {
    createProfileBtn.addEventListener('click', () => {
      const input = document.getElementById('new-profile-name-input');
      if (input) {
        createNewProfile(input.value);
        input.value = '';
      }
    });
  }

  // أحداث نافذة المراجعة الشاملة (Quiz Review Modal)
  const closeRevModalBtn = document.getElementById('close-review-modal-btn');
  if (closeRevModalBtn) closeRevModalBtn.addEventListener('click', () => closeModal('quiz-review-modal'));

  const revBackToQuizBtn = document.getElementById('review-back-to-quiz-btn');
  if (revBackToQuizBtn) revBackToQuizBtn.addEventListener('click', () => closeModal('quiz-review-modal'));

  const revFinalizeBtn = document.getElementById('review-finalize-quiz-btn');
  if (revFinalizeBtn) revFinalizeBtn.addEventListener('click', finalizeQuizFromReview);

  // أحداث نافذة المشاركة (Share Modal)
  const closeShareModalBtn = document.getElementById('close-share-modal-btn');
  if (closeShareModalBtn) closeShareModalBtn.addEventListener('click', () => closeModal('share-result-modal'));

  const dlShareCardBtn = document.getElementById('download-share-card-btn');
  if (dlShareCardBtn) dlShareCardBtn.addEventListener('click', downloadShareCard);

  const shareWhatsappBtn = document.getElementById('share-whatsapp-btn');
  if (shareWhatsappBtn) shareWhatsappBtn.addEventListener('click', shareViaWhatsApp);

  const copyChallengeBtn = document.getElementById('copy-challenge-btn');
  if (copyChallengeBtn) copyChallengeBtn.addEventListener('click', copyChallengeText);

  const webShareBtn = document.getElementById('web-share-btn');
  if (webShareBtn) webShareBtn.addEventListener('click', shareViaWebShare);

  // أحداث نافذة الاقتراحات والملاحظات (Feedback Modal)
  const closeFeedbackModalBtn = document.getElementById('close-feedback-modal-btn');
  if (closeFeedbackModalBtn) closeFeedbackModalBtn.addEventListener('click', () => closeModal('feedback-modal'));

  const tabSuggestBtn = document.getElementById('tab-suggest-btn');
  if (tabSuggestBtn) tabSuggestBtn.addEventListener('click', () => switchFeedbackTab('suggest'));

  const tabReportBtn = document.getElementById('tab-report-btn');
  if (tabReportBtn) tabReportBtn.addEventListener('click', () => switchFeedbackTab('report'));

  const saveSuggestBtn = document.getElementById('save-suggest-btn');
  if (saveSuggestBtn) saveSuggestBtn.addEventListener('click', () => submitUserSuggestion('save'));

  const copySuggestBtn = document.getElementById('copy-suggest-btn');
  if (copySuggestBtn) copySuggestBtn.addEventListener('click', () => submitUserSuggestion('copy'));

  const waSuggestBtn = document.getElementById('whatsapp-suggest-btn');
  if (waSuggestBtn) waSuggestBtn.addEventListener('click', () => submitUserSuggestion('whatsapp'));

  const saveReportBtn = document.getElementById('save-report-btn');
  if (saveReportBtn) saveReportBtn.addEventListener('click', () => submitUserReport('save'));

  const copyReportBtn = document.getElementById('copy-report-btn');
  if (copyReportBtn) copyReportBtn.addEventListener('click', () => submitUserReport('copy'));

  const waReportBtn = document.getElementById('whatsapp-report-btn');
  if (waReportBtn) waReportBtn.addEventListener('click', () => submitUserReport('whatsapp'));

  // أحداث نافذة المصدر والتوثيق (Source Modal)
  const closeSourceModalBtn = document.getElementById('close-source-modal-btn');
  if (closeSourceModalBtn) closeSourceModalBtn.addEventListener('click', () => closeModal('source-details-modal'));

  // أحداث نافذة الملفات الشخصية (Profile Modal)
  const closeProfileModalBtn = document.getElementById('close-profile-modal-btn');
  if (closeProfileModalBtn) closeProfileModalBtn.addEventListener('click', () => closeModal('profile-modal'));

  // أزرار العودة من الشاشات الثانوية
  [
    { btn: 'favorites-back-btn', screen: 'screen-landing' },
    { btn: 'wrong-review-back-btn', screen: 'screen-landing' },
    { btn: 'search-back-btn', screen: 'screen-landing' },
    { btn: 'daily-back-btn', screen: 'screen-landing' }
  ].forEach(map => {
    const el = document.getElementById(map.btn);
    if (el) el.addEventListener('click', () => navigateTo(map.screen));
  });

  // أزرار بدء الاختبارات الخاصة
  const startFavQuizBtn = document.getElementById('start-favorites-quiz-btn');
  if (startFavQuizBtn) {
    startFavQuizBtn.addEventListener('click', () => {
      if (profile.favorites.length === 0) {
        alert('لا توجد أسئلة محفوظة في المفضلة بعد.');
        return;
      }
      state.selectedMode = 'favorites';
      prepareQuizSession();
    });
  }

  const startWrongQuizBtn = document.getElementById('start-wrong-quiz-btn');
  if (startWrongQuizBtn) {
    startWrongQuizBtn.addEventListener('click', () => {
      if (profile.wrongAnswers.length === 0) {
        alert('سجلك خالٍ من الأخطاء حالياً!');
        return;
      }
      state.selectedMode = 'wrong';
      prepareQuizSession();
    });
  }

  const startDailyBtn = document.getElementById('start-daily-challenge-btn');
  if (startDailyBtn) {
    startDailyBtn.addEventListener('click', () => {
      state.selectedMode = 'daily';
      state.quizMode = 'challenge';
      prepareQuizSession();
    });
  }

  // أحداث البحث
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchExecution);
  }

  const searchCat = document.getElementById('search-cat-filter');
  if (searchCat) {
    searchCat.addEventListener('change', handleSearchExecution);
  }

  const searchDiff = document.getElementById('search-diff-filter');
  if (searchDiff) {
    searchDiff.addEventListener('change', handleSearchExecution);
  }

  // أحداث إغلاق النوافذ المنبثقة
  const closeStatsBtn = document.getElementById('close-stats-btn-x');
  if (closeStatsBtn) closeStatsBtn.addEventListener('click', () => closeModal('stats-modal'));

  // إعادة تهيئة البيانات
  const resetBtn = document.getElementById('reset-data-btn');
  const resetModal = document.getElementById('reset-confirm-modal');
  const resetCancelBtn = document.getElementById('reset-cancel-btn');
  const resetConfirmBtn = document.getElementById('reset-confirm-btn');

  if (resetBtn && resetModal) {
    resetBtn.addEventListener('click', () => resetModal.classList.remove('hidden'));
  }
  if (resetCancelBtn && resetModal) {
    resetCancelBtn.addEventListener('click', () => resetModal.classList.add('hidden'));
  }
  if (resetConfirmBtn && resetModal) {
    resetConfirmBtn.addEventListener('click', () => {
      localStorage.removeItem('معارف_profile');
      profile = { ...DEFAULT_PROFILE };
      resetModal.classList.add('hidden');
      closeModal('stats-modal');
      updateXpUI();
      renderLandingStats();
      alert('تمت إعادة تهيئة كافة البيانات بنجاح.');
    });
  }

  // شريط التنقل السفلي في الهواتف
  const navHome = document.getElementById('nav-home');
  const navSearch = document.getElementById('nav-search');
  const navDaily = document.getElementById('nav-daily');
  const navFavorites = document.getElementById('nav-favorites');
  const navStats = document.getElementById('nav-stats-btn');

  if (navHome) navHome.addEventListener('click', () => navigateTo('screen-landing'));
  if (navSearch) navSearch.addEventListener('click', () => {
    handleSearchExecution();
    navigateTo('screen-search');
  });
  if (navDaily) navDaily.addEventListener('click', () => {
    renderDailyScreen();
    navigateTo('screen-daily');
  });
  if (navFavorites) navFavorites.addEventListener('click', () => {
    renderFavoritesScreen();
    navigateTo('screen-favorites');
  });
  if (navStats) navStats.addEventListener('click', openStatsModal);

  // أزرار الفوتر للمشاركة والنسخ
  const footerShareBtn = document.getElementById('footer-share-btn');
  if (footerShareBtn) {
    footerShareBtn.addEventListener('click', () => {
      const shareData = {
        title: 'مَعارِف | منصة التعليم والمسابقات الإسلامية',
        text: '«الدَّالُّ عَلَى الخَيْرِ كَفَاعِلِهِ» — شارك منصة مَعارِف لتعليم العلوم الشرعية والقرآن الكريم والسنة النبوية واحتسب الأجر صدقة جارية.',
        url: window.location.href.split('?')[0]
      };
      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(shareData.url).then(() => {
          alert('تم نسخ رابط منصة مَعارِف بنجاح! شاركه مع أهلك وأصدقائك واحتسب الأجر.');
        });
      }
    });
  }

  const footerCopyBtn = document.getElementById('footer-copy-link-btn');
  if (footerCopyBtn) {
    footerCopyBtn.addEventListener('click', () => {
      const url = window.location.href.split('?')[0];
      navigator.clipboard.writeText(url).then(() => {
        const textSpan = document.getElementById('footer-copy-text');
        if (textSpan) {
          const original = textSpan.innerText;
          textSpan.innerHTML = 'تم النسخ! ' + AppIcons.get('check', { size: 14, className: 'icon-green' });
          setTimeout(() => { textSpan.innerText = original; }, 2500);
        }
      });
    });
  }
}

// التحقق عند تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  updateXpUI();
  SoundEngine.updateUI();
  initThemeEngine();
  renderCategoriesInSelection();
  renderDailyFactPreview();
  initEventHandlers();
  renderLandingStats();
  updateSetupSummary();

  // فحص روابط تحدي الأصدقاء عند الدخول
  checkIncomingChallengeUrl();
});
`;

fs.writeFileSync('./script.js', headerComment + jsBody, 'utf8');
console.log('Successfully generated complete script.js with all 800 questions and advanced features!');
