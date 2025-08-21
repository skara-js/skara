import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx|ssx)$/,
      jsxImportSource: undefined,
    }),
    {
      name: 'skara-extensions',
      configureServer(server) {
        server.middlewares.use('/src', (req, res, next) => {
          if (req.url?.endsWith('.sjs')) {
            req.url = req.url.replace('.sjs', '.js');
          } else if (req.url?.endsWith('.ssx')) {
            req.url = req.url.replace('.ssx', '.tsx');
          } else if (req.url?.endsWith('.ss')) {
            req.url = req.url.replace('.ss', '.css');
          }
          next();
        });
      },
      load(id) {
        if (id.endsWith('.sjs')) {
          return null;
        }
        if (id.endsWith('.ssx')) {
          return null;
        }
        if (id.endsWith('.ss')) {
          return null;
        }
      }
    }
  ],
  resolve: {
    extensions: [
      '.vue',
      '.html',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.ssx',
      '.sjs',
      '.ss'
    ]
  },
  esbuild: {
    loader: 'tsx',
    include: /\.(tsx?|jsx?|ssx)$/,
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom'],
    esbuildOptions: {
      loader: {
        '.ssx': 'tsx',
        '.sjs': 'js'
      }
    }
  }
});