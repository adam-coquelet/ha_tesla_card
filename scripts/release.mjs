import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const run = (cmd) => {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};

// 1. Bump patch version (triggers "version" script → sync + build)
run('npm version patch --no-git-tag-version');

// 2. Read new version
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const v = pkg.version;
const tag = `v${v}`;

console.log(`\nReleasing ${tag}...\n`);

// 3. Stage, commit, push
run('git add -A');
run(`git commit -m "${tag}"`);
run('git push origin main');

// 4. Tag and push tag (triggers GitHub Actions release workflow)
run(`git tag -a ${tag} -m "${tag}"`);
run(`git push origin ${tag}`);

console.log(`\n✓ ${tag} released. GitHub Actions will create the release.`);
