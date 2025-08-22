#!/usr/bin/env node

import { SkaraBuild } from '../src/index.js';
import chalk from 'chalk';

const args = process.argv.slice(2);
const command = args[0] || 'build';

// Parse options
const options = {
  root: process.cwd(),
  outDir: 'dist'
};

// Look for --base-path option
const basePathIndex = args.indexOf('--base-path');
if (basePathIndex !== -1 && args[basePathIndex + 1]) {
  options.basePath = args[basePathIndex + 1];
}

console.log(chalk.cyan('🏛️  Skara Build System'));
console.log(chalk.gray('Ancient wisdom meets modern deployment\n'));

const builder = new SkaraBuild(options);

switch (command) {
  case 'build':
    await builder.build();
    break;
  case 'preview':
    await builder.preview();
    break;
  default:
    console.log(chalk.red(`Unknown command: ${command}`));
    console.log(chalk.yellow('Available commands: build, preview'));
    process.exit(1);
}