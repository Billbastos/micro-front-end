import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs-extra'
import federation from '@originjs/vite-plugin-federation'

/*
 * Plugin to build shared footer file and
 * make it available in the bundle to be shared by
 * other repositories/apps.
 */
function appendFooterPlugin(): Plugin {
  return {
    name: 'append-footer-plugin',
    apply: 'build',
    closeBundle() {
      const filePath = path.resolve('dist/assets', 'footer.js')
      fs.ensureFileSync(filePath)
      fs.appendFileSync(filePath, 'console.log("Hello World!")')
    },
  }
}

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
    appendFooterPlugin(),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
