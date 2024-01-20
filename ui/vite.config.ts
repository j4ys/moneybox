import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  envDir: "./environments",
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@lib": path.resolve(__dirname, './lib'),
      "@components": path.resolve(__dirname, './lib/components'),
      "@app": path.resolve(__dirname, './app'),
    },
  },
});
