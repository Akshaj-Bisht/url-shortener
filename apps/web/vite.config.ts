import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = defineConfig({
  plugins: [
    devtools(),
    tsconfigPaths({ projects: [resolve(__dirname, './tsconfig.json')] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
