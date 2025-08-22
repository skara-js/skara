import fs from 'fs-extra';
import path from 'path';
import { build } from 'esbuild';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class SkaraBuild {
  constructor(options = {}) {
    this.root = options.root || process.cwd();
    this.outDir = path.resolve(this.root, options.outDir || 'dist');
    this.srcDir = path.resolve(this.root, 'src');
  }

  async build() {
    console.log(chalk.blue('🏗️  Building Skara.js application...'));
    
    try {
      // Clean output directory
      await fs.remove(this.outDir);
      await fs.ensureDir(this.outDir);
      
      // Build JavaScript
      await this.buildJS();
      
      // Build CSS
      await this.buildCSS();
      
      // Copy HTML
      await this.buildHTML();
      
      // Copy static assets
      await this.copyAssets();
      
      console.log(chalk.green('✅ Build completed successfully!'));
      console.log(chalk.gray(`📦 Output: ${this.outDir}`));
      
    } catch (error) {
      console.error(chalk.red('❌ Build failed:'), error.message);
      process.exit(1);
    }
  }

  async buildJS() {
    console.log(chalk.yellow('📦 Building JavaScript...'));
    
    const entryPoint = path.join(this.srcDir, 'index.sjs');
    const outFile = path.join(this.outDir, 'assets', 'app.js');
    const rootDir = this.root;
    
    await fs.ensureDir(path.dirname(outFile));
    
    await build({
      entryPoints: [entryPoint],
      bundle: true,
      outfile: outFile,
      format: 'esm',
      target: 'es2020',
      minify: true,
      sourcemap: true,
      loader: {
        '.ssx': 'jsx',
        '.sjs': 'js'
      },
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      plugins: [{
        name: 'skara-resolver',
        setup: (build) => {
          // Resolve .ssx files
          build.onResolve({ filter: /\\.ssx$/ }, args => ({
            path: path.resolve(args.resolveDir, args.path)
          }));
          
          // Resolve skara-js imports
          build.onResolve({ filter: /^skara-js$/ }, args => ({
            path: path.resolve(rootDir, '..', 'packages', 'skara-js', 'src', 'index.js')
          }));
        }
      }]
    });
    
    console.log(chalk.green('✅ JavaScript built'));
  }

  async buildCSS() {
    console.log(chalk.yellow('🎨 Building CSS...'));
    
    const cssFile = path.join(this.srcDir, 'styles.ss');
    const outFile = path.join(this.outDir, 'assets', 'styles.css');
    
    await fs.ensureDir(path.dirname(outFile));
    
    if (await fs.pathExists(cssFile)) {
      const css = await fs.readFile(cssFile, 'utf8');
      
      // Load Tailwind config
      let tailwindConfig = {};
      const configPath = path.join(this.root, 'tailwind.config.js');
      if (await fs.pathExists(configPath)) {
        const configModule = await import(`file://${configPath}?t=${Date.now()}`);
        tailwindConfig = configModule.default || configModule;
      }
      
      const processor = postcss([
        tailwindcss(tailwindConfig),
        autoprefixer()
      ]);
      
      const result = await processor.process(css, { from: cssFile, to: outFile });
      await fs.writeFile(outFile, result.css);
      
      if (result.map) {
        await fs.writeFile(outFile + '.map', result.map.toString());
      }
    }
    
    console.log(chalk.green('✅ CSS built'));
  }

  async buildHTML() {
    console.log(chalk.yellow('📄 Building HTML...'));
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skara.js - Ancient Wisdom, Modern Power</title>
  <meta name="description" content="A React-like framework inspired by the ancient stone circles of Skara Brae. Built to last through the ages.">
  <meta name="keywords" content="skara.js, javascript, framework, react, ancient, modern, development">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Skara.js - Ancient Wisdom, Modern Power">
  <meta property="og:description" content="A React-like framework inspired by the ancient stone circles of Skara Brae. Built to last through the ages.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="/assets/skara-og.png">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Skara.js - Ancient Wisdom, Modern Power">
  <meta name="twitter:description" content="A React-like framework inspired by the ancient stone circles of Skara Brae. Built to last through the ages.">
  <meta name="twitter:image" content="/assets/skara-og.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/assets/styles.css" as="style">
  <link rel="preload" href="/assets/app.js" as="script">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/assets/styles.css">
  
  <!-- Analytics placeholder -->
  <!-- Add your analytics code here -->
</head>
<body>
  <div id="app">
    <!-- Loading placeholder -->
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #0c1445 0%, #1a0b3d 25%, #2d1b69 50%, #1e3a8a 75%, #0f172a 100%);
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    ">
      <div style="text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem; animation: pulse 2s infinite;">🏛️</div>
        <div style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(135deg, #38bdf8, #e879f9); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Loading Skara.js...
        </div>
        <div style="margin-top: 0.5rem; color: rgba(255,255,255,0.7);">
          Ancient wisdom meets modern power
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scripts -->
  <script type="module" src="/assets/app.js"></script>
  
  <!-- Service Worker -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => console.log('SW registered'))
          .catch(error => console.log('SW registration failed'));
      });
    }
  </script>
</body>
</html>`;
    
    await fs.writeFile(path.join(this.outDir, 'index.html'), htmlTemplate);
    console.log(chalk.green('✅ HTML built'));
  }

  async copyAssets() {
    console.log(chalk.yellow('📁 Copying assets...'));
    
    const assetsDir = path.join(this.srcDir, 'assets');
    const publicDir = path.join(this.root, 'public');
    
    // Copy src/assets if exists
    if (await fs.pathExists(assetsDir)) {
      await fs.copy(assetsDir, path.join(this.outDir, 'assets'));
    }
    
    // Copy public folder if exists
    if (await fs.pathExists(publicDir)) {
      await fs.copy(publicDir, this.outDir);
    }
    
    // Create favicon if not exists
    const faviconPath = path.join(this.outDir, 'assets', 'favicon.svg');
    if (!await fs.pathExists(faviconPath)) {
      await fs.ensureDir(path.dirname(faviconPath));
      const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e879f9;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#grad)"/>
        <text x="50" y="65" font-family="Arial, sans-serif" font-size="60" text-anchor="middle" fill="white">🏛️</text>
      </svg>`;
      await fs.writeFile(faviconPath, favicon);
    }
    
    // Create service worker
    const swContent = `const CACHE_NAME = 'skara-js-v1';
const urlsToCache = [
  '/',
  '/assets/app.js',
  '/assets/styles.css',
  '/assets/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});`;
    
    await fs.writeFile(path.join(this.outDir, 'sw.js'), swContent);
    
    console.log(chalk.green('✅ Assets copied'));
  }

  async preview() {
    console.log(chalk.blue('👁️  Starting preview server...'));
    
    const server = createServer((req, res) => {
      let filePath = path.join(this.outDir, req.url === '/' ? 'index.html' : req.url);
      
      fs.readFile(filePath)
        .then(content => {
          const ext = path.extname(filePath);
          const contentType = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.svg': 'image/svg+xml',
            '.png': 'image/png',
            '.jpg': 'image/jpeg'
          }[ext] || 'text/plain';
          
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        })
        .catch(() => {
          res.writeHead(404);
          res.end('Not Found');
        });
    });
    
    const port = 3000;
    server.listen(port, () => {
      console.log(chalk.green(`✅ Preview server running at http://localhost:${port}`));
      console.log(chalk.gray('Press Ctrl+C to stop'));
    });
  }
}