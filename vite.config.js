import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({
      open: true,
      sourcemap: true,
      filename: 'bundle-analysis.html'
    })
  ],
});
