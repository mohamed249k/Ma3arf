const fs = require('fs');

// Authentic Islamic geometric 8-pointed star (Khatim Sulayman) tessellation
// Standard seamless repeat tile 80px by 80px.
// Features:
// 1. Two interlocked squares at 45 deg forming central 8-pointed star
// 2. Matching corner 8-pointed stars that interlock on tile edges
// 3. Central octagram and subtle inner rosette ring
// 4. Clean Girih interconnecting lines connecting star vertices
// 5. Secondary micro-diamonds in the interstitial spaces
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <g fill="none" stroke="%23C6A15B" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
    <!-- Center 8-pointed star -->
    <rect x="27" y="27" width="26" height="26" />
    <rect x="27" y="27" width="26" height="26" transform="rotate(45 40 40)" />
    <circle cx="40" cy="40" r="5" stroke-width="0.75" />

    <!-- Corner 8-pointed stars (repeat seamless at 0,0 / 80,0 / 80,80 / 0,80) -->
    <rect x="-13" y="-13" width="26" height="26" />
    <rect x="-13" y="-13" width="26" height="26" transform="rotate(45 0 0)" />

    <rect x="67" y="-13" width="26" height="26" />
    <rect x="67" y="-13" width="26" height="26" transform="rotate(45 80 0)" />

    <rect x="67" y="67" width="26" height="26" />
    <rect x="67" y="67" width="26" height="26" transform="rotate(45 80 80)" />

    <rect x="-13" y="67" width="26" height="26" />
    <rect x="-13" y="67" width="26" height="26" transform="rotate(45 0 80)" />

    <!-- Interstitial Girih connective lines -->
    <line x1="40" y1="14" x2="40" y2="0" stroke-width="1.1" />
    <line x1="40" y1="66" x2="40" y2="80" stroke-width="1.1" />
    <line x1="14" y1="40" x2="0" y2="40" stroke-width="1.1" />
    <line x1="66" y1="40" x2="80" y2="40" stroke-width="1.1" />

    <!-- Diagonal connector lines linking center and corner star vertices -->
    <line x1="21.6" y1="21.6" x2="9.2" y2="9.2" stroke-width="0.9" />
    <line x1="58.4" y1="21.6" x2="70.8" y2="9.2" stroke-width="0.9" />
    <line x1="58.4" y1="58.4" x2="70.8" y2="70.8" stroke-width="0.9" />
    <line x1="21.6" y1="58.4" x2="9.2" y2="70.8" stroke-width="0.9" />

    <!-- Interlocking geometric diamond stars -->
    <polygon points="40,5 44,9 40,13 36,9" stroke-width="0.75" />
    <polygon points="40,67 44,71 40,75 36,71" stroke-width="0.75" />
    <polygon points="5,40 9,44 13,40 9,36" stroke-width="0.75" />
    <polygon points="67,40 71,44 75,40 71,36" stroke-width="0.75" />
  </g>
</svg>`;

// Convert to data URI for CSS
const dataUri = `url("data:image/svg+xml,${encodeURIComponent(svgContent).replace(/'/g, '%27')}")`;

console.log('Generated CSS background property:');
console.log(`background-image: ${dataUri};`);
console.log(`background-size: 80px 80px;`);

// Write out a preview file
fs.writeFileSync('./scripts/pattern_preview.svg', svgContent.replace(/%23/g, '#'), 'utf8');
console.log('Saved SVG preview to ./scripts/pattern_preview.svg');
