import { createI18n } from "vue-i18n";
import en from "./en.json";

const EN_US = "en";

export default createI18n({
  legacy: false,
  locale: EN_US,
  fallbackLocale: EN_US,
  messages: {
    en,
  },
});
