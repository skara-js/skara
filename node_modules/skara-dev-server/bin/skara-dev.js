#!/usr/bin/env node

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const commander = require('commander');
const program = new commander.Command();
import { SkaraDevServer } from '../src/index.js';
import chalk from 'chalk';
import path from 'path';

program
  .name('skara-dev')
  .description('🏛️ Skara Development Server - Native support for .sjs, .ssx, and .ss files')
  .option('-p, --port <port>', 'port to run the server on', '3000')
  .option('-r, --root <root>', 'root directory to serve', process.cwd())
  .action(async (options) => {
    console.log(chalk.blue('🏛️  Skara Development Server'));
    console.log(chalk.gray('Like Skara Brae - ancient wisdom, modern power\n'));

    const server = new SkaraDevServer({
      port: parseInt(options.port),
      root: path.resolve(options.root)
    });

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n');
      await server.stop();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      await server.stop();
      process.exit(0);
    });

    try {
      await server.start();
    } catch (error) {
      console.error(chalk.red('❌ Failed to start server:'), error.message);
      process.exit(1);
    }
  });

program.parse();