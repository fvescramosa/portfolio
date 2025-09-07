import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [react(), tailwindcss(),  viteImagemin({
    mozjpeg: { quality: 78 },      // for JPG
    optipng: { optimizationLevel: 5 }, // for PNG
    gifsicle: { optimizationLevel: 3 }, // for GIF
    svgo: { plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }] } // for SVG
  })],
  base: '/portfolio/',   // MUST match your repository name
  build: { outDir: 'docs' } // Build output into /docs
})