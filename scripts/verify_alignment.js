const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

// Extract all getElementById calls in script.js
const regex = /getElementById\(['"]([^'"]+)['"]\)/g;
const ids = new Set();
let m;
while ((m = regex.exec(js)) !== null) {
  ids.add(m[1]);
}

console.log('Total unique getElementById in script.js:', ids.size);
const dynamicIds = new Set(['daily-fact-quiz-btn']);
const missing = [];
ids.forEach(id => {
  if (dynamicIds.has(id)) return;
  const doubleQ = 'id="' + id + '"';
  const singleQ = "id='" + id + "'";
  if (!html.includes(doubleQ) && !html.includes(singleQ)) {
    missing.push(id);
  }
});

if (missing.length > 0) {
  console.error('Missing IDs in index.html:', missing);
} else {
  console.log('SUCCESS: All IDs referenced in script.js exist in index.html!');
}
