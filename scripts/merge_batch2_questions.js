const fs = require('fs');
const path = require('path');

const rawQuestions = require('./enriched_questions.json');
const existingQuestions = rawQuestions.slice(0, 300);
const b1 = require('./batch2_questions_1.js');
const b2 = require('./batch2_questions_2.js');
const b3 = require('./batch2_questions_3.js');
const b4 = require('./batch2_questions_4.js');
const b5 = require('./batch2_questions_5.js');

const newQuestions = [...b1, ...b2, ...b3, ...b4, ...b5];

console.log(`Loaded ${existingQuestions.length} existing base questions.`);
console.log(`Loaded ${newQuestions.length} new questions.`);

if (existingQuestions.length !== 300) {
    throw new Error(`Expected exactly 300 existing questions, found ${existingQuestions.length}`);
}
if (newQuestions.length !== 250) {
    throw new Error(`Expected exactly 250 new questions, found ${newQuestions.length}`);
}

const mergedQuestions = [...existingQuestions, ...newQuestions];
console.log(`Total merged questions: ${mergedQuestions.length}`);

if (mergedQuestions.length !== 550) {
    throw new Error(`Expected exactly 550 total questions, got ${mergedQuestions.length}`);
}

// 1. Check ID uniqueness
const idSet = new Set();
const numericIdSet = new Set();
const questionTextSet = new Set();

const categories = {};
const difficulties = {};

mergedQuestions.forEach((q, index) => {
    // Check id
    if (!q.id || typeof q.id !== 'string') {
        throw new Error(`Question at index ${index} has invalid id: ${q.id}`);
    }
    if (idSet.has(q.id)) {
        throw new Error(`Duplicate id detected: ${q.id} at index ${index}`);
    }
    idSet.add(q.id);

    // Check numericId
    if (typeof q.numericId !== 'number' || q.numericId < 1 || q.numericId > 550) {
        throw new Error(`Question ${q.id} has invalid numericId: ${q.numericId}`);
    }
    if (numericIdSet.has(q.numericId)) {
        throw new Error(`Duplicate numericId detected: ${q.numericId} in question ${q.id}`);
    }
    numericIdSet.add(q.numericId);

    // Normalize question text for duplicate check
    const normalizedText = q.question.trim().replace(/[؟?!\s]+/g, ' ');
    if (questionTextSet.has(normalizedText)) {
        console.warn(`Warning: Potential similar question text: "${q.question}"`);
    }
    questionTextSet.add(normalizedText);

    // Options check
    if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`Question ${q.id} must have exactly 4 options`);
    }
    const optSet = new Set(q.options.map(o => o.trim()));
    if (optSet.size !== 4) {
        throw new Error(`Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`);
    }

    // Correct index check
    if (typeof q.correctAnswerIndex !== 'number' || q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
        throw new Error(`Question ${q.id} has invalid correctAnswerIndex: ${q.correctAnswerIndex}`);
    }
    // Ensure choices & correct match
    if (!Array.isArray(q.choices) || q.choices.length !== 4) {
        q.choices = [...q.options];
    }
    if (q.correct === undefined) {
        q.correct = q.correctAnswerIndex;
    }

    // Explanation check
    if (!q.explanation || q.explanation.trim().length < 15) {
        throw new Error(`Question ${q.id} has insufficient explanation`);
    }

    // Source check
    if (!q.source || !q.source.reference || q.source.reference.trim().length < 5) {
        throw new Error(`Question ${q.id} has invalid or missing source reference`);
    }

    // Category tally
    categories[q.category] = (categories[q.category] || 0) + 1;
    difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
});

console.log('Category distribution (Total 10 categories):');
for (const [cat, count] of Object.entries(categories)) {
    console.log(`  - ${cat}: ${count} questions`);
}

console.log('Difficulty distribution:');
for (const [diff, count] of Object.entries(difficulties)) {
    console.log(`  - ${diff}: ${count} questions`);
}

// Ensure each category has at least 50 questions
for (const [cat, count] of Object.entries(categories)) {
    if (count < 50) {
        throw new Error(`Category "${cat}" has fewer than 50 questions (${count})!`);
    }
}

// Write the merged database to enriched_questions.json
const outputPath = path.join(__dirname, 'enriched_questions.json');
fs.writeFileSync(outputPath, JSON.stringify(mergedQuestions, null, 2), 'utf8');
console.log(`Successfully written 550 questions to ${outputPath}!`);
