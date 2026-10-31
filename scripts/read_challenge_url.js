const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');
console.log(lines.slice(1525, 1565).join('\n'));
