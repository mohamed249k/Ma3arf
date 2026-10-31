const fs = require('fs');
let content = fs.readFileSync('PROJECT_HANDOVER.md', 'utf8');

const targetStr = "### Feature 6: Verified Religious Content Expansion (300 سؤال موثق)";
const splitIdx = content.indexOf(targetStr);

if (splitIdx !== -1) {
  const newSec = `### Feature 6: Verified Religious Content Expansion (550 سؤالاً موثقاً)
1. **Question Bank Expanded to 550 Questions**:
   - Exactly 55 questions in each of the 10 authentic categories (300 original + 250 new in Phase 2):
     - القرآن الكريم (علوم القرآن، أسباب النزول، السور، الآيات).
     - الحديث الشريف (صحيح البخاري، صحيح مسلم، السنن الأربعة).
     - السيرة النبوية (الغزوات، المعاهدات، أخلاق المصطفى ﷺ).
     - قصص الأنبياء (نوح، إبراهيم، موسى، عيسى، يوسف...).
     - الصحابة الكرام (الخلفاء الراشدون، أمهات المؤمنين، العشرة المبشرون).
     - العقيدة الإسلامية (أركان الإيمان، التوحيد، أسماء الله الحسنى).
     - الفقه وأحكامه (الطهور، الصلاة، الزكاة، الصيام، الحج، المعاملات).
     - الأخلاق والآداب (الصدق، بر الوالدين، الأمانة، حفظ اللسان).
     - العبادات والأذكار (الأدعية المأثورة، النوافل، سنن اليوم والليلة).
     - التاريخ والمعلومات العامة (الفتوحات، أئمة الفقه، بيت المقدس).
2. **Authentic Islamic Geometric Visual Identity**:
   - Seamless 8-pointed star (Khatim Sulayman / Rub el Hizb) tessellation pattern in pure SVG data URI.
   - Refined Islamic gold palette (#C6A15B, #D8BD83, #9C793B, #E8D9B5).
   - Restrained gold accents on headers, progress rings, podium rank 1, active pills, and ornamental dividers.
3. **Verified Source Inspector Modal (#source-details-modal)**:
   - Verified Islamic badge: "✅ معلومة موثقة ومراجعة بدقة وفق المصادر الأصيلة".
   - Displays exact surah/ayah number, hadith book & number, and classical reference.
   - Button to copy full academic/religious citation.

---

## 3. Automated Test Suite Results
Run via \`node scripts/test_suite.js\`:
- **Total Tests**: 37 automated tests.
- **Result**: 37 Passed, 0 Failed.
- Checks:
   - Total question count: exactly 550 questions with unique IDs.
   - Question schema: 4 options, valid correctAnswerIndex bounds (0..3).
   - Source integrity: valid source type and reference on every question.
   - Arabic normalization & search algorithm.
   - Deterministic daily challenge generator (consistent by date).
   - XP & scoring calculations and bonuses.
   - LocalStorage migration (v1 -> v2 -> v3).
   - Multi-profile management & active profile resolution.
   - Leaderboard sorting logic & tie-breaking.
   - Challenge URL encoding and query param extraction.
   - 10 categories covered with at least 50 questions each (55 per category).

---

## 4. Maintenance & Generator Scripts
- \`scripts/build_full_app.js\`: Main generator script to compile \`script.js\` with all 550 questions, audio engine, share engine, and event handlers.
- \`scripts/merge_batch2_questions.js\`: Merges the 250 verified Phase 2 questions into \`enriched_questions.json\`.
- \`scripts/test_suite.js\`: Comprehensive automated test runner.
- \`scripts/verify_alignment.js\`: Validates all DOM IDs referenced in JS against \`index.html\`.
- \`scripts/enriched_questions.json\`: Complete 550-question JSON dataset.
- \`scripts/daily_facts.json\`: 31 verified daily Islamic knowledge cards.
`;

  content = content.slice(0, splitIdx) + newSec;
  fs.writeFileSync('PROJECT_HANDOVER.md', content, 'utf8');
  console.log('PROJECT_HANDOVER.md successfully updated with Phase 2 documentation!');
} else {
  console.error('Target string not found in PROJECT_HANDOVER.md');
}
