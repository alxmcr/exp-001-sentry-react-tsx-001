import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
    plugins: [
      react(),
      tailwindcss(),
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "nextjs-hackathon-global-2025",
        project: "react-tsx-001",
        telemetry: false,
      }),
    ] as PluginOption[],
    server: {
      host: true,
      port: parseInt(env.VITE_APP_PORT) || 3000,
      watch: {
        usePolling: true,
      },
    },
  };
});
