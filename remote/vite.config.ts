import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import transformAndBundleFooter from './plugin/transform-shared-footer'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/Footer',
      },
      shared: ['react', 'react-dom'],
    }),
    transformAndBundleFooter(),
  ],
  build: {
    // modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'bundled-footer') {
            return 'assets/[name].js' // Custom name without hash for shared-modules
          }
          // Keep default pattern with hash for other chunks
          return 'assets/[name]-[hash].js'
        },
        manualChunks: {
          // Customize chunk splitting to separate shared modules if needed
          'bundled-footer': ['./shared/utils.js', './shared/footer.js'], // Add shared modules here
        },
      },
    },
  },
})
