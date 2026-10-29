# مَعارِف | Ma3arf — Project Handover & Architecture Documentation

## 1. Project Overview & Objective
- **Repository / Website**: [https://mohamed249k.github.io/Ma3arf/](https://mohamed249k.github.io/Ma3arf/)
- **Primary Goal**: Transform **مَعارِف (Ma3arf)** into a reliable, source-verified Islamic learning experience while preserving its existing identity, useful functionality, and 200 questions.
- **Tech Stack**: Vanilla HTML5, CSS3 (Modern Islamic Editorial Luxury design system), Modern Vanilla JavaScript (ES2022+), LocalStorage persistence. No third-party heavy dependencies or frameworks needed. Fully compatible with GitHub Pages.

---

## 2. Completed Implementations & Architectural Enhancements

### A. Quiz Engine & State Management (P0 - Completed)
1. **Accurate Lifecycle**:
   - Question display: Clean rendering of question text, difficulty badge, category badge, and 4 distinct options with Arabic letter markers (`أ`, `ب`, `ج`, `د`).
   - Answer submission: Instant locking of options upon selection to prevent double-submission or rapid-click race conditions.
   - Dual-mode architecture:
     - **وضع التحدّي (Challenge Mode)**: Countdown ring timer with dynamic danger warning during the last 5 seconds, accurate XP rewards, and competitive bonus calculations.
     - **وضع التعلّم (Learning Mode)**: Timer completely disabled, calm learning pace, immediate rich feedback with source references, and favorite bookmarking.
   - Question Count Presets: Configurable between 5, 10, 15, 20, 25, and 30 questions per session.

2. **Scoring & Completion Authority**:
   - Single authoritative result record generated upon quiz completion.
   - Score calculated per difficulty level (`easy`: 10 pts, `medium`: 15 pts, `hard`: 20 pts, `expert`: 25 pts).
   - Accurately tracks: `correctAnswers`, `wrongAnswers`, `timedOutAnswers`, `accuracy %`, `timeSpent`.
   - XP bonus: +50 XP for perfect 100% score, +20 XP for >=80% score.
   - Abandoning a quiz (`انسحاب`) clears all active intervals and safely returns home without corrupting history or recording false completions.

3. **Persistent Storage & Migration**:
   - Structured under `معارف_profile` in LocalStorage.
   - Schema versioning (`version: 2`) with automatic migration preserving compatible legacy fields (`totalQuizzes`, `totalQuestionsAnswered`, `totalCorrectAnswers`, `totalXp`, `bestScorePercent`, `unlockedBadges`, `theme`).
   - New fields initialized safely: `favorites`, `wrongAnswers`, `testedCategories`, `dailyChallengeDate`.
   - Custom confirmation modal before data reset, preventing accidental deletion and preserving user theme preference.

---

### B. Educational & Religious Content Integrity (P0 - Completed)
1. **All 200 Questions Preserved and Enriched**:
   - All 200 original questions preserved across 10 categories (20 questions each).
   - Upgraded to schema:
     - `id`: Stable alphanumeric identifier (`quran_0001` .. `history_0020`).
     - `category`: Arabic category label.
     - `categoryId`: Machine-readable category key (`quran`, `hadith`, `seerah`, `prophets`, `companions`, `aqeedah`, `fiqh`, `ethics`, `worship`, `history`).
     - `targetCategory`: Mapped to the 8 master target categories.
     - `difficulty`: `easy`, `medium`, `hard`, `expert`.
     - `options`: 4 clean Arabic options.
     - `correctAnswerIndex`: Integer index (0..3).
     - `explanation`: Detailed educational explanation.
     - `source`: `{ type, reference, url: null }` with precise Quran surah/ayah, Sahih hadith numbers, or classical historical records.
     - `reviewStatus`: Honestly audited — 196 verified against primary sources, 4 designated as `needs_review` reflecting scholarly discussions.

2. **Daily Knowledge Cards (معلومة اليوم)**:
   - 31 authentic, verified daily facts (`DAILY_FACTS`) with surah/hadith references.
   - Deterministically selected based on day of year.
   - Includes a quick action to launch an untimed practice quiz in that specific topic.

---

### C. Advanced Educational UX Features (P1 - Completed)
1. **Smart Review & Wrong-Answer Retries (`#screen-wrong-review`)**:
   - Automatically logs incorrect or timed-out questions.
   - Users can review missed questions, study the correct answers and sources, and retry only their mistakes as a focused quiz.
   - "تم الفهم" (Mark as understood) button to remove mastered items.

2. **Favorites System (`#screen-favorites`)**:
   - Heart button directly on active questions to bookmark items.
   - Dedicated favorites screen allowing review and starting a quiz consisting exclusively of bookmarked items.

3. **Arabic Smart Search (`#screen-search`)**:
   - Instant search with Arabic normalization:
     - Strips Arabic diacritics / tashkeel (`َ ُ ِ ّ ْ ً ٌ ٍ`).
     - Normalizes hamzas (`إ`, `أ`, `آ` -> `ا`).
     - Normalizes taa marbuta (`ة` -> `ه`) and alif maqsura (`ى` -> `ي`).
   - Searches question text, explanations, and options.
   - Includes Category and Difficulty filters.

4. **Daily Challenge (`#screen-daily`)**:
   - Deterministic 10-question challenge seeded by the current calendar date (`YYYY-MM-DD`).
   - Guarantees identical challenge for all users on the same day without requiring a backend server.
   - Prevents duplicate questions.

5. **Gamification & Achievements**:
   - 7 progression levels: المبتدئ (0 XP) -> الحافظ المجاز (5000+ XP).
   - 12 purposeful badges with verifiable criteria (first quiz, 10 quizzes, perfect score, streak, favorites count, review completion, etc.).
   - Toast notification animation upon unlocking new badges.

---

### D. Design System & Accessibility (P0 - Completed)
1. **Modern Islamic Editorial Luxury Palette**:
   - Main Background: `#0B1512`
   - Secondary Background: `#10211B`
   - Cards & Surfaces: `#172B23`
   - Primary Emerald: `#2E8B68`
   - Gold Accent: `#D7B56D`
   - Primary Text: `#F4F1E8`
   - Secondary Text: `#B9C7BD`
   - Borders: `#30463A`
   - Complete Light Theme support (Luxury Parchment & Emerald).
2. **Typography & Layout**:
   - Cairo, Tajawal, and Amiri Arabic font stack.
   - Refined octagram geometric star motifs and subtle arabesque SVG line art.
   - Fully responsive across viewports (mobile 320px+, tablet, desktop, 4K).
   - Bottom navigation bar on mobile devices (`الرئيسية`, `البحث`, `اليومي`, `المفضلة`, `الإحصائيات`).
   - `prefers-reduced-motion` compliance for users with motion sensitivity.
   - ARIA roles, labels, and keyboard accessible focus states.

---

## 3. Automated Test Verification Results
The test suite (`scripts/test_suite.js`) validated:
- **Questions Count**: Exactly 200 questions.
- **IDs Uniqueness**: 200 / 200 unique IDs.
- **Structural Integrity**: 100% pass (4 choices, valid correctAnswerIndex 0..3, explanations, sources).
- **Arabic Normalization & Search**: 100% pass across tashkeel, hamza variants, and sub-string search.
- **Daily Challenge Determinism**: 100% pass (identical for same date, unique questions, distinct between days).
- **Scoring & XP Formula**: 100% pass across edge cases and zero division.
- **LocalStorage Migration**: 100% pass from legacy v1 to modern v2.
- **Syntax Check**: `node -c script.js` executed with 0 errors.

---

## 4. GitHub Pages Deployment
- All asset paths are relative (`style.css`, `script.js`).
- Can be pushed directly to the `main` or `gh-pages` branch on GitHub for immediate live hosting at [https://mohamed249k.github.io/Ma3arf/](https://mohamed249k.github.io/Ma3arf/).
