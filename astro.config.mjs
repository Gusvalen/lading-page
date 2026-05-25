// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Gusvalen.github.io",
  base: "/lading-page", // Asegúrate de que este nombre sea igual al del repo
  vite: {
    plugins: [tailwindcss()],
  },
});
