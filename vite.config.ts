import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // input: {
  // index: "src/index.html",
  // "service-worker": "src/service-worker.ts", // Add this
  // },
});
