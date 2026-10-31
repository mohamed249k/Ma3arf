// scripts/update_html_timers.js
const fs = require('fs');
const { AppIcons } = require('./icons_data.js');

let html = fs.readFileSync('index.html', 'utf8');

const timerSvg = AppIcons.get('timer', { size: 14, className: 'icon-gold' });
const checkSvg = AppIcons.get('check', { size: 14, className: 'icon-green' });

html = html.replace(/<span class="meta-item">⏱ (\d+ ثانية \/ سؤال)<\/span>/g, `<span class="meta-item">${timerSvg} $1</span>`);
html = html.replace('<span class="card-action-btn">محدد حالياً ✓</span>', `<span class="card-action-btn">محدد حالياً ${checkSvg}</span>`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html difficulty card timers and checkmarks!');
