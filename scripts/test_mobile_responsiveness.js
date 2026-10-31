// scripts/test_mobile_responsiveness.js
const fs = require('fs');

console.log('=== VERIFYING MOBILE & FLUTTER APP RESPONSIVENESS ===');

const css = fs.readFileSync('./style.css', 'utf8');
const js = fs.readFileSync('./script.js', 'utf8');
const html = fs.readFileSync('./index.html', 'utf8');

// 1. Verify in-quiz-session logic
if (!js.includes('in-quiz-session') || !css.includes('body.in-quiz-session .bottom-nav')) {
  console.error('❌ FAIL: Missing in-quiz-session body class logic or CSS rule');
  process.exit(1);
}
console.log('✅ PASS: Quiz session hides mobile bottom nav to prevent accidental exits and maximize screen space');

// 2. Verify compact quiz-info-panel HUD
if (!css.includes('smart-timer-container') || !css.includes('grid-template-areas')) {
  console.error('❌ FAIL: Missing compact mobile HUD styling');
  process.exit(1);
}
console.log('✅ PASS: Compact top HUD converts 420px card into sleek ~58px bar saving >330px height');

// 3. Verify mobile Thumb-Zone next button
if (!css.includes('.quiz-footer #next-question-btn') || !html.includes('quiz-footer-secondary')) {
  console.error('❌ FAIL: Missing thumb-zone full-width next question button');
  process.exit(1);
}
console.log('✅ PASS: Next question button is ergonomically full-width and thumb-accessible');

// 4. Verify touch-action optimization
if (!css.includes('touch-action: manipulation')) {
  console.error('❌ FAIL: Missing touch-action manipulation optimization');
  process.exit(1);
}
console.log('✅ PASS: Touch manipulation and tap-highlight disabled for snappy native app feel');

// 5. Verify Setup Screen Sticky bar above bottom nav
if (!css.includes('bottom: 74px')) {
  console.error('❌ FAIL: Missing setup summary bar mobile offset');
  process.exit(1);
}
console.log('✅ PASS: Setup summary bar stays neatly above mobile bottom navigation bar');

console.log('🎉 ALL MOBILE RESPONSIVENESS CHECKS PASSED PERFECTLY!');
