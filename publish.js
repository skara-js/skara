#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

console.log(chalk.cyan('🏛️  Skara.js Package Publisher'));
console.log(chalk.gray('Ancient wisdom meets modern distribution\n'));

const packages = [
  'packages/skara-js',
  'packages/skara-dev-server', 
  'packages/skara-build',
  'packages/create-skara-app'
];

async function publishPackage(packagePath) {
  const packageName = path.basename(packagePath);
  const rootDir = process.cwd();
  const fullPath = path.join(rootDir, packagePath);
  
  console.log(chalk.blue(`📦 Publishing ${packageName}...`));
  
  try {
    // Check if package.json exists
    const packageJsonPath = path.join(fullPath, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      throw new Error(`package.json not found in ${fullPath}`);
    }
    
    // Read package.json to get name and version
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log(chalk.gray(`   Name: ${packageJson.name}`));
    console.log(chalk.gray(`   Version: ${packageJson.version}`));
    
    // Change to package directory
    process.chdir(fullPath);
    
    // Check if already published
    try {
      execSync(`npm view ${packageJson.name}@${packageJson.version}`, { stdio: 'pipe' });
      console.log(chalk.yellow(`⚠️  ${packageJson.name}@${packageJson.version} already exists, skipping...`));
      return;
    } catch (error) {
      // Package doesn't exist, continue with publishing
    }
    
    // Publish the package
    execSync('npm publish --access public', { stdio: 'inherit' });
    console.log(chalk.green(`✅ ${packageName} published successfully!`));
    
  } catch (error) {
    console.error(chalk.red(`❌ Failed to publish ${packageName}:`), error.message);
    throw error;
  }
}

async function main() {
  const rootDir = process.cwd();
  
  try {
    // Check if we're logged in
    try {
      const whoami = execSync('npm whoami', { encoding: 'utf8' }).trim();
      console.log(chalk.green(`👤 Logged in as: ${whoami}\n`));
    } catch (error) {
      throw new Error('Please login to npm first: npm login');
    }
    
    // Publish each package
    for (const packagePath of packages) {
      await publishPackage(packagePath);
      console.log(); // Empty line for spacing
      // Return to root after each package
      process.chdir(rootDir);
    }
    
    console.log(chalk.green('🎉 All packages published successfully!'));
    console.log(chalk.magenta('\n🏛️ Your Skara.js framework is now available to the world!'));
    console.log(chalk.gray('\nUsers can now install with:'));
    console.log(chalk.white('  npx create-skara-app my-ancient-app'));
    console.log(chalk.white('  npm install skara-js'));
    console.log(chalk.white('  npm install skara-dev-server'));
    console.log(chalk.white('  npm install skara-build'));
    
  } catch (error) {
    console.error(chalk.red('\n❌ Publishing failed:'), error.message);
    process.exit(1);
  } finally {
    // Return to root directory
    process.chdir(rootDir);
  }
}

main();