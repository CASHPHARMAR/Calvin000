import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

// PORT is only required for the dev/preview server, not for production builds.
const port = rawPort ? Number(rawPort) : 3000;

if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// BASE_PATH defaults to '/' for Netlify / standard deployments.
// In Replit the workflow injects the artifact's path prefix.
const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    // Only load the error overlay in Replit dev — skip in production builds
    ...(process.env.NODE_ENV !== 'production' ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist', 'public'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Split vendor code into focused chunks so the browser can cache
        // them independently and the initial JS payload stays small.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // Framer Motion is large and self-contained — split it out so
          // pages that don't animate skip its download.
          if (id.includes('framer-motion')) return 'vendor-framer';
          // Icon libraries are pure leaf packages with no circular deps.
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'vendor-icons';
          }
          // Everything else (React, Radix, tanstack, wouter, etc.) shares
          // internal cross-references, so keep them in one vendor chunk to
          // avoid Rollup circular-chunk warnings.
          return 'vendor';
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
