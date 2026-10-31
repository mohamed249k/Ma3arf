// scripts/apply_icon_overhaul.js
const fs = require('fs');
const { AppIcons } = require('./icons_data.js');

console.log('=== APPLYING COMPLETE ICON SYSTEM OVERHAUL ===');

// Helper to get svg string
const icon = (name, opts = {}) => AppIcons.get(name, opts);

// 1. UPDATE index.html
let html = fs.readFileSync('./index.html', 'utf8');

// Header logo icon
html = html.replace(
  '<span class="logo-icon" aria-hidden="true">🕌</span>',
  `<span class="logo-icon" aria-hidden="true">${icon('mosque', { size: 24, className: 'icon-gold' })}</span>`
);

// Header level badge icon
html = html.replace(
  '<div class="level-icon" id="user-level-badge" aria-label="رتبة المستوى">🌱</div>',
  `<div class="level-icon" id="user-level-badge" aria-label="رتبة المستوى">${icon('plant', { size: 18, className: 'icon-gold' })}</div>`
);

// Header actions
html = html.replace(
  '<span class="btn-emoji" aria-hidden="true">🏆</span>',
  `<span class="btn-icon" aria-hidden="true">${icon('trophy', { size: 18, className: 'icon-gold' })}</span>`
);
html = html.replace(
  '<span class="btn-emoji" aria-hidden="true">✍️</span>',
  `<span class="btn-icon" aria-hidden="true">${icon('pencil-simple-line', { size: 18, className: 'icon-gold' })}</span>`
);
html = html.replace(
  '<span class="sound-icon-on" id="sound-icon-display" aria-hidden="true">🔊</span>',
  `<span class="sound-icon-on" id="sound-icon-display" aria-hidden="true">${icon('speaker-high', { size: 18, className: 'icon-gold' })}</span>`
);

// Landing quick nav cards
html = html.replace(
  '<div class="nav-card-icon">⚡</div>',
  `<div class="nav-card-icon">${icon('lightning', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">📖</div>',
  `<div class="nav-card-icon">${icon('book-open-text', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">🔄</div>',
  `<div class="nav-card-icon">${icon('arrow-counter-clockwise', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">🔖</div>',
  `<div class="nav-card-icon">${icon('bookmark-simple', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">🔍</div>',
  `<div class="nav-card-icon">${icon('magnifying-glass', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">🏆</div>',
  `<div class="nav-card-icon">${icon('trophy', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<div class="nav-card-icon">✍️</div>',
  `<div class="nav-card-icon">${icon('pencil-simple-line', { size: 24, className: 'icon-gold' })}</div>`
);

// Mode toggle buttons
html = html.replace(
  '<span class="mode-icon">⚔️</span>',
  `<span class="mode-icon">${icon('lightning', { size: 24, className: 'icon-gold' })}</span>`
);
html = html.replace(
  '<span class="mode-icon">📖</span>',
  `<span class="mode-icon">${icon('book-open-text', { size: 24, className: 'icon-gold' })}</span>`
);

// Difficulty cards
html = html.replace(
  '<div class="card-icon">🌱</div>',
  `<div class="card-icon">${icon('plant', { size: 32, className: 'icon-green' })}</div>`
);
html = html.replace(
  '<span class="meta-item">🌱 المستوى التأسيسي</span>',
  `<span class="meta-item">${icon('plant', { size: 14, className: 'icon-green' })} المستوى التأسيسي</span>`
);

html = html.replace(
  '<div class="card-icon">⚔️</div>',
  `<div class="card-icon">${icon('compass', { size: 32, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span class="meta-item">⚔️ المستوى المتوسط</span>',
  `<span class="meta-item">${icon('compass', { size: 14, className: 'icon-gold' })} المستوى المتوسط</span>`
);

html = html.replace(
  '<div class="card-icon">🏛️</div>',
  `<div class="card-icon">${icon('graduation-cap', { size: 32, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span class="meta-item">🏛️ المستوى المتقدم</span>',
  `<span class="meta-item">${icon('graduation-cap', { size: 14, className: 'icon-gold' })} المستوى المتقدم</span>`
);

html = html.replace(
  '<div class="card-icon">👑</div>',
  `<div class="card-icon">${icon('crown', { size: 32, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span class="meta-item">👑 مستوى النخبة</span>',
  `<span class="meta-item">${icon('crown', { size: 14, className: 'icon-gold' })} مستوى النخبة</span>`
);

// Launch quiz button
html = html.replace(
  '<button class="btn btn-primary" id="launch-quiz-btn">ابدأ جلسة الأسئلة 🚀</button>',
  `<button class="btn btn-primary" id="launch-quiz-btn"><span>ابدأ جلسة الأسئلة</span> ${icon('rocket-launch', { size: 18 })}</button>`
);

// Quiz feedback panel
html = html.replace(
  '<div class="feedback-icon" id="feedback-icon">🎉</div>',
  `<div class="feedback-icon" id="feedback-icon">${icon('check-circle', { size: 28, className: 'icon-green' })}</div>`
);
html = html.replace(
  '<span>📖 المصدر والتوثيق الشرعي</span>',
  `<span>${icon('book-bookmark', { size: 15, className: 'icon-gold' })} المصدر والتوثيق الشرعي</span>`
);
html = html.replace(
  '<span>⚠️ إبلاغ عن ملاحظة</span>',
  `<span>${icon('warning-circle', { size: 15, className: 'icon-red' })} إبلاغ عن ملاحظة</span>`
);
html = html.replace(
  '<span>📋 مراجعة الإجابات</span>',
  `<span>${icon('copy', { size: 15, className: 'icon-gold' })} مراجعة الإجابات</span>`
);

// Results screen
html = html.replace(
  '<h3 class="panel-subtitle">🏆 أوسمة جديدة تم استحقاقها!</h3>',
  `<h3 class="panel-subtitle">${icon('trophy', { size: 20, className: 'icon-gold' })} أوسمة جديدة تم استحقاقها!</h3>`
);
html = html.replace(
  '<span>🌟 مشاركة النتيجة وتحدي صديق</span>',
  `<span>${icon('share-network', { size: 16, className: 'icon-gold' })} مشاركة النتيجة وتحدي صديق</span>`
);
html = html.replace(
  '<span>🏆 لوحة المتصدرين</span>',
  `<span>${icon('trophy', { size: 16, className: 'icon-gold' })} لوحة المتصدرين</span>`
);
html = html.replace(
  '<button class="btn btn-outline btn-lg hidden" id="results-retry-wrong-btn">مراجعة وتكرار الأسئلة الخاطئة 🔄</button>',
  `<button class="btn btn-outline btn-lg hidden" id="results-retry-wrong-btn"><span>مراجعة وتكرار الأسئلة الخاطئة</span> ${icon('arrow-counter-clockwise', { size: 16 })}</button>`
);

// Favorites screen
html = html.replace(
  '<h2 class="section-title">قائمة الأسئلة المفضلة 🔖</h2>',
  `<h2 class="section-title">قائمة الأسئلة المفضلة ${icon('bookmark-simple', { size: 24, className: 'icon-gold' })}</h2>`
);
html = html.replace(
  '<button class="btn btn-primary" id="start-favorites-quiz-btn">اختبار الأسئلة المفضلة 🚀</button>',
  `<button class="btn btn-primary" id="start-favorites-quiz-btn"><span>اختبار الأسئلة المفضلة</span> ${icon('rocket-launch', { size: 18 })}</button>`
);
html = html.replace(
  '<div class="empty-icon">🔖</div>',
  `<div class="empty-icon">${icon('bookmark-simple', { size: 48, className: 'icon-gold' })}</div>`
);

// Wrong review screen
html = html.replace(
  '<h2 class="section-title">مراجعة الإجابات السابقة الخاطئة 🔄</h2>',
  `<h2 class="section-title">مراجعة الإجابات السابقة الخاطئة ${icon('arrow-counter-clockwise', { size: 24, className: 'icon-gold' })}</h2>`
);
html = html.replace(
  '<button class="btn btn-primary" id="start-wrong-quiz-btn">إعادة اختبار الأخطاء 🚀</button>',
  `<button class="btn btn-primary" id="start-wrong-quiz-btn"><span>إعادة اختبار الأخطاء</span> ${icon('rocket-launch', { size: 18 })}</button>`
);
html = html.replace(
  '<div class="empty-icon">🌟</div>',
  `<div class="empty-icon">${icon('sparkle', { size: 48, className: 'icon-gold' })}</div>`
);

// Search screen
html = html.replace(
  '<h2 class="section-title">البحث في بنك الأسئلة والمعارف 🔍</h2>',
  `<h2 class="section-title">البحث في بنك الأسئلة والمعارف ${icon('magnifying-glass', { size: 24, className: 'icon-gold' })}</h2>`
);
html = html.replace(
  '<span class="search-icon-inside" aria-hidden="true">🔍</span>',
  `<span class="search-icon-inside" aria-hidden="true">${icon('magnifying-glass', { size: 18, className: 'icon-muted' })}</span>`
);

// Daily screen
html = html.replace(
  '<h2 class="section-title">الزاد والمسابقة اليومية ⚡</h2>',
  `<h2 class="section-title">الزاد والمسابقة اليومية ${icon('lightning', { size: 24, className: 'icon-gold' })}</h2>`
);
html = html.replace(
  '<div class="dc-icon">🏆</div>',
  `<div class="dc-icon">${icon('trophy', { size: 48, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span class="status-badge ready">⚡ جاهز للانطلاق</span>',
  `<span class="status-badge ready">${icon('lightning', { size: 14, className: 'icon-gold' })} جاهز للانطلاق</span>`
);
html = html.replace(
  '<button class="btn btn-primary btn-lg" id="start-daily-challenge-btn">ابدأ التحدي اليومي 🚀</button>',
  `<button class="btn btn-primary btn-lg" id="start-daily-challenge-btn"><span>ابدأ التحدي اليومي</span> ${icon('rocket-launch', { size: 18 })}</button>`
);

// Leaderboard screen
html = html.replace(
  '<h2 class="section-title">لوحة المتصدرين والتنافس المعرفي 🏆</h2>',
  `<h2 class="section-title">لوحة المتصدرين والتنافس المعرفي ${icon('trophy', { size: 24, className: 'icon-gold' })}</h2>`
);
html = html.replace(
  '<span class="profile-badge-icon" id="lb-profile-icon">🌱</span>',
  `<span class="profile-badge-icon" id="lb-profile-icon">${icon('user-circle', { size: 22, className: 'icon-gold' })}</span>`
);
html = html.replace(
  '<span>إدارة الملفات 👥</span>',
  `<span>إدارة الملفات</span> ${icon('users', { size: 16 })}`
);
html = html.replace(
  '<button type="button" class="btn btn-sm btn-outline text-red" id="clear-leaderboard-btn" title="مسح سجل المتصدرين المحلي">مسح السجل 🗑️</button>',
  `<button type="button" class="btn btn-sm btn-outline text-red" id="clear-leaderboard-btn" title="مسح سجل المتصدرين المحلي"><span>مسح السجل</span> ${icon('trash', { size: 14 })}</button>`
);
html = html.replace(
  '<div class="empty-icon">🏆</div>',
  `<div class="empty-icon">${icon('trophy', { size: 48, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span>💡 ملاحظة: لوحة المتصدرين تعمل محلياً على هذا الجهاز وتتيح تنافس عدة ملفات شخصية لأفراد الأسرة والأصدقاء على نفس المتصفح دون الحاجة لإنشاء حساب أو اتصال بالإنترنت.</span>',
  `<span>${icon('lightbulb', { size: 16, className: 'icon-gold' })} ملاحظة: لوحة المتصدرين تعمل محلياً على هذا الجهاز وتتيح تنافس عدة ملفات شخصية لأفراد الأسرة والأصدقاء على نفس المتصفح دون الحاجة لإنشاء حساب أو اتصال بالإنترنت.</span>`
);

// Sadaqah card in footer
html = html.replace(
  '<div class="sadaqah-icon" aria-hidden="true">🌿</div>',
  `<div class="sadaqah-icon" aria-hidden="true">${icon('plant', { size: 40, className: 'icon-gold' })}</div>`
);

// Modals
html = html.replace(
  '<div class="reset-warning-icon">⚠️</div>',
  `<div class="reset-warning-icon">${icon('warning-circle', { size: 48, className: 'icon-red' })}</div>`
);
html = html.replace(
  '<p class="reset-warning-text">⚠️ هذا الإجراء لا يمكن التراجع عنه مطلقاً!</p>',
  `<p class="reset-warning-text">${icon('warning-circle', { size: 16, className: 'icon-red' })} هذا الإجراء لا يمكن التراجع عنه مطلقاً!</p>`
);
html = html.replace(
  '<div class="toast-icon">🏆</div>',
  `<div class="toast-icon">${icon('trophy', { size: 24, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<h3 class="modal-title" id="share-modal-title">🌟 مشاركة النتيجة وتحدي صديق</h3>',
  `<h3 class="modal-title" id="share-modal-title">${icon('share-network', { size: 20, className: 'icon-gold' })} مشاركة النتيجة وتحدي صديق</h3>`
);
html = html.replace(
  '<span>🖼️ تحميل البطاقة كصورة PNG</span>',
  `<span>${icon('image', { size: 16 })} تحميل البطاقة كصورة PNG</span>`
);
html = html.replace(
  '<span>💬 مشاركة عبر واتساب</span>',
  `<span>${icon('whatsapp-logo', { size: 16 })} مشاركة عبر واتساب</span>`
);
html = html.replace(
  '<span>📋 نسخ رابط التحدي والنص</span>',
  `<span>${icon('copy', { size: 16 })} نسخ رابط التحدي والنص</span>`
);
html = html.replace(
  '<span>📲 مشاركة عبر التطبيقات</span>',
  `<span>${icon('device-mobile', { size: 16 })} مشاركة عبر التطبيقات</span>`
);
html = html.replace(
  '<h3 class="modal-title" id="review-modal-title">📋 مراجعة الإجابات قبل التسليم النهائي</h3>',
  `<h3 class="modal-title" id="review-modal-title">${icon('copy', { size: 20, className: 'icon-gold' })} مراجعة الإجابات قبل التسليم النهائي</h3>`
);
html = html.replace(
  '<button type="button" class="btn btn-outline" id="review-back-to-quiz-btn">العودة لمتابعة الحل ✏️</button>',
  `<button type="button" class="btn btn-outline" id="review-back-to-quiz-btn"><span>العودة لمتابعة الحل</span> ${icon('pencil-simple-line', { size: 15 })}</button>`
);
html = html.replace(
  '<button type="button" class="btn btn-primary pulse-glow" id="review-finalize-quiz-btn">تسليم الاختبار نهائياً ✅</button>',
  `<button type="button" class="btn btn-primary pulse-glow" id="review-finalize-quiz-btn"><span>تسليم الاختبار نهائياً</span> ${icon('check-circle', { size: 16 })}</button>`
);
html = html.replace(
  '<h3 class="modal-title" id="feedback-modal-title">✍️ اقتراح سؤال أو إبلاغ عن ملاحظة</h3>',
  `<h3 class="modal-title" id="feedback-modal-title">${icon('pencil-simple-line', { size: 20, className: 'icon-gold' })} اقتراح سؤال أو إبلاغ عن ملاحظة</h3>`
);
html = html.replace(
  '<button type="button" class="feedback-tab-btn active" id="tab-suggest-btn">اقتراح سؤال جديد 🌱</button>',
  `<button type="button" class="feedback-tab-btn active" id="tab-suggest-btn"><span>اقتراح سؤال جديد</span> ${icon('plant', { size: 15 })}</button>`
);
html = html.replace(
  '<button type="button" class="btn btn-primary" id="save-suggest-btn">حفظ في المسودات المحلية 💾</button>',
  `<button type="button" class="btn btn-primary" id="save-suggest-btn"><span>حفظ في المسودات المحلية</span> ${icon('floppy-disk', { size: 16 })}</button>`
);
html = html.replace(
  '<span>إرسال الاقتراح عبر واتساب 💬</span>',
  `<span>إرسال الاقتراح عبر واتساب</span> ${icon('whatsapp-logo', { size: 16 })}`
);
html = html.replace(
  '<button type="button" class="btn btn-outline" id="copy-suggest-btn">نسخ نص الاقتراح 📋</button>',
  `<button type="button" class="btn btn-outline" id="copy-suggest-btn"><span>نسخ نص الاقتراح</span> ${icon('copy', { size: 16 })}</button>`
);
html = html.replace(
  '<button type="button" class="btn btn-primary" id="save-report-btn">حفظ البلاغ محلياً 💾</button>',
  `<button type="button" class="btn btn-primary" id="save-report-btn"><span>حفظ البلاغ محلياً</span> ${icon('floppy-disk', { size: 16 })}</button>`
);
html = html.replace(
  '<span>إرسال البلاغ عبر واتساب 💬</span>',
  `<span>إرسال البلاغ عبر واتساب</span> ${icon('whatsapp-logo', { size: 16 })}`
);
html = html.replace(
  '<button type="button" class="btn btn-outline" id="copy-report-btn">نسخ نص البلاغ 📋</button>',
  `<button type="button" class="btn btn-outline" id="copy-report-btn"><span>نسخ نص البلاغ</span> ${icon('copy', { size: 16 })}</button>`
);
html = html.replace(
  '<div class="wa-contact-icon" aria-hidden="true">📱</div>',
  `<div class="wa-contact-icon" aria-hidden="true">${icon('whatsapp-logo', { size: 24, className: 'icon-green' })}</div>`
);
html = html.replace(
  '<h3 class="modal-title" id="source-modal-title">📖 المصدر والتوثيق الشرعي المعتمد</h3>',
  `<h3 class="modal-title" id="source-modal-title">${icon('book-bookmark', { size: 20, className: 'icon-gold' })} المصدر والتوثيق الشرعي المعتمد</h3>`
);
html = html.replace(
  '<span class="badge-icon">✅</span>',
  `<span class="badge-icon">${icon('seal-check', { size: 18, className: 'icon-green' })}</span>`
);
html = html.replace(
  '<span>📋 نسخ التوثيق الشرعي الكامل</span>',
  `<span>${icon('copy', { size: 16 })} نسخ التوثيق الشرعي الكامل</span>`
);
html = html.replace(
  '<h3 class="modal-title" id="profile-modal-title">👥 إدارة الملفات الشخصية على الجهاز</h3>',
  `<h3 class="modal-title" id="profile-modal-title">${icon('users', { size: 20, className: 'icon-gold' })} إدارة الملفات الشخصية على الجهاز</h3>`
);
html = html.replace(
  '<button type="button" class="btn btn-primary" id="create-profile-btn">إنشاء ➕</button>',
  `<button type="button" class="btn btn-primary" id="create-profile-btn"><span>إنشاء</span> ${icon('plus-circle', { size: 16 })}</button>`
);
html = html.replace(
  '<h3 class="modal-title" id="challenge-modal-title">🌟 وصلك تحدٍّ إسلامي جديد!</h3>',
  `<h3 class="modal-title" id="challenge-modal-title">${icon('trophy', { size: 20, className: 'icon-gold' })} وصلك تحدٍّ إسلامي جديد!</h3>`
);
html = html.replace(
  '<div class="challenge-hero-icon">⚔️</div>',
  `<div class="challenge-hero-icon">${icon('shield-check', { size: 48, className: 'icon-gold' })}</div>`
);
html = html.replace(
  '<span>قبول التحدي وبدء الاختبار الآن 🚀</span>',
  `<span>قبول التحدي وبدء الاختبار الآن</span> ${icon('rocket-launch', { size: 18 })}`
);

fs.writeFileSync('./index.html', html, 'utf8');
console.log('Successfully updated index.html with vector duotone icons!');
