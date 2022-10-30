import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import path from "path";

export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetUno()],
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@test": path.resolve(__dirname, "./src/test"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@util": path.resolve(__dirname, "./src/utilities"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
