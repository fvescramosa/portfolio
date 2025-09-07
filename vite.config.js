import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',   // MUST match your repository name
  build: { outDir: 'docs' } // Build output into /docs
})