import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'copy-assets',
      closeBundle() {
        const srcDir = path.resolve(__dirname, 'assets');
        const destDir = path.resolve(__dirname, 'dist/assets');
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true, force: true });
        }
      },
    },
  ],
});

