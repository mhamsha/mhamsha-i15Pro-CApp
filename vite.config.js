import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mhamsha-i15Pro-CApp",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "mhamsha",
      project: "mhamsha-i15pro-capp",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
