import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',  // Use esbuild instead of terser
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false
  }
})
