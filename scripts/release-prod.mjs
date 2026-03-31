import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const VALID_LEVELS = new Set(['patch', 'minor', 'major']);

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

function runAndCapture(command) {
  return execSync(command, { encoding: 'utf8' }).trim();
}

function getPackageVersion() {
  const packageJsonPath = resolve(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  return pkg.version;
}

function printHelp() {
  console.log('Usage: node scripts/release-prod.mjs [patch|minor|major] [--skip-docker]');
  console.log('Examples:');
  console.log('  node scripts/release-prod.mjs patch');
  console.log('  node scripts/release-prod.mjs minor --skip-docker');
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  const levelArg = args.find((arg) => VALID_LEVELS.has(arg));
  const level = levelArg || 'patch';
  const skipDocker = args.includes('--skip-docker');

  if (!VALID_LEVELS.has(level)) {
    throw new Error(`Invalid bump level: ${level}. Use patch|minor|major.`);
  }

  run(`npm version ${level} --no-git-tag-version`);
  run('npm run version:sync');
  run('npm run build:production');

  const packageVersion = getPackageVersion();
  const imageTag = runAndCapture('node scripts/versioning.mjs tag production');

  console.log(`\nRelease version: ${packageVersion}`);
  console.log(`Docker tag: ${imageTag}`);

  if (skipDocker) {
    console.log('Skipping Docker build (--skip-docker).');
    return;
  }

  run(`docker build -t ${imageTag} --build-arg APP_VERSION=${packageVersion}-prod .`);
}

main();
