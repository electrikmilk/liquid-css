import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        assetsInlineLimit: 0,
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'LiquidCSS',
            fileName: 'liquid-css'
        }
    }
})
