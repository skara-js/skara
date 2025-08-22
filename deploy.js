#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

console.log(chalk.cyan('🏛️  Skara.js Deployment Script'));
console.log(chalk.gray('Ancient wisdom meets modern deployment\n'));

const websiteDir = path.join(process.cwd(), 'website');
const distDir = path.join(websiteDir, 'dist');

try {
  // Check if we're in the right directory
  if (!fs.existsSync(websiteDir)) {
    throw new Error('Please run this script from the Skara.js root directory');
  }

  console.log(chalk.blue('📦 Building website...'));
  process.chdir(websiteDir);
  execSync('npm run build', { stdio: 'inherit' });

  console.log(chalk.green('✅ Build completed successfully!'));
  console.log(chalk.yellow('\n🚀 Ready for deployment!'));
  
  console.log(chalk.gray('\nDeployment options:'));
  console.log(chalk.white('1. Drag & Drop:'));
  console.log(chalk.gray(`   - Go to https://netlify.com`));
  console.log(chalk.gray(`   - Drag the ${chalk.cyan('website/dist')} folder`));
  
  console.log(chalk.white('\n2. Netlify CLI:'));
  console.log(chalk.gray('   npm install -g netlify-cli'));
  console.log(chalk.gray('   netlify login'));
  console.log(chalk.gray('   netlify deploy --prod --dir=dist'));
  
  console.log(chalk.white('\n3. GitHub Pages:'));
  console.log(chalk.gray('   git add .'));
  console.log(chalk.gray('   git commit -m "🏛️ Deploy Skara.js website"'));
  console.log(chalk.gray('   git push origin main'));
  
  console.log(chalk.magenta('\n🏛️ Like Skara Brae - built to last through the ages!'));
  
} catch (error) {
  console.error(chalk.red('❌ Deployment failed:'), error.message);
  process.exit(1);
}