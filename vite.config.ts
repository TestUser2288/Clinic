import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Stat Clinic',
        short_name: 'Stat Clinic',
        description: 'Analyse statistique pour thèses de médecine',
        lang: 'fr',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A2236',
        theme_color: '#0A2236',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,jpg}', '**/*-latin-*.woff2'],
      },
    }),
  ],
})
