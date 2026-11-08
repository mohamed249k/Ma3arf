const fs = require('fs');
const path = require('path');

const existing550 = require('./enriched_questions.json');
const b1 = require('./batch3_questions_1.js');
const b2 = require('./batch3_questions_2.js');
const b3 = require('./batch3_questions_3.js');
const b4 = require('./batch3_questions_4.js');
const b5 = require('./batch3_questions_5.js');

const phase3Questions = [...b1, ...b2, ...b3, ...b4, ...b5];

console.log('Existing base questions count:', existing550.length);
console.log('Phase 3 new questions count:', phase3Questions.length);

if (existing550.length !== 550) {
  throw new Error(`Expected exactly 550 existing questions, found ${existing550.length}`);
}
if (phase3Questions.length !== 250) {
  throw new Error(`Expected exactly 250 Phase 3 questions, found ${phase3Questions.length}`);
}

const merged800 = [...existing550, ...phase3Questions];
console.log('Total merged questions:', merged800.length);

if (merged800.length !== 800) {
  throw new Error(`Expected exactly 800 questions total, found ${merged800.length}`);
}

// 1. Validation across all 800 questions
const idSet = new Set();
const numericIdSet = new Set();
const questionTextSet = new Set();

merged800.forEach((q, idx) => {
  // Check id
  if (!q.id || typeof q.id !== 'string') {
    throw new Error(`Question at index ${idx} has invalid id`);
  }
  if (idSet.has(q.id)) {
    throw new Error(`Duplicate id detected: ${q.id} at index ${idx}`);
  }
  idSet.add(q.id);

  // Check numericId
  if (typeof q.numericId !== 'number' || q.numericId !== idx + 1) {
    throw new Error(`Question ${q.id} at index ${idx} has mismatched numericId: ${q.numericId} (expected ${idx + 1})`);
  }
  if (numericIdSet.has(q.numericId)) {
    throw new Error(`Duplicate numericId detected: ${q.numericId}`);
  }
  numericIdSet.add(q.numericId);

  // Normalized question text check
  const normQ = q.question.trim().replace(/[؟?!\s]+/g, ' ');
  if (questionTextSet.has(normQ)) {
    console.warn(`Potential duplicate question text: "${q.question}" in ${q.id}`);
  }
  questionTextSet.add(normQ);

  // Options check
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question ${q.id} must have exactly 4 options`);
  }
  const optSet = new Set(q.options.map(o => o.trim()));
  if (optSet.size !== 4) {
    throw new Error(`Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`);
  }

  // Correct answer check
  if (typeof q.correctAnswerIndex !== 'number' || q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
    throw new Error(`Question ${q.id} has invalid correctAnswerIndex: ${q.correctAnswerIndex}`);
  }
  q.choices = [...q.options];
  q.correct = q.correctAnswerIndex;

  // Explanation check
  if (!q.explanation || q.explanation.trim().length < 15) {
    throw new Error(`Question ${q.id} has insufficient explanation`);
  }

  // Source check
  if (!q.source || !q.source.reference || q.source.reference.trim().length < 5) {
    throw new Error(`Question ${q.id} has missing or invalid source`);
  }
});

// 2. Validate the 500-question expansion distribution
const expansion500 = merged800.slice(300); // Items 301 to 800
console.log('\n--- Auditing 500 Expansion Questions (Phase 2 + Phase 3) ---');
console.log('Total expansion items:', expansion500.length);

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

const targets = {
  'القرآن الكريم وعلومه': 80,
  'السيرة النبوية': 80,
  'الأنبياء والرسل': 60,
  'الحديث النبوي': 60,
  'العبادات والفقه الأساسي': 80,
  'العقيدة': 60,
  'التاريخ الإسلامي': 50,
  'الآداب والأخلاق الإسلامية': 30
};

const expansionCounts = {};
for (const cat of Object.keys(targets)) {
  expansionCounts[cat] = 0;
}

expansion500.forEach(q => {
  const targetCat = catMap[q.category];
  if (targetCat && expansionCounts[targetCat] !== undefined) {
    expansionCounts[targetCat]++;
  } else {
    throw new Error(`Unmapped category in expansion: ${q.id} (${q.category})`);
  }
});

console.log('Category | Target | Actual in 500 Expansion | Status');
console.log('---------------------------------------------------------');

let allTargetsMet = true;
for (const [cat, target] of Object.entries(targets)) {
  const actual = expansionCounts[cat] || 0;
  const status = (actual === target) ? 'EXACT MATCH' : 'MISMATCH';
  if (actual !== target) allTargetsMet = false;
  console.log(`${cat} | ${target} | ${actual} | ${status}`);
}

if (!allTargetsMet) {
  throw new Error('500 expansion category target mismatch!');
}

console.log('---------------------------------------------------------');
console.log('SUCCESS: All 8 category targets match the required table exactly!');

// 3. UI Categories Distribution across the entire 800 questions
const uiCatCounts = {};
merged800.forEach(q => {
  uiCatCounts[q.category] = (uiCatCounts[q.category] || 0) + 1;
});
console.log('\n--- UI Category Distribution (All 800 Questions) ---');
for (const [cat, count] of Object.entries(uiCatCounts)) {
  console.log(`- ${cat}: ${count} questions`);
}

// 4. Save to enriched_questions.json
const outputPath = path.join(__dirname, 'enriched_questions.json');
fs.writeFileSync(outputPath, JSON.stringify(merged800, null, 2), 'utf8');
console.log(`\nSuccessfully written all 800 questions to ${outputPath}!`);
