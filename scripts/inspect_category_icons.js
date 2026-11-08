const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');

const idx = script.indexOf('CATEGORY_ICONS');
if (idx !== -1) {
  console.log(script.slice(idx, idx + 600));
} else {
  console.log('CATEGORY_ICONS not found');
}
