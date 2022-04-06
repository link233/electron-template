import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: { // 别名设置
      '@': path.resolve(__dirname, 'src'),
      'view': path.resolve(__dirname, 'src/view'),
      'comp': path.resolve(__dirname, 'src/components'),
      'api': path.resolve(__dirname, 'src/api'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'style': path.resolve(__dirname, 'src/style'),
      'util': path.resolve(__dirname, 'src/util'),
      'styles': path.resolve(__dirname, 'src/styles')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
  plugins: [
    vue()
  ]
})
