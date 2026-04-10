import { cpSync, mkdirSync } from 'fs';

mkdirSync('dist/pictures', { recursive: true });
cpSync('src/pictures', 'dist/pictures', { recursive: true });
console.log('Pictures copied to dist/pictures/');
