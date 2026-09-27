import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'
import { resolve } from 'node:path'
import { getArticleSlugs } from './scripts/get-routes.mjs'

const articleRoutes = getArticleSlugs().map(s => `/blog/${s}`)

export default defineConfig({
  plugins: [
    react(),
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
      exclude: ['/healthcare'],
    }),
  ],
  build: {
    target: 'es2020',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),        // kavela.co
        healthcare: resolve(import.meta.dirname, 'healthcare.html'), // healthcare.kavela.co
      },
      output: {
        // React is shared by both entries: give its chunk a stable, readable name
        manualChunks: (id) => (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id) ? 'react' : undefined),
      },
    },
  },
})
