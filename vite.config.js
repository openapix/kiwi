import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '@views': resolve(__dirname, '/src/views'),
      '@comps': resolve(__dirname, '/src/components'),
    }
  }
})
