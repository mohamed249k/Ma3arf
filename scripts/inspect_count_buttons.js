const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('عدد الأسئلة') || l.includes('count-btn') || l.includes('question-count')) {
    console.log((i + 1) + ': ' + l.trim());
  }
});
