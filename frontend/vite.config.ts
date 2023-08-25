import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    origin: "http://127.0.0.1:8000",
    host: true,
    strictPort: true,
    port: 5174,
  },
  base: "/",
});
