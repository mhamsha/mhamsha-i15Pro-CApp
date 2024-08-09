import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "mhamsha",
      project: "mhamsha-i15pro-capp",
    }),
  ],
  base: "/mhamsha-i15Pro-CApp",

  build: {
    sourcemap: true,
  },
});
