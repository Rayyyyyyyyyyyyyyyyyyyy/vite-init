import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import {resolve} from 'path'
const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'APP_VERSION': JSON.stringify(process.env.npm_package_version),
  },
  build: {
    outDir,
    emptyOutDir:true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  assetsInclude: ["**/*.xlsx"],

  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/")
    }
  }
})
