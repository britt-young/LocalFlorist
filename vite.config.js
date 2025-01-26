import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' //allows import of svg files as React components

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
