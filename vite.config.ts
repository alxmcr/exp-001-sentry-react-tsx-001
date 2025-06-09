import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()] as PluginOption[],
    server: {
      host: true,
      port: parseInt(env.VITE_APP_PORT) || 3000,
      watch: {
        usePolling: true,
      },
    },
  };
});