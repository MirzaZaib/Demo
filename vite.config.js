import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Build the entire app into a single self-contained index.html file.
// This removes all CDN/runtime JSX transformation issues and works
// locally, on CodeSandbox, and when deployed to GitHub Pages.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
});
