# 🏛️ Skara.js Deployment Guide

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop (Easiest)

1. **Build your site:**
   ```bash
   cd website
   npm run build
   ```

2. **Go to [Netlify](https://netlify.com)**
   - Sign up/login
   - Drag the `website/dist` folder to the deploy area
   - Your site is live! 🎉

### Option 2: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "🏛️ Initial Skara.js website"
   git branch -M main
   git remote add origin https://github.com/yourusername/skara-js.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repo
   - Set build settings:
     - **Base directory:** `website`
     - **Build command:** `npm run build`
     - **Publish directory:** `website/dist`
   - Deploy! 🚀

### Option 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy:**
   ```bash
   cd website
   npm run build
   netlify login
   netlify deploy --prod --dir=dist
   ```

## 🌐 Deploy to Other Platforms

### Vercel
```bash
npm install -g vercel
cd website
npm run build
vercel --prod
```

### GitHub Pages
```bash
# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

npm install -g gh-pages
npm run deploy
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select dist as public directory
firebase deploy
```

## 📦 Build Configuration

The build system creates:
- **Minified JavaScript** (`assets/app.js`)
- **Optimized CSS** (`assets/styles.css`)
- **Production HTML** (`index.html`)
- **Service Worker** (`sw.js`)
- **Favicon** (`assets/favicon.svg`)

## 🔧 Environment Variables

Set these in your deployment platform:
- `NODE_VERSION=18` (or higher)
- `NODE_ENV=production`

## 🏛️ Performance Features

✅ **Code Splitting** - Automatic bundle optimization  
✅ **CSS Minification** - Tailwind purging  
✅ **Asset Optimization** - Compressed images  
✅ **Service Worker** - Offline caching  
✅ **Modern JavaScript** - ES2020 target  
✅ **Source Maps** - Debug support  

## 🚀 CDN & Caching

The build includes optimal caching headers:
- **Assets:** 1 year cache (`max-age=31536000`)
- **HTML:** No cache (always fresh)
- **Service Worker:** Offline support

## 🏛️ Like Skara Brae - Built to Last!

Your Skara.js website is now ready to stand the test of time, just like the ancient stone circles that inspired it. 

**Ancient wisdom meets modern deployment!** 🏛️✨