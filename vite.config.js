import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/port-in-workflow/',
  plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    }
  }
)
