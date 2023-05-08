import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";

i18next
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    lng: "en",
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18next;
