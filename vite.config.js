import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'
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
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('react-router') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
            if (id.includes('marked') || id.includes('front-matter')) {
              return 'vendor-markdown';
            }
          }
        },
      },
    },
    target: 'es2020',
  },
})
