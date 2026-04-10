import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const dev = process.env.ROLLUP_WATCH;
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const banner = `/*! Tesla Card v${pkg.version} */`;

export default {
  input: 'src/tesla-card.ts',
  output: {
    file: 'dist/tesla-card.js',
    format: 'es',
    inlineDynamicImports: true,
    sourcemap: false,
    banner,
  },
  plugins: [
    resolve({ browser: true }),
    typescript({ tsconfig: './tsconfig.json' }),
    ...(!dev ? [terser({ ecma: 2022, module: true, output: { comments: /^!/ } })] : []),
  ],
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
};
