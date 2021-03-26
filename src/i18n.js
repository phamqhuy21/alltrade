import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./locales/en/translation.json";
import common_vi from "./locales/vi/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: common_en,
    },
    vi: {
      translation: common_vi,
    },
  },
  fallbackLng: "en",
  debug: true,
  lng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
