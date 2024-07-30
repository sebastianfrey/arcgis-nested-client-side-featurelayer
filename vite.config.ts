import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  build: {
    outDir: './dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  }
});
