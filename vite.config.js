import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), legacy()],
});
