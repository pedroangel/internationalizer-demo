import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const transformTranslations = (data) => {
  const translations = {};

  data.forEach((item) => {
    Object.keys(item.translations).forEach((lang) => {
      if (!translations[lang]) {
        translations[lang] = {};
      }
      translations[lang][item.key] = item.translations[lang];
    });
  });

  localStorage.setItem("translations", JSON.stringify(translations));
  return translations;
};

const fetchTranslations = async () => {
  try {
    let translations;

    const storedTranslations = localStorage.getItem("translations");
    if (storedTranslations) {
      translations = JSON.parse(storedTranslations);
      return translations;
    } else {
      const response = await fetch(
        "https://internationalizer.rj.r.appspot.com/API/texts/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return transformTranslations(data);
    }
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
};

const initializeI18n = async () => {
  const translations = await fetchTranslations();

  i18n.use(initReactI18next).init({
    resources: translations,
    lng: "es",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.addResourceBundle("es", "translation", translations["es"], true, true);
};

initializeI18n();

export const changeLanguage = async (lang) => {
  const translations = await fetchTranslations();
  i18n.addResourceBundle(lang, "translation", translations[lang], true, true);
  i18n.changeLanguage(lang);
};

export default i18n;
