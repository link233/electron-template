import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/render')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    host: 'localhost',
    port: 8080
  },
  plugins: [
    vue()
  ]
})
