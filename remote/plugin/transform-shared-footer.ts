import path from 'path'
import fs from 'fs-extra'
import { Plugin } from 'vite'

/*
 * Plugin to build transform and copy footer file to
 * make it available in the bundle so it can be shared with
 * other repositories/apps.
 */
function transformAndBundleFooter(): Plugin {
  return {
    name: 'append-footer-plugin',
    apply: 'build',
    writeBundle() {
      const footerCSSPath = path.resolve('shared', 'footer.css')
      fs.ensureFileSync(footerCSSPath)
      fs.copySync(footerCSSPath, 'dist/assets/bundled-footer.css')
    },
    closeBundle() {
      const filePath = path.resolve('dist', 'assets/bundled-footer.js')
      fs.ensureFileSync(filePath)

      fs.copySync(filePath, 'dist/assets/bundled-footer-shared.js')
      const filePathShared = path.resolve(
        'dist',
        'assets/bundled-footer-shared.js'
      )
      fs.ensureFileSync(filePathShared)
      fs.readFile(filePathShared, 'utf-8', (err, data) => {
        if (err) throw err
        const newValue = data.replace(/export { createFooter as c };/g, '')
        fs.writeFile(filePathShared, newValue, 'utf-8', function (err) {
          if (err) throw err
        })
      })
    },
  }
}

export default transformAndBundleFooter
