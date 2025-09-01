import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'clouds-cafe' with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/clouds-cafe/',
})
