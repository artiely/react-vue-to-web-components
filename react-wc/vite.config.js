import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    outDir: "demo/dist",
    // target: "esnext",
    // minify: "terser",
    lib: {
      // formats: ['es', 'cjs', 'iife'],
      entry: "src/hello.jsx", //指定组件编译入口文件
      name: "my-react-element", //指定组件名称
      fileName: "my-react-element", //指定组件打包后的文件名称
    }, 
  },
})
