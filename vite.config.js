import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'
import { getArticleSlugs } from './scripts/get-routes.mjs'

const articleRoutes = getArticleSlugs().map(s => `/blog/${s}`)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://kavela.co',
      dynamicRoutes: [
        '/',
        '/corporate',
        '/funds',
        '/platform',
        '/why-asia',
        '/contact',
        '/blog',
        ...articleRoutes,
      ],
    }),
  ],
})
