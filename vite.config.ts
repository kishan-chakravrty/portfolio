import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    {
      name: 'copy-and-update-assets',
      closeBundle() {
        const srcDir = path.resolve(__dirname, 'assets');
        const destDir = path.resolve(__dirname, 'dist/assets');
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true, force: true });
        }
      },
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          // Rewrite remaining asset paths dynamically for production build mapped to /portfolio/
          // Preserves original quotes (' or ")
          return html.replace(
            /(src|href|data-background-image)=(["'])(?!https?:\/\/|\/\/|\/portfolio\/)(?:(?:\.\/)?assets\/|\/assets\/)([^"']+)\2/g,
            '$1=$2/portfolio/assets/$3$2'
          );
        },
      },
    },
  ],
});



