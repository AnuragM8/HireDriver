import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";
import viteCompression from "vite-plugin-compression";

const conditionalPlugins: [string, Record<string, any>][] = [];

// @ts-ignore
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : "/HireDriver/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  build: {
    rollupOptions: {
      external: [], // Ensure `tailwind-merge` is not listed here
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Split vendor libraries
        },
      },
    },
    minify: 'esbuild', // Ensure minification
    target: 'esnext', // Use modern JavaScript
    assetsInlineLimit: 4096, // Inline small assets for faster loading
    cssCodeSplit: true, // Split CSS for better caching
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    tempo(),
    viteCompression({ algorithm: "brotliCompress" }), // Enable Brotli compression
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=3600', // Cache static assets
    },
  },
});
