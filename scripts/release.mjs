import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const run = (cmd) => {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};

// 1. Bump patch version
run('npm version patch --no-git-tag-version');

// 2. Sync version + build
run('node scripts/sync-version.mjs');
run('npm run build');

// 3. Read new version
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const v = pkg.version;
const tag = `v${v}`;

console.log(`\nReleasing ${tag}...\n`);

// 4. Stage, commit, push
run('git add -A');
run(`git commit -m "${tag}"`);
run('git push origin main');

// 5. Tag and push (triggers GitHub Actions release)
run(`git tag -a ${tag} -m "${tag}"`);
run(`git push origin ${tag}`);

console.log(`\n✓ ${tag} released.`);
