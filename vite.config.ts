// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically updates the service worker when new content is available
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // Include the assets needed
      },
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt"], // Include necessary static assets
      manifest: {
        name: "My Vite React App",
        short_name: "ViteReact",
        description: "My Vite React App with Service Worker and PWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon.webp",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon.webp",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "dist", // Output directory for the build
    rollupOptions: {
      input: "index.html", // Ensure correct entry for index.html
    },
  },
});
