import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteTsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_fargs: false,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      keepNames: true,
      treeShaking: true,
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg', '**/*.ttf'],
})
