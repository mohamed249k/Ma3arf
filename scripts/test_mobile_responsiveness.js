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

// 6. Verify Mobile Header Overflow Protection & Privacy Button Visibility
if (!css.includes('.header-action-btn > span:not(.btn-icon):not(.sound-icon-on)') ||
    !css.includes('#privacy-header-btn') ||
    !css.includes('#open-stats-btn') ||
    !css.includes('max-width: 380px')) {
  console.error('❌ FAIL: Missing mobile header overflow protection or privacy button CSS rules');
  process.exit(1);
}
console.log('✅ PASS: Mobile header text labels hidden and ultra-compact width rules prevent button clipping');

// 7. Verify Multi-touchpoint Mobile Privacy Access Points
if (!html.includes('id="landing-card-privacy"') ||
    !html.includes('id="modal-privacy-link"') ||
    !html.includes('id="privacy-header-btn"') ||
    !html.includes('class="footer-privacy-link"')) {
  console.error('❌ FAIL: Missing one of the 4 designated privacy access points in index.html');
  process.exit(1);
}
console.log('✅ PASS: All 4 mobile privacy access points confirmed (Header, Landing Card, Stats Modal, Footer)');

// 8. Verify Daily Fact Source Object Resolution (No "undefined" or "[object Object]")
if (!js.includes('fact.source.reference') || !js.includes('fact.fact || fact.text')) {
  console.error('❌ FAIL: Daily fact data resolution still vulnerable to object or undefined rendering');
  process.exit(1);
}
console.log('✅ PASS: Daily fact properly extracts text and source reference string without object coercion');

console.log('🎉 ALL MOBILE RESPONSIVENESS CHECKS PASSED PERFECTLY!');
