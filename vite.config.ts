import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// vite.config.js
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "production" ? "/echo-audit/" : "/",
  build: {
    outDir: 'dist',
    sourcemap: false
  }
}));
