import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  base: '/portfolio/',   // MUST match your repository name
  build: { outDir: 'docs' } // Build output into /docs
})