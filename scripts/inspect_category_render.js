const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');

const idx = script.indexOf('categories-list-container');
if (idx !== -1) {
  console.log(script.slice(idx - 100, idx + 800));
} else {
  console.log('categories-list-container not found in script.js');
}
