const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

console.log('--- Categories in index.html ---');
const regex = /data-category="([^"]+)"/g;
let m;
const catsInHtml = new Set();
while ((m = regex.exec(html)) !== null) {
  catsInHtml.add(m[1]);
}
console.log('Categories in HTML data-category:', Array.from(catsInHtml));

console.log('\n--- Categories in enriched_questions.json ---');
const questions = JSON.parse(fs.readFileSync('scripts/enriched_questions.json', 'utf8'));
const catsInDb = {};
questions.forEach(q => {
  catsInDb[q.category] = (catsInDb[q.category] || 0) + 1;
});
console.log(catsInDb);
