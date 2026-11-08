// scripts/test_privacy_page.js
const fs = require('fs');

console.log('=== VERIFYING PRIVACY POLICY PAGE ===\n');

// 1. Check privacy.html exists and is well-formed
if (!fs.existsSync('privacy.html')) {
  console.error('❌ FAIL: privacy.html does not exist');
  process.exit(1);
}

const html = fs.readFileSync('privacy.html', 'utf8');
const svgOpen = (html.match(/<svg/g) || []).length;
const svgClose = (html.match(/<\/svg>/g) || []).length;

console.log(`- File size: ${html.length} bytes`);
console.log(`- Total <svg> open tags: ${svgOpen}, close tags: ${svgClose}`);

if (svgOpen === svgClose) {
  console.log('✅ PASS: All SVG tags in privacy.html are perfectly balanced');
} else {
  console.error(`❌ FAIL: SVG tags mismatch: ${svgOpen} open vs ${svgClose} close`);
}

// 2. Check essential Google Play compliance sections in privacy.html
const complianceChecks = [
  { name: 'App identity & Waqf / Sadaqah', pattern: 'مَعارِف' },
  { name: 'Developer contact name (Mohamed Karam)', pattern: 'محمد كرم' },
  { name: 'Developer phone (01017325592)', pattern: '01017325592' },
  { name: 'Strict No-PII collection disclosure', pattern: 'لا يطلب، ولا يجمع' },
  { name: 'Local storage disclosure', pattern: 'التخزين المحلي' },
  { name: 'COPPA & Children / Families Policy', pattern: 'COPPA' },
  { name: 'Ad-free disclosure', pattern: 'الإعلانات' },
  { name: 'No tracking / No Analytics disclosure', pattern: 'التتبع' },
  { name: 'Voluntary WhatsApp communication', pattern: 'واتساب' },
  { name: 'Data deletion rights', pattern: 'حذف' },
  { name: 'Back to main app link (index.html)', pattern: 'href="index.html"' },
  { name: 'Live GitHub Pages URL reference', pattern: 'https://mohamed249k.github.io/Ma3arf/' }
];

let allPassed = true;
complianceChecks.forEach(check => {
  if (html.includes(check.pattern)) {
    console.log(`✅ PASS: ${check.name} confirmed`);
  } else {
    console.error(`❌ FAIL: Missing requirement: ${check.name}`);
    allPassed = false;
  }
});

// 3. Check index.html links to privacy.html
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('href="privacy.html"')) {
  console.log('✅ PASS: index.html correctly links to privacy.html');
} else {
  console.error('❌ FAIL: index.html does not contain link to privacy.html');
  allPassed = false;
}

// Check header button in index.html
if (indexHtml.includes('id="privacy-header-btn"') && indexHtml.includes('سياسة الخصوصية')) {
  console.log('✅ PASS: Header in index.html contains Privacy Policy button');
} else {
  console.error('❌ FAIL: Header Privacy Policy button not found in index.html');
  allPassed = false;
}

// Check footer link in index.html
if (indexHtml.includes('footer-privacy-link')) {
  console.log('✅ PASS: Footer in index.html contains Privacy Policy link');
} else {
  console.error('❌ FAIL: Footer Privacy Policy link not found in index.html');
  allPassed = false;
}

if (allPassed) {
  console.log('\n🎉 ALL PRIVACY POLICY CHECKS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
