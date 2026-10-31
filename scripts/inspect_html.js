const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const sections = [];
const reg = /<section[^>]+id=['"]([^'"]+)['"]/g;
let m;
while ((m = reg.exec(html)) !== null) {
  sections.push(m[1]);
}
console.log('Sections found:', sections);

const modals = [];
const regM = /id=['"]([^'"]*(?:modal|toast|overlay|panel)[^'"]*)['"]/g;
while ((m = regM.exec(html)) !== null) {
  modals.push(m[1]);
}
console.log('Modals/overlays found:', modals);
