const fs = require('fs');

function searchFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  console.log(`=== In ${filename} ===`);
  lines.forEach((l, i) => {
    if (l.includes('count-pill') || l.includes('count-btn') || l.includes('question-count-selector')) {
      console.log(`${i+1}: ${l.trim()}`);
    }
  });
}

searchFile('index.html');
searchFile('style.css');
searchFile('scripts/build_full_app.js');
