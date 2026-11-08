const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');

console.log('--- selectGameConfig ---');
console.log(lines.slice(2198, 2240).join('\n'));

console.log('--- prepareQuizSession ---');
console.log(lines.slice(464, 510).join('\n'));
