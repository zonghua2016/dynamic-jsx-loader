import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    // proxy: {
    //   '/public': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/remote-components/, '/components')
    //   }
    // }
  }
})
