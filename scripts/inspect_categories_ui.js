const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

console.log('Searching for category cards in index.html...');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('category-card') || l.includes('categories-grid') || l.includes('tab-categories')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

console.log('\nSearching for CATEGORIES definition in script.js...');
const scriptLines = script.split('\n');
scriptLines.slice(0, 100).forEach((l, i) => {
  if (l.includes('CATEGORIES') || l.includes('categoryId')) {
    console.log((i+1) + ': ' + l.trim());
  }
});
