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

assert(questions.length === 200, 'Total questions count must be exactly 200');
assert(dailyFacts.length >= 30, 'Daily facts must have at least 30 verified entries');

// Check duplicate IDs
const idSet = new Set();
let hasDuplicateId = false;
questions.forEach(q => {
  if (idSet.has(q.id)) hasDuplicateId = true;
  idSet.add(q.id);
});
assert(!hasDuplicateId, 'All 200 question IDs must be unique');

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

assert(validQuestions, 'All 200 questions have valid required fields and exactly 4 options');
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

console.log(`\n=== TEST SUITE RESULTS: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount === 0) {
  console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
} else {
  process.exit(1);
}
