const fs = require('fs');

let content = fs.readFileSync('PROJECT_HANDOVER.md', 'utf8');

// Update line 5
content = content.replace(
  'expanding the library to 550 verified questions',
  'expanding the library to 800 verified questions (completing the full 500-question expansion target)'
);

// Update Feature 6
const feature6Old = "### Feature 6: Verified Religious Content Expansion (550 سؤالاً موثقاً)";
const splitIdx = content.indexOf(feature6Old);

if (splitIdx !== -1) {
  const newFeature6 = `### Feature 6: Complete 500-Question Verified Expansion (800 سؤالاً موثقاً)
1. **Completion of the 500-Question Expansion Target**:
   - Total database: **800 verified questions** (300 original base + 500 expansion across Phase 2 and Phase 3).
   - Strict audit and compliance with the 8 target categories:
     | Category | Target | Actual in 500 Expansion | Status |
     |---|---:|---:|---|
     | القرآن الكريم وعلومه | 80 | 80 | Verified |
     | السيرة النبوية | 80 | 80 | Verified |
     | الأنبياء والرسل | 60 | 60 | Verified |
     | الحديث النبوي | 60 | 60 | Verified |
     | العبادات والفقه الأساسي | 80 | 80 | Verified |
     | العقيدة | 60 | 60 | Verified |
     | التاريخ الإسلامي | 50 | 50 | Verified |
     | الآداب والأخلاق الإسلامية | 30 | 30 | Verified |
     | **TOTAL** | **500** | **500** | **100% Complete** |

2. **UI Category Breakdown (All 800 Questions)**:
   - القرآن الكريم: 110 أسئلة
   - الحديث الشريف: 90 سؤالاً
   - قصص الأنبياء: 90 سؤالاً
   - العقيدة: 90 سؤالاً
   - معلومات إسلامية عامة: 80 سؤالاً
   - الفقه: 75 سؤالاً
   - السيرة النبوية: 70 سؤالاً
   - الصحابة: 70 سؤالاً
   - العبادات: 65 سؤالاً
   - الأخلاق الإسلامية: 60 سؤالاً

3. **Authentic Islamic Geometric Visual Identity**:
   - Seamless 8-pointed star (Khatim Sulayman / Rub el Hizb) tessellation pattern in pure SVG data URI.
   - Refined Islamic gold palette (#C6A15B, #D8BD83, #9C793B, #E8D9B5).
   - Restrained gold accents on headers, progress rings, podium rank 1, active pills, and ornamental dividers.

4. **Verified Source Inspector Modal (#source-details-modal)**:
   - Verified Islamic badge: "✅ معلومة موثقة ومراجعة بدقة وفق المصادر الأصيلة".
   - Displays exact surah/ayah number, hadith book & number, and classical reference.
   - Button to copy full academic/religious citation.

---

## 3. Automated Test Suite Results
Run via \`node scripts/test_suite.js\`:
- **Total Tests**: 39 automated tests.
- **Result**: 39 Passed, 0 Failed.
- Checks:
   - Total question count: exactly 800 questions with unique IDs (300 base + 500 expansion).
   - Question schema: 4 options, valid correctAnswerIndex bounds (0..3).
   - Source integrity: valid source type and reference on every question.
   - Arabic normalization & search algorithm.
   - Deterministic daily challenge generator (consistent by date).
   - XP & scoring calculations and bonuses.
   - LocalStorage migration (v1 -> v2 -> v3).
   - Multi-profile management & active profile resolution.
   - Leaderboard sorting logic & tie-breaking.
   - Challenge URL encoding and query param extraction.
   - All 10 UI categories covered with at least 60 questions each.
   - All 8 expansion categories match the exact 500-question distribution table.

---

## 4. Maintenance & Generator Scripts
- \`scripts/build_full_app.js\`: Main generator script to compile \`script.js\` with all 800 questions, audio engine, share engine, and event handlers.
- \`scripts/merge_phase3_questions.js\`: Validates and merges Phase 3 into \`enriched_questions.json\`.
- \`scripts/audit_expansion.js\`: Audits the 500-question expansion against target categories.
- \`scripts/test_suite.js\`: Comprehensive automated test runner.
- \`scripts/verify_alignment.js\`: Validates all DOM IDs referenced in JS against \`index.html\`.
- \`scripts/enriched_questions.json\`: Complete 800-question JSON dataset.
- \`scripts/daily_facts.json\`: 31 verified daily Islamic knowledge cards.
`;

  content = content.slice(0, splitIdx) + newFeature6;
  fs.writeFileSync('PROJECT_HANDOVER.md', content, 'utf8');
  console.log('PROJECT_HANDOVER.md successfully updated with Phase 3 details!');
} else {
  console.error('feature6Old not found');
}
