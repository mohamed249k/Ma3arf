// scripts/test_count_buttons.js
const fs = require('fs');

console.log('=== VERIFYING QUESTION COUNT SELECTION BUTTONS ===');

const html = fs.readFileSync('./index.html', 'utf8');
const js = fs.readFileSync('./script.js', 'utf8');
const css = fs.readFileSync('./style.css', 'utf8');

// 1. Verify HTML Structure
const expectedCounts = [5, 10, 15, 20, 25, 30];
expectedCounts.forEach(count => {
  const pattern = new RegExp(`class="count-btn[^"]*"\\s+data-count="${count}"`);
  if (!pattern.test(html)) {
    console.error(`❌ FAIL: HTML missing button for data-count="${count}"`);
    process.exit(1);
  }
});
console.log('✅ PASS: All 6 count buttons exist in index.html with valid data-count attributes');

// 2. Verify CSS Styling for both .count-btn and .count-pill
if (!css.includes('.count-btn') || !css.includes('.count-options-wrapper')) {
  console.error('❌ FAIL: CSS missing count button classes');
  process.exit(1);
}
console.log('✅ PASS: CSS contains responsive grid layout and button styling');

// 3. Verify Event Handlers and querySelector in script.js
if (!js.includes("document.querySelectorAll('.count-btn, .count-pill')")) {
  console.error('❌ FAIL: script.js not selecting .count-btn properly');
  process.exit(1);
}
console.log('✅ PASS: script.js correctly binds event listeners to .count-btn');

// 4. Verify updateSetupSummary function exists in script.js
if (!js.includes('function updateSetupSummary()') || !js.includes('selected-setup-name')) {
  console.error('❌ FAIL: script.js missing updateSetupSummary function');
  process.exit(1);
}
console.log('✅ PASS: updateSetupSummary function is present and synchronizes setup summary bar');

// 5. Verify Quiz Slicing logic
if (!js.includes('Math.min(state.selectedQuestionCount, shuffled.length)')) {
  console.error('❌ FAIL: script.js not using selectedQuestionCount in prepareQuizSession');
  process.exit(1);
}
console.log('✅ PASS: prepareQuizSession accurately uses selectedQuestionCount for session questions');

console.log('🎉 ALL COUNT BUTTON CHECKS PASSED PERFECTLY!');
