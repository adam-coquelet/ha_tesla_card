import { readFileSync, writeFileSync } from 'fs';

// Read version from package.json (single source of truth)
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const version = pkg.version;

console.log(`Syncing version: ${version}`);

// 1. Update src/const.ts
const constPath = 'src/const.ts';
let constFile = readFileSync(constPath, 'utf8');
constFile = constFile.replace(
  /export const CARD_VERSION = '[^']*'/,
  `export const CARD_VERSION = '${version}'`
);
writeFileSync(constPath, constFile);
console.log(`  -> ${constPath}`);

// 2. Update hacs.json (no version field needed, HACS uses GitHub releases)

console.log('Done. Now run: npm run build');
