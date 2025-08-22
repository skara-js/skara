#!/usr/bin/env node

import { SkaraBuild } from '../src/index.js';
import chalk from 'chalk';

const args = process.argv.slice(2);
const command = args[0] || 'build';

console.log(chalk.cyan('🏛️  Skara Build System'));
console.log(chalk.gray('Ancient wisdom meets modern deployment\n'));

const builder = new SkaraBuild({
  root: process.cwd(),
  outDir: 'dist'
});

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