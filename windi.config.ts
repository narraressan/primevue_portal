import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,html,ts}"],
    exclude: ["node_modules", ".git", "dist", "*.config.{ts,js}"],
  },
  shortcuts: {
    // TODO
  },
});
