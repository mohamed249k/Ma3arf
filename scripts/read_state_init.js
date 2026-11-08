const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');

lines.slice(350, 400).forEach((l, i) => {
  if (l.includes('selectedQuestionCount') || l.includes('quizMode') || l.includes('selectedMode')) {
    console.log((i + 351) + ': ' + l.trim());
  }
});
