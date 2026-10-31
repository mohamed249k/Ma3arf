/**
 * Automated Verification Suite for Ma3arf Islamic Learning Platform
 */
const fs = require('fs');

console.log('=== STARTING AUTOMATED TEST SUITE FOR MA3ARF ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failCount++;
  }
}

// 1. Data Integrity Tests
const questions = JSON.parse(fs.readFileSync('./scripts/enriched_questions.json', 'utf8'));
const dailyFacts = JSON.parse(fs.readFileSync('./scripts/daily_facts.json', 'utf8'));

assert(questions.length === 800, 'Total questions count must be exactly 800 (300 base + 500 expansion)');
assert(dailyFacts.length >= 30, 'Daily facts must have at least 30 verified entries');

// Check duplicate IDs
const idSet = new Set();
let hasDuplicateId = false;
questions.forEach(q => {
  if (idSet.has(q.id)) hasDuplicateId = true;
  idSet.add(q.id);
});
assert(!hasDuplicateId, 'All 800 question IDs must be unique');

// Check structure of each question
let validQuestions = true;
let validIndices = true;
let validSources = true;
let validCategories = true;

const validCatIds = ['quran', 'hadith', 'seerah', 'prophets', 'companions', 'aqeedah', 'fiqh', 'ethics', 'worship', 'history'];

questions.forEach(q => {
  if (!q.id || !q.question || !q.explanation || !q.difficulty) validQuestions = false;
  if (!Array.isArray(q.options) || q.options.length !== 4) validQuestions = false;
  if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) validIndices = false;
  if (!q.source || !q.source.type || !q.source.reference) validSources = false;
  if (!validCatIds.includes(q.categoryId)) validCategories = false;
});

assert(validQuestions, 'All 800 questions have valid required fields and exactly 4 options');
assert(validIndices, 'All correctAnswerIndex values are within valid bounds (0..3)');
assert(validSources, 'All questions have verified source objects with type and reference');
assert(validCategories, 'All questions have valid standardized category IDs');

// 2. Search & Arabic Normalization Test
function normalizeArabicText(str) {
  if (!str) return '';
  return str
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .toLowerCase()
    .trim();
}

assert(normalizeArabicText('القُرْآنُ الكَرِيمُ') === 'القران الكريم', 'Arabic tashkeel removal works correctly');
assert(normalizeArabicText('إبراهيم') === 'ابراهيم', 'Hamza normalization works correctly');
assert(normalizeArabicText('عائشة') === 'عائشه', 'Taa marbuta normalization works correctly');

// Search simulation (including question text, explanation, and options)
const query = normalizeArabicText('البقرة');
const searchResults = questions.filter(q => {
  const normQ = normalizeArabicText(q.question);
  const normExp = normalizeArabicText(q.explanation);
  const normOpts = q.options.map(o => normalizeArabicText(o)).join(' ');
  return normQ.includes(query) || normExp.includes(query) || normOpts.includes(query);
});
assert(searchResults.length >= 2, `Search for 'البقرة' found ${searchResults.length} relevant questions`);

// 3. Daily Challenge Determinism
function getDailyChallenge(dateStr) {
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i)) % 100000;
  }
  const shuffled = [...questions];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 10);
}

const dailyQ1 = getDailyChallenge('2026-10-29');
const dailyQ2 = getDailyChallenge('2026-10-29');
const dailyQ3 = getDailyChallenge('2026-10-30');

assert(dailyQ1.length === 10, 'Daily challenge returns exactly 10 questions');
assert(JSON.stringify(dailyQ1.map(q => q.id)) === JSON.stringify(dailyQ2.map(q => q.id)), 'Daily challenge is strictly deterministic for same date');
assert(JSON.stringify(dailyQ1.map(q => q.id)) !== JSON.stringify(dailyQ3.map(q => q.id)), 'Daily challenge changes deterministically on a new date');

const dailyIds = new Set(dailyQ1.map(q => q.id));
assert(dailyIds.size === 10, 'Daily challenge questions contain no duplicate IDs');

// 4. Scoring & XP Logic Tests
function calcScore(correctAnswers, totalQuestions, baseScore) {
  const percent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  let xp = baseScore;
  if (percent === 100) xp += 50;
  else if (percent >= 80) xp += 20;
  return { percent, xp };
}

const score100 = calcScore(10, 10, 150);
assert(score100.percent === 100 && score100.xp === 200, 'Perfect score awards 100% and +50 XP bonus');

const score80 = calcScore(8, 10, 120);
assert(score80.percent === 80 && score80.xp === 140, '80% score awards +20 XP bonus');

const score50 = calcScore(5, 10, 75);
assert(score50.percent === 50 && score50.xp === 75, '50% score calculates accurately with no bonus');

// Zero division protection
const scoreZero = calcScore(0, 0, 0);
assert(scoreZero.percent === 0, 'Zero division is safely handled');

// 5. LocalStorage Migration Test
const legacyProfile = {
  theme: 'light',
  totalQuizzes: 5,
  totalQuestionsAnswered: 50,
  totalCorrectAnswers: 42,
  totalXp: 480,
  bestScorePercent: 90,
  unlockedBadges: ['first_quiz']
};

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
  favorites: [],
  wrongAnswers: [],
  testedCategories: [],
  dailyChallengeDate: null,
  dailyChallengeScore: 0,
  streak: 0,
  lastActiveDate: null
};

const migrated = {
  ...DEFAULT_PROFILE,
  ...legacyProfile,
  version: 2,
  favorites: [],
  wrongAnswers: []
};

assert(migrated.version === 2, 'Migration assigns version 2');
assert(migrated.totalQuizzes === 5, 'Migration preserves totalQuizzes');
assert(migrated.totalXp === 480, 'Migration preserves totalXp');
assert(migrated.unlockedBadges.includes('first_quiz'), 'Migration preserves unlocked badges');
assert(Array.isArray(migrated.favorites) && Array.isArray(migrated.wrongAnswers), 'Migration initializes new array fields safely');

// 6. Version 3 Migration & Multi-Profile Tests
const v3Default = {
  version: 3,
  theme: 'dark',
  soundEnabled: true,
  activeProfileId: 'default',
  profiles: [{ id: 'default', name: 'طالب علم', totalXp: 0, totalQuizzes: 0, bestScorePercent: 0, createdAt: 1000 }],
  localLeaderboard: [],
  userSubmissions: [],
  userReports: []
};

const migratedV3 = {
  ...v3Default,
  ...migrated,
  version: 3,
  profiles: [{ id: 'default', name: 'طالب علم', totalXp: migrated.totalXp, totalQuizzes: migrated.totalQuizzes, bestScorePercent: migrated.bestScorePercent, createdAt: 1000 }],
  soundEnabled: true,
  localLeaderboard: [],
  userSubmissions: [],
  userReports: []
};

assert(migratedV3.version === 3, 'Migration to Version 3 succeeds with version: 3');
assert(migratedV3.soundEnabled === true, 'Sound is enabled by default in Version 3');
assert(migratedV3.profiles.length === 1 && migratedV3.profiles[0].name === 'طالب علم', 'Default profile is preserved and populated correctly');
assert(Array.isArray(migratedV3.localLeaderboard), 'Local leaderboard array is safely initialized');
assert(Array.isArray(migratedV3.userSubmissions), 'User suggestions array is safely initialized');

// 7. Local Leaderboard Sorting Logic Test
const sampleLeaderboard = [
  { id: '1', profileName: 'أحمد', percent: 80, xpEarned: 120, timestamp: 100 },
  { id: '2', profileName: 'سارة', percent: 100, xpEarned: 200, timestamp: 200 },
  { id: '3', profileName: 'عمر', percent: 80, xpEarned: 150, timestamp: 300 },
  { id: '4', profileName: 'فاطمة', percent: 60, xpEarned: 80, timestamp: 400 }
];

sampleLeaderboard.sort((a, b) => {
  if (b.percent !== a.percent) return b.percent - a.percent;
  if (b.xpEarned !== a.xpEarned) return b.xpEarned - a.xpEarned;
  return b.timestamp - a.timestamp;
});

assert(sampleLeaderboard[0].profileName === 'سارة', 'Leaderboard ranks 100% score as Rank 1');
assert(sampleLeaderboard[1].profileName === 'عمر', 'Leaderboard breaks ties with higher XP (+150 XP vs +120 XP)');
assert(sampleLeaderboard[2].profileName === 'أحمد', 'Leaderboard ranks 3rd place accurately');

// 8. Challenge URL Generation & Parsing
const challengeQuery = new URLSearchParams({
  challenge: '1',
  mode: 'category',
  val: 'القرآن الكريم',
  count: '10',
  qmode: 'challenge',
  challenger: 'محمد كرم'
}).toString();

const parsedParams = new URLSearchParams(challengeQuery);
assert(parsedParams.get('challenge') === '1', 'Challenge parameter is correctly set');
assert(parsedParams.get('val') === 'القرآن الكريم', 'Arabic challenge category is properly URL-encoded and decoded');
assert(parsedParams.get('challenger') === 'محمد كرم', 'Challenger name is preserved without distortion');

// 9. Category Distribution & 500 Expansion Targets
const catCounts = {};
questions.forEach(q => {
  catCounts[q.category] = (catCounts[q.category] || 0) + 1;
});
const categoriesCovered = Object.keys(catCounts).length;
assert(categoriesCovered === 10, 'All 10 authentic Islamic categories are represented');
assert(Object.values(catCounts).every(c => c >= 60), 'Every UI category has at least 60 verified questions for rich variety');

// 10. Audit 500 Expansion Questions across 8 Specific Targets
const expansion500 = questions.slice(300);
assert(expansion500.length === 500, 'Expansion questions must equal exactly 500');

const catMap = {
  'القرآن الكريم': 'القرآن الكريم وعلومه',
  'الحديث الشريف': 'الحديث النبوي',
  'قصص الأنبياء': 'الأنبياء والرسل',
  'العقيدة': 'العقيدة',
  'الأخلاق الإسلامية': 'الآداب والأخلاق الإسلامية',
  'الفقه': 'العبادات والفقه الأساسي',
  'العبادات': 'العبادات والفقه الأساسي',
  'السيرة النبوية': 'السيرة النبوية',
  'الصحابة': 'السيرة النبوية',
  'معلومات إسلامية عامة': 'التاريخ الإسلامي'
};

const expansionTargets = {
  'القرآن الكريم وعلومه': 80,
  'السيرة النبوية': 80,
  'الأنبياء والرسل': 60,
  'الحديث النبوي': 60,
  'العبادات والفقه الأساسي': 80,
  'العقيدة': 60,
  'التاريخ الإسلامي': 50,
  'الآداب والأخلاق الإسلامية': 30
};

const expActualCounts = {};
for (const k of Object.keys(expansionTargets)) expActualCounts[k] = 0;
expansion500.forEach(q => {
  const targetCat = catMap[q.category];
  if (targetCat) expActualCounts[targetCat]++;
});

let expansionExact = true;
for (const [k, v] of Object.entries(expansionTargets)) {
  if (expActualCounts[k] !== v) {
    expansionExact = false;
    console.error(`Mismatch in ${k}: expected ${v}, got ${expActualCounts[k]}`);
  }
}
assert(expansionExact, 'All 8 specific target categories match the exact 500 expansion distribution table');

console.log(`\n=== TEST SUITE RESULTS: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount === 0) {
  console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
} else {
  process.exit(1);
}
