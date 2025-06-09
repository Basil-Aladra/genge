import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import global_hr from "./translations/hr/global.json";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interplolation: {
    escapeValue: false, // React already does escaping
  },
  lng: "ar", // Default language
  resources: {
    en: {
      translation: global_en,
    },
    hr: {
      translation: global_hr,
    },
    ar: {
      translation: global_ar,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
