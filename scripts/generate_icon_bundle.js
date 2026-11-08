// scripts/generate_icon_bundle.js
const fs = require('fs');
const path = require('path');
const { faMosque, faKaaba, faQuran } = require('@fortawesome/free-solid-svg-icons');

const phosphorDir = path.resolve('./node_modules/@phosphor-icons/core/assets/duotone');

// List of required Phosphor icons
const phosphorIcons = [
  'lightning',
  'flame',
  'fire',
  'book-open-text',
  'book-bookmark',
  'book-open',
  'book',
  'arrow-counter-clockwise',
  'arrow-clockwise',
  'bookmark-simple',
  'bookmark',
  'heart',
  'magnifying-glass',
  'trophy',
  'medal',
  'crown',
  'user-circle',
  'user',
  'users',
  'users-three',
  'plant',
  'tree',
  'sword',
  'books',
  'globe',
  'star',
  'thumbs-up',
  'compass',
  'graduation-cap',
  'scroll',
  'scales',
  'bank',
  'hand-heart',
  'hands-praying',
  'globe-hemisphere-east',
  'speaker-high',
  'speaker-slash',
  'sun',
  'moon',
  'moon-stars',
  'chart-bar',
  'chart-line-up',
  'gear',
  'bell',
  'info',
  'question',
  'x',
  'check',
  'check-circle',
  'x-circle',
  'warning-circle',
  'warning',
  'flag',
  'pencil-simple-line',
  'floppy-disk',
  'copy',
  'share-network',
  'sparkle',
  'confetti',
  'trash',
  'plus-circle',
  'plus',
  'arrow-left',
  'arrow-right',
  'clock',
  'timer',
  'lock',
  'lock-open',
  'mosque',
  'whatsapp-logo',
  'shield-check',
  'image',
  'device-mobile',
  'chat-dots',
  'rocket-launch',
  'lightbulb',
  'seal-check'
];

const iconRegistry = {};

// 1. Extract Phosphor Duotone SVGs
phosphorIcons.forEach(name => {
  const filePath = path.join(phosphorDir, `${name}-duotone.svg`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing Phosphor icon: ${name}`);
    return;
  }
  const svg = fs.readFileSync(filePath, 'utf8');
  const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (match) {
    iconRegistry[name] = {
      viewBox: '0 0 256 256',
      content: match[1].trim()
    };
  }
});

// 2. Extract Specialized Font Awesome Islamic Icons
// faQuran
iconRegistry['fa-quran'] = {
  viewBox: `0 0 ${faQuran.icon[0]} ${faQuran.icon[1]}`,
  content: `<path d="${faQuran.icon[4]}"></path>`
};

// faKaaba
iconRegistry['fa-kaaba'] = {
  viewBox: `0 0 ${faKaaba.icon[0]} ${faKaaba.icon[1]}`,
  content: `<path d="${faKaaba.icon[4]}"></path>`
};

// faMosque
iconRegistry['fa-mosque'] = {
  viewBox: `0 0 ${faMosque.icon[0]} ${faMosque.icon[1]}`,
  content: `<path d="${faMosque.icon[4]}"></path>`
};

console.log(`Successfully extracted ${Object.keys(iconRegistry).length} vector icons.`);

// Semantic Aliases map
const aliases = {
  // Categories (Islamic 10 Authentic Categories)
  'quran': 'fa-quran',
  'hadith': 'scroll',
  'seerah': 'fa-mosque',
  'prophets': 'compass',
  'companions': 'users-three',
  'creed': 'scales',
  'fiqh': 'bank',
  'ethics': 'hand-heart',
  'worship': 'fa-kaaba',
  'general': 'globe-hemisphere-east',

  // Levels
  'beginner': 'plant',
  'intermediate': 'compass',
  'advanced': 'graduation-cap',
  'expert': 'crown',
  'scholar': 'scroll',
  'hafiz': 'mosque',

  // Modes & Features
  'daily': 'lightning',
  'learning': 'book-open-text',
  'wrong': 'arrow-counter-clockwise',
  'favorites': 'bookmark-simple',
  'search': 'magnifying-glass',
  'leaderboard': 'trophy',
  'sadaqah': 'plant',
  'contribute': 'pencil-simple-line',
  'pencil': 'pencil-simple-line',
  'suggest': 'pencil-simple-line',
  'stats': 'chart-bar',
  'sound-on': 'speaker-high',
  'sound-off': 'speaker-slash',
  'rocket': 'rocket-launch',
  'whatsapp': 'whatsapp-logo',
  'check': 'check-circle',
  'correct': 'check-circle',
  'x': 'x-circle',
  'save': 'floppy-disk',
  'bookmark': 'bookmark-simple',
  'plus': 'plus-circle',
  'lock': 'lock',
  'unlock': 'lock-open',
  'dark-mode': 'moon-stars',
  'light-mode': 'sun'
};

const bundleContent = `// scripts/icons_data.js
// Production Duotone vector icon registry for Ma3arf Islamic Learning Platform
// Primary library: Phosphor Icons (Duotone style, 256x256)
// Authentic Islamic iconography: Font Awesome Free Solid (Quran, Kaaba, Mosque)

const ICON_REGISTRY = ${JSON.stringify(iconRegistry, null, 2)};
const ICON_ALIASES = ${JSON.stringify(aliases, null, 2)};

const AppIcons = {
  get(rawName, options = {}) {
    const {
      size = 24,
      className = '',
      title = '',
      duotone = true,
      color = ''
    } = options;

    const name = ICON_ALIASES[rawName] || rawName;
    const icon = ICON_REGISTRY[name];

    if (!icon) {
      console.warn(\`Icon "\${rawName}" not found in AppIcons registry.\`);
      return '';
    }

    const titleAttr = title ? \`role="img" aria-label="\${title}"\` : 'aria-hidden="true"';
    const titleTag = title ? \`<title>\${title}</title>\` : '';
    const styleAttr = color ? \`style="color: \${color};"\` : '';
    const classes = ['ph-duotone', \`ph-\${name}\`, className].filter(Boolean).join(' ');

    return \`<svg class="\${classes}" viewBox="\${icon.viewBox}" width="\${size}" height="\${size}" fill="currentColor" \${titleAttr} \${styleAttr}>\${titleTag}\${icon.content}</svg>\`;
  },

  render(container, name, options = {}) {
    if (!container) return;
    container.innerHTML = this.get(name, options);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICON_REGISTRY, ICON_ALIASES, AppIcons };
}
`;

fs.writeFileSync('./scripts/icons_data.js', bundleContent, 'utf8');
console.log('Successfully wrote ./scripts/icons_data.js');
