import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        /*global __dirname*/
        /*eslint no-undef: "error"*/
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
