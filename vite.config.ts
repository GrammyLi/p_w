import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react()],
  build: {
    outDir: "build", // 输出目录
    sourcemap: true, // 开启 sourcemap
  },
  server: {
    port: 9000,
    open: true, // 自动打开浏览器
    host: true, // Corrected from hot to host
  },
});
