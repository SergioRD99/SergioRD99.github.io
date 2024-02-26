import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({ 
  base: './', // Cambiado a ruta relativa
  plugins: [vue()],
})
