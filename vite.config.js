import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['clsx']
  },
  build: {
    rollupOptions: {
      // Assuming `index.html` is your entry point
      input: 'index.html'
    }
  }
});
