import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { domToCodePlugin } from 'dom-to-code/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production'
      ? domToCodePlugin({
          mode: 'react',
        })
      : undefined,
    tsconfigPaths(),
  ],
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
  },
  define: {
    'process.env': {
      BASE_URL: process.env.BASE_URL,
      API_URL_V1: process.env.API_URL_V1,
      SITE_NAME: process.env.SITE_NAME,
    },
  },
  server: {
    open: true,
    port: 3040,
  },
});
