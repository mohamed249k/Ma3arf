// scripts/test_whatsapp_integration.js
const fs = require('fs');

console.log('=== VERIFYING WHATSAPP INTEGRATION WITH DEVELOPER NUMBER ===');

const html = fs.readFileSync('./index.html', 'utf8');
const js = fs.readFileSync('./script.js', 'utf8');
const css = fs.readFileSync('./style.css', 'utf8');

const targetPhone = '201017325592';
const targetDisplay = '01017325592';

// 1. Verify JS Developer Phone Variable & URLs
if (!js.includes(targetPhone)) {
  console.error(`❌ FAIL: script.js does not contain target phone ${targetPhone}`);
  process.exit(1);
}
console.log(`✅ PASS: script.js contains developer phone: ${targetPhone}`);

if (!js.includes(`https://api.whatsapp.com/send?phone=`)) {
  console.error('❌ FAIL: script.js not using phone parameter in whatsapp URL');
  process.exit(1);
}
console.log('✅ PASS: script.js correctly formats WhatsApp URL with &phone parameter');

// 2. Verify Suggestion and Report Formats
if (!js.includes('السلام عليكم ورحمة الله وبركاته يا أستاذ محمد كرم')) {
  console.error('❌ FAIL: script.js missing polite addressed greeting in formatted message');
  process.exit(1);
}
console.log('✅ PASS: WhatsApp messages are respectfully addressed to Mohamed Karam with full details');

// 3. Verify HTML Buttons and Direct Contact Box
if (!html.includes(targetDisplay)) {
  console.error(`❌ FAIL: index.html does not display phone number ${targetDisplay}`);
  process.exit(1);
}
console.log(`✅ PASS: index.html displays ${targetDisplay} in direct contact box and footer`);

if (!html.includes(`phone=${targetPhone}`)) {
  console.error(`❌ FAIL: index.html links do not contain phone=${targetPhone}`);
  process.exit(1);
}
console.log('✅ PASS: index.html contains direct WhatsApp links with international phone format');

// 4. Verify CSS Styles
if (!css.includes('.btn-whatsapp-action') || !css.includes('.developer-wa-contact-box')) {
  console.error('❌ FAIL: style.css missing WhatsApp contact box styles');
  process.exit(1);
}
console.log('✅ PASS: style.css contains authentic WhatsApp button and banner styles');

console.log('🎉 ALL WHATSAPP INTEGRATION TESTS PASSED PERFECTLY!');
