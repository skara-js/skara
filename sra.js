#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('sra')
  .description('🏛️ Create Skara App - Like CRA but for Skara.js')
  .argument('[project-name]', 'name of the project')
  .option('-t, --template <template>', 'template to use', 'default')
  .action(async (projectName, options) => {
    console.log(chalk.blue('🏛️  Welcome to SRA (Skara React App)!'));
    console.log(chalk.gray('Building from ancient wisdom, powered by modern technology\n'));

    // Get project name if not provided
    if (!projectName) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is your project name?',
          default: 'my-skara-app',
          validate: (input) => {
            if (!input.trim()) return 'Project name is required';
            if (!/^[a-z0-9-_]+$/i.test(input)) return 'Project name can only contain letters, numbers, hyphens, and underscores';
            return true;
          }
        }
      ]);
      projectName = answers.projectName;
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`❌ Directory ${projectName} already exists!`));
      process.exit(1);
    }

    console.log(chalk.green(`✨ Creating a new Skara.js app in ${chalk.bold(projectPath)}\n`));

    try {
      // Create project directory
      fs.ensureDirSync(projectPath);

      // Copy template files
      const templatePath = path.join(__dirname, 'packages', 'create-skara-app', 'templates', options.template);
      
      if (!fs.existsSync(templatePath)) {
        console.log(chalk.red(`❌ Template "${options.template}" not found!`));
        process.exit(1);
      }

      fs.copySync(templatePath, projectPath);

      // Update package.json with project name
      const packageJsonPath = path.join(projectPath, 'package.json');
      const packageJson = fs.readJsonSync(packageJsonPath);
      packageJson.name = projectName;
      fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

      console.log(chalk.green('✅ Project created successfully!\n'));
      
      console.log(chalk.blue('📦 Next steps:'));
      console.log(chalk.gray(`  cd ${projectName}`));
      console.log(chalk.gray('  npm install'));
      console.log(chalk.gray('  npm run dev\n'));
      
      console.log(chalk.yellow('🏛️  Like Skara Brae, built to last through the ages!'));
      console.log(chalk.gray('Happy coding! 🚀\n'));

    } catch (error) {
      console.log(chalk.red('❌ Error creating project:'), error.message);
      process.exit(1);
    }
  });

program.parse();