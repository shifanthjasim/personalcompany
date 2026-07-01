import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const viteConfigPath = path.join(rootDir, 'vite.config.js');

function run(command, args = []) {
  const executable = process.platform === 'win32' ? `${command}.cmd` : command;
  const result = spawnSync(executable, args, {
    cwd: rootDir,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(' ')}`);
  }
}

function ensureBaseConfig() {
  const original = readFileSync(viteConfigPath, 'utf8');

  if (!original.includes("base: '/'")) {
    const updated = original.replace(
      "export default defineConfig({",
      "export default defineConfig({\n  base: '/',"
    );

    writeFileSync(viteConfigPath, updated);
    console.log('Updated vite.config.js with base: \'/\'.');
  }
}

function copyDistToRoot() {
  const distDir = path.join(rootDir, 'dist');

  if (!existsSync(distDir)) {
    throw new Error('Build output directory dist was not created.');
  }

  for (const entry of readdirSync(distDir)) {
    const srcPath = path.join(distDir, entry);
    const destPath = path.join(rootDir, entry);

    if (existsSync(destPath)) {
      rmSync(destPath, { recursive: true, force: true });
    }

    cpSync(srcPath, destPath, { recursive: true });
  }

  console.log('Copied dist contents to the repository root.');
}

function git(command, args = []) {
  const result = spawnSync('git', [command, ...args], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    throw new Error(`Git command failed: git ${[command, ...args].join(' ')}`);
  }
}

try {
  console.log('Installing dependencies...');
  run('npm', ['install']);

  console.log('Building the Vite app...');
  run('npm', ['run', 'build']);

  ensureBaseConfig();
  copyDistToRoot();

  console.log('Committing deployment changes...');
  git('add', ['.']);

  const statusResult = spawnSync('git', ['status', '--porcelain'], {
    cwd: rootDir,
    encoding: 'utf8',
  });

  if (statusResult.status === 0 && statusResult.stdout.trim()) {
    git('commit', ['-m', 'build: generate dist for GitHub Pages']);
    console.log('Pushing to main...');
    git('push', ['origin', 'main']);
  } else {
    console.log('No changes to commit; skipping commit and push.');
  }

  console.log('Deployment script completed successfully.');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
