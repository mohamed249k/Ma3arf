const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_app.js', 'utf8');
const lines = code.split('\n');
console.log(lines.slice(2365, 2385).join('\n'));
