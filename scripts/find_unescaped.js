// scripts/find_unescaped.js
const fs = require('fs');
const content = fs.readFileSync('./scripts/build_full_app.js', 'utf8');
const lines = content.split('\n');

let inBody = false;
lines.forEach((line, idx) => {
  if (line.includes('const jsBody = `')) {
    inBody = true;
    return;
  }
  if (inBody && line.trim() === '`;') {
    inBody = false;
    return;
  }
  if (inBody) {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '`' && (i === 0 || line[i-1] !== '\\')) {
        console.log(`Line ${idx + 1}: ${line.trim()}`);
        break;
      }
    }
  }
});
