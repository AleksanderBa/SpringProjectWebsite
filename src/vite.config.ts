import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This makes it work on GitHub Pages regardless of repo name
  resolve: {
    alias: {
      'figma:asset': '/public/assets'
    }
  },
  optimizeDeps: {
    exclude: []
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});