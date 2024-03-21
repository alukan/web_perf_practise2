import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

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
});
