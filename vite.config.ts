import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
    server: {
    allowedHosts: [
      '4c8b2496cc2b.ngrok-free.app',
      'localhost'
    ]
  }
});
