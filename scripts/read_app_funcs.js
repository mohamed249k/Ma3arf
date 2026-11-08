const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');

console.log('--- selectGameConfig in build_full_app.js ---');
console.log(lines.slice(2200, 2235).join('\n'));

console.log('--- countPills in build_full_app.js ---');
console.log(lines.slice(2365, 2390).join('\n'));
