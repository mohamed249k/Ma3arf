# مَعارِف | Ma3arf — Project Handover & Architecture Documentation

## 1. Project Overview & Objective
- **Repository / Website**: [https://mohamed249k.github.io/Ma3arf/](https://mohamed249k.github.io/Ma3arf/)
- **Primary Goal**: Transform **مَعارِف (Ma3arf)** into a reliable, source-verified Islamic learning experience while preserving its existing identity, useful functionality, and expanding the library to 800 verified questions (completing the full 500-question expansion target) with advanced educational features and authentic Islamic visual identity.
- **Tech Stack**: Vanilla HTML5, CSS3 (Modern Islamic Editorial Luxury design system with authentic Khatim Sulayman 8-pointed star geometric tessellation and refined gold illumination accents), Modern Vanilla JavaScript (ES2022+), Web Audio API, HTML5 Canvas, LocalStorage multi-profile persistence. No external frameworks or backend dependencies. Fully compatible with GitHub Pages offline and static hosting.
- **Developer Credit**: فكرة وإعداد وتطوير: **محمد كرم (Mohamed Karam)** — صدقة جارية ومتاح لكل مسلم ومسلمة للنشر والتعلم.

---

## 2. Key Architecture & Implemented Features (Version 3.0)

### Feature 1: Friend Challenge & Result Sharing (تحدي الأصدقاء ومشاركة النتائج)
1. **Interactive Results Sharing Modal (`#share-result-modal`)**:
   - Opens from results dashboard via `#results-share-btn`.
   - Generates formatted Arabic invitation text with challenge URL, score %, XP gained, and call to action.
   - Quick sharing buttons: WhatsApp (`api.whatsapp.com`), Web Share API (`navigator.share`), and clipboard copy.
2. **HTML5 Canvas Card Generator (800x800 PNG)**:
   - Deep Emerald luxury gradient background (`#0B1512` to `#172B23`).
   - Islamic geometric motif and double gold border (`#D7B56D`) with corner arabesques.
   - User name, score percentage, correct/total count, XP gained, category, difficulty, level rank, date, and Sadaqah Jariyah footer.
   - One-click PNG download (`#download-share-card-btn`).
3. **Challenge URL Parameters & Reception (`?challenge=1`)**:
   - URL encoding: `?challenge=1&mode=...&val=...&count=...&qmode=...&challenger=...`.
   - On page load, `checkIncomingChallengeUrl()` detects challenge parameters and displays `#challenge-welcome-modal`.
   - Shows inviter name, challenge specs, and button `#accept-challenge-btn` to configure and launch the exact quiz session immediately.

---

### Feature 2: Optional Sound Effects & Interactive Audio (المؤثرات الصوتية التوليدية)
1. **Zero External Files (Pure Web Audio API)**:
   - Oscillator and Gain envelope synthesis using `AudioContext` (`SoundEngine`).
   - 100% offline reliability, zero 404 errors, zero CORS issues, zero bandwidth consumption.
2. **Four Distinct Tone Syntheses**:
   - `playCorrect()`: Ascending pleasant harmonic arpeggio (C5-E5-G5-C6) with gentle sine wave release.
   - `playIncorrect()`: Soft warm descending chime (220Hz to 174Hz), non-intrusive and dignified.
   - `playCountdownTick()`: Subtle wooden click for the final 5 seconds of countdown.
   - `playVictory()`: Festive celebratory fanfare on completing quizzes with high marks.
3. **Persistent Audio Toggle**:
   - Header button `#sound-toggle-btn` (`🔊` vs `🔇`).
   - Stored in `profile.soundEnabled` in LocalStorage.
   - When muted, all audio calls exit immediately without CPU or audio context usage.

---

### Feature 3: Suggest a Question & Report an Issue (اقتراح سؤال أو إبلاغ عن ملاحظة)
1. **Dedicated Dual-Tab Modal (`#feedback-modal`)**:
   - **Tab 1: اقتراح سؤال جديد**: Fields for question text, 4 choices with correct answer selector, category dropdown (10 categories), difficulty level, scientific explanation, and verified source reference.
   - **Tab 2: إبلاغ عن ملاحظة أو خطأ**: Dropdown for issue type (error in answer, wording ambiguity, typo, source reference dispute, enhancement), target question identifier, and detailed explanation.
2. **Storage & Sharing Workflow**:
   - Saved locally on device in `profile.userSubmissions` and `profile.userReports`.
   - Direct buttons to copy formatted markdown text or share via WhatsApp to the development team.
   - Clear disclosure notice that submissions are stored locally as drafts.
3. **In-Quiz Feedback Shortcut**:
   - Button in feedback panel (`#report-question-btn`) opens the modal, automatically selects Tab 2, and pre-fills the current question details.

---

### Feature 4: Comprehensive Answer Review (المراجعة الشاملة قبل التسليم)
1. **In-Quiz Review Button (`#review-quiz-btn`)**:
   - Accessible anytime during the quiz in the footer actions.
2. **Review Overview Modal (`#quiz-review-modal`)**:
   - Live counter banner: Answered questions vs unanswered questions.
   - Scrollable list of all questions with status pills:
     - "تمت الإجابة: [الخيار المختار]" (green badge).
     - "لم يُجب عليه بعد" (gold/amber badge).
   - "انتقال" button allowing user to jump directly to any question to answer or review before finalizing.
3. **Submission Integrity**:
   - Button `#review-finalize-quiz-btn` alerts user if questions remain unanswered: "لديك [X] أسئلة لم تجب عليها بعد. هل ترغب في تسليم الاختبار الآن؟".
   - In Challenge mode, background timer keeps ticking and warning sounds fire normally.

---

### Feature 5: Local Leaderboard & Multi-Profile Support (لوحة المتصدرين والملفات الشخصية)
1. **Multi-Profile Architecture**:
   - `profile.profiles = [ { id, name, totalXp, totalQuizzes, bestScorePercent, createdAt } ]`.
   - Active profile switcher (`#manage-profiles-btn` / `#profile-modal`).
   - Create new profile for family members or friends on the same device.
2. **Local Leaderboard Screen (`#screen-leaderboard`)**:
   - Records top 50 quiz attempts in `profile.localLeaderboard`.
   - Filters by category (10 categories) and difficulty level.
   - Top 3 Podium (🥇 المركز الأول, 🥈 المركز الثاني, 🥉 المركز الثالث) with distinct medals and rank animations.
   - Complete leaderboard table: Rank, Name, Score %, XP Earned, Category, Difficulty, Date.
   - Clear button `#clear-leaderboard-btn` to reset local rankings.

---

### Feature 6: Complete 500-Question Verified Expansion (800 سؤالاً موثقاً)
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
Run via `node scripts/test_suite.js`:
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
- `scripts/build_full_app.js`: Main generator script to compile `script.js` with all 800 questions, audio engine, share engine, and event handlers.
- `scripts/merge_phase3_questions.js`: Validates and merges Phase 3 into `enriched_questions.json`.
- `scripts/audit_expansion.js`: Audits the 500-question expansion against target categories.
- `scripts/test_suite.js`: Comprehensive automated test runner.
- `scripts/verify_alignment.js`: Validates all DOM IDs referenced in JS against `index.html`.
- `scripts/enriched_questions.json`: Complete 800-question JSON dataset.
- `scripts/daily_facts.json`: 31 verified daily Islamic knowledge cards.
