const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');

lines.forEach((l, i) => {
  if (l.includes('selectGameConfig') || l.includes('prepareQuizSession')) {
    console.log((i + 1) + ': ' + l.trim());
  }
});
