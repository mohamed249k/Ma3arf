const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const lines = script.split('\n');

console.log(lines.slice(27575, 27650).join('\n'));
