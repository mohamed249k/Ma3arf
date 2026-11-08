// scripts/test_icon_registry.js
const { AppIcons, ICON_REGISTRY, ICON_ALIASES } = require('./icons_data.js');

console.log('Total registry icons:', Object.keys(ICON_REGISTRY).length);
console.log('Total aliases:', Object.keys(ICON_ALIASES).length);

const testIcons = ['quran', 'hadith', 'seerah', 'prophets', 'companions', 'creed', 'fiqh', 'ethics', 'worship', 'general', 'beginner', 'intermediate', 'advanced', 'expert', 'daily', 'trophy', 'whatsapp', 'rocket'];

testIcons.forEach(name => {
  const svg = AppIcons.get(name, { size: 24, className: 'test-icon' });
  if (!svg || !svg.includes('<svg') || !svg.includes('</svg>')) {
    console.error(`FAILED: ${name} did not generate valid SVG`);
    process.exit(1);
  }
});

console.log('ALL TEST ICONS GENERATE CRISP VALID SVGS!');
