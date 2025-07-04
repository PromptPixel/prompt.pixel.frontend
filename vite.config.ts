import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/prompt.pixel.frontend/',
  plugins: [
    react(),
    Checker({
      typescript: true,  // Включение проверки TypeScript
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})