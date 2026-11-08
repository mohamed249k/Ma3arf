const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(815, 855).join('\n'));
