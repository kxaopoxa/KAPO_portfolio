import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  root,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    fs: {
      strict: false,
      allow: [root]
    }
  }
});