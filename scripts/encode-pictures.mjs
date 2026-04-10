import { readdirSync, readFileSync, writeFileSync } from 'fs';

const dir = 'src/pictures';
const outFile = 'src/vehicle/pictures-data.ts';
const files = readdirSync(dir).filter(f => f.endsWith('.png'));

let code = '// Auto-generated — do not edit\nexport const PICTURES: Record<string, string> = {\n';

for (const file of files) {
  const b64 = readFileSync(`${dir}/${file}`).toString('base64');
  code += `  '${file}': 'data:image/png;base64,${b64}',\n`;
}

code += '};\n';

writeFileSync(outFile, code);
console.log(`Encoded ${files.length} images into ${outFile} (${(code.length / 1024 / 1024).toFixed(1)}MB)`);
