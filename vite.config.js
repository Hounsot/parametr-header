import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/parametr-header/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        headerDom: './src/components/header-dom.js',
      },
    },
  },
})
