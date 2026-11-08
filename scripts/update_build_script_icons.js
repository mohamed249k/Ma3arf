// scripts/update_build_script_icons.js
const fs = require('fs');

let content = fs.readFileSync('./scripts/build_full_app.js', 'utf8');

// 1. Read icons_data.js and prepare injection
const iconsData = fs.readFileSync('./scripts/icons_data.js', 'utf8');

// Insert iconsData right after the questions and daily facts declarations
const targetAnchor = `const dailyFacts = JSON.parse(fs.readFileSync('./scripts/daily_facts.json', 'utf8'));`;
const replacementAnchor = `const dailyFacts = JSON.parse(fs.readFileSync('./scripts/daily_facts.json', 'utf8'));
const iconsData = fs.readFileSync('./scripts/icons_data.js', 'utf8');`;

if (!content.includes('const iconsData = fs.readFileSync')) {
  content = content.replace(targetAnchor, replacementAnchor);
}

// 2. Inject iconsData at the top of jsBody before LEVEL_CONFIGS
const jsBodyAnchor = `const jsBody = \`
// ==========================================================================
// 1. قاعدة البيانات الموثقة الشاملة (800 سؤال إسلامي مع المصادر والآيات)
// ==========================================================================`;

const jsBodyWithIcons = `const jsBody = \`
// ==========================================================================
// 0. محرك الأيقونات المتجهية الموحدة (Phosphor Duotone + Islamic Icons)
// ==========================================================================
\${iconsData}

// ==========================================================================
// 1. قاعدة البيانات الموثقة الشاملة (800 سؤال إسلامي مع المصادر والآيات)
// ==========================================================================`;

if (!content.includes('محرك الأيقونات المتجهية الموحدة')) {
  content = content.replace(jsBodyAnchor, jsBodyWithIcons);
}

// 3. Update LEVEL_CONFIGS
const oldLevels = `const LEVEL_CONFIGS = [
  { name: 'المبتدئ', minXp: 0, maxXp: 100, icon: '🌱' },
  { name: 'المبادر', minXp: 100, maxXp: 250, icon: '⚡' },
  { name: 'المتوسط', minXp: 250, maxXp: 500, icon: '⚔️' },
  { name: 'المتقدم', minXp: 500, maxXp: 1000, icon: '🏛️' },
  { name: 'الخبير', minXp: 1000, maxXp: 2000, icon: '👑' },
  { name: 'العالم الأثري', minXp: 2000, maxXp: 5000, icon: '🌟' },
  { name: 'الحافظ المجاز', minXp: 5000, maxXp: 999999, icon: '🕌' }
];`;

const newLevels = `const LEVEL_CONFIGS = [
  { name: 'المبتدئ', minXp: 0, maxXp: 100, icon: AppIcons.get('plant', { size: 20, className: 'icon-gold' }) },
  { name: 'المبادر', minXp: 100, maxXp: 250, icon: AppIcons.get('lightning', { size: 20, className: 'icon-gold' }) },
  { name: 'المتوسط', minXp: 250, maxXp: 500, icon: AppIcons.get('sword', { size: 20, className: 'icon-gold' }) },
  { name: 'المتقدم', minXp: 500, maxXp: 1000, icon: AppIcons.get('bank', { size: 20, className: 'icon-gold' }) },
  { name: 'الخبير', minXp: 1000, maxXp: 2000, icon: AppIcons.get('crown', { size: 20, className: 'icon-gold' }) },
  { name: 'العالم الأثري', minXp: 2000, maxXp: 5000, icon: AppIcons.get('sparkle', { size: 20, className: 'icon-gold' }) },
  { name: 'الحافظ المجاز', minXp: 5000, maxXp: 999999, icon: AppIcons.get('fa-mosque', { size: 20, className: 'icon-gold' }) }
];`;

content = content.replace(oldLevels, newLevels);

// 4. Update BADGES
const oldBadges = `const BADGES = [
  { id: 'first_quiz', name: 'باحث عن العلم', icon: '🌱', desc: 'أكملت أول اختبار بنجاح على المنصة.', condition: 'complete_first_quiz' },
  { id: 'quiz_10', name: 'طالب علم مجتهد', icon: '📚', desc: 'أكملت 10 اختبارات معرفية مكتملة.', condition: 'complete_10_quizzes' },
  { id: 'perfect_score', name: 'حافظ متقن', icon: '🏆', desc: 'حققت نسبة كاملة 100% في أي اختبار.', condition: 'perfect_score' },
  { id: 'hard_core', name: 'عالم المستقبل', icon: '👑', desc: 'أكملت بنجاح اختباراً بمستوى المتقدم أو الخبير.', condition: 'complete_hard_quiz' },
  { id: 'xp_master', name: 'سادن المعرفة', icon: '🏛️', desc: 'جمعت أكثر من 500 نقطة خبرة (XP) إجمالاً.', condition: 'xp_500' },
  { id: 'xp_grandmaster', name: 'بحر العلوم', icon: '⭐', desc: 'تجاوزت 1500 نقطة خبرة تراكمية.', condition: 'xp_1500' },
  { id: 'quran_master', name: 'صديق القرآن', icon: '📖', desc: 'أجبت على 5 أسئلة متتالية صحيحة في علوم القرآن.', condition: 'quran_streak' },
  { id: 'hadith_master', name: 'محب السنة', icon: '📜', desc: 'أجبت على 5 أسئلة متتالية صحيحة في الحديث الشريف.', condition: 'hadith_streak' },
  { id: 'daily_champion', name: 'مداوم على التحدي', icon: '🔥', desc: 'أكملت التحدي اليومي بنجاح.', condition: 'daily_challenge' },
  { id: 'favorite_collector', name: 'جامع الفوائد', icon: '🔖', desc: 'حفظت 5 أسئلة أو أكثر في قائمة المفضلة.', condition: 'favorite_5' },
  { id: 'diligent_reviewer', name: 'المراجع الدقيق', icon: '🔄', desc: 'راجعت وصححت إجاباتك السابقة الخاطئة.', condition: 'review_wrong' },
  { id: 'polymath', name: 'موسوعي الثقافة', icon: '🌍', desc: 'أجريت اختبارات في 5 تصنيفات علمية مختلفة.', condition: 'five_categories' }
];`;

const newBadges = `const BADGES = [
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
];`;

content = content.replace(oldBadges, newBadges);

// 5. Update CATEGORY_ICONS
const oldCats = `const CATEGORY_ICONS = {
  'القرآن الكريم': '📖',
  'الحديث الشريف': '📜',
  'السيرة النبوية': '🕌',
  'قصص الأنبياء': '⛵',
  'الصحابة': '👥',
  'العقيدة': '⚖️',
  'الفقه': '🏛️',
  'الأخلاق الإسلامية': '🌱',
  'العبادات': '📿',
  'معلومات إسلامية عامة': '🌍'
};`;

const newCats = `const CATEGORY_ICONS = {
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
};`;

content = content.replace(oldCats, newCats);

// 6. Update SoundEngine
content = content.replace(`icon.innerText = '🔊';`, `icon.innerHTML = AppIcons.get('speaker-high', { size: 18, className: 'icon-gold' });`);
content = content.replace(`icon.innerText = '🔇';`, `icon.innerHTML = AppIcons.get('speaker-slash', { size: 18, className: 'icon-muted' });`);

// 7. Update renderProfileManagementModal
content = content.replace(
  `<span class="profile-badge-icon">\${isActive ? '⭐' : '👤'}</span>`,
  `<span class="profile-badge-icon">\${isActive ? AppIcons.get('crown', { size: 18, className: 'icon-gold' }) : AppIcons.get('user-circle', { size: 18, className: 'icon-muted' })}</span>`
);
content = content.replace(
  `'<span class="status-badge ready">النشط حالياً ✓</span>'`,
  `\`<span class="status-badge ready">\${AppIcons.get('check-circle', { size: 14, className: 'icon-green' })} النشط حالياً</span>\``
);

// 8. Update updateXpUI
content = content.replace(`if (badgeEl) badgeEl.innerText = currentLvl.icon;`, `if (badgeEl) badgeEl.innerHTML = currentLvl.icon;`);
content = content.replace(`if (lbIcon) lbIcon.innerText = currentLvl.icon;`, `if (lbIcon) lbIcon.innerHTML = currentLvl.icon;`);

// 9. Update learning mode timer
content = content.replace(
  `if (timerDigits) timerDigits.innerText = '📖';`,
  `if (timerDigits) timerDigits.innerHTML = AppIcons.get('book-open-text', { size: 22, className: 'icon-gold' });`
);

// 10. Update showQuestionFeedback
content = content.replace(
  `if (iconEl) iconEl.innerText = '✅';`,
  `if (iconEl) iconEl.innerHTML = AppIcons.get('check-circle', { size: 28, className: 'icon-green' });`
);
content = content.replace(
  `if (iconEl) iconEl.innerText = '⚠️';`,
  `if (iconEl) iconEl.innerHTML = AppIcons.get('x-circle', { size: 28, className: 'icon-red' });`
);
content = content.replace(
  `text += \`\\n\\n📖 المرجع: \${questionObj.source.reference}\`;`,
  `text += \`\\n\\nالمرجع والتوثيق: \${questionObj.source.reference}\`;`
);

// 11. Update renderResultsScreen
content = content.replace(
  `if (titleEl) titleEl.innerText = 'ما شاء الله! إتقان تام ونتيجة كاملة 🌟';`,
  `if (titleEl) titleEl.innerHTML = 'ما شاء الله! إتقان تام ونتيجة كاملة ' + AppIcons.get('sparkle', { size: 22, className: 'icon-gold' });`
);
content = content.replace(
  `if (titleEl) titleEl.innerText = 'أحسنت! أداء متميز ورفيع 🏅';`,
  `if (titleEl) titleEl.innerHTML = 'أحسنت! أداء متميز ورفيع ' + AppIcons.get('medal', { size: 22, className: 'icon-gold' });`
);
content = content.replace(
  `if (titleEl) titleEl.innerText = 'أداء حسن وبداية طيبة 👍';`,
  `if (titleEl) titleEl.innerHTML = 'أداء حسن وبداية طيبة ' + AppIcons.get('thumbs-up', { size: 22, className: 'icon-gold' });`
);
content = content.replace(
  `if (titleEl) titleEl.innerText = 'طلب العلم عبادة وتدرج 📚';`,
  `if (titleEl) titleEl.innerHTML = 'طلب العلم عبادة وتدرج ' + AppIcons.get('books', { size: 22, className: 'icon-gold' });`
);

content = content.replace(
  `if (percent === 100) lvlEl.innerText = 'الحافظ المتقن 👑';`,
  `if (percent === 100) lvlEl.innerHTML = 'الحافظ المتقن ' + AppIcons.get('crown', { size: 18, className: 'icon-gold' });`
);
content = content.replace(
  `else if (percent >= 80) lvlEl.innerText = 'العالم المتبحر 🏛️';`,
  `else if (percent >= 80) lvlEl.innerHTML = 'العالم المتبحر ' + AppIcons.get('bank', { size: 18, className: 'icon-gold' });`
);
content = content.replace(
  `else if (percent >= 50) lvlEl.innerText = 'المبادر المجتهد ⚔️';`,
  `else if (percent >= 50) lvlEl.innerHTML = 'المبادر المجتهد ' + AppIcons.get('sword', { size: 18, className: 'icon-gold' });`
);
content = content.replace(
  `else lvlEl.innerText = 'طالب العلم التأسيسي 🌱';`,
  `else lvlEl.innerHTML = 'طالب العلم التأسيسي ' + AppIcons.get('plant', { size: 18, className: 'icon-green' });`
);

// 12. Update renderReviewAnswersList
content = content.replace(
  `const statusIcon = log.isCorrect ? '✅' : '❌';`,
  `const statusIcon = log.isCorrect ? AppIcons.get('check-circle', { size: 16, className: 'icon-green' }) : AppIcons.get('x-circle', { size: 16, className: 'icon-red' });`
);

// 13. Update renderLeaderboard
const oldPodium = `    const top3 = list.slice(0, 3);
    const ranks = ['rank-1', 'rank-2', 'rank-3'];
    const medals = ['🥇', '🥈', '🥉'];
    const crowns = ['👑', '⭐', '✨'];

    top3.forEach((item, idx) => {
      const slot = document.createElement('div');
      slot.className = 'podium-slot ' + ranks[idx];
      slot.innerHTML = \`
        <span class="podium-crown">\${crowns[idx]}</span>
        <div class="podium-rank-badge">\${medals[idx]}</div>`;

const newPodium = `    const top3 = list.slice(0, 3);
    const ranks = ['rank-1', 'rank-2', 'rank-3'];
    const crowns = [
      AppIcons.get('crown', { size: 24, className: 'icon-gold' }),
      AppIcons.get('medal', { size: 22, className: 'icon-silver' }),
      AppIcons.get('medal', { size: 20, className: 'icon-bronze' })
    ];
    const rankNumbers = ['1', '2', '3'];

    top3.forEach((item, idx) => {
      const slot = document.createElement('div');
      slot.className = 'podium-slot ' + ranks[idx];
      slot.innerHTML = \`
        <span class="podium-crown">\${crowns[idx]}</span>
        <div class="podium-rank-badge">\${rankNumbers[idx]}</div>`;

content = content.replace(oldPodium, newPodium);

const oldRankDisplay = `      let rankDisplay = (idx + 1).toString();
      if (idx === 0) rankDisplay = '🥇 1';
      else if (idx === 1) rankDisplay = '🥈 2';
      else if (idx === 2) rankDisplay = '🥉 3';`;

const newRankDisplay = `      let rankDisplay = (idx + 1).toString();
      if (idx === 0) rankDisplay = AppIcons.get('crown', { size: 16, className: 'icon-gold' }) + ' 1';
      else if (idx === 1) rankDisplay = AppIcons.get('medal', { size: 16, className: 'icon-silver' }) + ' 2';
      else if (idx === 2) rankDisplay = AppIcons.get('medal', { size: 16, className: 'icon-bronze' }) + ' 3';`;

content = content.replace(oldRankDisplay, newRankDisplay);

// 14. Update renderFavoritesScreen
content = content.replace(
  `<button type="button" class="btn-remove-fav" title="إزالة من المفضلة">❌</button>`,
  `<button type="button" class="btn-remove-fav" title="إزالة من المفضلة">\${AppIcons.get('trash', { size: 16, className: 'icon-muted' })}</button>`
);
content = content.replace(
  `\${q.source?.reference ? \`<div class="fav-card-src">📖 \${q.source.reference}</div>\` : ''}`,
  `\${q.source?.reference ? \`<div class="fav-card-src">\${AppIcons.get('fa-quran', { size: 14, className: 'icon-gold' })} \${q.source.reference}</div>\` : ''}`
);

// 15. Update renderQuestionsBrowser
content = content.replace(
  `<div class="empty-icon">🔍</div>`,
  `<div class="empty-icon">\${AppIcons.get('magnifying-glass', { size: 48, className: 'icon-muted' })}</div>`
);
content = content.replace(
  `<button type="button" class="btn-fav-star" title="حفظ في المفضلة">\${profile.favorites.includes(q.id) ? '❤️' : '🤍'}</button>`,
  `<button type="button" class="btn-fav-star" title="حفظ في المفضلة">\${profile.favorites.includes(q.id) ? AppIcons.get('bookmark-simple', { size: 18, className: 'icon-gold' }) : AppIcons.get('bookmark-simple', { size: 18, className: 'icon-muted' })}</button>`
);
content = content.replace(
  `starBtn.innerText = profile.favorites.includes(q.id) ? '❤️' : '🤍';`,
  `starBtn.innerHTML = profile.favorites.includes(q.id) ? AppIcons.get('bookmark-simple', { size: 18, className: 'icon-gold' }) : AppIcons.get('bookmark-simple', { size: 18, className: 'icon-muted' });`
);

// 16. Update Daily Fact & Screen
content = content.replace(
  `<span class="fact-badge">معلومة اليوم 🌿</span>`,
  `<span class="fact-badge">\${AppIcons.get('sparkle', { size: 14, className: 'icon-gold' })} معلومة اليوم</span>`
);
content = content.replace(
  `\${fact.source ? \`<div class="fact-source">📖 المصدر: \${fact.source}</div>\` : ''}`,
  `\${fact.source ? \`<div class="fact-source">\${AppIcons.get('fa-quran', { size: 14, className: 'icon-gold' })} المصدر: \${fact.source}</div>\` : ''}`
);
content = content.replace(
  `statusEl.innerHTML = '<span class="status-badge completed">✓ تم إكمال التحدي اليومي بنجاح!</span>';`,
  `statusEl.innerHTML = \`<span class="status-badge completed">\${AppIcons.get('check-circle', { size: 14, className: 'icon-green' })} تم إكمال التحدي اليومي بنجاح!</span>\`;`
);
content = content.replace(
  `statusEl.innerHTML = '<span class="status-badge ready">⚡ التحدي اليومي جاهز للانطلاق</span>';`,
  `statusEl.innerHTML = \`<span class="status-badge ready">\${AppIcons.get('lightning', { size: 14, className: 'icon-gold' })} التحدي اليومي جاهز للانطلاق</span>\`;`
);
content = content.replace(
  `<div class="dk-badge">معلومة اليوم الموثقة 🌿</div>`,
  `<div class="dk-badge">\${AppIcons.get('sparkle', { size: 14, className: 'icon-gold' })} معلومة اليوم الموثقة</div>`
);
content = content.replace(
  `\${fact.source ? \`<div class="dk-source">📖 المرجع والتوثيق: \${fact.source}</div>\` : ''}`,
  `\${fact.source ? \`<div class="dk-source">\${AppIcons.get('fa-quran', { size: 14, className: 'icon-gold' })} المرجع والتوثيق: \${fact.source}</div>\` : ''}`
);

// 17. Update Badges Modal
const oldBadgeModal = `      const isUnlocked = profile.unlockedBadges.includes(badge.id);
      const card = document.createElement('div');
      card.className = 'badge-card ' + (isUnlocked ? 'unlocked' : 'locked');
      card.innerHTML = \`
        <div class="badge-icon">\${badge.icon}</div>
        <h5 class="badge-name">\${badge.name}</h5>
        <p class="badge-desc">\${badge.desc}</p>
        <span class="badge-status">\${isUnlocked ? 'مكتسب ✓' : 'قيد الإنجاز 🔒'}</span>
      \`;`;

const newBadgeModal = `      const isUnlocked = profile.unlockedBadges.includes(badge.id);
      const card = document.createElement('div');
      card.className = 'badge-card ' + (isUnlocked ? 'unlocked' : 'locked');
      const statusIcon = isUnlocked ? AppIcons.get('seal-check', { size: 14, className: 'icon-green' }) : AppIcons.get('lock', { size: 14, className: 'icon-muted' });
      card.innerHTML = \`
        <div class="badge-icon">\${badge.icon}</div>
        <h5 class="badge-name">\${badge.name}</h5>
        <p class="badge-desc">\${badge.desc}</p>
        <span class="badge-status">\${statusIcon} \${isUnlocked ? 'مكتسب' : 'قيد الإنجاز'}</span>
      \`;`;

content = content.replace(oldBadgeModal, newBadgeModal);

// 18. Update selectGameConfig checkmark
content = content.replace(
  `if (action) action.innerText = 'محدد حالياً ✓';`,
  `if (action) action.innerHTML = 'محدد حالياً ' + AppIcons.get('check-circle', { size: 14, className: 'icon-green' });`
);

// 19. Update footer copy checkmark
content = content.replace(
  `textSpan.innerText = 'تم النسخ! ✓';`,
  `textSpan.innerHTML = 'تم النسخ! ' + AppIcons.get('check', { size: 14, className: 'icon-green' });`
);

fs.writeFileSync('./scripts/build_full_app.js', content, 'utf8');
console.log('Successfully updated scripts/build_full_app.js with AppIcons!');
