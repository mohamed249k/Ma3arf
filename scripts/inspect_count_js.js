const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const lines = script.split('\n');

lines.forEach((l, i) => {
  if (l.includes('count-btn') || l.includes('question-count-selector') || l.includes('data-count') || l.includes('selectedCount') || l.includes('questionCount')) {
    console.log((i + 1) + ': ' + l.trim());
  }
});
