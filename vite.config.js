// vite.config.js
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'VuePopper',
      fileName: format => `vue-popper.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
}
