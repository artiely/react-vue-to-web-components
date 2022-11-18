import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [vue()],
  "process.env.NODE_ENV": "production",
  build: {
    outDir: "demo/dist",
    target: "esnext",
    minify: "terser",
    lib: {
      // formats: ['es', 'cjs', 'iife'],
      entry: "src/components/HelloWorld.js", //指定组件编译入口文件
      name: "my-vue-element", //指定组件名称
      fileName: "my-vue-element", //指定组件打包后的文件名称
    }, 
  },
});
