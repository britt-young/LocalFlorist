import { defineConfig } from 'vite'
// import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' //allows import of svg files as React components

// https://vite.dev/config/
// removed from plugins array (tailwindcss(),)
export default defineConfig({
  plugins: [react(), svgr()],
})
