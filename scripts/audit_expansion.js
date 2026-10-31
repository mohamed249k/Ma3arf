const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('./scripts/enriched_questions.json', 'utf8'));

console.log('=== COMPLETE AUDIT OF EXISTING QUESTION BANK ===');
console.log('Total questions in database:', questions.length);

const originalBatch = questions.slice(0, 300);
const phase2Batch = questions.slice(300);

console.log('Original pre-expansion questions (Phase 1 / Base):', originalBatch.length);
console.log('Phase 2 expansion questions:', phase2Batch.length);

// 1. Check ID uniqueness across all 550 questions
const idMap = new Map();
let duplicateIds = [];
questions.forEach((q, idx) => {
  if (idMap.has(q.id)) {
    duplicateIds.push({ id: q.id, firstIdx: idMap.get(q.id), secondIdx: idx });
  } else {
    idMap.set(q.id, idx);
  }
});
console.log('Duplicate IDs count:', duplicateIds.length);

// 2. Check validity of Phase 2 questions
let invalidQuestions = [];
phase2Batch.forEach((q, idx) => {
  const issues = [];
  if (!q.id) issues.push('missing id');
  if (!q.question || q.question.trim().length < 10) issues.push('short/missing question');
  if (!Array.isArray(q.options) || q.options.length !== 4) issues.push('options length != 4');
  if (new Set(q.options).size !== 4) issues.push('duplicate choices in options');
  if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) issues.push('invalid correctAnswerIndex');
  if (!q.explanation || q.explanation.trim().length < 10) issues.push('short/missing explanation');
  if (!q.source || !q.source.reference) issues.push('missing source reference');
  if (issues.length > 0) {
    invalidQuestions.push({ id: q.id, issues });
  }
});
console.log('Invalid Phase 2 questions:', invalidQuestions.length);

// 3. Mapping Phase 2 questions to the 8 Target Categories
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

const phase2Counts = {};
for (const cat of Object.keys(targets)) {
  phase2Counts[cat] = 0;
}

phase2Batch.forEach(q => {
  const targetCat = catMap[q.category];
  if (targetCat && phase2Counts[targetCat] !== undefined) {
    phase2Counts[targetCat]++;
  } else {
    console.warn('Unknown category in Phase 2:', q.id, q.category);
  }
});

console.log('\n--- Category Breakdown for 500 Expansion Target ---');
console.log('Category | Phase 2 Added | Final Target | Needed in Phase 3');
console.log('------------------------------------------------------------');

let totalP2 = 0;
let totalTarget = 0;
let totalNeeded = 0;

for (const [cat, target] of Object.entries(targets)) {
  const p2Count = phase2Counts[cat] || 0;
  const needed = target - p2Count;
  totalP2 += p2Count;
  totalTarget += target;
  totalNeeded += needed;
  console.log(cat + ' | ' + p2Count + ' | ' + target + ' | ' + needed);
}

console.log('------------------------------------------------------------');
console.log('TOTAL | ' + totalP2 + ' | ' + totalTarget + ' | ' + totalNeeded);
