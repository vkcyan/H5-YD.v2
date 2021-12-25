import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
const prefix = `monaco-editor/esm/vs`
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver(), ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/,/\.tsx$/],
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  // base: '/yc/',
  build: {
    outDir: 'yc',
    rollupOptions: {
      // output: {
      //   name: 'monacoBundle',
      //   manualChunks: {
      //     jsonWorker: [`${prefix}/language/json/json.worker`],
      //     cssWorker: [`${prefix}/language/json/css.worker`],
      //     editorWorker: [`${prefix}/editor/editor.worker`],
      //   },
      // },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#2970f6',
        },
        javascriptEnabled: true,
      },
    },
  },
})
