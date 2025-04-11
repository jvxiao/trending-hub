import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from 'node:url'
import { createHtmlPlugin } from "vite-plugin-html";
import { copy } from 'vite-plugin-copy';
import { viteStaticCopy } from 'vite-plugin-static-copy'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      template: 'popup.html', // 指定模板文件
      // minify: true 
    }),
    // copy([
    //   { src: './manifest.json', dest: 'dist/'},
    //   { src: './background.js', dest: 'dist/'}
    // ]),
    viteStaticCopy({
      targets:[
        { src: './manifest.json', dest: './'},
        { src: './background.js', dest: './'},
        { src: './icons', dest: './'}
      ]
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'popup.html'),
      },
    },
  },
})