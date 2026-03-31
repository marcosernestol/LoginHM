import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const packageJsonPath = resolve(root, 'package.json');

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function upsertStringProperty(fileContent, propertyName, value) {
  const propertyRegex = new RegExp(`^\\s*${propertyName}:\\s*'[^']*',?\\s*$`, 'm');
  const newLine = `  ${propertyName}: '${value}',`;

  if (propertyRegex.test(fileContent)) {
    return fileContent.replace(propertyRegex, newLine);
  }

  return fileContent.replace(/\n};\s*$/m, `\n${newLine}\n};\n`);
}

function syncEnvironmentVersions() {
  const pkg = readJson(packageJsonPath);
  const baseVersion = pkg.version;

  const targets = [
    { path: 'src/environments/environment.ts', suffix: '-local' },
    { path: 'src/environments/environment.local.ts', suffix: '-local' },
    { path: 'src/environments/environment.development.ts', suffix: '-dev' },
    { path: 'src/environments/environment.production.ts', suffix: '-prod' },
  ];

  for (const target of targets) {
    const filePath = resolve(root, target.path);
    const current = readFileSync(filePath, 'utf8');
    const withBaseVersion = upsertStringProperty(current, 'appVersion', baseVersion);
    const withTag = upsertStringProperty(withBaseVersion, 'appVersionTag', `${baseVersion}${target.suffix}`);

    writeFileSync(filePath, withTag, 'utf8');
    console.log(`Synced ${target.path} -> ${baseVersion}${target.suffix}`);
  }
}

function getTagForEnvironment(envName) {
  const pkg = readJson(packageJsonPath);
  const baseVersion = pkg.version;

  const suffixMap = {
    local: '-local',
    development: '-dev',
    dev: '-dev',
    production: '-prod',
    prod: '-prod',
    plain: '',
  };

  const normalized = (envName || 'plain').toLowerCase();
  const suffix = suffixMap[normalized];

  if (suffix === undefined) {
    throw new Error(`Unsupported environment "${envName}". Use local|development|production|plain.`);
  }

  return `${pkg.name}:${baseVersion}${suffix}`;
}

function printHelp() {
  console.log('Usage: node scripts/versioning.mjs <command> [args]');
  console.log('Commands:');
  console.log('  sync                 Sync appVersion/appVersionTag to environment files');
  console.log('  show                 Show base version from package.json');
  console.log('  tag <env>            Print Docker-style tag for env (local|development|production|plain)');
}

function main() {
  const command = process.argv[2] || 'help';

  if (command === 'sync') {
    syncEnvironmentVersions();
    return;
  }

  if (command === 'show') {
    const pkg = readJson(packageJsonPath);
    console.log(pkg.version);
    return;
  }

  if (command === 'tag') {
    const envName = process.argv[3] || 'plain';
    console.log(getTagForEnvironment(envName));
    return;
  }

  printHelp();
}

main();
