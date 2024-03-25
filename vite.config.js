import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

function findHtmlFiles(dir, fileList = {}) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      const name = path.relative(process.cwd(), filePath).replace(/\\/g, '/').replace(/^\.\//, '');
      fileList[name] = filePath;
    }
  });
  return fileList;
}


const htmlInput = findHtmlFiles(path.resolve(__dirname, ''));

export default defineConfig({
    plugins: [
        visualizer({
            open: true,
            sourcemap: true,
            gzipSize: true,
            brotliSize: true,
            filename: 'bundle-analysis.html',
        }),
        viteCompression({
            algorithm: 'brotliCompress',
            ext: '.br',
        }),
        viteCompression({
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    build: {
        rollupOptions: {
            input: htmlInput,
        },
    },
});
